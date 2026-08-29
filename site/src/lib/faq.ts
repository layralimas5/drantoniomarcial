/**
 * Perguntas do bloco de objeções.
 *
 * Linguagem simples e de possibilidade, sem promessa de resultado, conforme o
 * Código de Ética Odontológica. Toda alteração aqui precisa ser refletida no
 * JSON-LD `FAQPage` do `index.html`, que alimenta o resultado rico da busca.
 */
export interface PerguntaFrequente {
  readonly pergunta: string
  readonly resposta: string
}

export const perguntasFrequentes: readonly PerguntaFrequente[] = [
  {
    pergunta: 'A cirurgia de implante dói?',
    resposta:
      'Durante a cirurgia a região fica anestesiada, então o que a maioria sente é pressão, não dor. Depois é normal inchar e incomodar por alguns dias, e você sai da clínica com remédio receitado e orientação. Cada pessoa reage de um jeito, e isso é conversado antes.',
  },
  {
    pergunta: 'Vou ficar sem dente durante o tratamento?',
    resposta:
      'Esse é o medo mais comum de quem procura a clínica. Na maior parte dos casos dá para usar dentes provisórios enquanto o osso cicatriza, para você não precisar se esconder. O que serve para você é definido antes de começar.',
  },
  {
    pergunta: 'Quanto tempo leva do início ao fim do tratamento?',
    resposta:
      'Depende do seu caso, porque o osso precisa de tempo para cicatrizar em volta dos pinos. Na consulta você recebe uma previsão de etapas e de prazo para a sua situação, e não uma média de internet.',
  },
  {
    pergunta: 'E se eu não tiver osso suficiente para o implante?',
    resposta:
      'É o exame de imagem que mostra isso. Perder osso depois de anos de dentadura é comum e não impede o tratamento: existem saídas, como enxerto ou outro jeito de posicionar os pinos. Só dá para saber a sua depois do exame.',
  },
  {
    pergunta: 'Sou diabético, hipertenso ou fumante. Posso fazer implante?',
    resposta:
      'Nada disso impede o tratamento por si só, mas muda o planejamento e a cicatrização. Por isso a consulta pergunta sobre a sua saúde e os remédios que você toma. Às vezes o Dr. Antonio pede para falar com o seu médico antes. Leve a lista dos seus remédios.',
  },
  {
    pergunta: 'A prótese fixa dura quanto tempo? Precisa de manutenção?',
    resposta:
      'Precisa de escovação todo dia e de retorno de tempos em tempos, como tudo que fica na boca. Com esse cuidado, a tendência é durar muitos anos. Prazo garantido ninguém pode dar, e quem dá está prometendo o que não cumpre.',
  },
  {
    pergunta: 'Quais são as formas de pagamento?',
    resposta:
      'As condições são apresentadas na consulta, depois do plano de tratamento, porque o valor muda conforme a quantidade de pinos e o tipo de prótese. Existe parcelamento, e a equipe explica tudo antes de você decidir.',
  },
  {
    pergunta: 'A clínica atende convênio odontológico?',
    resposta:
      'Chame a equipe no WhatsApp e diga qual é o seu convênio. A gente confirma o que dá para fazer antes de você sair de casa.',
  },
  {
    pergunta: 'Preciso levar algum exame na primeira consulta?',
    resposta:
      'Não precisa. Se você já tiver exame de imagem recente, leve, porque ajuda. Se não tiver, a própria consulta já inclui o exame necessário.',
  },
] as const
