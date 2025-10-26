# Vuzhelper Telegram Mini App

# Технологии
- Next.js 15
- TypeScript
- Telegram WebApp SDK - интеграция с Telegram
- React Context API - для управления состоянием Telegram SDK
- TailwindCSS

# Структура проекта
```
src/
├── app/
│   ├── layout.tsx          # Главный layout приложения (глобальный HTML-шаблон)
│   ├── page.tsx            # Главная страница
│   └──auth/
│      └── page.tsx        # Страница авторизации
│
├── components
│ 
│
├── providers/
│   └── TelegramProvider.tsx       # Провайдер Telegram SDK (инициализация WebApp, user)
│  
│
└──types/
   └── telegram.ts          # Типы данных (TelegramUser, TelegramContext)
```

---
