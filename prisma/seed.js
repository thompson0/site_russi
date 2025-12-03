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

  console.log('🏭 Criando montadoras...');
  const montadoras = await Promise.all([
    prisma.montadoras.upsert({
      where: { id: 1 },
      update: {},
      create: { id: 1, nome: 'Chevrolet', logo_url: '/logos/chevrolet.png' },
    }),
    prisma.montadoras.upsert({
      where: { id: 2 },
      update: {},
      create: { id: 2, nome: 'Fiat', logo_url: '/logos/fiat.png' },
    }),
    prisma.montadoras.upsert({
      where: { id: 3 },
      update: {},
      create: { id: 3, nome: 'Volkswagen', logo_url: '/logos/volkswagen.png' },
    }),
    prisma.montadoras.upsert({
      where: { id: 4 },
      update: {},
      create: { id: 4, nome: 'Ford', logo_url: '/logos/ford.png' },
    }),
    prisma.montadoras.upsert({
      where: { id: 5 },
      update: {},
      create: { id: 5, nome: 'Toyota', logo_url: '/logos/toyota.png' },
    }),
    prisma.montadoras.upsert({
      where: { id: 6 },
      update: {},
      create: { id: 6, nome: 'Honda', logo_url: '/logos/honda.png' },
    }),
    prisma.montadoras.upsert({
      where: { id: 7 },
      update: {},
      create: { id: 7, nome: 'Hyundai', logo_url: '/logos/hyundai.png' },
    }),
    prisma.montadoras.upsert({
      where: { id: 8 },
      update: {},
      create: { id: 8, nome: 'Jeep', logo_url: '/logos/jeep.png' },
    }),
  ]);
  console.log(`✅ ${montadoras.length} montadoras criadas`);

  console.log('🚗 Criando carros...');
  const carros = await Promise.all([
    prisma.carros.upsert({
      where: { id: 1 },
      update: {},
      create: { id: 1, nome: 'Onix', montadora_id: 1, ano_de: 2020, ano_ate: 2025, versao: 'LT/LTZ' },
    }),
    prisma.carros.upsert({
      where: { id: 2 },
      update: {},
      create: { id: 2, nome: 'Tracker', montadora_id: 1, ano_de: 2021, ano_ate: 2025, versao: 'Premier' },
    }),
    prisma.carros.upsert({
      where: { id: 3 },
      update: {},
      create: { id: 3, nome: 'Argo', montadora_id: 2, ano_de: 2018, ano_ate: 2025, versao: 'Drive/Trekking' },
    }),
    prisma.carros.upsert({
      where: { id: 4 },
      update: {},
      create: { id: 4, nome: 'Pulse', montadora_id: 2, ano_de: 2022, ano_ate: 2025, versao: 'Impetus' },
    }),
    prisma.carros.upsert({
      where: { id: 5 },
      update: {},
      create: { id: 5, nome: 'Polo', montadora_id: 3, ano_de: 2018, ano_ate: 2025, versao: 'TSI' },
    }),
    prisma.carros.upsert({
      where: { id: 6 },
      update: {},
      create: { id: 6, nome: 'T-Cross', montadora_id: 3, ano_de: 2019, ano_ate: 2025, versao: 'Highline' },
    }),
    prisma.carros.upsert({
      where: { id: 7 },
      update: {},
      create: { id: 7, nome: 'Corolla Cross', montadora_id: 5, ano_de: 2021, ano_ate: 2025, versao: 'XRE/XRX' },
    }),
    prisma.carros.upsert({
      where: { id: 8 },
      update: {},
      create: { id: 8, nome: 'Compass', montadora_id: 8, ano_de: 2017, ano_ate: 2025, versao: 'Longitude' },
    }),
  ]);
  console.log(`✅ ${carros.length} carros criados`);

  console.log('📦 Criando produtos...');
  const produtos = await Promise.all([
    prisma.produtos.upsert({
      where: { id: 1 },
      update: {},
      create: { id: 1, nome: 'Tapete de Borracha Premium', codigo: 'TAP-001' },
    }),
    prisma.produtos.upsert({
      where: { id: 2 },
      update: {},
      create: { id: 2, nome: 'Protetor de Cárter', codigo: 'PRC-002' },
    }),
    prisma.produtos.upsert({
      where: { id: 3 },
      update: {},
      create: { id: 3, nome: 'Friso Lateral Cromado', codigo: 'FRI-003' },
    }),
    prisma.produtos.upsert({
      where: { id: 4 },
      update: {},
      create: { id: 4, nome: 'Calha de Chuva', codigo: 'CAL-004' },
    }),
    prisma.produtos.upsert({
      where: { id: 5 },
      update: {},
      create: { id: 5, nome: 'Rack de Teto', codigo: 'RAC-005' },
    }),
    prisma.produtos.upsert({
      where: { id: 6 },
      update: {},
      create: { id: 6, nome: 'Sensor de Estacionamento', codigo: 'SEN-006' },
    }),
    prisma.produtos.upsert({
      where: { id: 7 },
      update: {},
      create: { id: 7, nome: 'Câmera de Ré', codigo: 'CAM-007' },
    }),
    prisma.produtos.upsert({
      where: { id: 8 },
      update: {},
      create: { id: 8, nome: 'Farol de Milha LED', codigo: 'FAR-008' },
    }),
    prisma.produtos.upsert({
      where: { id: 9 },
      update: {},
      create: { id: 9, nome: 'Engate Reboque', codigo: 'ENG-009' },
    }),
    prisma.produtos.upsert({
      where: { id: 10 },
      update: {},
      create: { id: 10, nome: 'Protetor de Porta-Malas', codigo: 'PPM-010' },
    }),
  ]);
  console.log(`✅ ${produtos.length} produtos criados`);

  console.log('🔗 Associando produtos aos carros...');
  const associacoes = [
    { carro_id: 1, produto_id: 1 },
    { carro_id: 1, produto_id: 4 },
    { carro_id: 1, produto_id: 6 },
    { carro_id: 2, produto_id: 2 },
    { carro_id: 2, produto_id: 5 },
    { carro_id: 2, produto_id: 9 },
    { carro_id: 3, produto_id: 1 },
    { carro_id: 3, produto_id: 3 },
    { carro_id: 4, produto_id: 7 },
    { carro_id: 4, produto_id: 8 },
    { carro_id: 5, produto_id: 1 },
    { carro_id: 5, produto_id: 4 },
    { carro_id: 6, produto_id: 5 },
    { carro_id: 6, produto_id: 10 },
    { carro_id: 7, produto_id: 2 },
    { carro_id: 7, produto_id: 9 },
    { carro_id: 8, produto_id: 5 },
    { carro_id: 8, produto_id: 9 },
  ];

  for (const assoc of associacoes) {
    await prisma.carro_produtos.upsert({
      where: { carro_id_produto_id: { carro_id: assoc.carro_id, produto_id: assoc.produto_id } },
      update: {},
      create: assoc,
    });
  }
  console.log(`✅ ${associacoes.length} associações carro-produto criadas`);

  console.log('📞 Criando contatos...');
  const contatos = await Promise.all([
    prisma.contatos.upsert({
      where: { id: 1 },
      update: {},
      create: { id: 1, departamento: 'Comercial', colaborador: 'Atendimento Geral', telefone: '(11) 3333-4444', ramal: '100', email: 'comercial@russi.com.br' },
    }),
    prisma.contatos.upsert({
      where: { id: 2 },
      update: {},
      create: { id: 2, departamento: 'Financeiro', colaborador: 'Contas a Pagar', telefone: '(11) 3333-4444', ramal: '200', email: 'financeiro@russi.com.br' },
    }),
    prisma.contatos.upsert({
      where: { id: 3 },
      update: {},
      create: { id: 3, departamento: 'RH', colaborador: 'Recursos Humanos', telefone: '(11) 3333-4444', ramal: '300', email: 'rh@russi.com.br' },
    }),
    prisma.contatos.upsert({
      where: { id: 4 },
      update: {},
      create: { id: 4, departamento: 'Instalação', colaborador: 'Suporte Técnico', telefone: '(11) 3333-4444', ramal: '400', email: 'suporte@russi.com.br' },
    }),
    prisma.contatos.upsert({
      where: { id: 5 },
      update: {},
      create: { id: 5, departamento: 'Logística', colaborador: 'Expedição', telefone: '(11) 3333-4444', ramal: '500', email: 'logistica@russi.com.br' },
    }),
  ]);
  console.log(`✅ ${contatos.length} contatos criados`);

  console.log('❓ Criando FAQs...');
  const duvidas = await Promise.all([
    prisma.duvidas.upsert({
      where: { id: 1 },
      update: {},
      create: { id: 1, pergunta: 'Como faço para acessar o catálogo digital?', resposta: 'Acesse o menu "Catálogo" na página inicial ou faça login na área interna para ter acesso completo às informações dos produtos.', ordem: 1 },
    }),
    prisma.duvidas.upsert({
      where: { id: 2 },
      update: {},
      create: { id: 2, pergunta: 'Qual é a garantia dos produtos?', resposta: 'Todos os nossos produtos possuem garantia estendida de fábrica. O prazo varia de acordo com o tipo de acessório.', ordem: 2 },
    }),
    prisma.duvidas.upsert({
      where: { id: 3 },
      update: {},
      create: { id: 3, pergunta: 'Como solicitar treinamento para instalação?', resposta: 'Entre em contato com o departamento de instalação através do ramal 400 ou acesse a área de treinamentos internos.', ordem: 3 },
    }),
    prisma.duvidas.upsert({
      where: { id: 4 },
      update: {},
      create: { id: 4, pergunta: 'Como acessar os vídeos de treinamento?', resposta: 'Os vídeos de treinamento estão disponíveis na área interna. Faça login e acesse "Treinamentos" no menu lateral.', ordem: 4 },
    }),
    prisma.duvidas.upsert({
      where: { id: 5 },
      update: {},
      create: { id: 5, pergunta: 'Como atualizar meus dados cadastrais?', resposta: 'Acesse a área "Meu Perfil" no menu do usuário e atualize suas informações. Algumas alterações podem necessitar aprovação do supervisor.', ordem: 5 },
    }),
  ]);
  console.log(`✅ ${duvidas.length} FAQs criadas`);

  console.log('📚 Criando manuais...');
  const manuais = await Promise.all([
    prisma.manuais.upsert({
      where: { id: 1 },
      update: {},
      create: { id: 1, titulo: 'Manual de Boas Práticas de Instalação', descricao: 'Guia completo com as melhores práticas para instalação de acessórios automotivos.', conteudo: 'Este manual contém todas as diretrizes para garantir uma instalação segura e de qualidade.', ordem: 1 },
    }),
    prisma.manuais.upsert({
      where: { id: 2 },
      update: {},
      create: { id: 2, titulo: 'Guia do Sistema - Catálogo Digital', descricao: 'Como utilizar o catálogo digital para consulta de produtos.', conteudo: 'Aprenda a navegar pelo catálogo, filtrar produtos e gerar QR codes para compartilhamento.', ordem: 2 },
    }),
    prisma.manuais.upsert({
      where: { id: 3 },
      update: {},
      create: { id: 3, titulo: 'Procedimentos de RH', descricao: 'Informações sobre procedimentos internos de recursos humanos.', conteudo: 'Guia com todos os procedimentos de RH incluindo férias, benefícios e documentação.', ordem: 3 },
    }),
    prisma.manuais.upsert({
      where: { id: 4 },
      update: {},
      create: { id: 4, titulo: 'Manual de Atendimento ao Cliente', descricao: 'Diretrizes para atendimento ao cliente nas concessionárias.', conteudo: 'Padrões de atendimento, argumentação de vendas e resolução de conflitos.', ordem: 4 },
    }),
  ]);
  console.log(`✅ ${manuais.length} manuais criados`);

  console.log('🎥 Criando vídeos de RH...');
  const videosRh = await Promise.all([
    prisma.videos_rh_procedimentos.upsert({
      where: { id: 1 },
      update: {},
      create: { id: 1, titulo: 'Boas-vindas à Russi Acessórios', descricao: 'Vídeo de integração para novos colaboradores', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', categoria: 'Integração', ordem: 1 },
    }),
    prisma.videos_rh_procedimentos.upsert({
      where: { id: 2 },
      update: {},
      create: { id: 2, titulo: 'Política de Segurança do Trabalho', descricao: 'Normas e procedimentos de segurança', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', categoria: 'Segurança', ordem: 2 },
    }),
    prisma.videos_rh_procedimentos.upsert({
      where: { id: 3 },
      update: {},
      create: { id: 3, titulo: 'Como usar o Sistema de Ponto', descricao: 'Tutorial do sistema de registro de ponto', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', categoria: 'Sistemas', ordem: 3 },
    }),
  ]);
  console.log(`✅ ${videosRh.length} vídeos de RH criados`);

  console.log('📹 Criando vídeos internos de treinamento...');
  const adminUser = await prisma.usuarios.findFirst({ where: { role: 'admin' } });
  
  const videosInternos = await Promise.all([
    prisma.videos_internos.upsert({
      where: { id: 1 },
      update: {},
      create: { id: 1, titulo: 'Instalação de Tapetes Premium', descricao: 'Tutorial completo de instalação de tapetes', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', setor_id: 2, criado_por: adminUser?.id, ordem: 1 },
    }),
    prisma.videos_internos.upsert({
      where: { id: 2 },
      update: {},
      create: { id: 2, titulo: 'Técnicas de Vendas - Acessórios', descricao: 'Estratégias de vendas para o setor comercial', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', setor_id: 1, criado_por: adminUser?.id, ordem: 1 },
    }),
    prisma.videos_internos.upsert({
      where: { id: 3 },
      update: {},
      create: { id: 3, titulo: 'Instalação de Sensor de Estacionamento', descricao: 'Passo a passo da instalação de sensores', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', setor_id: 2, criado_por: adminUser?.id, ordem: 2 },
    }),
    prisma.videos_internos.upsert({
      where: { id: 4 },
      update: {},
      create: { id: 4, titulo: 'Apresentação do Catálogo Digital', descricao: 'Como usar o catálogo para vendas', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', setor_id: 1, criado_por: adminUser?.id, ordem: 2 },
    }),
  ]);
  console.log(`✅ ${videosInternos.length} vídeos internos criados`);

  console.log('🎬 Criando vídeos públicos...');
  const videos = await Promise.all([
    prisma.videos.upsert({
      where: { id: 1 },
      update: {},
      create: { id: 1, titulo: 'Apresentação Russi Acessórios', descricao: 'Conheça a empresa e nossos serviços', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    }),
    prisma.videos.upsert({
      where: { id: 2 },
      update: {},
      create: { id: 2, titulo: 'Linha de Produtos 2025', descricao: 'Novidades do nosso catálogo', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    }),
  ]);
  console.log(`✅ ${videos.length} vídeos públicos criados`);

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
