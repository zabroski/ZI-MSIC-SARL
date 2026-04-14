import BrochureShowcaseSection from "./BrochureShowcaseSection";

export default function BrochureSections() {
  return (
    <>
      <BrochureShowcaseSection
        eyebrow="IT Solution"
        title="Technology"
        intro="Des solutions IT globales pour accompagner la modernisation, la sécurité et la continuité des opérations."
        paragraphs={[
          "La transformation numérique apporte de nouveaux défis aux entreprises. Nous accompagnons nos clients avec une offre IT structurée autour du modern workplace, de la sécurité, des datacenters, du networking et des applications métiers.",
          "Nos équipes interviennent dès les phases de planification, de conception, d’intégration et d’exploitation afin de proposer une architecture cohérente, évolutive et adaptée au contexte métier.",
          "Nous assurons aussi la protection, la disponibilité et la continuité des données avec des solutions de sauvegarde, de surveillance et d’administration sécurisée.",
        ]}
        highlights={[
          "Modern workplace",
          "Cybersécurité",
          "Datacenters",
          "Networking",
          "Applications métiers",
        ]}
        bullets={[
          "Protection des données critiques",
          "Sauvegarde et reprise d’activité",
          "Supervision et maintenance proactive",
          "Infrastructures fiables et évolutives",
          "Postes de travail performants",
        ]}
        gallery={[
          {
            src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
            alt: "Professionnels et transformation numérique",
            label: "Transformation numérique",
          },
          {
            src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
            alt: "Infrastructure informatique",
            label: "Infrastructure et systèmes",
          },
          {
            src: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80",
            alt: "Cybersécurité et protection",
            label: "Sécurité des données",
          },
          {
            src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
            alt: "Téléphonie et poste de travail",
            label: "Services et support",
          },
        ]}
      />

      <BrochureShowcaseSection
        eyebrow="IT Solution"
        title="Sécurité & Contrôle d’accès"
        intro="Des solutions de sûreté intégrées pour protéger les sites, les accès et les environnements sensibles."
        paragraphs={[
          "Nous proposons des systèmes de sécurité sur mesure comprenant caméras IP, vidéosurveillance, contrôle d’accès, alarmes intrusion et interphones vidéo.",
          "Notre approche consiste à étudier l’existant, définir l’architecture adaptée puis configurer des équipements fiables, évolutifs et simples à exploiter.",
          "Les dispositifs peuvent être intégrés entre eux afin de renforcer la supervision, la traçabilité et la protection des espaces résidentiels, commerciaux ou industriels.",
        ]}
        highlights={[
          "Caméra IP",
          "Interphone vidéo",
          "Alarme intrusion",
          "Contrôle d’accès",
        ]}
        bullets={[
          "Étude et conseil avant-vente",
          "Configuration certifiée des équipements",
          "Protection renforcée des sites",
          "Solutions adaptées aux besoins réels",
        ]}
        gallery={[
          {
            src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
            alt: "Centre de vidéosurveillance",
            label: "Plateforme de supervision",
          },
          {
            src: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
            alt: "Interphone vidéo",
            label: "Interphone connecté",
          },
        ]}
        variant="safety"
      />

      <BrochureShowcaseSection
        eyebrow="Communication"
        title="Outils de communication & visioconférence"
        intro="Des environnements collaboratifs modernes pour connecter les équipes et fluidifier les échanges."
        paragraphs={[
          "La visioconférence est devenue un levier de collaboration essentiel pour les entreprises. Elle améliore la coordination, accélère la prise de décision et réduit les pertes de temps liées aux échanges dispersés.",
          "Nous concevons des solutions sur mesure comprenant caméras PTZ, micros, enceintes, écrans interactifs et logiciels adaptés aux usages professionnels.",
        ]}
        bullets={[
          "Ordinateurs connectés à internet",
          "Caméras grand angle et PTZ",
          "Micros centraux, déportés ou intégrés",
          "Enceintes et barres de visioconférence",
          "Écrans interactifs fiables et intégrables",
          "Logiciels pour visioconférences et collaboration",
        ]}
        gallery={[
          {
            src: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1200&q=80",
            alt: "Matériel de visioconférence",
            label: "Équipement de conférence",
          },
          {
            src: "https://images.unsplash.com/photo-1616587226157-48e49175ee20?auto=format&fit=crop&w=1200&q=80",
            alt: "Réunion vidéo d'équipe",
            label: "Communication d’équipe",
          },
          {
            src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
            alt: "Collaboration numérique",
            label: "Collaboration connectée",
          },
        ]}
      />

      <BrochureShowcaseSection
        eyebrow="Communication"
        title="Téléphonie IP"
        intro="Une téléphonie d’entreprise moderne, sécurisée et intégrée au système d’information."
        paragraphs={[
          "La téléphonie IP reste un outil central de communication pour les organisations qui souhaitent échanger rapidement, de manière sécurisée et avec de meilleures fonctions de gestion.",
          "Nous déployons des solutions capables d’améliorer la productivité et la qualité de service tout en conservant les fonctionnalités essentielles de la téléphonie d’entreprise.",
        ]}
        bullets={[
          "Transfert d’appels",
          "Messagerie",
          "Mise en attente",
          "Journal d’appels",
          "Annuaire",
          "SDA",
          "Convergence fixe-mobile",
          "Statistiques avancées",
          "Click to call",
          "SVI et CTI",
        ]}
        gallery={[
          {
            src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
            alt: "Téléphones IP de bureau",
            label: "Postes IP",
          },
          {
            src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
            alt: "Téléphonie sécurisée",
            label: "Téléphonie sécurisée",
          },
          {
            src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
            alt: "Équipe en installation informatique",
            label: "Déploiement sur site",
          },
        ]}
      />

      <BrochureShowcaseSection
        eyebrow="Énergie"
        title="Réseaux électriques & solutions énergétiques"
        intro="Des prestations techniques pour l’électrification, les installations, la maintenance et les énergies renouvelables."
        paragraphs={[
          "Nous intervenons dans les centrales électriques, les réseaux électriques, l’électrification rurale ainsi que la fourniture et l’installation d’équipements liés aux énergies renouvelables.",
          "Notre expertise couvre la réhabilitation, la remise en conformité, l’amélioration des installations existantes et la maintenance des équipements électriques.",
        ]}
        bullets={[
          "Réseaux électriques",
          "Électrification rurale",
          "Éclairage public",
          "Postes transformateurs",
          "Groupes électrogènes",
          "Armoires électriques",
          "Mesures et analyses réseaux",
          "Installations intérieures et périphériques",
          "Courants forts et faibles",
        ]}
        gallery={[
          {
            src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
            alt: "Travaux sur réseau électrique",
            label: "Études et interventions",
          },
          {
            src: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
            alt: "Infrastructure de transport électrique",
            label: "Réseaux et distribution",
          },
          {
            src: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
            alt: "Techniciens en poste électrique",
            label: "Maintenance des installations",
          },
          {
            src: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
            alt: "Éclairage public solaire",
            label: "Énergie et éclairage",
          },
        ]}
        variant="energy"
      />

      <BrochureShowcaseSection
        eyebrow="Protection"
        title="Équipements et protection individuelle des travailleurs"
        intro="Des équipements adaptés pour renforcer la sécurité, réduire les risques et accompagner les interventions terrain."
        paragraphs={[
          "Les équipements de protection individuelle permettent aux travailleurs exposés à des risques d’exercer leurs missions dans de meilleures conditions de sécurité.",
          "Nous mettons à disposition une gamme d’équipements conçus pour protéger la tête, les yeux, les oreilles, la respiration, les mains, les pieds et le corps.",
        ]}
        bullets={[
          "Chaussures de sécurité",
          "Casques et protections auditives",
          "Gants",
          "Lunettes de protection",
          "Masques anti-poussière",
          "Vêtements et gilets de sécurité",
        ]}
        gallery={[
          {
            src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
            alt: "Casque et équipements de sécurité",
            label: "Protection individuelle",
          },
          {
            src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
            alt: "Chaussures et gants de sécurité",
            label: "Équipements terrain",
          },
          {
            src: "https://images.unsplash.com/photo-1581092918367-2d7c8f9a8c44?auto=format&fit=crop&w=1200&q=80",
            alt: "Lunettes et casque de chantier",
            label: "Protection chantier",
          },
        ]}
      />

      <BrochureShowcaseSection
        eyebrow="Ressources"
        title="Les moyens humains"
        intro="Une équipe pluridisciplinaire mobilisée pour étudier, exécuter, sécuriser et maintenir les projets."
        paragraphs={[
          "Le facteur humain reste la ressource la plus précieuse au sein des entreprises. C’est pourquoi nous structurons nos équipes autour de profils techniques, opérationnels et de gestion.",
          "Nous favorisons la montée en compétence continue afin d’améliorer durablement la performance, la qualité et la sécurité des interventions.",
        ]}
        bullets={[
          "Responsables de bureau d’études",
          "Informaticiens",
          "Responsables qualité, sécurité et environnement",
          "Programmeurs",
          "Techniciens et compagnons",
          "Chefs de chantier",
          "Électriciens",
          "Maçons",
          "Direction générale et direction technique",
          "Ingénieurs réseaux informatiques",
          "Techniciens en électronique",
        ]}
        gallery={[
          {
            src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
            alt: "Équipe professionnelle",
            label: "Organisation humaine",
          },
          {
            src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
            alt: "Travail collaboratif",
            label: "Collaboration",
          },
          {
            src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
            alt: "Professionnels de terrain",
            label: "Compétences techniques",
          },
        ]}
        variant="team"
      />

      <BrochureShowcaseSection
        eyebrow="Réalisations"
        title="Quelques photos de chantier"
        intro="Un aperçu de projets terrain et d’interventions techniques réalisés sur site."
        gallery={[
          {
            src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
            alt: "Intervention sur ligne électrique",
            label: "Travaux en hauteur",
          },
          {
            src: "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1200&q=80",
            alt: "Technicien en intervention",
            label: "Installation réseau",
          },
          {
            src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
            alt: "Équipe sur chantier",
            label: "Travaux terrain",
          },
          {
            src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
            alt: "Intervention technique",
            label: "Maintenance et pose",
          },
        ]}
        variant="gallery"
      />

      <BrochureShowcaseSection
        eyebrow="Annexes"
        title="Mission, philosophie et références"
        intro="Une vision portée par la qualité de service, l’accompagnement et la construction d’une relation durable avec les clients."
        paragraphs={[
          "Nous avons acquis l’expérience et les compétences nécessaires pour étudier, planifier, estimer les budgets et conduire les projets depuis la phase d’étude jusqu’à leur réalisation.",
          "Nous croyons que nos conseils et notre exigence de qualité doivent dépasser les attentes de nos clients. Cette conviction guide l’ensemble de nos décisions et de nos relations professionnelles.",
          "Nous mettons tout en œuvre pour bâtir une relation solide, fondée sur le respect, la confiance et l’honnêteté afin d’accompagner durablement chaque organisation.",
        ]}
        bullets={[
          "Copie du registre de commerce et du crédit mobilier",
          "Copie du numéro IFU",
          "Plan de localisation",
          "Agrément R3 et C3",
          "Agrément D5 Catégorie Unique",
          "Attestation de localisation",
          "Références similaires",
        ]}
      />
    </>
  );
}
