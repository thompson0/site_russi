# Russi Acessórios - Site

## Overview
This is a Next.js 15 application for Russi Acessórios, a Brazilian automotive accessories company with 35 years of experience in the market. The application features a product catalog, video tutorials, user authentication, and admin management.

## Project Structure
- **Framework**: Next.js 15.5.4 with Turbopack
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT-based authentication with middleware protection
- **Styling**: Tailwind CSS 4 with Radix UI components
- **UI Components**: Custom components using shadcn/ui patterns

## Tech Stack
- **Frontend**: React 19, Next.js 15, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL (Prisma ORM)
- **Authentication**: JWT, bcrypt
- **UI Libraries**: Radix UI, Lucide React, Recharts

## Database Schema
The application uses the following main models:
- `usuarios` - User accounts with roles (admin, supervisor, vendedor_interno, instalador), sector assignments, and permissions
- `setores` - Departments/sectors for organizing users and training content
- `videos_internos` - Internal training videos with sector-based access control
- `videos_rh_procedimentos` - HR procedure videos accessible to all authenticated users
- `montadoras` - Car manufacturers
- `carros` - Vehicle models
- `produtos` - Product catalog
- `videos` - Public video tutorials
- `contatos` - Department contacts and extension numbers
- `duvidas` - Frequently asked questions
- `manuais` - Training manuals and documentation
- `carro_produtos` - Many-to-many relation between cars and products

## Environment Variables Required

### Database Configuration
- `DATABASE_URL` - PostgreSQL connection URL (required)
- `DIRECT_URL` - Direct PostgreSQL connection URL (required)

### Authentication
- `SESSION_SECRET` - Secret for JWT token signing (already configured)

## Setup Instructions

### Replit Environment (Automated)
The project is now fully configured for Replit:
- ✅ PostgreSQL database created and connected
- ✅ Environment variables configured (`DATABASE_URL`, `DIRECT_URL`)
- ✅ Dependencies installed
- ✅ Prisma client generated
- ✅ Database schema synced
- ✅ Development workflow running on port 5000
- ✅ Deployment configuration set up

The application is ready to use! Just click the webview to see it running.

### Manual Setup (Other Environments)

#### 1. Install Dependencies
```bash
npm install
```

#### 2. Configure Database
Set the following environment variables:
- `DATABASE_URL` - Your PostgreSQL connection string
- `DIRECT_URL` - Direct connection string for migrations

#### 3. Generate Prisma Client
```bash
npm run prisma:generate
```

#### 4. Run Database Migrations
```bash
npx prisma db push
```

#### 5. Start Development Server
```bash
npm run dev
```

The application will be available at http://0.0.0.0:5000

## Available Scripts
- `npm run dev` - Start development server on port 5000
- `npm run build` - Build for production (includes Prisma generation)
- `npm start` - Start production server on port 5000
- `npm run prisma:generate` - Generate Prisma client
- `npm run db:seed` - Populate database with initial data
- `npm run db:reset` - Reset database and run seed (WARNING: deletes all data)

## Database Seed

### Running the Seed
To populate the database with initial data for testing and deployment:

```bash
npm run db:seed
```

To completely reset the database and start fresh:

```bash
npm run db:reset
```

### Test Users Created by Seed

| Email | Password | Role | Sector |
|-------|----------|------|--------|
| admin@russi.com.br | 123456 | Admin | - |
| supervisor.comercial@russi.com.br | 123456 | Supervisor | Comercial |
| supervisor.instalacao@russi.com.br | 123456 | Supervisor | Instalação |
| vendedor@russi.com.br | 123456 | Vendedor Interno | Comercial |
| instalador@russi.com.br | 123456 | Instalador | Instalação |

**IMPORTANT:** Change passwords after first login!

### Seed Data Included
- **4 Setores**: Comercial, Instalação, Administrativo, Logística
- **5 Usuários**: 1 admin, 2 supervisors, 1 vendedor, 1 instalador

**Nota**: Montadoras, carros, produtos e outros dados devem ser gerenciados pelo painel admin.

## Deployment
The project is configured for Replit autoscale deployment:
- **Build**: `npm run build`
- **Run**: `npm start`
- **Port**: 5000

## Features
- **Home Page**: Company presentation, timeline (1986-2025), and benefits listing
- **Product Catalog**: Browse products by car manufacturer and model
- **Video Library**: Tutorial videos for installers
- **User Authentication**: Login system with role-based access
- **Admin Panel**: Manage products, cars, manufacturers, users, and videos
- **QR Code Generation**: For product information sharing

## Routes
- `/` - Home page
- `/login` - User login
- `/catalogo/carros` - Car catalog
- `/catalogo/produtos` - Product catalog
- `/visitante/*` - Visitor-accessible pages (public videos, product QR codes)
- `/interno` - Internal employee portal (requires authentication)
- `/interno/treinamentos` - Sector-based training videos
- `/interno/recursos` - HR procedures, manuals, FAQ, contacts
- `/admin/*` - Admin dashboard (requires admin or supervisor role)
- `/admin/videos-internos` - Internal training video management
- `/admin/user` - User management with role-based permissions
- `/user/*` - User profile pages (requires authentication)

## User Roles & Permissions

### Role Types
1. **admin** - Full system access, can manage all users and content
2. **supervisor** - Read-only catalog access, can manage vendedor_interno users in their sector, can add training videos
3. **vendedor_interno** - Read-only catalog access, sector training videos, edit own profile
4. **instalador** - Access to sector training videos only (no catalog access)

### Permissions Matrix

| Feature | Admin | Supervisor | Vendedor | Instalador |
|---------|-------|------------|----------|------------|
| View Catalog (Montadoras/Carros/Produtos) | ✅ Full | ✅ Read-only | ✅ Read-only | ❌ |
| Create/Edit/Delete Catalog | ✅ | ❌ | ❌ | ❌ |
| Training Videos | ✅ All | ✅ Own role | ✅ Own role | ✅ Own role |
| Create Training Videos | ✅ | ✅ | ❌ | ❌ |
| User Management | ✅ All | ✅ Vendedores (same sector) | ❌ | ❌ |
| HR Materials | ✅ Full | ✅ View | ✅ View | ✅ View |
| Manage HR Materials | ✅ | ❌ | ❌ | ❌ |
| Ramais | ✅ Full | ✅ View | ✅ View | ✅ View |
| Edit Own Profile | ✅ | ✅ | ✅ | ✅ |

### Common Access (All Authenticated Users)
- HR procedure videos
- System usage guides
- Training manuals
- FAQ section
- Department extension list and contacts

## Authentication Flow
The application uses JWT-based authentication with:
- Cookie-based token storage with role and sector_id
- Next.js middleware for route protection based on roles
- Sector-based video access control
- Automatic redirect to `/login` for unauthenticated users
- Redirect to `/interno` for non-admin users accessing admin routes

## Recent Changes (2025-12-04)

### Catalog Routes Fix for Vendedor and Supervisor (LATEST)
- Criadas novas rotas de catálogo acessíveis para vendedores e supervisores:
  - `/catalogo/produtos/[carroId]` - Lista produtos de um carro específico
  - `/catalogo/produto/[id]` - Detalhes de um produto individual
- Links atualizados para direcionar para rotas públicas em vez de rotas admin
- Componentes AllCarros e ProdutoCard agora usam `/catalogo/*` em vez de `/admin/*`
- SAC adicionado às rotas públicas no middleware

### Catalog Read-Only Access for Vendedor and Supervisor
- Vendedor e Supervisor agora têm acesso **somente leitura** ao catálogo (Montadoras, Carros, Produtos)
- Apenas Admin pode criar, editar ou excluir itens do catálogo
- Botões de adicionar, editar e excluir são ocultados para usuários não-admin
- Proteção de API: rotas POST/PUT/DELETE de catálogo requerem role "admin"
- Componentes atualizados: MontadoraCard, CarroCard, AllCarros, ProdutoCard, SingleProduto

### Training Videos - Sector-Based Access (NEW)
- Seleção de setor agora é OBRIGATÓRIA ao criar vídeos de treinamento
- Cada setor vê apenas os vídeos destinados ao seu setor
- Página admin tem filtro por setor para organizar vídeos
- Admin vê todos os vídeos incluindo inativos usando parâmetro `?all=true`
- Usuários sem setor atribuído recebem mensagem orientando contatar o RH

### Admin RH Management (NEW)
- Nova página `/admin/rh` para gerenciar vídeos de procedimentos e manuais
- Abas para alternar entre Vídeos e Manuais
- CRUD completo para ambos (criar, editar, excluir)
- Admin vê todos os vídeos incluindo inativos usando parâmetro `?all=true`

### Admin Ramais Management (NEW)
- Nova página `/admin/ramais` para gerenciar contatos/ramais de departamentos
- CRUD completo com validação de campos obrigatórios
- Cards com informações de departamento, colaborador, telefone, ramal e email

### API Security Enhancement
- Todas as rotas GET (contatos, manuais, rh) agora requerem autenticação
- Rotas de mutação (POST/PUT/DELETE) requerem role de admin
- Proteção contra exposição pública de dados internos

### Sidebar Updates
- Adicionado link "Materiais RH" no menu admin
- Adicionado link "Ramais" no menu admin

### Estrutura de Dados Dinâmicos (ATUALIZADO)
| Seção | Tipo | Gerenciamento |
|-------|------|---------------|
| FAQ | Fixo | Código fonte |
| Manuais | Dinâmico | Admin Panel (/admin/rh) |
| Contatos/Ramais | Dinâmico | Admin Panel (/admin/ramais) |
| Vídeos RH | Dinâmico | Admin Panel (/admin/rh) |
| Vídeos Treinamento | Dinâmico | Admin Panel |

---

## Previous Changes (2025-12-03)

### Portal Interno & Dashboard Unificado
- Todos os usuários agora são redirecionados para `/interno` após login
- Menu de navegação mostra opções baseadas no cargo do usuário:
  - **Instalador**: Início, Treinamentos, Recursos & RH
  - **Vendedor Interno**: + Catálogo Digital
  - **Supervisor/Admin**: + Administração
- Catálogo Digital oculto para instaladores conforme regra de negócio

### Correções de Autenticação
- Alterado de JWT_SECRET para SESSION_SECRET em todo o sistema
- Token JWT com expiração de 8 horas
- Cookie com secure=true em produção e maxAge de 8 horas

### Previous Changes

### Sector Management Removed
- Removed admin setores page and create/update/delete API routes
- Setores API now only supports GET (read-only list)
- Sectors are managed through database seed only
- Removed setores link from admin sidebar

### User Edit Form Enhanced
- Added role selection dropdown (Admin, Supervisor, Vendedor Interno, Instalador)
- Added sector selection dropdown for assigning users to departments
- Updated user API to handle role and setor_id updates

### Login Video Component Improved
- Added useRef and useEffect for better autoplay handling
- Added poster image fallback (fundo.png)
- Added gradient background as additional fallback
- Improved loading state with opacity transition

### Bug Fixes
- Fixed Radix UI Select.Item empty value errors in AddUser and videos-internos pages
- Replaced empty string values with "none" or "all" identifiers

---

## Previous Changes (2025-11-28)

### Landing Page Complete Redesign
- Modern fixed header with logo, scroll-responsive styling, and mobile menu
- Hero section with dark gradient background, statistics counters, and call-to-action buttons
- Complete mobile responsiveness across all sections and screen sizes

### New Timeline Component
- Company history timeline from 1986 to 2025
- 12 key milestones including:
  - 1986: Fundação
  - 1992: Ingresso no Ramo de Concessionárias
  - 2006: Implantação do Sistema de Gestão ERP
  - 2010-2014: Expansão e sede administrativa
  - 2017-2019: Modernização integrada e novos sistemas
  - 2021: Código de barras e estoque
  - 2023-2025: Transformação digital, e-commerce, expansão de serviços e inovação com IA
- Desktop and mobile responsive layout with alternating card positions

### Benefícios da Terceirização (AspectosPositivos Component)
- New dedicated section with 9 key benefits
- Includes: desburocratização, zero estoque, alívio organizacional, garantia estendida, especialização, diversificação, dedicação ao cliente, crescimento de vendas, e pagamento à vista
- Professional design with checkmark icons and hover effects
- Fully responsive and mobile-optimized

### Content Updates
- Updated "Apresentação da Empresa" section with refined company description
- Company established partnerships with main market distributors
- 35 years total experience, 24 years dedicated to dealership outsourcing
- Technical support and training directly from accessory manufacturers
- Constant market trend updates

### Responsive Design
- All components now fully optimized for mobile (320px+), tablet, and desktop
- Proper text scaling, spacing, and touch-friendly elements
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Fixed header, hero section, about section, benefits cards, contact form, and footer all responsive

## Components

### Home Components
- `NavHome.jsx` - Navigation header with mobile menu
- `HeroSection.jsx` - Hero section with hero text and statistics
- `Timeline.jsx` - Company history timeline 1986-2025
- `AspectosPositivos.jsx` - Benefits and advantages section
- `CardsHome.jsx` - Reusable card component for differentials
- `ContactForm.jsx` - Contact form with mobile optimization
- `Footer.jsx` - Footer with company info and links

## Notes
- The Prisma client is generated to `src/generated/prisma` (custom output path)
- The application uses Turbopack for faster development builds
- All API routes are in `src/app/api/*`
- Custom hooks for secure fetch operations are in `src/hooks/`
- Timeline and AspectosPositivos components include emojis and icons for visual clarity
- All content matches the official company presentation materials provided
