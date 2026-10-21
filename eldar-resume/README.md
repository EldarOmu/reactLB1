# Резюме — Омурзаков Элдар

Сайт-резюме на React + Vite. Все тексты и контакты лежат в одном файле: `src/data.js`.

## Что поменять перед публикацией
- `src/data.js` → `email` и `phone` (сейчас вымышленные), `github`, `photo`.
- Фото: положите файл в `public/` (например `public/photo.jpg`) и впишите `'./photo.jpg'` в `photo`.

## Запуск
```
npm install
npm run dev        # локально
npm run build      # сборка в dist/
```

## Публикация на GitHub Pages
Workflow `.github/workflows/deploy.yml` запускается при пуше в ветку `main`.
В репозитории: Settings → Pages → Source: GitHub Actions.
