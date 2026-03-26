import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

export default function AboutPreview() {
  return (
    <section className="section">
      <div className="container twoCol">
        <div className="infoCard largeCard">
          <SectionTitle
            eyebrow="À propos"
            title="Une entreprise bâtie sur la qualité, l’expertise et l’engagement"
            text="ZI MSIC SARL est une société orientée vers l’informatique, les solutions IT et l’énergie, avec une ambition claire: satisfaire ses clients par la qualité de ses prestations et la fiabilité de son accompagnement."
          />
          <Button to="/about">Lire plus</Button>
        </div>

        <div className="stackCards">
          <div className="infoCard">
            <h3>Vision</h3>
            <p>
              Offrir des solutions modernes et durables adaptées aux besoins des
              entreprises et des institutions.
            </p>
          </div>

          <div className="infoCard">
            <h3>Organisation</h3>
            <p>
              Une structure organisée par secteurs d’activité et par niveau de
              responsabilité pour une exécution efficace.
            </p>
          </div>

          <div className="infoCard">
            <h3>Agréments</h3>
            <p>
              Réseaux électriques, centrales électriques, réseaux informatiques
              et télécoms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
