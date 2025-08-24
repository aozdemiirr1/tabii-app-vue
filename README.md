# Tabii App

Bu proje Vue.js frontend ve Strapi backend'den oluşan fullstack bir uygulamadır.

## Proje Yapısı

```
tabii-app-vue/
├── frontend/          # Vue.js uygulaması
│   ├── src/          # Vue.js kaynak kodları
│   ├── public/       # Statik dosyalar
│   └── package.json  # Frontend bağımlılıkları
├── backend/           # Strapi API
│   ├── src/          # Strapi kaynak kodları
│   └── package.json  # Backend bağımlılıkları
└── package.json       # Root proje yönetimi
```

## Kurulum

### Tüm bağımlılıkları yüklemek için:
```bash
pnpm run install:all
```

### Sadece root bağımlılıkları yüklemek için:
```bash
pnpm install
```

## Çalıştırma

### Frontend geliştirme sunucusu:
```bash
pnpm run frontend:dev
```

### Backend geliştirme sunucusu:
```bash
pnpm run backend:dev
```

### Her ikisini aynı anda çalıştırmak için:
```bash
pnpm run dev
```

## Build

### Tüm projeyi build etmek için:
```bash
pnpm run build:all
```

### Sadece frontend build:
```bash
pnpm run frontend:build
```

### Sadece backend build:
```bash
pnpm run backend:build
```

## Erişim

- **Frontend**: http://localhost:5173 (Vite default port)
- **Backend**: http://localhost:1337 (Strapi default port)
- **Strapi Admin**: http://localhost:1337/admin

## Teknolojiler

- **Frontend**: Vue.js 3, Vite, Tailwind CSS
- **Backend**: Strapi v5
- **Package Manager**: pnpm
