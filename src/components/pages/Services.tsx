// import SectionTitle from "../components/ui/SectionTitle";
import SectionTitle from "../ui/SectionTitle";

const serviceBlocks = [
  {
    title: "Informatique",
    items: [
      "Étude et conception de projets",
      "Déploiement et mise en service",
      "Formation et accompagnement",
      "Maintenance et support",
      "Applications adaptées aux besoins métiers",
      "Solutions de visioconférence",
    ],
  },
  {
    title: "Sécurité",
    items: [
      "Caméras numériques",
      "Contrôle d’accès",
      "Alarmes intrusion",
      "Interphones vidéo connectés",
      "Vidéosurveillance IP",
      "Accompagnement technique de configuration",
    ],
  },
  {
    title: "Énergie",
    items: [
      "Centrales électriques",
      "Réseaux électriques",
      "Électrification rurale",
      "Installation d’équipements renouvelables",
      "Éclairage public",
      "Maintenance des installations électriques",
    ],
  },
  {
    title: "Équipements de protection",
    items: [
      "Chaussures de sécurité",
      "Casques",
      "Gants",
      "Lunettes de protection",
      "Masques anti-poussières",
      "Équipements de sécurité pour chantier",
    ],
  },
];

export default function Services() {
  return (
    <section className="page section">
      <div className="container">
        <SectionTitle
          eyebrow="Services"
          title="Nos domaines d’intervention"
          text="Des solutions complètes pour renforcer vos opérations, votre sécurité et vos infrastructures."
          centered
        />

        <div className="serviceBlocksGrid">
          {serviceBlocks.map((block) => (
            <article className="infoCard" key={block.title}>
              <h3>{block.title}</h3>
              <ul className="serviceList">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
