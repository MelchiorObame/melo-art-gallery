const routeLoaders = {
  home: () => import('../pages/Home'),
  galerie: () => import('../pages/Galerie'),
  commander: () => import('../pages/Commander'),
  aPropos: () => import('../pages/APropos'),
  processus: () => import('../pages/Processus'),
  contact: () => import('../pages/Contact'),
  livraisonsRetours: () => import('../pages/LivraisonsRetours'),
  politiqueConfidentialite: () => import('../pages/PolitiqueConfidentialite'),
  termesConditions: () => import('../pages/TermesConditions'),
} as const

const routePreloadMap: Record<string, () => Promise<unknown>> = {
  '/galerie': routeLoaders.galerie,
  '/commander': routeLoaders.commander,
  '/a-propos': routeLoaders.aPropos,
  '/contact': routeLoaders.contact,
}

const pendingPreloads = new Map<string, Promise<unknown>>()

export function preloadRoute(path: string) {
  const loader = routePreloadMap[path]
  if (!loader) return

  const pending = pendingPreloads.get(path)
  if (pending) return pending

  const preloadPromise = loader().finally(() => {
    pendingPreloads.delete(path)
  })

  pendingPreloads.set(path, preloadPromise)
  return preloadPromise
}

export { routeLoaders }