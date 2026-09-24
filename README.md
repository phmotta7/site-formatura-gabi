# Convite de formatura — Gabriela

Convite digital em Vite, Tailwind CSS 3, PostCSS e JavaScript em módulos. A direção mantém a paleta e a ordem de seções do convite HTML enviado e dá mais espaço à narrativa, aos detalhes e à confirmação.

## Abrir no VS Code

1. Extraia `baile-fornatura-fonte.zip`.
2. Abra no VS Code a pasta em que aparecem diretamente `package.json`, `index.html` e `src/`.
3. No terminal dessa pasta, rode `npm install`.
4. Para desenvolvimento, rode `npm run dev`.
5. Para gerar os arquivos de deploy, rode `npm run build`; eles serão gravados em `dist/`.

O ZIP-fonte já vem com `package.json` na raiz da extração.

## Aparência e referências

A tipografia mantém Cormorant Garamond para leitura e navegação, e Great Vibes nos títulos principais e detalhes caligráficos. A paleta segue as cores do HTML original: fundo `#1b1214`, texto `#efe6e4`, texto suave `#b9a7a9`, títulos rosa antigo `#e2a9a7`, marsala `#7a3540`, dourado `#d9b25c` e tons de fundo `#2b0d15`, `#7a2f3c` e `#5e1f2c`. A composição deixa áreas de foto ao lado do texto em telas grandes e empilha os blocos no celular.

A composição editorial, cartões, botões e campos usam padrões visuais inspirados em [React Bits](https://reactbits.dev/get-started/index) e [shadcn/ui](https://ui.shadcn.com/docs/components), implementados no stack vanilla do projeto. As animações de revelação usam `IntersectionObserver` com suporte a `prefers-reduced-motion`.

## Adicionar fotos depois

As cinco fotos enviadas foram convertidas para WebP otimizado e adicionadas a `public/img/`. A primeira está na abertura atrás do selo; as demais aparecem na história, na seção do evento, nas informações e junto ao RSVP. Para trocar uma imagem, substitua seu arquivo em `public/img/` ou altere o caminho correspondente em `src/config.js`. O enquadramento se adapta ao desktop e ao celular.

## RSVP

O convite pergunta nome e se haverá acompanhante, e mantém o WhatsApp recuperado do HTML original. Para registrar confirmações no Formspree, informe um endpoint real em `formspreeEndpoint` em `src/config.js`. Sem endpoint, o formulário abre a conversa do WhatsApp com a mensagem preenchida.

## Conteúdo incluído

O nome, curso, turma, data, horário, local, dress code, lembretes, prazo de confirmação e texto da história foram preservados do HTML original. As cinco fotos enviadas estão incluídas como WebP (aproximadamente 36–47 KB cada). O selo e a lâmpada decorativa foram mantidos. O áudio é opcional, não toca automaticamente e só carrega ao ser acionado.

O link do mapa busca o nome do espaço; confira o endereço exato antes de publicar. Não há endpoint Formspree incluído.

