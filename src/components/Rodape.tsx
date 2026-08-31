import { InstagramIcon, WhatsAppIcon } from './CtaButton'
import { clinic, dentist, fullAddress, specialtiesLine, whatsappUrl } from '../lib/site-config'
import { trackConversion } from '../lib/tracking'

export function Rodape() {
  return (
    <footer className="border-t border-navy-line bg-navy-900 py-10 pb-28 text-cream-200 md:py-14 md:pb-14">
      <div className="container-page grid gap-6 text-[0.9rem] text-cream-200 md:gap-8 md:text-base md:grid-cols-3">
        <div>
          <p className="text-[1rem] font-semibold text-cream-50 md:text-lg">Responsável técnico</p>
          <p className="mt-2">
            {dentist.name}
            <br />
            {dentist.cro}
          </p>
          <p className="mt-3 text-sm text-cream-300">Especialidades</p>
          <p>{specialtiesLine}</p>
          <p className="mt-2">CNPJ {clinic.cnpj}</p>

          <ul className="mt-4 flex gap-3 md:mt-5">
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion('whatsapp_click')}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-line bg-navy-800 text-cream-50 transition-colors hover:bg-navy-700 md:h-12 md:w-12"
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
                className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-line bg-navy-800 text-cream-50 transition-colors hover:bg-navy-700 md:h-12 md:w-12"
              >
                <InstagramIcon className="h-6 w-6" />
                <span className="sr-only">Instagram {clinic.instagramHandle}</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[1rem] font-semibold text-cream-50 md:text-lg">Contato</p>
          <p className="mt-2">{fullAddress}</p>
          <p className="mt-2">{clinic.hours}</p>
          <p className="mt-2">
            <a href={`tel:+${clinic.whatsappNumber}`} className="underline underline-offset-4 max-md:inline-block max-md:py-3">
              WhatsApp {clinic.phoneDisplay}
            </a>
          </p>
          <p className="mt-2">
            <a href={`mailto:${clinic.email}`} className="underline underline-offset-4 max-md:inline-block max-md:py-3">
              {clinic.email}
            </a>
          </p>
        </div>

        <div>
          <p className="text-[1rem] font-semibold text-cream-50 md:text-lg">Informações</p>
          <p className="mt-2">
            <a href="/politica-de-privacidade.html" className="underline underline-offset-4 max-md:inline-block max-md:py-3">
              Política de privacidade
            </a>
          </p>
        </div>
      </div>

      <div className="container-page mt-8 flex flex-col gap-2 border-t border-navy-line pt-6 text-[0.85rem] text-cream-300 sm:flex-row sm:items-center sm:justify-between md:mt-12 md:gap-3 md:pt-8 md:text-base">
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
