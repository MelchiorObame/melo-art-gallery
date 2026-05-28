import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

const Home = lazy(() => import('./pages/Home'))
const Galerie = lazy(() => import('./pages/Galerie'))
const Commander = lazy(() => import('./pages/Commander'))
const APropos = lazy(() => import('./pages/APropos'))
const Processus = lazy(() => import('./pages/Processus'))
const Contact = lazy(() => import('./pages/Contact'))
const LivraisonsRetours = lazy(() => import('./pages/LivraisonsRetours'))
const PolitiqueConfidentialite = lazy(() => import('./pages/PolitiqueConfidentialite'))
const TermesConditions = lazy(() => import('./pages/TermesConditions'))

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
