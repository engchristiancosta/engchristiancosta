# Christian Costa Engenharia Civil — Site Institucional

Site profissional completo para a empresa de Engenharia Civil.

## Arquivos

```
christian-costa-engenharia/
├── index.html      # Página principal (toda a estrutura)
├── style.css       # Estilos completos (responsivo)
├── script.js       # Interatividade (menu, animações, filtro)
├── vercel.json     # Configuração de deploy no Vercel
└── README.md
```

## Como publicar no Vercel

1. Acesse https://vercel.com e faça login
2. Clique em **"Add New → Project"**
3. Faça upload da pasta ou conecte ao GitHub
4. Deploy automático — o `vercel.json` já está configurado

## Personalização necessária

### 1. Foto do Engenheiro
Substitua o placeholder na seção **Hero** e **Sobre**:
```html
<!-- No hero, troque .photo-placeholder pelo: -->
<img src="foto-christian.jpg" alt="Christian Costa - Engenheiro Civil" />

<!-- No sobre, troque .sobre-photo-placeholder pelo: -->
<img src="foto-sobre.jpg" alt="Christian Costa" />
```

### 2. Logo da Empresa
Substitua os espaços reservados de logo:
```html
<!-- Troque .logo-mark e .logo-text pela sua logo: -->
<img src="logo.png" alt="Christian Costa Engenharia" />
```

### 3. Fotos do Portfólio
Troque os `.portfolio-placeholder` por imagens reais:
```html
<img src="obra-osasco.jpg" alt="Obra em Osasco" style="width:100%;height:100%;object-fit:cover;" />
```

### 4. Links do WhatsApp
Já configurados com o número **(11) 95889-7180**.
Para alterar: busque `5511958897180` no `index.html` e substitua.

### 5. Favicon
Adicione no `<head>` do `index.html`:
```html
<link rel="icon" type="image/png" href="favicon.png" />
```

## Seções do Site

| # | Seção | Descrição |
|---|-------|-----------|
| 1 | Hero | Apresentação + CTA WhatsApp |
| 2 | Serviços | 5 cards de serviços |
| 3 | Diferenciais | 5 diferenciais da empresa |
| 4 | Portfólio | Galeria com filtros |
| 5 | Sobre | Perfil do engenheiro |
| 6 | Regiões | Mapa + lista de cidades |
| 7 | CTA Final | Chamada para ação |
| 8 | Rodapé | Contatos e links |

## Contato configurado

- **WhatsApp:** (11) 95889-7180
- **E-mail:** eng.christiancosta@outlook.com
- **Instagram:** @christiancostaengenharia

---
Desenvolvido com HTML, CSS e JavaScript puro. Pronto para deploy no Vercel.
