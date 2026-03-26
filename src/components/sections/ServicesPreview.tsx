import SectionTitle from "../ui/SectionTitle";

const services = [
  {
    title: "Informatique & Solutions IT",
    text: "Étude, conception, déploiement, mise en service, formation, accompagnement et maintenance.",
  },
  {
    title: "Sécurité & Contrôle d’accès",
    text: "Caméras IP, interphones vidéo, alarmes intrusion, contrôle d’accès et vidéosurveillance.",
  },
  {
    title: "Énergie & Réseaux électriques",
    text: "Centrales électriques, électrification rurale, solaire, réseaux et maintenance des installations.",
  },
  {
    title: "Équipements de protection",
    text: "Chaussures de sécurité, casques, gants, lunettes, masques et équipements de chantier.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="section sectionAlt">
      <div className="container">
        <SectionTitle
          eyebrow="Nos expertises"
          title="Des services techniques complets pour les entreprises"
          text="Nous proposons des prestations adaptées à vos besoins opérationnels, techniques et sécuritaires."
          centered
        />

        <div className="cardGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.title}>
              <div className="serviceIcon">◆</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
