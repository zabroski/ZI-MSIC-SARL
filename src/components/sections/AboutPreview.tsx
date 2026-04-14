import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import "../../styles/AboutPreview.css";

export default function AboutPreview() {
  return (
    <section className="aboutPreview">
      <div className="aboutPreview__container">
        <div className="aboutPreview__grid">
          <div className="aboutPreview__card aboutPreview__card--large">
            <div className="aboutPreview__titleWrap">
              <SectionTitle
                eyebrow="À propos"
                title="Une entreprise bâtie sur la qualité, l’expertise et l’engagement"
                text="ZI MSIC SARL est une société orientée vers l’informatique, les solutions IT et l’énergie, avec une ambition claire : satisfaire ses clients par la qualité de ses prestations et la fiabilité de son accompagnement."
              />
            </div>

            <div className="aboutPreview__action">
              <Button to="/about">Lire plus</Button>
            </div>
          </div>

          <div className="aboutPreview__stack">
            <div className="aboutPreview__card">
              <h3 className="aboutPreview__cardTitle">Vision</h3>
              <p className="aboutPreview__cardText">
                Offrir des solutions modernes et durables adaptées aux besoins
                des entreprises et des institutions.
              </p>
            </div>

            <div className="aboutPreview__card">
              <h3 className="aboutPreview__cardTitle">Organisation</h3>
              <p className="aboutPreview__cardText">
                Une structure organisée par secteurs d’activité et par niveau de
                responsabilité pour une exécution efficace.
              </p>
            </div>

            <div className="aboutPreview__card">
              <h3 className="aboutPreview__cardTitle">Agréments</h3>
              <p className="aboutPreview__cardText">
                Réseaux électriques, centrales électriques, réseaux
                informatiques et télécoms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
