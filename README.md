# Landing Page · Ana Azevedo, Psicóloga Clínica

Landing page institucional para a psicóloga clínica Ana Azevedo, com apresentação, serviços, abordagem terapêutica, perguntas frequentes e contato direto por WhatsApp e Instagram.

> 💚 **Este é o meu primeiro projeto freelancer.** Foi feito com muito cuidado, aprendizado e a vontade de entregar um site acolhedor, leve e fácil de manter. Feedbacks são muito bem-vindos!

---

## Sumário

- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Como rodar o projeto](#como-rodar-o-projeto)
- [Como compilar (build)](#como-compilar-build)
- [Como testar](#como-testar)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Como personalizar](#como-personalizar)
- [Antes de publicar](#antes-de-publicar)
- [Publicação](#publicação)
- [Autora](#autora)

---

## Tecnologias

- [React](https://react.dev/) 19 + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) como bundler e servidor de desenvolvimento
- [Tailwind CSS](https://tailwindcss.com/) v4 (configuração via CSS, com `@theme`)
- [lucide-react](https://lucide.dev/) para ícones
- Fontes do Google Fonts: **Playfair Display** (títulos), **Montserrat** (texto) e **Great Vibes** (destaques)

Nenhuma biblioteca de animação foi usada: tudo é feito com Tailwind, CSS e `IntersectionObserver`.

## Funcionalidades

- Layout responsivo (celular, tablet e desktop)
- Menu com rolagem suave até cada seção, link ativo conforme a seção visível e header que reage à rolagem
- Animações suaves: elementos que aparecem ao rolar, entrada do Hero, contador, parallax e cards com hover
- Botão flutuante de WhatsApp com mensagem pronta
- Botão "Voltar ao topo" no rodapé
- FAQ em formato sanfona (só uma pergunta aberta por vez)
- Respeita a preferência de **"reduzir movimento"** do sistema operacional (as animações são desativadas)

## Pré-requisitos

- [Node.js](https://nodejs.org/) em uma versão LTS recente (**20.19+** ou **22.12+**)
- npm (já vem com o Node.js)
- Git (opcional, para clonar o repositório)

Para conferir as versões instaladas:

```bash
node -v
npm -v
```

## Como rodar o projeto

```bash
# 1. Clone o repositório (ou baixe e extraia a pasta do projeto)
git clone <url-do-repositorio>
cd landing-page-ana

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

O terminal vai mostrar o endereço local, normalmente `http://localhost:5173`. Abra no navegador: a página recarrega sozinha a cada alteração salva.

> **Fontes e Tailwind:** o arquivo `theme.css` (cores, fontes e animações) precisa estar importado no ponto de entrada da aplicação, por exemplo no `main.tsx`: `import './theme.css'`. Se você já tem um `index.css` com `@import "tailwindcss"`, copie o conteúdo do `theme.css` para ele, mantendo o `@import url(...)` das fontes **antes** do `@import "tailwindcss"`.

## Como compilar (build)

```bash
npm run build
```

Esse comando verifica os tipos do TypeScript (`tsc -b`) e gera a versão otimizada para produção na pasta `dist/`. Se houver algum erro de tipo, o build para e mostra onde está o problema.

Para ver o resultado do build localmente, antes de publicar:

```bash
npm run preview
```

## Como testar

O projeto **não possui testes automatizados**. A verificação é feita em três camadas:

**1. Lint (qualidade do código)**

```bash
npm run lint
```

**2. Build (tipos e compilação)**

```bash
npm run build
```

**3. Checklist manual** (use `npm run dev` ou `npm run preview`)

- [ ] Todos os links do menu rolam até a seção certa, sem o título ficar escondido atrás do header
- [ ] O link do menu muda conforme a seção visível, e o menu mobile fecha ao tocar em um item
- [ ] Os botões "Agendar Consulta" e "Conhecer Mais" levam às seções corretas
- [ ] O botão flutuante abre o WhatsApp com a mensagem pronta (teste com o número real)
- [ ] O link do Instagram abre o perfil correto
- [ ] O FAQ abre uma pergunta por vez
- [ ] O botão "Voltar ao topo" do rodapé funciona
- [ ] O layout está bom em tela pequena (~360px), média (~768px) e grande (~1280px)
- [ ] Com "reduzir movimento" ativado no sistema, a página aparece sem animações

## Estrutura de pastas

Dentro de `src/`:

```
├── App.tsx                  # Monta a página na ordem das seções
├── theme.css                # Cores, fontes e animações (Tailwind @theme)
├── assets/
│   └── Logo.png             # Logo usada no rodapé
├── config/
│   └── contact.ts           # WhatsApp e Instagram em um só lugar
├── hooks/
│   └── useInView.ts         # Detecta quando um elemento entra na tela
├── utils/
│   ├── motion.ts            # Detecta "reduzir movimento"
│   └── scrollToSection.ts   # Rolagem suave com desconto do header
└── components/
    ├── Header.tsx           ├── Hero.tsx
    ├── About.tsx            ├── Services.tsx
    ├── ServiceCard.tsx      ├── HelpYou.tsx
    ├── HowItWorks.tsx       ├── Approach.tsx
    ├── Differentials.tsx    ├── Testimonials.tsx
    ├── FAQ.tsx              ├── AccordionItem.tsx
    ├── Contact.tsx          ├── Footer.tsx
    ├── Button.tsx           ├── Reveal.tsx
    ├── CountUp.tsx          ├── icons.tsx
    └── WhatsAppButton.tsx
```

## Como personalizar

**Contatos** — edite `config/contact.ts`. O botão flutuante e a seção de contato leem desse arquivo:

```ts
export const WHATSAPP_NUMBER = '5511999999999';   // país + DDD + número, só dígitos
export const WHATSAPP_DISPLAY = '(11) 99999-9999'; // como aparece escrito no site
export const WHATSAPP_MESSAGE = 'Olá, Ana! Gostaria de agendar uma consulta.';
export const INSTAGRAM_HANDLE = 'anaazevedo.psi';  // sem o @
```

**Cores e fontes** — edite o bloco `@theme` em `theme.css`. As cores viram classes do Tailwind (`bg-primary`, `text-accent`, `bg-cream`, `bg-ink`) e as fontes ficam em `font-serif`, `font-sans` e `font-script`.

**Textos** — cada seção tem seu próprio arquivo em `components/`. Serviços, FAQ, diferenciais e demandas ficam em listas no topo dos arquivos, então para adicionar ou remover itens basta editar a lista.

**Links do menu** — lista `NAV_LINKS` no topo de `components/Header.tsx`.

## Autora

Feito por **Laís Azevedo Freitas**: [github.com/laisaf7](https://github.com/laisaf7)

Este foi o meu primeiro projeto como freelancer, e sou muito grata pela confiança. 💚