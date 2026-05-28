import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { routeLoaders } from './lib/routePreload'

const Home = lazy(routeLoaders.home)
const Galerie = lazy(routeLoaders.galerie)
const Commander = lazy(routeLoaders.commander)
const APropos = lazy(routeLoaders.aPropos)
const Processus = lazy(routeLoaders.processus)
const Contact = lazy(routeLoaders.contact)
const LivraisonsRetours = lazy(routeLoaders.livraisonsRetours)
const PolitiqueConfidentialite = lazy(routeLoaders.politiqueConfidentialite)
const TermesConditions = lazy(routeLoaders.termesConditions)

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="galerie" element={<Galerie />} />
            <Route path="commander" element={<Commander />} />
            <Route path="a-propos" element={<APropos />} />
            <Route path="processus" element={<Processus />} />
            <Route path="contact" element={<Contact />} />
            <Route path="livraisons-retours" element={<LivraisonsRetours />} />
            <Route path="termes-conditions" element={<TermesConditions />} />
            <Route path="politique-confidentialite" element={<PolitiqueConfidentialite />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

function RouteFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-site">
      <span className="font-mono text-[11px] tracking-kicker uppercase text-fg-soft">
        Chargement…
      </span>
    </div>
  )
}
