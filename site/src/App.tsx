import { LazyMotion, domAnimation } from 'framer-motion'
import { Menu } from './components/Menu'
import { Hero } from './components/Hero'
import { Dores } from './components/Dores'
import { ProteseFixa } from './components/ProteseFixa'
import { VideoDoutor } from './components/VideoDoutor'
import { Galeria } from './components/Galeria'
import { ComoFunciona } from './components/ComoFunciona'
import { Faq } from './components/Faq'
import { SobreDoutor } from './components/SobreDoutor'
import { Depoimentos } from './components/Depoimentos'
import { OutrosTratamentos } from './components/OutrosTratamentos'
import { AreaAtendida } from './components/AreaAtendida'
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
        <VideoDoutor />
        <ComoFunciona />
        <Galeria />
        <Faq />
        <SobreDoutor />
        <Depoimentos />
        <OutrosTratamentos />
        <AreaAtendida />
        <Localizacao />
        <CtaFinal />
      </main>

      <Rodape />
      <BotoesFixos />
    </LazyMotion>
  )
}
