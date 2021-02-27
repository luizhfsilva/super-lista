$env:PGUSER = "postgres"
$env:PGPASSWORD = "secret"
$env:PGDATABASE = "postgres"
$env:DATABASE_URL = "postgres://${PGUSER}:${PGPASSWORD}@127.0.0.1:5432/${PGDATABASE}"

node .\app.js