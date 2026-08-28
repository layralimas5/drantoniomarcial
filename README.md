# Landing page CORB Odontologia

Landing page de conversão para captação de casos de protocolo e prótese fixa.
Destino do tráfego pago (Google Search + remarketing Meta).

## Rodar

```bash
cd site
npm install
npm run dev        # desenvolvimento
npm run build      # build de produção em dist/
npm run preview    # confere o build
npm run typecheck  # TypeScript strict
```

## Stack

React 19 + TypeScript strict + Vite + Tailwind v4 + Framer Motion (LazyMotion).
Sem backend: formulário no Netlify Forms, contato principal via WhatsApp.

## Onde mexer

Todos os dados do cliente estão em **`site/src/lib/site-config.ts`**.
Trocar lá o WhatsApp, o CRO, o endereço e o horário atualiza a página inteira,
o JSON-LD do `index.html` é o único ponto que precisa ser atualizado à mão.

## Imagens

Ficam em `site/imagens-originais/` e viram WebP otimizado em `site/public/`
com `npm run img`. Os nomes são fixos:

| Arquivo | Onde aparece | Proporção |
|---|---|---|
| `hero-banner` | banner do topo | 2:1 horizontal |
| `foto` | seção "Quem vai cuidar do seu caso" | 4:5 vertical |
| `video-poster` | capa do vídeo | 16:9 |
| `og` | miniatura ao compartilhar o link | 1,91:1 |

O vídeo do Dr. Antonio vai em `site/public/dr-antonio-explica.mp4`, com legenda
em `site/public/legendas.vtt`. Ele só é baixado depois do clique no play.

## SEO e busca local

- `index.html` traz dois blocos JSON-LD: `Dentist` (com endereço, geo, serviços,
  horário e responsável técnico) e `FAQPage` com as nove perguntas da página
- As perguntas vivem em `site/src/lib/faq.ts`. **Ao editar uma resposta lá,
  atualize também o `FAQPage` do `index.html`**, senão o dado estruturado
  diverge do que o visitante lê
- Meta tags `geo.*` e `ICBM` apontam para Vila Velha; trocar pelas coordenadas
  exatas do consultório quando o endereço for confirmado
- A seção "Atendimento em Vila Velha e em toda a Grande Vitória" existe para
  cobrir as buscas por cidade e bairro. A lista de bairros precisa ser
  confirmada com a clínica

## Antes de publicar

- [x] Contratação acordada com o cliente
- [ ] **CRO-ES do Dr. Antonio**, obrigatório por exigência do CFO
- [ ] WhatsApp comercial real (hoje: `5527000000000`, placeholder)
- [ ] Endereço completo com número e CEP
- [ ] Horário de atendimento real
- [x] Foto do Dr. Antonio (banner e retrato)
- [ ] Fotos do consultório e dos equipamentos
- [ ] Vídeo do Dr. Antonio (celular basta, com legenda)
- [ ] Depoimentos reais autorizados, substituindo os de `Depoimentos.tsx`
- [ ] Respostas do FAQ revisadas e aprovadas pelo Dr. Antonio
- [ ] Domínio definido e atualizado em `index.html` (canonical, og:url, JSON-LD)
- [ ] Tag do Google Ads e Meta Pixel coladas no `index.html`
- [ ] Deploy no Netlify com o formulário `avaliacao` detectado

## Regras que não podem ser quebradas

Publicidade odontológica é regulada pelo CFO. Na página é proibido antes e
depois, promessa de resultado, preço como chamariz, superlativo e sorteio.
É obrigatório exibir o responsável técnico e o número do CRO. Detalhes em
`CLAUDE.md`.

## Rastreamento

`site/src/lib/tracking.ts` dispara `gtag` e `fbq` no clique de WhatsApp e no
envio do formulário. As tags globais ainda precisam ser coladas no `index.html`
quando as contas estiverem criadas. Sem elas os eventos são ignorados sem
quebrar a página.
