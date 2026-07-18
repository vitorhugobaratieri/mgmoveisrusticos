Param(
  [string]$Message
)

if (-not $Message) {
  $Message = Read-Host "Mensagem do commit"
}

git add .
if (-not $Message) {
  Write-Host "Nenhuma mensagem de commit fornecida. Abortando." -ForegroundColor Yellow
  exit 1
}

git commit -m "$Message"
if ($LASTEXITCODE -ne 0) {
  Write-Host "Commit falhou. Verifique as mensagens acima." -ForegroundColor Red
  exit $LASTEXITCODE
}

git push origin main
if ($LASTEXITCODE -ne 0) {
  Write-Host "Push falhou. Verifique sua conexão e o remote origin." -ForegroundColor Red
  exit $LASTEXITCODE
}

Write-Host "Deploy Git completo. Se você usa Vercel, execute 'vercel --prod' ou verifique o deploy na dashboard." -ForegroundColor Green
