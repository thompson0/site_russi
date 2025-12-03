import { PrismaClient } from '../src/generated/prisma/index.js';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...');

  const senhaHash = await bcrypt.hash('123456', 10);

  console.log('📁 Criando setores...');
  const setores = await Promise.all([
    prisma.setores.upsert({
      where: { id: 1 },
      update: {},
      create: {
        id: 1,
        nome: 'Comercial',
        descricao: 'Departamento Comercial - Vendas e Atendimento',
      },
    }),
    prisma.setores.upsert({
      where: { id: 2 },
      update: {},
      create: {
        id: 2,
        nome: 'Instalação',
        descricao: 'Departamento de Instalação de Acessórios',
      },
    }),
    prisma.setores.upsert({
      where: { id: 3 },
      update: {},
      create: {
        id: 3,
        nome: 'Administrativo',
        descricao: 'Departamento Administrativo e Financeiro',
      },
    }),
    prisma.setores.upsert({
      where: { id: 4 },
      update: {},
      create: {
        id: 4,
        nome: 'Logística',
        descricao: 'Departamento de Logística e Estoque',
      },
    }),
  ]);
  console.log(`✅ ${setores.length} setores criados`);

  console.log('👤 Criando usuários...');
  const usuarios = await Promise.all([
    prisma.usuarios.upsert({
      where: { email: 'admin@russi.com.br' },
      update: {},
      create: {
        username: 'admin',
        nome: 'Administrador do Sistema',
        email: 'admin@russi.com.br',
        senha: senhaHash,
        role: 'admin',
        permissao: 'admin',
        trocar_senha: 0,
      },
    }),
    prisma.usuarios.upsert({
      where: { email: 'supervisor.comercial@russi.com.br' },
      update: {},
      create: {
        username: 'supervisor.comercial',
        nome: 'Supervisor Comercial',
        email: 'supervisor.comercial@russi.com.br',
        senha: senhaHash,
        role: 'supervisor',
        permissao: 'supervisor',
        setor_id: 1,
        trocar_senha: 1,
      },
    }),
    prisma.usuarios.upsert({
      where: { email: 'supervisor.instalacao@russi.com.br' },
      update: {},
      create: {
        username: 'supervisor.instalacao',
        nome: 'Supervisor de Instalação',
        email: 'supervisor.instalacao@russi.com.br',
        senha: senhaHash,
        role: 'supervisor',
        permissao: 'supervisor',
        setor_id: 2,
        trocar_senha: 1,
      },
    }),
    prisma.usuarios.upsert({
      where: { email: 'vendedor@russi.com.br' },
      update: {},
      create: {
        username: 'vendedor',
        nome: 'Vendedor Teste',
        email: 'vendedor@russi.com.br',
        senha: senhaHash,
        role: 'vendedor_interno',
        permissao: 'vendedor_interno',
        setor_id: 1,
        trocar_senha: 1,
      },
    }),
    prisma.usuarios.upsert({
      where: { email: 'instalador@russi.com.br' },
      update: {},
      create: {
        username: 'instalador',
        nome: 'Instalador Teste',
        email: 'instalador@russi.com.br',
        senha: senhaHash,
        role: 'instalador',
        permissao: 'instalador',
        setor_id: 2,
        trocar_senha: 1,
      },
    }),
  ]);
  console.log(`✅ ${usuarios.length} usuários criados`);

  console.log('\n🎉 Seed concluído com sucesso!');
  console.log('\n📋 Resumo:');
  console.log('─'.repeat(40));
  console.log('Usuários de teste criados:');
  console.log('  📧 admin@russi.com.br (senha: 123456) - Admin');
  console.log('  📧 supervisor.comercial@russi.com.br (senha: 123456) - Supervisor');
  console.log('  📧 supervisor.instalacao@russi.com.br (senha: 123456) - Supervisor');
  console.log('  📧 vendedor@russi.com.br (senha: 123456) - Vendedor Interno');
  console.log('  📧 instalador@russi.com.br (senha: 123456) - Instalador');
  console.log('─'.repeat(40));
  console.log('⚠️  IMPORTANTE: Altere as senhas após o primeiro acesso!');
}

main()
  .catch((e) => {
    console.error('❌ Erro durante o seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
