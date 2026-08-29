import { clinic, dentist, fullAddress } from '../lib/site-config'

export function Rodape() {
  return (
    <footer className="border-t border-navy-line bg-navy-900 py-14 pb-28 text-cream-200 md:pb-14">
      <div className="container-page grid gap-8 text-base text-cream-200 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-cream-50">Responsável técnico</p>
          <p className="mt-2">
            {dentist.name}
            <br />
            {dentist.cro}
          </p>
          <p className="mt-2">CNPJ {clinic.cnpj}</p>
        </div>

        <div>
          <p className="text-lg font-semibold text-cream-50">Contato</p>
          <p className="mt-2">{fullAddress}</p>
          <p className="mt-2">{clinic.hours}</p>
          <p className="mt-2">
            <a href={`tel:+${clinic.whatsappNumber}`} className="underline underline-offset-4">
              {clinic.phoneDisplay}
            </a>
          </p>
          <p className="mt-2">
            <a href={`mailto:${clinic.email}`} className="underline underline-offset-4">
              {clinic.email}
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
          <p className="text-lg font-semibold text-cream-50">Informações</p>
          <p className="mt-2">
            <a href="/politica-de-privacidade.html" className="underline underline-offset-4">
              Política de privacidade
            </a>
          </p>
        </div>
      </div>

      <div className="container-page mt-12 flex flex-col gap-3 border-t border-navy-line pt-8 text-base text-cream-300 sm:flex-row sm:items-center sm:justify-between">
        <p>{clinic.legalName}</p>
        <p>
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
    </footer>
  )
}
