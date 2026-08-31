/**
 * Fonte única de verdade dos dados do cliente.
 * Tudo marcado com PENDENTE precisa ser confirmado com o Dr. Antonio
 * antes de publicar. Ver checklist em ../../CLAUDE.md.
 */

export const clinic = {
  name: 'CORB Odontologia',
  legalName: 'CORB, Centro Odontológico Riviera da Barra',
  cnpj: '22.981.292/0001-23',
  instagram: 'https://www.instagram.com/drantoniomarcial',
  instagramHandle: '@drantoniomarcial',
  /** WhatsApp comercial da clínica, em E.164 (só dígitos). */
  whatsappNumber: '5527999664449',
  phoneDisplay: '(27) 99966-4449',
  email: 'ciaodoctor@hotmail.com',
  address: {
    street: 'Av. Álvares de Azevedo, 914, loja 03',
    district: 'Riviera da Barra',
    city: 'Vila Velha',
    state: 'ES',
    zip: '29126-070',
    reference: 'Riviera da Barra, Vila Velha',
  },
  /** PENDENTE: horário real de atendimento. */
  hours: 'Segunda a sexta, das 8h às 18h',
  /** Mesmo horário em linhas, para o painel da seção do doutor. */
  hoursByDay: [
    { dia: 'Segunda a sexta', horario: '08h às 18h' },
    { dia: 'Sábado', horario: 'Fechado' },
    { dia: 'Domingo', horario: 'Fechado' },
  ],
  areasServed: ['Vila Velha', 'Vitória', 'Cariacica', 'Guarapari'],
} as const

export const dentist = {
  name: 'Dr. Antonio Marcial do Carmo',
  shortName: 'Dr. Antonio Marcial',
  cro: 'CRO-ES 2837',
  /** Especialidades registradas, na ordem usada em toda a página. */
  specialties: [
    'Cirurgia e Traumatologia Bucomaxilofacial',
    'Implantodontia',
    'Ortodontia',
  ],
} as const

/** Especialidades numa linha só, para assinaturas e rodapé. */
export const specialtiesLine = dentist.specialties.join(' • ')

export const whatsappMessage =
  'Olá! Vim pelo site e quero agendar uma avaliação.'

/** Link do WhatsApp da clínica com uma mensagem já escrita. */
export function whatsappUrlCom(mensagem: string): string {
  return `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(mensagem)}`
}

export const whatsappUrl = whatsappUrlCom(whatsappMessage)

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${clinic.address.street}, ${clinic.address.district}, ${clinic.address.city} - ${clinic.address.state}`,
)}`

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${clinic.address.street}, ${clinic.address.district}, ${clinic.address.city} - ${clinic.address.state}`,
)}&output=embed`

export const fullAddress = `${clinic.address.street}, ${clinic.address.district}, ${clinic.address.city} (${clinic.address.state}), CEP ${clinic.address.zip}`
