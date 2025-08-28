# Настройка GitHub Secrets для автоматического деплоя

## Что такое GitHub Secrets?

GitHub Secrets - это зашифрованные переменные окружения, которые можно использовать в GitHub Actions workflows. Они позволяют безопасно хранить конфиденциальную информацию (токены, ID проектов и т.д.).

## Настройка для Vercel

### 1. Получение Vercel Token

1. Перейдите на [vercel.com](https://vercel.com) и войдите в аккаунт
2. Перейдите в Settings → Tokens
3. Нажмите "Create Token"
4. Дайте токену имя (например, "GitHub Actions")
5. Скопируйте токен

### 2. Получение Organization ID

1. В Vercel перейдите в Settings → General
2. Скопируйте "Team ID" (это и есть Organization ID)

### 3. Получение Project ID

1. В Vercel перейдите в ваш проект
2. Перейдите в Settings → General
3. Скопируйте "Project ID"

### 4. Добавление Secrets в GitHub

1. Перейдите в ваш GitHub репозиторий
2. Перейдите в Settings → Secrets and variables → Actions
3. Нажмите "New repository secret"
4. Добавьте следующие секреты:

```
VERCEL_TOKEN = ваш_vercel_токен
ORG_ID = ваш_organization_id
PROJECT_ID = ваш_project_id
```

## Проверка настройки

После добавления всех секретов:

1. Сделайте push в ветку `main`
2. Перейдите в Actions в вашем репозитории
3. Убедитесь, что workflow "Deploy to Vercel" запустился
4. Проверьте, что деплой прошел успешно

## Альтернативный способ деплоя

Если вы не хотите настраивать автоматический деплой, можете использовать ручной деплой:

1. Подключите репозиторий к Vercel через веб-интерфейс
2. Vercel будет автоматически деплоить при каждом push

## Полезные ссылки

- [GitHub Secrets документация](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Vercel CLI документация](https://vercel.com/docs/cli)
- [GitHub Actions документация](https://docs.github.com/en/actions)
