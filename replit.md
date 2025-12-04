# Russi Acessórios - Site

## Overview
This Next.js application serves as the digital platform for Russi Acessórios, a Brazilian automotive accessories company. The project aims to provide a comprehensive online presence, featuring a product catalog, video tutorials, and an internal portal with user authentication and admin management. It reflects 35 years of market experience, emphasizing digital transformation, e-commerce, and service expansion.

## User Preferences
I prefer iterative development with clear communication on major changes. Please prioritize high-level features and architectural decisions. Do not make changes to the folder `Z` or file `Y`.

## System Architecture
The application is built with Next.js 15.5.4 and Turbopack, utilizing React 19. Styling is managed with Tailwind CSS 4 and Radix UI components, following shadcn/ui patterns for custom components.

**Key Features:**
- **Product Catalog**: Browsable by car manufacturer and model, with QR code generation for product information.
- **Video Library**: Public tutorial videos and internal, sector-based training videos.
- **User Authentication**: JWT-based, role-based access control (admin, supervisor, vendedor_interno, instalador) with Next.js middleware for route protection.
- **Admin Panel**: Comprehensive management for products, cars, manufacturers, users, internal videos, HR procedures, manuals, and department contacts/extensions.
- **Home Page**: Dynamic content including company presentation, a historical timeline (1986-2025), and key benefits of outsourcing.
- **Internal Portal**: Unified dashboard for authenticated users, with navigation tailored to user roles.

**Database Schema (PostgreSQL with Prisma ORM):**
- `usuarios`: User accounts with roles and sector assignments.
- `setores`: Departments for user organization and content access.
- `videos_internos`: Sector-specific training videos.
- `videos_rh_procedimentos`: General HR procedure videos.
- `montadoras`, `carros`, `produtos`: Product catalog structure.
- `videos`: Public video tutorials.
- `contatos`: Department contacts and extensions.
- `duvidas`: Frequently asked questions.
- `manuais`: Training manuals.
- `carro_produtos`: Many-to-many relationship between cars and products.

**UI/UX Decisions:**
- Modern fixed header with scroll-responsive styling.
- Hero section with dark gradient background and statistics.
- Responsive design across all components for mobile (320px+), tablet, and desktop.
- Timeline component for company history.
- "AspectosPositivos" component highlighting benefits with professional design.

**Technical Implementations:**
- Prisma client generated to `src/generated/prisma`.
- All API routes located in `src/app/api/*`.
- Custom hooks for secure fetch operations.
- Cookie-based JWT token storage with 8-hour expiration.

## External Dependencies
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT (JSON Web Tokens), bcrypt
- **UI Libraries**: Radix UI, Lucide React, Recharts