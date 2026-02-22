# Wordstat exports

Папка содержит выгрузки из Yandex Wordstat API (регион: Россия/225) для первичной семантики по теме:
корпоративный AI‑ассистент / внедрение ИИ / RAG / on‑prem LLM / enterprise search.

## Как обновлять

Скрипты лежат в skill‑пакете `yandex-wordstat`:

```bash
cd /Users/Apple/.codex/skills/yandex-wordstat
bash scripts/quota.sh

# Пример: выгрузить топ‑варианты фразы
bash scripts/top_requests.sh --phrase "внедрение ai" --regions 225 --limit 200 --csv /Users/Apple/Developer/Corporate-AI-Assistant/reports/wordstat/ai_implementation.csv
```

Примечание: токен API хранится в `.../yandex-wordstat/config/.env` (не коммитьте его в этот репозиторий).

