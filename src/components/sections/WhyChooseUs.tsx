import SectionTitle from "../ui/SectionTitle";

const points = [
  "Solutions sur mesure adaptées à votre environnement",
  "Accompagnement technique avant-vente et après-vente",
  "Intervenants capables de gérer des projets de bout en bout",
  "Approche orientée qualité, performance et sécurité",
  "Intervention sur des projets IT, industriels et énergétiques",
  "Formation continue et valorisation des compétences humaines",
];

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Pourquoi nous choisir"
          title="Un partenaire fiable pour vos opérations"
          text="Nous combinons expertise terrain, conseil, exécution technique et accompagnement durable."
          centered
        />

        <div className="featureGrid">
          {points.map((item) => (
            <div className="featureItem" key={item}>
              <span className="featureCheck">✓</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
