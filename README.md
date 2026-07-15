# MG Móveis Rústicos

Site institucional da **MG Móveis Rústicos** — marcenaria artesanal de móveis rústicos em madeira de demolição, localizada em Terra-Roxa, Paraná.

**Domínio:** [mgmoveisrusticos.com.br](https://mgmoveisrusticos.com.br)

## Páginas

| Página | Arquivo |
|--------|---------|
| Início | `index.html` |
| Produtos / Galeria | `produtos.html` |
| Sobre a Empresa | `sobre.html` |
| Contato | `contato.html` |

## Tecnologias

- HTML5, CSS3 e JavaScript puro (sem frameworks)
- Responsivo (mobile-first)
- Integração com WhatsApp para orçamentos
- Google Maps embutido na página de contato

## Estrutura

```
mgmoveisrusticos/
├── index.html
├── produtos.html
├── sobre.html
├── contato.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
    ├── logo.png
    ├── mesa-rustica.png
    ├── cadeiras-banco.png
    ├── cozinha-rustica.png
    ├── estante-aparador.png
    ├── oficina.png
    └── mauricio.png
```

## Visualizar localmente

Abra o arquivo `index.html` no navegador ou use um servidor local:

```bash
# Python
python3 -m http.server 8080

# Node.js (npx)
npx serve .
```

Acesse: `http://localhost:8080`

## Deploy no GitHub

1. Crie um repositório no GitHub (ex: `mgmoveisrusticos`)
2. Na pasta do projeto:

```bash
git init
git add .
git commit -m "Site MG Móveis Rústicos — versão inicial"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/mgmoveisrusticos.git
git push -u origin main
```

## Deploy na Vercel

### Opção A — Via site (recomendado)

1. Acesse [vercel.com](https://vercel.com) e faça login com GitHub
2. Clique em **Add New Project**
3. Importe o repositório `mgmoveisrusticos`
4. Mantenha as configurações padrão (site estático)
5. Clique em **Deploy**

### Opção B — Via CLI

```bash
npm i -g vercel
vercel
```

### Domínio personalizado

1. Na Vercel, vá em **Settings → Domains**
2. Adicione `mgmoveisrusticos.com.br` e `www.mgmoveisrusticos.com.br`
3. Configure os registros DNS no painel do seu provedor de domínio conforme indicado pela Vercel

## Personalização

- **Fotos:** substitua os arquivos em `images/` por fotos reais dos produtos, oficina e equipe
- **Depoimentos:** edite os textos em `index.html`
- **Instagram:** quando o perfil estiver pronto, adicione o link em `contato.html` e no rodapé
- **WhatsApp:** número configurado em `js/main.js` (`WHATSAPP_NUMBER`)

## Contato da empresa

- **Endereço:** Rua Rio Grande do Norte, 470 — Terra-Roxa, PR
- **WhatsApp:** (44) 99983-4988
- **Horário:** Segunda a sexta, 8h às 18h
