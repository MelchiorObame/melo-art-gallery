import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Galerie from './pages/Galerie'
import Commander from './pages/Commander'
import APropos from './pages/APropos'
import Processus from './pages/Processus'
import Contact from './pages/Contact'
import LivraisonsRetours from './pages/LivraisonsRetours'
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite'
import TermesConditions from './pages/TermesConditions'

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}
