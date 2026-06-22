# Christian Costa Engenharia Civil — Site Institucional (v3.1)

Evolução do site v2/v3 com logos integrados, correções de legibilidade e refinamentos visuais.

## Arquivos

```
cc-v3/
├── index.html            # Estrutura completa (9 seções)
├── style.css             # Estilos (70% branco, azul como acento)
├── script.js             # Menu mobile, navbar, animações, nav ativo
├── vercel.json           # Configuração de deploy
├── logo-branco.png       # Logo branca — navbar e rodapé  ✅ incluída
├── logo-colorido.png     # Logo colorida — seção Sobre    ✅ incluída
└── README.md
```

## Imagens para adicionar

Coloque os arquivos abaixo **na mesma pasta** do `index.html`.  
O site já está configurado para buscá-los pelos nomes exatos.  
Enquanto não existem, carrega automaticamente imagens Unsplash de placeholder.

| Arquivo | Onde aparece |
|---|---|
| `foto-christian.jpg` | Hero (card do engenheiro) e Seção Sobre |
| `regularizacao.jpg` | Card destaque — Regularização de Imóveis |
| `projetos.jpg` | Card — Projetos Residenciais |
| `apartamento.jpg` | Card — Reforma de Apartamentos |
| `laudos.jpg` | Card — Laudos e Vistorias |
| `apoio-tecnico.jpg` | Card — Apoio Técnico e seção Para Empresas |
| `portfolio-01.jpg` | Portfólio — item grande (Regularização) |
| `portfolio-02.jpg` | Portfólio — Projeto Arquitetônico |
| `portfolio-03.jpg` | Portfólio — Reforma de Apartamento |
| `portfolio-04.jpg` | Portfólio — Levantamento As Built |

> **Dica de proporção:** fotos de serviços idealmente em 16:10 · portfólio em 4:3 · foto do engenheiro em 3:4 (retrato).

## Logos

| Arquivo | Uso | Observação |
|---|---|---|
| `logo-branco.png` | Navbar + rodapé | PNG com fundo transparente. O CSS aplica `filter: brightness(0) invert(1)` — garante branco puro mesmo em versão colorida |
| `logo-colorido.png` | Seção Sobre | Exibida sobre fundo branco |

## Como publicar no Vercel

1. Acesse [vercel.com](https://vercel.com) → **Add New → Project**
2. Faça upload da pasta (com as imagens incluídas) ou conecte ao GitHub
3. Deploy automático — `vercel.json` já configurado

## Contato configurado

- **WhatsApp:** (11) 95889-7180
- **E-mail:** eng.christiancosta@outlook.com
- **Instagram:** @eng.christiancosta
- **LinkedIn:** linkedin.com/in/christian-costa-041047137/

---
Código HTML/CSS/JS puro · Sem frameworks · Pronto para Vercel
