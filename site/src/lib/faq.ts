/**
 * Perguntas do bloco de objeções.
 *
 * Linguagem de possibilidade, sem promessa de resultado, conforme o Código de
 * Ética Odontológica. Toda alteração aqui precisa ser refletida no JSON-LD
 * `FAQPage` do `index.html`, que é estático e alimenta o resultado rico da busca.
 */
export interface PerguntaFrequente {
  readonly pergunta: string
  readonly resposta: string
}

export const perguntasFrequentes: readonly PerguntaFrequente[] = [
  {
    pergunta: 'A cirurgia de implante dói?',
    resposta:
      'Durante o procedimento a região fica anestesiada, então o que a maioria dos pacientes relata é pressão, não dor. Depois é comum haver inchaço e desconforto por alguns dias, e você sai da clínica com prescrição e orientação para esse período. Cada organismo responde de um jeito, e isso é conversado com você antes de qualquer decisão.',
  },
  {
    pergunta: 'Vou ficar sem dente durante o tratamento?',
    resposta:
      'Esse é o medo mais comum de quem procura a clínica, e é justamente o que o planejamento resolve. Na maior parte dos casos existe uma solução provisória para o período de cicatrização, para que você não precise se esconder no trabalho nem em casa. O que se aplica ao seu caso depende da condição do osso e é definido antes de começar.',
  },
  {
    pergunta: 'Quanto tempo leva do início ao fim do tratamento?',
    resposta:
      'Depende do seu caso, porque o osso precisa de tempo para cicatrizar em volta dos implantes. Na avaliação você recebe uma previsão de etapas e de prazo para a sua situação, com data prevista para cada fase, em vez de uma média genérica de internet.',
  },
  {
    pergunta: 'E se eu não tiver osso suficiente para o implante?',
    resposta:
      'Isso é exatamente o que o exame de imagem mostra. Perder osso depois de anos de dentadura é comum e não elimina o tratamento: existem alternativas técnicas, como enxerto ou outro planejamento de posicionamento dos implantes. Só dá para dizer o que se aplica a você depois do exame.',
  },
  {
    pergunta: 'Sou diabético, hipertenso ou fumante. Posso fazer implante?',
    resposta:
      'Essas condições não descartam o tratamento por si só, mas mudam o planejamento e a cicatrização. Por isso a avaliação inclui seu histórico de saúde e as medicações que você usa, e em alguns casos é pedido contato com o seu médico antes de seguir. Levar a lista dos seus remédios na primeira consulta adianta esse processo.',
  },
  {
    pergunta: 'A prótese fixa dura quanto tempo? Precisa de manutenção?',
    resposta:
      'Implante e prótese exigem higiene diária e retornos periódicos, como qualquer estrutura que fica na boca. Com acompanhamento e cuidado, a tendência é de longa durabilidade, mas ninguém pode garantir prazo, e quem garante está prometendo o que não tem como cumprir.',
  },
  {
    pergunta: 'Quais são as formas de pagamento?',
    resposta:
      'As condições são apresentadas pessoalmente, depois do plano de tratamento, porque o valor depende de quantos implantes e de qual tipo de prótese o seu caso exige. Existem formas de pagamento parceladas, e a equipe explica todas antes de você decidir qualquer coisa.',
  },
  {
    pergunta: 'A clínica atende convênio odontológico?',
    resposta:
      'Chame a equipe no WhatsApp informando qual é o seu convênio, que a gente confirma o que é possível antes de você se deslocar até a clínica.',
  },
  {
    pergunta: 'Preciso levar algum exame na primeira consulta?',
    resposta:
      'Não precisa. Se você já tiver exames de imagem recentes, leve, porque ajuda. Se não tiver, a avaliação já inclui o exame necessário para entender a condição do seu osso e da sua gengiva.',
  },
] as const
