## Overview

Melo Art est un **atelier de portraits hyperréalistes au crayon, fusain et technique mixte** — pensé comme un carnet de dessinateur plutôt qu'un site vitrine. Chaque page est une succession de sections éditoriales posées sur un papier crème chaud : un grand titre serif léger en italique, une ligne de légende en mono capitales, un portrait en pleine lumière. Rien ne rivalise avec le dessin. La typographie est élégante mais discrète ; la couleur est un papier ivoire, un papier sable, un brun encre presque noir ; les interactions passent par un simple contraste encre/papier.

La densité est volontairement basse. Chaque section respire sur 52–100px de marge verticale, aucune décoration superflue — pas de dégradés décoratifs, pas d'ombres portées sur l'interface, pas de coins arrondis. Les cadres sont des filets d'un pixel (`{colors.line}`), jamais des boîtes. L'ensemble évoque une **galerie de papier** : le mur disparaît et l'œuvre prend toute la place.

Les surfaces galerie, commande et contact conservent le même châssis : sections pleine largeur séparées par un filet fin ou un changement de teinte papier, formulaires à simple ligne de base, cartes d'œuvres sans cadre avec légende mono. Sur les six pages (Accueil, Galerie, Commander, Processus, À propos, Contact) et les trois pages légales, le système typographique, le rythme d'espacement et l'accent sable restent identiques — un seul langage visuel décliné à différents volumes.

**Key Characteristics:**
- Œuvre d'abord : le portrait est l'élément visuel dominant, l'interface s'efface.
- Palette papier chaud : ivoire `{colors.bg}` ↔ sable `{colors.bg-soft}` ↔ brun encre `{colors.bg-deep}`. Le changement de teinte ou un filet 1px sépare les sections.
- Un seul accent, le **sable doré** (`{colors.accent}` — #c4a87a), utilisé en touches minuscules (filet de label, point pulsant, étoile du marquee, mot en italique).
- Deux voix typographiques : **Cormorant Garamond** (serif display, souvent léger et italique) et **JetBrains Mono** (légendes, boutons, métadonnées en capitales espacées) ; **Manrope** pour le corps de texte courant.
- Boutons rectangulaires, bord 1px, inversion encre/papier au survol — aucun arrondi.
- **Zéro ombre portée** dans tout le système. La profondeur vient du flou de fond (nav verre dépoli, overlay de dialog) et de l'alternance de teintes.
- Mouvement éditorial : révélations lentes (1–1,9s) en `ease-out-expo`, zoom très lent des images (1,6s), marquee continu, barre de progression de scroll de 2px.
- Rythme de page typique : hero plein écran → marquee → œuvre sélectionnée → bloc sable (atelier) → galerie → commande → réseaux → footer ivoire.

## Colors

> **Source :** variables CSS de [globals.css](src/styles/globals.css) et tokens Tailwind de [tailwind.config.ts](tailwind.config.ts). Une seule palette, aucun mode sombre.

### Brand & Accent
- **Sable doré** (`{colors.accent}` — #c4a87a) : l'unique accent. Filet court des `SectionLabel`, point pulsant « Disponible pour commandes », étoile ✦ du marquee, mots clés en italique (« *Melo* » dans la bio), badge statut « En cours ». Jamais utilisé comme fond de bouton ni comme couleur de lien.
- **Brun encre** (`{colors.fg}` — #2b2520) : la couleur d'action. Bordure et texte des boutons, remplissage du bouton principal, soulignement du lien actif, barre de progression, couleur de sélection de texte.

### Surface
- **Ivoire** (`{colors.bg}` — #f3ede3) : canvas dominant, nav (à 82 % d'opacité), footer, panneau du dialog.
- **Sable** (`{colors.bg-soft}` — #ebe3d4) : fond des images en chargement, survol des boutons de contrôle (flèches, fermer), cartes secondaires.
- **Brun profond** (`{colors.bg-deep}` — #2b2520) : même hex que l'encre. Sert de voile en bas des images (`from-bg-deep/55`) et de texte sur badge accent.
- **Sable bio** (`#ddccb0`) : teinte plus profonde réservée au bloc « Atelier » de l'accueil. Valeur littérale, à promouvoir en token si réutilisée.
- **Voile de dialog** (`{colors.fg}` à 40 % + `blur-sm`) : fond derrière `WorkDialog`.

### Text
- **Encre** (`{colors.fg}` — #2b2520) : titres, paragraphes, valeurs.
- **Encre douce** (`{colors.fg-soft}` — #7a6a55) : chapô en italique, labels mono, corps secondaire, liens de footer au survol.
- **Encre muette** (`{colors.fg-mute}` — #a89a82) : métadonnées fines (technique · format), placeholders de champ, libellés 9px.
- **Papier sur encre** (`{colors.bg}`) : texte sur badge « Vendu », sur bouton rempli et sur étiquette d'image.

### Hairlines & Borders
- **Line** (`{colors.line}` — rgba(43, 37, 32, 0.14)) : filet standard — séparateurs de sections, cartes du dialog, bordure de badge, lignes de formulaire.
- **Line soft** (`{colors.line-soft}` — rgba(43, 37, 32, 0.07)) : filet très discret.
- **Nav border** (rgba(43, 37, 32, 0.08)) : filet bas de la nav verre dépoli.

### Brand Gradient
**Aucun dégradé décoratif.** Seule exception fonctionnelle : le voile `bg-gradient-to-t from-bg-deep/55 via-transparent` sous les images `Placeholder`, qui garantit la lisibilité de la légende. Le motif `.bg-stripe` (hachures 135° à 4 % d'opacité) est le seul « décor » autorisé, réservé aux états vides.

## Typography

### Font Family
- **Display** : `"Cormorant Garamond", "EB Garamond", Georgia, serif` — titres, chapôs, noms d'œuvres, valeurs de fiche. Poids 300–400, très souvent en *italique*.
- **Mono** : `"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace` — boutons, labels, légendes, badges, nav, footer.
- **Body** : `"Manrope", "Inter", system-ui, sans-serif` — paragraphes courants (14–15px), liens de footer, champs de formulaire.
- Chargées via Google Fonts : Cormorant 300/400/500/600 + italiques, Manrope 300–600, JetBrains Mono 400/500.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.hero-display}` | clamp(64px, 9vw, 160px) | 300 | 0.88 | -0.02em | Titre hero, animé mot par mot ; 2ᵉ ligne en italique `fg-soft` |
| `{typography.display-xl}` | clamp(52px, 8vw, 132px) | 300 | 0.9 | 0 | Wordmark géant du footer (« *Melo*Art ») |
| `{typography.display-lg}` | clamp(36px, 4.5vw, 72px) | 300 italic | 0.95 | 0 | Titres de section (« Le regard, avant tout. ») |
| `{typography.display-md}` | clamp(32px, 3.6vw, 56px) | 300 | 1.08 | -0.01em | Manifeste du bloc Atelier |
| `{typography.marquee}` | clamp(28px, 4vw, 56px) | 300 italic | 1 | 0 | Bandeau défilant |
| `{typography.lead}` | clamp(18px, 1.4vw, 24px) | 300 italic | 1.45 | 0 | Chapô hero, tagline footer — couleur `fg-soft` |
| `{typography.work-title}` | 17px | 400 | 1.2 | 0 | Titre d'œuvre sous une carte |
| `{typography.dialog-title}` | clamp(22px, 2.4vw, 34px) | 300 italic | 1.02 | 0 | Titre du `WorkDialog` |
| `{typography.body}` | 15px | 400 | 1.7 | 0 | Paragraphe courant (Manrope) |
| `{typography.body-sm}` | 13–14px | 400 | 1.65 | 0 | Description du dialog, liens de footer |
| `{typography.section-label}` | 15px | 400 | 1 | 0.22em | `SectionLabel` — mono capitales `fg-soft` |
| `{typography.kicker}` | 11px | 400 | 1.55 | 0.18em | Légendes de hero, boutons, meta d'œuvre — mono capitales |
| `{typography.nav-link}` | 10–11px | 400 | 1.55 | 0.16em | Liens de nav — mono capitales |
| `{typography.caption}` | 10px | 400 | 1.55 | 0.14–0.18em | Légendes d'image, plancher du hero |
| `{typography.badge}` | 9px | 400 | 1.55 | 0.16em | Badge de statut, libellés de fiche |

### Principles

- **Serif léger pour la voix, mono pour la donnée.** Tout ce qui *raconte* (titres, chapôs, noms d'œuvres) est en Cormorant ; tout ce qui *classe* (statut, format, année, boutons, navigation) est en JetBrains Mono capitales.
- **L'italique est un accent typographique.** Il marque l'émotion (« portraitiste » en `fg-soft`, « *Melo* » en `accent`, « Le regard, avant tout. »). Jamais plus d'une ligne italique par bloc de titre, sauf titres de section entièrement italiques.
- **Poids 300 pour les grands formats.** Les display sizes sont Light ; 400 seulement à 17px et en dessous. **Pas de 700.** Pas de 500 en display.
- **Tracking positif sur le mono, négatif sur les gros titres.** Mono : 0.14em → 0.22em. Display ≥ 56px : -0.01em → -0.02em ; jamais de tracking négatif sous 32px.
- **Interlignage serré en display (0.88–1.08), aéré en corps (1.55–1.7).**
- **Tailles fluides.** Les display utilisent `clamp()` ; pas de saut brutal entre breakpoints.
- **Capitales uniquement en mono.** Le serif et Manrope ne sont jamais en capitales.

### Note on Font Substitutes
- Cormorant Garamond → **EB Garamond** puis **Georgia** si le chargement échoue. Réduire légèrement le `font-size` (~-6 %) avec Georgia, dont le x-height est plus haut.
- JetBrains Mono → **IBM Plex Mono** puis `ui-monospace`.
- Manrope → **Inter** puis `system-ui`.
- `font-display: swap` via la requête Google Fonts ; le texte hero est animé après montage donc tolère le swap.

## Layout

### Spacing System
- **Gutter horizontal :** `{spacing.pad-x}` = `clamp(20px, 5vw, 80px)` — appliqué par `px-site` / `padding-inline: var(--pad-x)` sur la nav, les sections et le footer.
- **Padding vertical de section :** `clamp(52px, 7vw, 100px)`.
- **Hero :** `120px var(--pad-x) 60px`, `min-h-screen`, `gap: clamp(32px, 5vh, 64px)`.
- **Footer :** `80px var(--pad-x) 40px`, `gap-10`.
- **Nav :** `22px var(--pad-x)`.
- **Gap entre colonnes :** `clamp(40px, 5vw, 80px)` (deux colonnes), `clamp(40px, 6vw, 120px)` (colonnes éditoriales).
- **Padding de bouton :** 14px × 24px (standard), 12px × 20px (compact dans dialog).
- **Rythme interne :** base 4px ; sauts courants 6 / 10 / 14 / 18 / 22 / 32 / 40.

### Grid & Container
- **Pleine largeur** par défaut, contrainte par `--pad-x` ; pas de conteneur centré fixe.
- **Largeur de lecture :** 380–620px pour les paragraphes et chapôs (`max-w-[420px]`, `[480px]`, `[540px]`, `[620px]`) ; 760px / 1100px pour les blocs de page de contenu.
- **Patterns de colonnes :** 2 colonnes égales (œuvre sélectionnée, `lg`), `2fr / 1.2fr` (bio), `1.2fr / 1fr` (processus), `1.45fr / 1fr / 1fr / 1fr` (footer `xl`), grille d'œuvres 1 → 2 (`md`) → 3 (`xl`) colonnes, dialog `1.7fr / 0.9fr`.
- **Séparateurs :** `border-t border-line` entre sections, `border-b border-line` entre lignes de liste, `divide-line` pour les empilements.

### Whitespace Philosophy
Le blanc est le passe-partout du dessin. Une image n'est jamais collée au texte : minimum 14px de légende, 40px+ de bloc. Le hero garde un vide central pour le titre qui chevauche le portrait. Le footer est la seule zone dense — quatre colonnes de liens qui rendent l'arborescence visible d'un coup.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | Aucun filet, aucune ombre | Sections, hero, images, cartes d'œuvres |
| Hairline | 1px `{colors.line}` | Séparateurs de section, boutons de contrôle, badge, lignes de formulaire |
| Verre dépoli | `rgba(243,237,227,.82)` + `blur(24px) saturate(160%)` + filet bas 8 % | Nav fixe |
| Overlay | `{colors.fg}` à 40 % + `backdrop-blur-sm` | Fond du `WorkDialog` |
| Progress | Barre `{colors.fg}` 2px, `origin-left`, `z-90` | Progression de scroll en haut de page |

**Philosophie de l'ombre.** **Aucune `box-shadow` n'existe dans le système.** La hiérarchie vient du changement de teinte papier, du filet 1px et du flou de fond. Les images ne portent pas d'ombre : elles reposent sur le papier.

### Decorative Depth
- **Voile bas d'image** : `from-bg-deep/55 via-transparent to-transparent` — fonctionnel, pour la légende.
- **Alternance ivoire ↔ sable** : le bloc « Atelier » (`#ddccb0`) marque la respiration, bordé d'un filet haut.
- **Mix-blend `difference`** (`.nav-blend`) disponible pour une nav sur fond variable ; la nav actuelle lui préfère le verre dépoli.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | **Tout le système** : boutons, cartes, images, badges, dialog, champs, boutons de contrôle |
| `{rounded.full}` | 9999px | Uniquement le point pulsant de disponibilité (7px) |

Aucun autre rayon. Si une valeur intermédiaire apparaît, c'est une erreur.

### Photography Geometry
- **Hero** : portrait 3/4, `object-fit: cover`, `object-position: center top`, largeur `clamp(220px, 44vw, 640px)`, ancré à droite (`top: 8vh`), masqué sous `md`. Légende : `N° 014` en mono + titre entre guillemets français en serif.
- **Œuvre sélectionnée** : 4/5, pleine colonne.
- **Cartes d'œuvres** : ratio propre à chaque œuvre (`1/1`, `3/4`, `4/5`, `2/3`, `5/4`), image dans un cadre `overflow-hidden`, zoom `scale-[1.04]` sur 1,6s au survol.
- **Placeholder** : fond `bg-soft`, image `object-cover`, voile bas, étiquette mono en bas à gauche (`bg-fg/80`, texte papier, filet `bg/20`).
- **Jamais d'image arrondie.** Aucune ombre sur les images.
- Chargement `lazy` par défaut, `eager` + `fetchPriority="high"` pour le hero et l'image du dialog ; pool d'images préchargé une fois ; l'image courante reste affichée jusqu'à ce que la suivante soit prête (pas de flash).

## Components

### Top Navigation

**`nav`** — Fixe en haut, `z-80`, padding `22px var(--pad-x)`. Fond ivoire à 82 % avec `backdrop-filter: blur(24px) saturate(160%)` et filet bas `rgba(43,37,32,.08)`. Gauche : wordmark `Melo` en Cormorant 22px (`tracking-[0.04em]`) + exposant `ART` en mono 9px à 60 % d'opacité. Droite : six liens (Accueil, Galerie, Commander, Processus, À propos, Contact) en `{typography.nav-link}` capitales, gap 16px (mobile) → 32px (`md`).
- Lien inactif : opacité 50 %. Actif : opacité 100 % + soulignement 1px (`after:` à -2px).
- Les liens préchargent leur route (`preloadRoute`) au survol, au focus et au `touchstart`.

**`scroll-progress`** — Piste fixe de 2px, `z-90`, barre `{colors.fg}` en `scaleX` liée au scroll.

### Buttons

**`btn-filled`** — Action principale. Fond `{colors.fg}`, texte `{colors.bg}`, bordure 1px `{colors.fg}`, `{typography.kicker}` (11px mono capitales, 0.18em), padding 14px × 24px, `gap-3.5`, rayon 0. Survol : fond transparent, texte `{colors.fg}` (inversion en 400ms). Souvent suivi d'une icône `FiArrowRight`.

**`btn-outline`** — Action secondaire. Fond transparent, texte `{colors.fg}`, bordure 1px `{colors.fg}`. Survol : fond `{colors.fg}`, texte `{colors.bg}`.

**`btn-compact`** — Variante des deux ci-dessus dans le dialog : 10px, padding 12px × 20px.

**`btn-disabled`** — `opacity-50` + `pointer-events-none`.

**`btn-icon-square`** — 40 × 40px, fond `{colors.bg}`, bordure 1px `{colors.line}`, icône 16px (`FiChevronLeft/Right`, `FiX`). Survol : fond `{colors.bg-soft}`. Utilisé pour navigation d'œuvre et fermeture du dialog.

**`text-link`** — Hérite la couleur, sans soulignement. Liens de footer : survol vers `{colors.fg-soft}` en 300ms.

### Cards & Containers

**`work-card`** — Pas de boîte. Image dans un cadre `overflow-hidden` + badge de statut en haut à droite (3.5 = 14px d'inset). Dessous, 14px plus bas : ligne flex baseline — titre en serif 17px à gauche, année en mono 11px à droite ; puis ligne `technique · format` en mono 10px capitales `{colors.fg-mute}`. Au survol, zoom lent de l'image.

**`status-badge`** — Mono 9px capitales, `tracking 0.16em`, padding 10px × 5px, rayon 0. Quatre variantes :
- *Disponible* : fond `{colors.bg}`, texte `{colors.fg}`, filet `{colors.line}`.
- *Vendu* : fond `{colors.fg}`, texte `{colors.bg}`, sans bordure.
- *Commande privée* : transparent, texte `{colors.fg-soft}`, filet `{colors.line}`.
- *En cours* : fond `{colors.accent}`, texte `{colors.bg-deep}`, sans bordure.

**`section-label`** — Filet court (28px × 1px) en `{colors.accent}` + libellé mono 15px capitales `{colors.fg-soft}` (`tracking-[0.22em]`), `gap-3`. Ouvre presque chaque section.

**`meta-grid`** — Sous une image : grille 2 → 4 colonnes, `gap-x-4 gap-y-3`, filet haut `{colors.line}`, padding haut 16px. Clé en mono 9px capitales `{colors.fg-mute}`, valeur en mono 11px `{colors.fg-soft}`.

**`marquee`** — Bandeau `border-y border-line`, padding vertical 22px. Texte `{typography.marquee}` en `{colors.fg}`, items séparés par ✦ (`{colors.accent}`, 0,5em, non italique), gap 60px, défilement linéaire infini sur 40s (`x: 0 → -50 %`, liste dupliquée pour boucle sans couture).

**`work-dialog`** — Radix Dialog. Overlay `{colors.fg}`/40 + blur, `z-100`. Panneau `z-101`, centré, `max-w-6xl`, `max-h-92vh`, fond `{colors.bg}`, grille `1.7fr / 0.9fr` (empilée sous `md`), entrée `opacity 0 → 1` + `scale .96 → 1` en 400ms `ease-out-expo`. Colonne image : `Placeholder` pleine hauteur (`min-h-58vh` / `72vh`). Colonne détails : padding 24–28px, filet gauche `{colors.line}`, navigation `précédent / suivant` + compteur `01 / 14` en mono, titre `{typography.dialog-title}`, liste `dl` en grille 2 colonnes (clé mono 9px / valeur serif italique 15px), description `{typography.body-sm}`, deux boutons compacts. Bouton fermer en haut à droite.

**`numbered-list-row`** — Ligne de processus : grille `46px / 60px + 1fr`, `gap-4` → `gap-6`, padding vertical 22px, filet bas `{colors.line}`, texte 18 → 22px.

**`social-tile`** — Icône 24–28px + nom de plateforme + `@handle`, en grille 1 → 2 → 3 colonnes (`md`, `xl`).

### Inputs & Forms

**`field-underline`** — Un seul style de champ, pour `input`, `textarea` et `select` : fond transparent, **ni cadre ni coins**, uniquement une ligne de base 1px `{colors.line}`, padding vertical 12px, texte 15px `{colors.fg}`, placeholder `{colors.fg-mute}`, `outline-none`, `appearance-none`, `rounded-none`. Focus : la ligne de base passe à `{colors.fg}` en 300ms. `textarea` : `resize-y`, `min-h-[120px]`.

**`form-field`** — Libellé mono capitales au-dessus du champ (`FormField`), grille 2 colonnes, champs larges en `col-span-2` (Sujet, Message). Validation par React Hook Form + Zod.

Les états d'erreur n'ont pas de style dédié aujourd'hui : voir *Known Gaps*.

### Footer

**`footer`** — Fond `{colors.bg}`, filet haut `{colors.line}`, padding `80px var(--pad-x) 40px`. Grille 1 → 2 (`md`) → `1.45fr / 1fr / 1fr / 1fr` (`xl`). Colonne marque : kicker « Atelier Melo — Paris », wordmark `{typography.display-xl}` avec « *Melo* » en italique, tagline `{typography.lead}`. Colonnes Studio / Suivre / Contact : titre mono 10px capitales `{colors.fg-soft}` (`tracking-[0.2em]`), liens 14px, `space-y-2.5`. Barre basse : filet `{colors.line}`, padding haut 80px, copyright à gauche, liens légaux à droite en mono 11px, `tracking-[0.14em]`.

## Do's and Don'ts

### Do
- Utiliser les variables `--bg`, `--fg`, `--accent`, etc. via les tokens Tailwind (`bg-bg`, `text-fg-soft`, `border-line`) — jamais de hex inline, sauf la teinte bio `#ddccb0` en attendant son token.
- Composer chaque titre en Cormorant Light, avec au plus un segment en *italique*.
- Mettre en mono capitales tout ce qui est donnée, étiquette, bouton ou navigation.
- Ouvrir chaque section par un `SectionLabel` (filet accent + libellé mono).
- Séparer les sections par un filet `{colors.line}` ou un changement de teinte papier — pas par un cadre.
- Garder les angles à 0 partout. Seul le point pulsant est rond.
- Utiliser l'inversion encre/papier (400ms) pour tous les états de survol de bouton.
- Animer l'entrée avec `Reveal` (`fade` 1s, `rise` 1,4s, `clip` 1,9s) en `ease [0.16, 1, 0.3, 1]`, déclenché une seule fois à -8 % du viewport.
- Respecter `prefers-reduced-motion` : les durées tombent à 0,001ms.
- Écrire les textes en français, avec guillemets « » et espace avant `:`, `;`, `?`, `!`.

### Don't
- Ne pas ajouter de deuxième couleur d'accent ; le sable doré est le seul.
- Ne pas utiliser `box-shadow`, sur aucun élément.
- Ne pas arrondir boutons, cartes, images, champs ou badges.
- Ne pas utiliser de dégradé décoratif ; le seul dégradé est le voile de lisibilité sous les images.
- Ne pas mettre de bordure complète autour des champs de formulaire : ligne de base uniquement.
- Ne pas passer le serif en capitales, ni le mono en italique.
- Ne pas utiliser le poids 700 ni un display au-dessus de 400.
- Ne pas mélanger deux grammaires de boutons : rectangle plein, rectangle contour, ou carré-icône — rien d'autre.
- Ne pas utiliser `{colors.accent}` comme fond de bouton, couleur de lien ou texte courant (contraste insuffisant sur ivoire).
- Ne pas coller une image à un bloc de texte à moins de 14px.

## Responsive Behavior

### Breakpoints
Tailwind par défaut ; le système s'appuie surtout sur `clamp()` et sur trois seuils de grille.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Une colonne ; portrait du hero masqué ; nav en liens 10px avec retour à la ligne ; boutons compacts (`px-4`, 10px) ; liste de processus `46px / 1fr` |
| `md` | ≥ 768px | Nav en 11px, gap 32px ; portrait du hero visible ; footer en 2 colonnes ; grille d'œuvres 2 colonnes ; dialog en `1.7fr / 0.9fr` ; méta 4 colonnes ; liste de processus `60px / 1fr` |
| `lg` | ≥ 1024px | Œuvre sélectionnée en 2 colonnes ; bio `2fr / 1.2fr` ; processus `1.2fr / 1fr` |
| `xl` | ≥ 1280px | Footer 4 colonnes ; grille d'œuvres 3 colonnes ; réseaux 3 colonnes |

### Touch Targets
- Boutons : hauteur ~44px (padding 14px + ligne 11px), conforme au minimum 44.
- Boutons-icône du dialog : 40 × 40px.
- Liens de nav mobile : plus petits (10px, `py-1`) ; le préchargement `onTouchStart` compense la latence perçue.

### Collapsing Strategy
- **Nav** : reste horizontale avec `flex-wrap` ; les liens passent à la ligne au lieu de se replier en menu. Gap réduit de 32px à 16px.
- **Hero** : le portrait absolu disparaît sous `md` ; le titre prend toute la largeur ; la rangée de CTA reste en `flex-nowrap` avec boutons réduits.
- **Sections 2 colonnes** : empilées en une colonne sous `lg`, image d'abord.
- **Footer** : bloc marque sur `col-span-2` en `md`, retour à une colonne en mobile ; wordmark `whitespace-nowrap` avec taille fluide.
- **Dialog** : image au-dessus, détails dessous avec filet haut à la place du filet gauche ; défilement interne `overflow-y-auto`.

### Image Behavior
- Ratio propre à chaque œuvre conservé à toutes les tailles ; seule l'échelle change.
- `object-fit: cover` + `object-position: center top` pour les portraits (le regard reste dans le cadre).
- Pool d'images préchargé une fois ; navigation galerie/dialog sans clignotement.
- Routes chargées en `lazy` et préchargées au survol / focus / touch.

## Iteration Guide

1. Travailler **un composant à la fois** en le référençant par sa clé (`{component.work-card}`, `{component.field-underline}`).
2. Les variantes (`-filled`, `-outline`, `-compact`, statuts du badge) vivent comme entrées séparées.
3. Utiliser les **tokens** partout : `{colors.*}`, `{typography.*}`, `{spacing.*}` — jamais de hex ni de px inline, sauf valeur déjà documentée.
4. Ne documenter que **défaut, survol (inversion) et focus (ligne de base)** ; il n'y a pas d'état « pressé » animé dans ce système.
5. Les titres restent Cormorant Light ; la donnée reste JetBrains Mono capitales ; le corps reste Manrope. La frontière est stricte.
6. Aucune ombre, aucun arrondi, aucun second accent.
7. En cas de doute sur l'emphase : changer la teinte du papier ou ajouter un filet 1px **avant** d'ajouter de la décoration.

## Known Gaps

- **États d'erreur et de succès des formulaires** : aucun style dédié (pas de couleur d'erreur, pas de message inline stylisé) ; seul le focus de ligne de base est défini. À concevoir sans introduire de seconde couleur vive.
- **Teinte `#ddccb0`** du bloc Atelier : valeur littérale dans `Home.tsx`, absente de [tailwind.config.ts](tailwind.config.ts) et de [globals.css](src/styles/globals.css). Candidate à devenir `--bg-bio`.
- **Mode sombre** : non défini ; `bg-deep` existe comme token mais aucune page n'est rendue en inversé.
- **Menu mobile** : pas de burger ; la nav passe à la ligne, ce qui occupe jusqu'à deux rangées sur petit écran.
- **Image du hero et de l'œuvre sélectionnée** : contenu éditorial, pas des tokens ; `Placeholder` pioche dans un pool d'images externes temporaires en attendant les vraies œuvres.
- **Contenu des pages légales** (Livraisons & retours, Termes et conditions, Confidentialité) : même châssis typographique, non détaillé ici.
- **Lien `.progress-track` / `.scrolly-visual` / `.clip-reveal`** : classes utilitaires présentes dans [globals.css](src/styles/globals.css), `scrolly-visual` et `clip-reveal` ne sont pas utilisées dans les composants analysés.
