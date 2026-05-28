export type WorkStatus = 'Disponible' | 'Vendu' | 'Commande privée' | 'En cours'
export type WorkCategory = 'nb' | 'couleur' | 'celeb' | 'commande' | 'etude'
export type WorkTechnique = 'graphite' | 'fusain' | 'mixte' | 'pastel'

export interface Work {
  id:          string
  title:       string
  year:        number
  technique:   WorkTechnique
  size:        string
  aspectRatio: string
  status:      WorkStatus
  category:    WorkCategory
  description?: string
  hours?:      number
}

export const WORKS: Work[] = [
  { id: '014', title: 'Regard profond',  year: 2026, technique: 'graphite', size: '40 × 50 cm', aspectRatio: '3/4',  status: 'En cours',          category: 'nb',      hours: 42 },
  { id: '013', title: 'Marguerite',      year: 2026, technique: 'graphite', size: '30 × 40 cm', aspectRatio: '4/5',  status: 'Disponible',        category: 'commande' },
  { id: '012', title: 'Étude n° 12',     year: 2026, technique: 'fusain',   size: '50 × 65 cm', aspectRatio: '3/4',  status: 'Disponible',        category: 'etude' },
  { id: '011', title: 'Le frère',        year: 2025, technique: 'graphite', size: '24 × 32 cm', aspectRatio: '1/1',  status: 'Commande privée',   category: 'commande' },
  { id: '010', title: 'Anonyme III',     year: 2025, technique: 'mixte',    size: '40 × 50 cm', aspectRatio: '2/3',  status: 'Vendu',             category: 'nb' },
  { id: '009', title: 'Mains',           year: 2025, technique: 'graphite', size: '30 × 30 cm', aspectRatio: '1/1',  status: 'Disponible',        category: 'etude' },
  { id: '008', title: 'Camille',         year: 2025, technique: 'fusain',   size: '40 × 50 cm', aspectRatio: '4/5',  status: 'Commande privée',   category: 'commande' },
  { id: '007', title: "L'aîné",          year: 2025, technique: 'graphite', size: '24 × 30 cm', aspectRatio: '3/4',  status: 'Vendu',             category: 'nb' },
  { id: '006', title: 'Étude regard',    year: 2024, technique: 'graphite', size: '15 × 21 cm', aspectRatio: '1/1',  status: 'Disponible',        category: 'etude' },
  { id: '005', title: 'Hommage J.',      year: 2024, technique: 'mixte',    size: '50 × 70 cm', aspectRatio: '4/5',  status: 'Commande privée',   category: 'commande' },
  { id: '004', title: 'Sans titre',      year: 2024, technique: 'fusain',   size: '40 × 50 cm', aspectRatio: '3/4',  status: 'Disponible',        category: 'nb' },
  { id: '003', title: 'La danseuse',     year: 2024, technique: 'pastel',   size: '60 × 80 cm', aspectRatio: '3/4',  status: 'Vendu',             category: 'couleur' },
  { id: '002', title: 'Étude bouche',    year: 2024, technique: 'graphite', size: '20 × 20 cm', aspectRatio: '1/1',  status: 'Disponible',        category: 'etude' },
  { id: '001', title: 'Premier regard',  year: 2024, technique: 'graphite', size: '30 × 40 cm', aspectRatio: '3/4',  status: 'Vendu',             category: 'nb' },
  { id: 'C-04', title: 'Mathilde',       year: 2025, technique: 'graphite', size: '30 × 40 cm', aspectRatio: '4/5',  status: 'Commande privée',   category: 'commande' },
  { id: 'C-03', title: 'Famille L.',     year: 2025, technique: 'graphite', size: '50 × 70 cm', aspectRatio: '5/4',  status: 'Commande privée',   category: 'commande' },
  { id: 'C-02', title: 'Hommage M.',     year: 2024, technique: 'mixte',    size: '40 × 50 cm', aspectRatio: '3/4',  status: 'Commande privée',   category: 'commande' },
  { id: 'X-01', title: 'Étude technique',year: 2024, technique: 'pastel',   size: '20 × 25 cm', aspectRatio: '4/5',  status: 'Disponible',        category: 'couleur' },
]

// First 9 works for homepage preview
export const WORKS_PREVIEW = WORKS.slice(0, 9)
