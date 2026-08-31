import { InstagramIcon, WhatsAppIcon } from './CtaButton'
import { clinic, dentist, fullAddress, specialtiesLine, whatsappUrl } from '../lib/site-config'
import { trackConversion } from '../lib/tracking'

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
          <p className="mt-3 text-sm text-cream-300">Especialidades</p>
          <p>{specialtiesLine}</p>
          <p className="mt-2">CNPJ {clinic.cnpj}</p>

          <ul className="mt-5 flex gap-3">
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion('whatsapp_click')}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-navy-line bg-navy-800 text-cream-50 transition-colors hover:bg-navy-700"
              >
                <WhatsAppIcon className="h-6 w-6" />
                <span className="sr-only">WhatsApp da clínica</span>
              </a>
            </li>
            <li>
              <a
                href={clinic.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-navy-line bg-navy-800 text-cream-50 transition-colors hover:bg-navy-700"
              >
                <InstagramIcon className="h-6 w-6" />
                <span className="sr-only">Instagram {clinic.instagramHandle}</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-lg font-semibold text-cream-50">Contato</p>
          <p className="mt-2">{fullAddress}</p>
          <p className="mt-2">{clinic.hours}</p>
          <p className="mt-2">
            <a href={`tel:+${clinic.whatsappNumber}`} className="underline underline-offset-4">
              WhatsApp {clinic.phoneDisplay}
            </a>
          </p>
          <p className="mt-2">
            <a href={`mailto:${clinic.email}`} className="underline underline-offset-4">
              {clinic.email}
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
