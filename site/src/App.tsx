import { LazyMotion, domAnimation } from 'framer-motion'
import { Menu } from './components/Menu'
import { Hero } from './components/Hero'
import { Dores } from './components/Dores'
import { ProteseFixa } from './components/ProteseFixa'
import { Servicos } from './components/Servicos'
import { ComoFunciona } from './components/ComoFunciona'
import { Faq } from './components/Faq'
import { ConvenioPagamento } from './components/ConvenioPagamento'
import { SobreDoutor } from './components/SobreDoutor'
import { Localizacao } from './components/Localizacao'
import { CtaFinal } from './components/CtaFinal'
import { Rodape } from './components/Rodape'
import { BotoesFixos } from './components/BotoesFixos'

export function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <a
        href="#agendar"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-ink-900 focus:px-6 focus:py-3 focus:text-cream-50"
      >
        Ir para o agendamento
      </a>

      <Menu />
      <Hero />

      <main>
        <Dores />
        <ProteseFixa />
        <ComoFunciona />
        <SobreDoutor />
        <Servicos />
        <Faq />
        <ConvenioPagamento />
        <Localizacao />
        <CtaFinal />
      </main>

      <Rodape />
      <BotoesFixos />
    </LazyMotion>
  )
}
