# Deployment Checklist (Fill Before Production)

- Платформа: `Vercel` или `свой сервер` (указать выбранный вариант).
- Домен: `________________`.
- SSL: включён и проверен (`A+`/без mixed content).
- ENV в проде:
  - `TELEGRAM_BOT_TOKEN`
  - `TELEGRAM_CHAT_ID`
  - `FORM_ALLOWED_ORIGINS` (если есть несколько доменов)
- Проверен маршрут `GET /api/leads/csrf` и `POST /api/leads`.
- Политика данных согласована с юристом: перечень полей, срок хранения, процедура удаления/экспорта.
- Прогнан smoke: заявка с сайта доходит в Telegram, в UI отображается успешный статус.
