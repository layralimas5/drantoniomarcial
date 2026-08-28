import { clinic, dentist, fullAddress } from '../lib/site-config'

export function Rodape() {
  return (
    <footer className="bg-cream-100 py-14 pb-28 md:pb-14">
      <div className="container-page grid gap-8 text-base text-ink-700 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-ink-900">{clinic.legalName}</p>
          <p className="mt-2">CNPJ {clinic.cnpj}</p>
          <p className="mt-2">
            Responsável técnico: {dentist.name}
            <br />
            {dentist.cro}
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold text-ink-900">Contato</p>
          <p className="mt-2">{fullAddress}</p>
          <p className="mt-2">{clinic.hours}</p>
          <p className="mt-2">
            <a href={`tel:+${clinic.whatsappNumber}`} className="underline underline-offset-4">
              {clinic.phoneDisplay}
            </a>
          </p>
          <p className="mt-2">
            <a
              href={clinic.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Instagram {clinic.instagramHandle}
            </a>
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold text-ink-900">Informações</p>
          <p className="mt-2">
            <a href="/politica-de-privacidade.html" className="underline underline-offset-4">
              Política de privacidade
            </a>
          </p>
          <p className="mt-4 text-ink-500">
            Este site tem caráter informativo e não substitui a avaliação clínica presencial.
            Resultados variam conforme o caso de cada paciente.
          </p>
          <p className="mt-4">
            Desenvolvido por{' '}
            <a
              href="https://limadigitalstudio.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Layra Lima
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
