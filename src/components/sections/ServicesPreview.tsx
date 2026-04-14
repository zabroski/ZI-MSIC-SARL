import SectionTitle from "../ui/SectionTitle";
import "../../styles/servicesPreview.css";
// import "../../styles/ServicesPreview.css";

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
    <section className="servicesPreview">
      <div className="servicesPreview__container">
        <div className="servicesPreview__heading">
          <SectionTitle
            eyebrow="Nos expertises"
            title="Des services techniques complets pour les entreprises"
            text="Nous proposons des prestations adaptées à vos besoins opérationnels, techniques et sécuritaires."
            centered
          />
        </div>

        <div className="servicesPreview__grid">
          {services.map((service) => (
            <article className="servicesPreview__card" key={service.title}>
              <div className="servicesPreview__icon">◆</div>
              <h3 className="servicesPreview__cardTitle">{service.title}</h3>
              <p className="servicesPreview__cardText">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
