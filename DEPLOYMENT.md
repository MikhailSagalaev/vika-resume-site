# Инструкции по деплою

## Деплой на Vercel (Рекомендуется)

1. Перейдите на [vercel.com](https://vercel.com) и войдите в аккаунт
2. Нажмите "New Project"
3. Импортируйте репозиторий `MikhailSagalaev/vika-resume-site`
4. Vercel автоматически определит Next.js проект
5. Нажмите "Deploy"

## Деплой на Netlify

1. Перейдите на [netlify.com](https://netlify.com) и войдите в аккаунт
2. Нажмите "New site from Git"
3. Выберите GitHub и репозиторий `MikhailSagalaev/vika-resume-site`
4. Настройте build команды:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Нажмите "Deploy site"

## Деплой на GitHub Pages

1. В репозитории перейдите в Settings → Pages
2. Source: Deploy from a branch
3. Branch: main
4. Folder: / (root)
5. Нажмите Save

## Локальная сборка

```bash
# Установка зависимостей
npm install

# Сборка проекта
npm run build

# Запуск продакшен версии
npm run start
```

## Переменные окружения

Создайте файл `.env.local` в корне проекта:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Домен

После деплоя вы можете подключить свой домен в настройках платформы.

## Автоматический деплой

При каждом push в ветку `main` будет происходить автоматический деплой на Vercel.
