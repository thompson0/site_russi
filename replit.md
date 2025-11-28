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
- `usuarios` - User accounts with roles and permissions
- `montadoras` - Car manufacturers
- `carros` - Vehicle models
- `produtos` - Product catalog
- `videos` - Video tutorials
- `carro_produtos` - Many-to-many relation between cars and products

## Environment Variables Required

### Database Configuration
- `DATABASE_URL` - PostgreSQL connection URL (required)
- `DIRECT_URL` - Direct PostgreSQL connection URL (required)

### Authentication
- `SESSION_SECRET` - Secret for JWT token signing (already configured)

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Database
You need to provide PostgreSQL database credentials. Set the following environment variables:
- `DATABASE_URL` - Your PostgreSQL connection string
- `DIRECT_URL` - Direct connection string for migrations

### 3. Generate Prisma Client
```bash
npm run prisma:generate
```

### 4. Run Database Migrations (if needed)
```bash
npx prisma db push
```

### 5. Start Development Server
```bash
npm run dev
```

The application will be available at http://localhost:5000

## Available Scripts
- `npm run dev` - Start development server on port 5000
- `npm run build` - Build for production (includes Prisma generation)
- `npm start` - Start production server on port 5000
- `npm run prisma:generate` - Generate Prisma client

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
- `/visitante/*` - Visitor-accessible pages
- `/admin/*` - Admin dashboard (requires authentication)
- `/user/*` - User profile pages (requires authentication)

## Authentication Flow
The application uses JWT-based authentication with:
- Cookie-based token storage
- CSRF token protection
- Middleware protection for `/admin/*` and `/user/*` routes
- Automatic redirect to `/login` for unauthenticated users

## Recent Changes (2025-11-28)

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
