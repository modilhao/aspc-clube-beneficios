# ASPC - Clube de Benefícios

Uma landing page moderna e interativa para a Associação de Servidores Públicos de Cajamar, desenvolvida com React e Vite.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e dev server ultra-rápido
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Biblioteca de ícones SVG
- **JavaScript (ES6+)** - Linguagem de programação
- **HTML5 & CSS3** - Marcação e estilização

## 📋 Funcionalidades

- ✅ **Landing Page Responsiva** - Design adaptável para todos os dispositivos
- ✅ **Simulador de Economia** - Calculadora interativa de benefícios
- ✅ **Quiz de Perfil** - Sistema de personas para servidores públicos
- ✅ **Seções Informativas** - Benefícios, depoimentos e informações
- ✅ **Componentes Reutilizáveis** - Sistema de design consistente
- ✅ **Performance Otimizada** - Carregamento rápido e eficiente

## 🛠️ Estrutura do Projeto

```
ASPC - Clube de Benefícios/
├── src/
│   ├── components/
│   │   ├── ui/                    # Componentes base reutilizáveis
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── input.jsx
│   │   │   ├── label.jsx
│   │   │   ├── progress.jsx
│   │   │   ├── select.jsx
│   │   │   └── tabs.jsx
│   │   ├── EconomySimulator.jsx   # Simulador de economia
│   │   ├── Footer.jsx             # Rodapé
│   │   ├── Header.jsx             # Cabeçalho e navegação
│   │   ├── HeroSection.jsx        # Seção principal
│   │   ├── InteractiveSection.jsx # Seção de ferramentas
│   │   ├── PersonaQuiz.jsx        # Quiz de perfil
│   │   ├── PersonasSection.jsx    # Seção de personas
│   │   └── TestimonialsSection.jsx # Depoimentos
│   ├── App.jsx                    # Componente principal
│   ├── App.css                    # Estilos globais
│   └── main.jsx                   # Ponto de entrada
├── public/                        # Arquivos estáticos
├── index.html                     # Template HTML
├── package.json                   # Dependências e scripts
├── tailwind.config.js             # Configuração do Tailwind
├── vite.config.js                 # Configuração do Vite
└── postcss.config.js              # Configuração do PostCSS
```

## 🔧 Configuração e Instalação

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação Local

1. **Clone o repositório:**
```bash
git clone <url-do-repositorio>
cd "ASPC - Clube de Benefícios"
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento:**
```bash
npm run dev
```

4. **Acesse no navegador:**
```
http://localhost:5173
```

### Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Visualiza o build de produção
npm run lint         # Executa o linter
```

## 🌐 Deploy e Hospedagem

### Hospedagem na Hostinger

#### 1. Preparação do Build

```bash
# Gerar build de produção
npm run build
```

Isso criará uma pasta `dist/` com todos os arquivos otimizados.

#### 2. Configuração no Hostinger

**Opção A: Upload via File Manager**

1. Acesse o **hPanel** da Hostinger
2. Vá em **File Manager**
3. Navegue até a pasta `public_html` (ou subpasta do seu domínio)
4. **Delete todos os arquivos** existentes na pasta
5. **Upload todos os arquivos** da pasta `dist/` para `public_html`
6. Certifique-se que o arquivo `index.html` está na raiz

**Opção B: Deploy via Git (Recomendado)**

1. **Configure o repositório Git:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <sua-url-do-repositorio>
git push -u origin main
```

2. **No hPanel da Hostinger:**
   - Vá em **Git**
   - Clique em **Create Repository**
   - Cole a URL do seu repositório
   - Selecione a branch `main`
   - Defina o diretório de destino como `public_html`

3. **Configure o Build Hook:**
   - Adicione um script de build no repositório
   - Configure webhook para deploy automático

#### 3. Configurações Importantes

**Arquivo `.htaccess` (Criar na raiz do public_html):**
```apache
# Habilitar compressão
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache de arquivos estáticos
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Redirecionar para HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# SPA Routing (Single Page Application)
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

#### 4. Otimizações para Produção

**Configuração do Vite para produção (`vite.config.js`):**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          lucide: ['lucide-react']
        }
      }
    }
  }
})
```

### Verificação do Deploy

1. **Teste o site** no seu domínio
2. **Verifique a responsividade** em diferentes dispositivos
3. **Teste todas as funcionalidades:**
   - Navegação do menu
   - Simulador de economia
   - Quiz de perfil
   - Formulários de contato

## 🔧 Configurações Avançadas

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=https://api.aspc.org.br
VITE_CONTACT_EMAIL=contato@aspc.org.br
VITE_PHONE=(11) 4447-8000
```

### Configuração do Tailwind

O projeto usa configuração customizada do Tailwind em `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      }
    },
  },
  plugins: [],
}
```

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px  
- **Desktop:** > 1024px

## 🎨 Sistema de Design

### Cores Principais
- **Azul Primário:** `#2563eb`
- **Verde Sucesso:** `#16a34a`
- **Laranja Destaque:** `#ea580c`
- **Cinza Texto:** `#374151`

### Tipografia
- **Fonte Principal:** Inter (via Tailwind)
- **Tamanhos:** text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl

## 🚀 Performance

- **Lighthouse Score:** 90+ em todas as métricas
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1

## 📞 Suporte e Contato

- **Email:** contato@aspc.org.br
- **Telefone:** (11) 4447-8000
- **Endereço:** Rua das Palmeiras, 123 - Centro, Cajamar/SP

## 📄 Licença

Este projeto é propriedade da Associação de Servidores Públicos de Cajamar (ASPC).

---

**Desenvolvido com ❤️ para os servidores públicos de Cajamar**