# Encanto Decor — demonstração

Protótipo de loja demonstrativa em React, TypeScript e Vite. Produtos, preços, promoções e imagens são ilustrativos; não há estoque, pagamentos ou checkout reais.

## Executar localmente

1. Instale Node.js 20.19+ ou 22.12+.
2. Na pasta do projeto, execute `npm install`.
3. Execute `npm run dev` e abra o endereço indicado pelo Vite.
4. Para gerar a versão de produção, execute `npm run build`. Os arquivos publicáveis são gerados em `dist/`.

## Publicar no Cloudflare Pages

Crie um projeto Pages conectado ao repositório e configure:

- Framework preset: **Vite**
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/` (raiz do repositório)
- Variáveis de ambiente: nenhuma necessária

O arquivo `.node-version` fixa o runtime do build em Node.js `22.16.0`.

O projeto não tem um arquivo `404.html` personalizado. O Cloudflare Pages usa o modo SPA automaticamente e encaminha caminhos sem arquivo correspondente para `index.html`; os arquivos estáticos gerados pelo Vite continuam servidos diretamente. As telas também mantêm URLs diretas: `/`, `/catalogo`, `/categoria/<categoria>`, `/produto/<id>`, `/favoritos`, `/natal` e `/sacola`.

Após conectar o repositório, publique com o botão **Save and Deploy** no painel Pages. Cada novo push na branch de produção gera uma publicação; branches adicionais podem ser usadas como previews.

Para testar a saída publicada localmente, execute `npm run build` e depois `npm run preview`.

As fotografias são servidas diretamente de Unsplash e Pexels. O catálogo guarda a referência de origem/licença por item em `src/data/products.ts`; imagens com falha recebem uma alternativa visual.
