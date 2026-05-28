const LAST_UPDATE = '28 mai 2026'

interface Block {
  subtitle?: string
  text?: string
  list?: string[]
  note?: string
}

interface Section {
  id: string
  title: string
  content: Block[]
}

const sections: Section[] = [
  {
    id: 'intro',
    title: 'Introduction',
    content: [
      {
        text: 'La presente politique de confidentialite decrit comment Melo Art collecte, utilise et protege vos informations lorsque vous utilisez ce site. En utilisant le Service, vous acceptez les pratiques decrites dans cette politique.',
      },
      {
        text: 'Nous utilisons vos donnees personnelles uniquement pour fournir le Service, gerer les commandes et ameliorer votre experience.',
      },
    ],
  },
  {
    id: 'definitions',
    title: 'Interpretation et definitions',
    content: [
      {
        subtitle: 'Interpretation',
        text: 'Les mots dont la lettre initiale est en majuscule ont un sens precis dans la presente politique, qu\'ils apparaissent au singulier ou au pluriel.',
      },
      {
        subtitle: 'Definitions',
        list: [
          '« Societe », « Nous », « Notre » ou « Nos » designe Melo Art, atelier base a Paris, France.',
          '« Service » designe le site web Melo Art.',
          '« Donnees personnelles » designe toute information permettant de vous identifier directement ou indirectement.',
          '« Donnees d\'utilisation » designe les donnees techniques collectees automatiquement lors de la navigation.',
          '« Cookies » designe les petits fichiers enregistres sur votre appareil pour ameliorer le fonctionnement du site.',
          '« Vous » designe la personne qui accede au Service ou l\'utilise.',
        ],
      },
    ],
  },
  {
    id: 'donnees-collectees',
    title: 'Donnees que nous collectons',
    content: [
      {
        subtitle: 'Donnees personnelles',
        text: 'Lorsque vous nous contactez ou passez une commande, nous pouvons collecter :',
        list: [
          'Nom et prenom',
          'Adresse e-mail',
          'Numero de telephone',
          'Adresse de livraison et de facturation',
          'Informations necessaires au suivi de votre commande',
        ],
      },
      {
        subtitle: 'Donnees d\'utilisation',
        text: 'Nous pouvons collecter automatiquement certaines donnees techniques : adresse IP, type de navigateur, pages consultees, duree des visites, appareil utilise et informations de diagnostic.',
      },
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies et technologies de suivi',
    content: [
      {
        text: 'Nous utilisons des cookies de session et persistants pour assurer le bon fonctionnement du site, memoriser vos preferences et analyser l\'usage du Service.',
      },
      {
        subtitle: 'Types de cookies utilises',
        list: [
          'Cookies essentiels : necessaires au fonctionnement du site.',
          'Cookies de preference : memorisent vos choix de navigation.',
          'Cookies de mesure d\'audience : nous aident a comprendre l\'utilisation du site pour l\'ameliorer.',
        ],
        note: 'Vous pouvez configurer votre navigateur pour refuser certains cookies. Dans ce cas, certaines fonctionnalites peuvent ne pas fonctionner correctement.',
      },
    ],
  },
  {
    id: 'finalites',
    title: 'Utilisation de vos donnees personnelles',
    content: [
      {
        text: 'Nous utilisons vos donnees pour :',
        list: [
          'Fournir et maintenir le Service',
          'Traiter et livrer vos commandes',
          'Vous contacter a propos de vos demandes et commandes',
          'Vous informer de mises a jour importantes liees au Service',
          'Analyser et ameliorer la qualite du site et de nos prestations',
          'Respecter nos obligations legales',
        ],
      },
    ],
  },
  {
    id: 'partage',
    title: 'Partage et divulgation des donnees',
    content: [
      {
        text: 'Nous ne vendons pas vos donnees personnelles. Elles peuvent etre partagees uniquement lorsque cela est necessaire :',
        list: [
          'Avec des prestataires techniques (hebergement, analyse, paiement) strictement pour executer leurs missions',
          'Avec des transporteurs pour l\'expedition des oeuvres',
          'En cas d\'obligation legale ou de demande valide d\'une autorite',
          'Dans le cadre d\'une operation de reorganisation ou de cession d\'activite, avec garanties adequates',
        ],
      },
    ],
  },
  {
    id: 'conservation-securite',
    title: 'Conservation et securite',
    content: [
      {
        text: 'Nous conservons vos donnees pendant la duree necessaire aux finalites decrites dans cette politique et au respect de nos obligations legales.',
      },
      {
        text: 'Nous mettons en place des mesures techniques et organisationnelles raisonnables pour proteger vos donnees. Aucune methode de transmission ou de stockage n\'etant infaillible, une securite absolue ne peut toutefois etre garantie.',
      },
    ],
  },
  {
    id: 'rgpd',
    title: 'Vos droits (RGPD)',
    content: [
      {
        text: 'Conformement au RGPD, vous pouvez exercer les droits suivants :',
        list: [
          'Droit d\'acces a vos donnees',
          'Droit de rectification',
          'Droit a l\'effacement',
          'Droit d\'opposition et de limitation du traitement',
          'Droit a la portabilite',
          'Droit de retirer votre consentement a tout moment',
        ],
        note: 'Vous disposez egalement du droit d\'introduire une reclamation aupres de l\'autorite de controle competente.',
      },
    ],
  },
  {
    id: 'mineurs',
    title: 'Protection des mineurs',
    content: [
      {
        text: 'Le Service n\'est pas destine aux personnes de moins de 13 ans. Nous ne collectons pas sciemment de donnees personnelles concernant des mineurs. Si vous pensez qu\'un mineur nous a transmis des informations, contactez-nous afin que nous puissions les supprimer.',
      },
    ],
  },
  {
    id: 'modifications',
    title: 'Modifications de cette politique',
    content: [
      {
        text: 'Nous pouvons mettre a jour cette politique de confidentialite a tout moment. La date de derniere mise a jour affichee en haut de cette page sera modifiee en consequence.',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Nous contacter',
    content: [
      {
        text: 'Pour toute question relative a cette politique de confidentialite :',
        list: [
          'Par e-mail : melo@melo-art.fr',
          'Via le formulaire de contact du site',
        ],
      },
    ],
  },
]

export default function PolitiqueConfidentialite() {
  return (
    <main>
      {/* Page header */}
      <header
        className="border-b border-line"
        style={{ padding: '120px var(--pad-x) clamp(40px,5vw,64px)' }}
      >
        <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-fg-soft">
          Informations legales
        </span>
        <h1
          className="font-display font-light leading-[0.92] mt-6 mb-5"
          style={{ fontSize: 'clamp(48px,8vw,120px)', letterSpacing: '-0.02em' }}
        >
          Politique de<br />confidentialite.
        </h1>
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-fg-mute">
          Derniere mise a jour : {LAST_UPDATE}
        </p>
      </header>

      {/* Intro note */}
      <div style={{ padding: 'clamp(40px,5vw,64px) var(--pad-x) 0', maxWidth: '860px' }}>
        <p className="font-display font-light italic text-[clamp(18px,1.4vw,22px)] text-fg-soft leading-[1.55]">
          Nous respectons votre vie privee et traitons vos donnees personnelles de maniere transparente,
          proportionnee et securisee.
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