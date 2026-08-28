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
  /** PENDENTE: número real do WhatsApp comercial (formato E.164, só dígitos). */
  whatsappNumber: '5527000000000',
  /** PENDENTE: telefone de exibição. */
  phoneDisplay: '(27) 0000-0000',
  address: {
    /** PENDENTE: endereço completo com número. */
    street: 'Rua a confirmar, 000',
    district: 'Riviera da Barra',
    city: 'Vila Velha',
    state: 'ES',
    zip: '29129-000',
    reference: 'Riviera da Barra, Vila Velha',
  },
  /** PENDENTE: horário real de atendimento. */
  hours: 'Segunda a sexta, das 8h às 18h',
  areasServed: ['Vila Velha', 'Vitória', 'Cariacica', 'Guarapari'],
} as const

export const dentist = {
  name: 'Dr. Antonio Marcial do Carmo',
  shortName: 'Dr. Antonio Marcial',
  /** PENDENTE: obrigatório na página por exigência do CFO. */
  cro: 'CRO-ES 0000',
  specialty: 'Cirurgia e traumatologia bucomaxilofacial',
} as const

export const whatsappMessage =
  'Olá! Vim pelo site e quero agendar uma avaliação.'

export const whatsappUrl = `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${clinic.address.street}, ${clinic.address.district}, ${clinic.address.city} - ${clinic.address.state}`,
)}`

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${clinic.address.street}, ${clinic.address.district}, ${clinic.address.city} - ${clinic.address.state}`,
)}&output=embed`

export const fullAddress = `${clinic.address.street}, ${clinic.address.district}, ${clinic.address.city} (${clinic.address.state})`
