Param(
  [string]$Message
)

if (-not $Message) {
  $Message = Read-Host "Mensagem do commit"
}

git status --porcelain | Out-Null
if ($LASTEXITCODE -ne 0) {
  Write-Host "Não foi possível verificar o estado do Git." -ForegroundColor Red
  exit $LASTEXITCODE
}

$changes = git status --porcelain
if (-not [string]::IsNullOrWhiteSpace($changes)) {
  git add .
  git commit -m "$Message"
  if ($LASTEXITCODE -ne 0) {
    Write-Host "Commit falhou. Verifique as mensagens acima." -ForegroundColor Red
    exit $LASTEXITCODE
  }
} else {
  Write-Host "Nenhuma mudança para commitar. Pulando commit." -ForegroundColor Yellow
}

git push origin main
if ($LASTEXITCODE -ne 0) {
  Write-Host "Push falhou. Verifique sua permissão no remote origin e as credenciais do GitHub." -ForegroundColor Red
  exit $LASTEXITCODE
}

Write-Host "Deploy Git completo. Se você usa Vercel, execute 'vercel --prod' ou verifique o deploy na dashboard." -ForegroundColor Green
