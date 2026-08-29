# CORB Odontologia, landing page de protocolo

Projeto de cliente. Landing page de conversão para captação de casos de
protocolo dentário e prótese fixa, destino do tráfego pago (Google Search).

---

## O cliente

- **Razão social:** CORB, Centro Odont Riviera da Barra
- **CNPJ:** 22.981.292/0001-23
- **Responsável técnico:** Dr. Antonio Marcial do Carmo
- **Especialidade:** cirurgia bucomaxilofacial, implantodontia, ortodontia, ATM/bruxismo, harmonização facial
- **Local:** Riviera da Barra, Vila Velha (ES)
- **Instagram:** @drantoniomarcial (10,4 mil seguidores)
- **CRO-ES:** [CONFIRMAR: obrigatório na página por exigência do CFO]

Perfil: profissional renomado na região, passando por queda de faturamento.
Verba de mídia baixa.

## Situação contratual

Contrato vigente de **gestão de tráfego pago (R$ 400,00 por ciclo de 30 dias)**,
com estruturação do perfil do Instagram como bônus.

**Landing page já acordada com o cliente.** Contratada à parte, conforme a
Cláusula 5ª, que registra:

- Site profissional: R$ 450,00
- Site + sistema com CRM: R$ 750,00

O cliente está ciente de que o "site" desta contratação é a landing page de
conversão descrita no BRIEFING.md, não um site institucional com menu.

## Meta comercial

**22 implantes por mês** ("um implante por dia").

Traduzido: essa meta não sai por implante unitário com verba baixa. Sai por
**3 a 5 casos de protocolo / All-on-Four por mês** (6 a 8 implantes por caso).

Toda a página é construída em cima de **protocolo e prótese fixa**, não de
implante unitário. Implante unitário aparece como serviço secundário, nunca
como headline.

## Público-alvo

Pessoa de 45 a 70 anos, usa dentadura ou perdeu vários dentes. Dores reais,
em ordem de peso:

1. Vergonha de sorrir e de falar em público
2. Não consegue comer o que gosta (a dentadura solta, machuca, cai)
3. Medo da cirurgia e da dor
4. Medo do preço e de não conseguir pagar
5. Medo de ficar sem dente durante o tratamento

A página responde essas cinco na ordem.

## Restrições legais (inegociável)

Publicidade odontológica é regulada pelo **Código de Ética Odontológica (CFO)**.
Na página é **proibido**:

- Imagem de antes e depois, ou qualquer comparativo visual de resultado
- Promessa ou garantia de resultado
- Preço como chamariz, promoção, desconto, "condição imperdível"
- Superlativo do tipo "o melhor", "referência número 1", "o mais moderno"
- Sorteio, brinde ou concurso

É **obrigatório** exibir na página o nome do responsável técnico e o número
de inscrição no CRO.

O Meta também reprova criativo com antes e depois, então essa regra vale para
a página e para o anúncio.

## Stack

Regras globais da Lay (`~/.claude/CLAUDE.md`) valem integralmente.

- React + TypeScript (strict) + Vite
- Tailwind CSS + Framer Motion
- Deploy: Netlify
- Sem backend. Formulário via serviço de forms do Netlify ou envio direto pro WhatsApp

Skills a usar: `frontend-design` como base, mais `ui-ux-premium`,
`landing-pages`, `conversion-optimization`, `responsive-design`,
`accessibility`, `performance`, `seo`.

## Requisitos de UX específicos deste público

O visitante tem 45 a 70 anos, muitos com visão cansada, usando celular Android
de entrada em rede móvel. Isso não é detalhe, é o projeto:

- Corpo de texto mínimo **18px** no mobile, 20px preferível
- Contraste AAA no corpo de texto, nunca cinza claro sobre branco
- Alvo de toque mínimo **48x48px**, botões largos
- Nada que dependa só de hover
- Sem menu de navegação. Uma rolagem, uma ação
- WhatsApp fixo e visível o tempo todo
- Formulário curto: nome, telefone, e "o que te incomoda hoje"
- Peso da página abaixo de 500kb, LCP abaixo de 2,5s em 4G
- `prefers-reduced-motion` respeitado, animações sutis

## Rastreamento

Sem isso a campanha roda no escuro:

- Google Ads: tag global + conversão em clique de WhatsApp e envio de formulário
- Meta Pixel: PageView + Lead (para remarketing, que é 40% da verba)
- Consentimento LGPD no formulário, com link para política de privacidade

## SEO

- Title e meta description em torno de "protocolo dentário Vila Velha"
- JSON-LD `Dentist` com endereço, telefone, horário e CRO
- Domínio próprio a definir com o cliente

## Pendências antes de finalizar

- [x] Contratação acordada com o cliente
- [ ] Número do CRO-ES do Dr. Antonio Marcial
- [x] Endereço, WhatsApp (27 99966-4449) e e-mail (ciaodoctor@hotmail.com)
- [ ] Horário de atendimento
- [ ] Ticket real de protocolo e de implante unitário
- [ ] Formas de pagamento e parcelamento aceitos
- [ ] Vídeo do Dr. Antonio explicando o procedimento (celular basta)
- [ ] Fotos reais do consultório, equipe e equipamentos
- [ ] Depoimentos de pacientes, sem imagem comparativa
- [ ] Domínio e quem paga a hospedagem

## Crédito

Rodapé com "Desenvolvido por Layra Lima" apontando para
limadigitalstudio.com.br
