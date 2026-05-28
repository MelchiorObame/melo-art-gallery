const LAST_UPDATE = '15 janvier 2025'

import AnimatedTitle from '../components/ui/AnimatedTitle'

interface Block {
  subtitle?: string
  text?: string
  list?: string[]
  note?: string
  address?: string
}

interface Section {
  id: string
  title: string
  content: Block[]
}

const sections: Section[] = [
  {
    id: 'definitions',
    title: 'Interprétations et définitions',
    content: [
      {
        subtitle: 'Interprétation',
        text: 'Les mots dont la lettre initiale est en majuscule ont des significations définies dans les conditions suivantes. Les définitions suivantes ont le même sens, qu\'elles apparaissent au singulier ou au pluriel.',
      },
      {
        subtitle: 'Définitions',
        text: 'Aux fins de la présente clause :',
        list: [
          '« Société », « Nous », « Notre » ou « Nos » fait référence à Melo Art.',
          '« Biens » désigne les œuvres originales et portraits proposés à la vente ou réalisés sur commande.',
          '« Commande » désigne une demande de votre part d\'acheter ou de faire réaliser une œuvre.',
          '« Service » désigne le site Melo Art.',
          '« Vous » désigne la personne accédant ou utilisant le Service.',
        ],
      },
    ],
  },
  {
    id: 'expedition',
    title: 'Politique d\'expédition',
    content: [
      {
        text: 'Chaque œuvre est conditionnée avec le plus grand soin pour assurer une livraison en parfait état. Les portraits sont protégés par un passe-partout et expédiés dans un emballage rigide ou roulés dans un tube postal en carton renforcé selon le format.',
      },
      {
        subtitle: 'Délais de traitement',
        text: 'Les portraits sont réalisés sur commande. Le délai de production (hors expédition) dépend du format et de la complexité de l\'œuvre, généralement entre 3 et 8 semaines. Vous serez informé du délai précis lors de la confirmation de commande. En cas de volume élevé de commandes, un délai supplémentaire pourra s\'appliquer — nous vous en informerons par e-mail.',
      },
      {
        subtitle: 'Délais de livraison estimatifs',
        list: [
          '2 à 5 jours ouvrables en France métropolitaine',
          '1 à 2 semaines à destination internationale',
          'Jusqu\'à 4 semaines dans certains pays',
        ],
        note: 'Des retards imprévus peuvent parfois survenir. En cas de retard significatif, nous vous contacterons par e-mail.',
      },
      {
        subtitle: 'Confirmation et suivi',
        text: 'Un e-mail de confirmation vous sera envoyé une fois votre commande expédiée, avec votre numéro de suivi.',
      },
      {
        subtitle: 'Douanes, droits et taxes',
        text: 'Melo Art ne prend pas en charge les éventuels droits de douane et taxes appliqués à votre commande. Tous les frais imposés pendant ou après l\'expédition sont à la charge du client.',
      },
      {
        subtitle: 'Œuvre endommagée',
        text: 'Dans le cas peu probable où vous recevriez une œuvre endommagée, veuillez nous contacter dans les 48 h avec des photos des dommages. Une fois l\'œuvre retournée, nous procéderons à un échange ou à un remboursement selon les cas.',
      },
    ],
  },
  {
    id: 'retours',
    title: 'Politique de retour et de remboursement',
    content: [
      {
        text: 'Si, pour une raison quelconque, vous n\'êtes pas entièrement satisfait d\'un achat, nous vous invitons à consulter notre politique sur les remboursements et les retours.',
      },
      {
        subtitle: 'Droit d\'annulation',
        text: 'Vous avez le droit d\'annuler votre commande dans les 14 jours sans donner de raison, à compter de la date à laquelle vous avez reçu l\'œuvre. Pour exercer ce droit, contactez-nous par e-mail.',
      },
      {
        subtitle: 'Conditions de retour',
        text: 'Pour être éligible à un retour, l\'œuvre doit :',
        list: [
          'Avoir été achetée dans les 14 derniers jours',
          'Être dans son emballage d\'origine, non endommagée',
        ],
        note: 'Les portraits réalisés sur commande selon vos spécifications (dimensions, sujet, technique) ne peuvent pas être retournés, sauf en cas de défaut avéré.',
      },
      {
        subtitle: 'Procédure de retour',
        text: 'Vous êtes responsable du coût et du risque du retour. Veuillez envoyer l\'œuvre à l\'adresse suivante :',
        address: 'Melo Art — Atelier\nParis, France',
        note: 'Nous recommandons un service de courrier assuré et traçable. Nous ne pouvons être tenus responsables des œuvres perdues ou endommagées lors du retour. Le remboursement sera effectué au plus tard 14 jours après réception des marchandises, par le même moyen de paiement que celui utilisé pour la commande.',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Nous contacter',
    content: [
      {
        text: 'Pour toute question relative à cette politique, contactez-nous :',
        list: [
          'Par e-mail : melo@melo-art.fr',
          'Via le formulaire de contact sur le site',
        ],
      },
    ],
  },
]

export default function LivraisonsRetours() {
  return (
    <main>
      {/* Page header */}
      <header
        className="border-b border-line"
        style={{ padding: '120px var(--pad-x) clamp(40px,5vw,64px)' }}
      >
        <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-fg-soft">
          Informations légales
        </span>
        <AnimatedTitle
          as="h1"
          lines={[
            { text: 'Livraisons' },
            { text: '& retours.' },
          ]}
          className="font-display font-light leading-[0.92] mt-6 mb-5"
          style={{ fontSize: 'clamp(64px,9vw,160px)', letterSpacing: '-0.02em' }}
        />
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-fg-mute">
          Dernière mise à jour : {LAST_UPDATE}
        </p>
      </header>

      {/* Content */}
      <div
        className="mx-auto"
        style={{ padding: 'clamp(52px,7vw,100px) var(--pad-x)', maxWidth: '860px' }}
      >
        {sections.map((section) => (
          <section key={section.id} className="mb-16 pb-16 border-b border-line last:border-0 last:mb-0 last:pb-0">
            {/* Section title */}
            <h2 className="font-mono text-[11px] tracking-[0.28em] uppercase text-fg mb-8 flex items-center gap-3">
              <span className="block h-[2px] w-6 bg-accent shrink-0" />
              {section.title}
            </h2>

            {/* Blocks */}
            <div className="flex flex-col gap-6">
              {section.content.map((block, bi) => (
                <div key={bi} className="flex flex-col gap-3">
                  {block.subtitle && (
                    <h3 className="font-display italic text-[20px] font-normal text-fg">
                      {block.subtitle}
                    </h3>
                  )}
                  {block.text && (
                    <p className="text-[15px] leading-[1.75] text-fg-soft">{block.text}</p>
                  )}
                  {block.list && (
                    <ul className="flex flex-col gap-2 pl-1">
                      {block.list.map((item, ii) => (
                        <li key={ii} className="flex items-start gap-3 text-[15px] leading-[1.7] text-fg-soft">
                          <span className="text-accent mt-[6px] shrink-0 text-[8px]">◆</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {block.address && (
                    <address className="not-italic font-mono text-[13px] tracking-[0.1em] text-fg border-l-2 border-accent pl-4 py-1">
                      {block.address.split('\n').map((line, li) => (
                        <span key={li} className="block">{line}</span>
                      ))}
                    </address>
                  )}
                  {block.note && (
                    <p className="text-[13px] leading-[1.7] text-fg-mute italic font-display">
                      {block.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
