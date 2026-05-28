const LAST_UPDATE = '15 janvier 2025'

interface Block {
  subtitle?: string
  text?:     string
  list?:     string[]
  note?:     string
}
interface Section {
  id:      string
  title:   string
  content: Block[]
}

const sections: Section[] = [
  {
    id: 'definitions',
    title: 'Interprétation et définitions',
    content: [
      {
        subtitle: 'Interprétation',
        text: 'Les mots dont la lettre initiale est en majuscule ont des significations définies dans les conditions suivantes. Les définitions suivantes ont le même sens, qu\'elles apparaissent au singulier ou au pluriel.',
      },
      {
        subtitle: 'Définitions',
        text: 'Aux fins des présentes Conditions générales :',
        list: [
          '« Société », « Nous », « Notre » ou « Nos » fait référence à Melo Art, Paris, France.',
          '« Biens » désigne les œuvres originales et portraits proposés à la vente ou réalisés sur commande.',
          '« Commande » désigne une demande de votre part de faire réaliser ou d\'acquérir une œuvre.',
          '« Service » fait référence au site Melo Art.',
          '« Conditions générales » désigne les présentes Conditions qui constituent l\'intégralité de l\'accord entre Vous et la Société.',
          '« Site internet » désigne Melo Art, accessible depuis le domaine du site.',
          '« Vous » désigne la personne qui accède ou utilise le Service.',
        ],
      },
    ],
  },
  {
    id: 'reconnaissance',
    title: 'Reconnaissance',
    content: [
      {
        text: 'Il s\'agit des Conditions générales régissant l\'utilisation de ce Service et de l\'accord qui s\'applique entre Vous et la Société. Les présentes Conditions définissent les droits et obligations de tous les utilisateurs concernant l\'utilisation du Service.',
      },
      {
        text: 'Votre accès et votre utilisation du Service sont conditionnés par Votre acceptation et Votre respect des présentes Conditions générales. En accédant ou en utilisant le Service, vous acceptez d\'être lié par ces Conditions. Si vous n\'êtes pas d\'accord avec une partie de ces conditions, vous ne pouvez pas accéder au service.',
      },
      {
        text: 'Vous déclarez avoir plus de 18 ans. La Société n\'autorise pas les personnes de moins de 18 ans à utiliser le Service.',
      },
    ],
  },
  {
    id: 'commandes',
    title: 'Passer des commandes',
    content: [
      {
        text: 'En passant une commande via le Service, vous garantissez que vous êtes légalement capable de conclure des contrats contraignants.',
      },
      {
        subtitle: 'Vos informations',
        text: 'Pour passer une commande, il peut vous être demandé de fournir certaines informations : nom, adresse e-mail, numéro de téléphone et informations d\'expédition. Vous déclarez et garantissez que ces informations sont vraies, correctes et complètes.',
      },
      {
        subtitle: 'Annulation de commande',
        text: 'Nous nous réservons le droit de refuser ou d\'annuler votre commande à tout moment pour les raisons suivantes :',
        list: [
          'Disponibilité des œuvres ou matières premières',
          'Erreurs dans la description ou les prix',
          'Erreurs dans votre commande',
          'Suspicion de fraude ou de transaction illégale',
        ],
      },
      {
        subtitle: 'Droits d\'annulation',
        text: 'Toute œuvre achetée ne peut être retournée que conformément aux présentes Conditions et à notre Politique de retour. Votre droit d\'annuler une commande ne s\'applique pas aux œuvres réalisées sur mesure selon vos spécifications (portraits personnalisés). Nous vous rembourserons au plus tard 14 jours à compter de la réception des marchandises retournées, par le même moyen de paiement.',
      },
    ],
  },
  {
    id: 'disponibilite',
    title: 'Disponibilité, erreurs et inexactitudes',
    content: [
      {
        text: 'Nous mettons constamment à jour nos offres sur le Service. Les informations présentées (prix, descriptions, disponibilité) peuvent être imprécises. Nous nous réservons le droit de modifier ou corriger ces informations à tout moment et sans préavis.',
      },
    ],
  },
  {
    id: 'prix',
    title: 'Politique des prix et paiements',
    content: [
      {
        subtitle: 'Prix',
        text: 'La Société se réserve le droit de réviser ses prix à tout moment avant d\'accepter une Commande. En cas d\'événement exceptionnel affectant la livraison (action gouvernementale, variation des droits de douane, frais de change), les prix peuvent être révisés après acceptation — auquel cas vous aurez le droit d\'annuler votre Commande.',
      },
      {
        subtitle: 'Paiements',
        text: 'Les commandes de portraits font l\'objet d\'un acompte de 30 % au démarrage, le solde étant réglé à la livraison. Les paiements peuvent être effectués par virement bancaire ou via les méthodes disponibles sur le Service. Les cartes de paiement sont soumises à validation et autorisation de leur émetteur.',
      },
    ],
  },
  {
    id: 'propriete',
    title: 'Propriété intellectuelle',
    content: [
      {
        text: 'Le Service et son contenu original (textes, images, visuels, identité graphique) sont et resteront la propriété exclusive de Melo Art. Le Service est protégé par le droit d\'auteur et les marques de commerce. Nos marques et éléments visuels ne peuvent être utilisés sans le consentement écrit préalable de la Société.',
      },
      {
        text: 'Chaque portrait réalisé sur commande demeure une création originale de l\'artiste. Sauf accord contraire explicite, Melo Art conserve les droits de reproduction et de diffusion des œuvres à des fins de portfolio et de communication.',
      },
    ],
  },
  {
    id: 'liens',
    title: 'Liens vers d\'autres sites',
    content: [
      {
        text: 'Notre Service peut contenir des liens vers des sites tiers. La Société n\'assume aucune responsabilité pour le contenu, les politiques ou les pratiques de ces sites. Nous vous conseillons de lire leurs termes et conditions avant toute utilisation.',
      },
    ],
  },
  {
    id: 'responsabilite',
    title: 'Limitation de responsabilité',
    content: [
      {
        text: 'Dans toute la mesure permise par la loi applicable, la Société ne peut être tenue responsable de dommages indirects, accessoires ou consécutifs découlant de l\'utilisation ou de l\'incapacité d\'utiliser le Service. La responsabilité totale de la Société sera limitée au montant effectivement payé par Vous pour la commande concernée.',
      },
    ],
  },
  {
    id: 'garanties',
    title: 'Clause de non-responsabilité',
    content: [
      {
        text: 'Le Service Vous est fourni « TEL QUEL » et « TEL QUE DISPONIBLE ». Dans toute la mesure permise par la loi, la Société décline toute garantie, expresse ou implicite, concernant le Service. Nous ne garantissons pas que le Service sera ininterrompu ou exempt d\'erreurs.',
      },
    ],
  },
  {
    id: 'loi',
    title: 'Loi applicable et règlement des différends',
    content: [
      {
        text: 'Les lois françaises régissent les présentes Conditions et Votre utilisation du Service. En cas de litige, vous acceptez d\'essayer d\'abord de résoudre le différend de manière informelle en contactant la Société.',
      },
      {
        subtitle: 'Utilisateurs de l\'Union européenne',
        text: 'Si vous êtes consommateur dans l\'UE, vous bénéficiez de toutes les dispositions impératives de la loi du pays dans lequel vous résidez.',
      },
    ],
  },
  {
    id: 'modifications',
    title: 'Modifications des Conditions',
    content: [
      {
        text: 'Nous nous réservons le droit de modifier ou de remplacer ces Conditions à tout moment. En cas de révision importante, nous fournirons un préavis d\'au moins 30 jours. En continuant d\'utiliser le Service après l\'entrée en vigueur de ces révisions, Vous acceptez d\'être lié par les nouvelles conditions.',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Nous contacter',
    content: [
      {
        text: 'Pour toute question concernant ces Termes et Conditions :',
        list: [
          'Par e-mail : melo@melo-art.fr',
          'Via le formulaire de contact sur le site',
        ],
      },
    ],
  },
]

export default function TermesConditions() {
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
        <h1
          className="font-display font-light leading-[0.92] mt-6 mb-5"
          style={{ fontSize: 'clamp(48px,8vw,120px)', letterSpacing: '-0.02em' }}
        >
          Termes &amp;<br />conditions.
        </h1>
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-fg-mute">
          Dernière mise à jour : {LAST_UPDATE}
        </p>
      </header>

      {/* Intro note */}
      <div style={{ padding: 'clamp(40px,5vw,64px) var(--pad-x) 0', maxWidth: '860px' }}>
        <p className="font-display font-light italic text-[clamp(18px,1.4vw,22px)] text-fg-soft leading-[1.55]">
          Veuillez lire attentivement ces termes et conditions avant d'utiliser notre Service.
        </p>
      </div>

      {/* Content */}
      <div
        className="mx-auto"
        style={{ padding: 'clamp(40px,5vw,72px) var(--pad-x) clamp(52px,7vw,100px)', maxWidth: '860px' }}
      >
        {sections.map((section) => (
          <section
            key={section.id}
            className="mb-14 pb-14 border-b border-line last:border-0 last:mb-0 last:pb-0"
          >
            <h2 className="font-mono text-[11px] tracking-[0.28em] uppercase text-fg mb-7 flex items-center gap-3">
              <span className="block h-[2px] w-6 bg-accent shrink-0" />
              {section.title}
            </h2>

            <div className="flex flex-col gap-5">
              {section.content.map((block, bi) => (
                <div key={bi} className="flex flex-col gap-2.5">
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
