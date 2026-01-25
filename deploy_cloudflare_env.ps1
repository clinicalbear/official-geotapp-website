# =====================================================
# Deploy Environment Variables to Cloudflare Pages
# Configura i nuovi Stripe Price IDs su Cloudflare
# =====================================================

$ErrorActionPreference = "Stop"

Write-Host "🌐 Cloudflare Pages - Environment Variables Setup" -ForegroundColor Cyan
Write-Host "====================================================" -ForegroundColor Cyan
Write-Host ""

# Check if wrangler is installed
try {
    $null = Get-Command wrangler -ErrorAction Stop
    Write-Host "✅ Wrangler CLI found" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Wrangler CLI not found. Installing..." -ForegroundColor Yellow
    npm install -g wrangler
}

# Check authentication
Write-Host ""
Write-Host "🔐 Checking Cloudflare authentication..." -ForegroundColor Blue
try {
    wrangler whoami 2>&1 | Out-Null
    Write-Host "✅ Already authenticated!" -ForegroundColor Green
} catch {
    Write-Host "Please login to Cloudflare:" -ForegroundColor Yellow
    wrangler login
}

Write-Host ""
Write-Host "📝 Setting environment variables..." -ForegroundColor Blue
Write-Host ""

# Project name - ADJUST IF DIFFERENT
$PROJECT_NAME = "official-geotapp-website"

# Function to set environment variable
function Set-CloudflareEnvVar {
    param(
        [string]$VarName,
        [string]$VarValue
    )

    Write-Host "  Setting $VarName..." -ForegroundColor Yellow
    $VarValue | wrangler pages secret put $VarName --project-name=$PROJECT_NAME
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  ✅ $VarName set" -ForegroundColor Green
    } else {
        Write-Host "  ❌ Failed to set $VarName" -ForegroundColor Red
    }
}

Write-Host "💳 Configuring Stripe Price IDs..." -ForegroundColor Blue
Write-Host ""

# START Plan (18,90€/mese - 189€/anno)
Set-CloudflareEnvVar "NEXT_PUBLIC_STRIPE_PRICE_FLOW_START_MONTHLY" "price_1StVkdCgA44aD4AuyTLDeZwE"
Set-CloudflareEnvVar "NEXT_PUBLIC_STRIPE_PRICE_FLOW_START_ANNUAL" "price_1StVlrCgA44aD4AunKfs9lb7"

# PRO Plan (37,90€/mese - 379€/anno)
Set-CloudflareEnvVar "NEXT_PUBLIC_STRIPE_PRICE_FLOW_PRO_MONTHLY" "price_1StVvsCgA44aD4Au3c8ZJpyg"
Set-CloudflareEnvVar "NEXT_PUBLIC_STRIPE_PRICE_FLOW_PRO_ANNUAL" "price_1StW2pCgA44aD4AudAJ2ZLlD"

# ELITE Plan (69,90€/mese - 699€/anno)
Set-CloudflareEnvVar "NEXT_PUBLIC_STRIPE_PRICE_FLOW_ELITE_MONTHLY" "price_1StW4NCgA44aD4AuoaCg40qZ"
Set-CloudflareEnvVar "NEXT_PUBLIC_STRIPE_PRICE_FLOW_ELITE_ANNUAL" "price_1StW5GCgA44aD4AuftXBOMSb"

# FOUNDER Plan (1.299€ one-time)
Set-CloudflareEnvVar "NEXT_PUBLIC_STRIPE_PRICE_FLOW_FOUNDER_ONETIME" "price_1StW6YCgA44aD4Au09sY1UH2"

# Extra Users
Set-CloudflareEnvVar "NEXT_PUBLIC_STRIPE_PRICE_FLOW_EXTRA_USER_MONTHLY" "price_1StW6yCgA44aD4AuvAjSWGt1"
Set-CloudflareEnvVar "NEXT_PUBLIC_STRIPE_PRICE_TIMETRACKER_EXTRA_USER_MONTHLY" "price_1StW7LCgA44aD4Au9VAr3k1l"

Write-Host ""
Write-Host "✅ All environment variables configured!" -ForegroundColor Green
Write-Host ""
Write-Host "🚀 Next Steps:" -ForegroundColor Cyan
Write-Host "  1. Go to Cloudflare Dashboard: https://dash.cloudflare.com/" -ForegroundColor White
Write-Host "  2. Navigate to Workers & Pages → $PROJECT_NAME" -ForegroundColor White
Write-Host "  3. Go to Deployments tab" -ForegroundColor White
Write-Host "  4. Click 'Retry deployment' on the latest deployment" -ForegroundColor White
Write-Host "     OR push a new commit to trigger auto-deploy" -ForegroundColor White
Write-Host ""
Write-Host "✨ Setup complete!" -ForegroundColor Green
Write-Host ""

# Ask if user wants to open Cloudflare dashboard
$openBrowser = Read-Host "Open Cloudflare Dashboard in browser? (Y/n)"
if ($openBrowser -eq "" -or $openBrowser -eq "Y" -or $openBrowser -eq "y") {
    Start-Process "https://dash.cloudflare.com/"
}
