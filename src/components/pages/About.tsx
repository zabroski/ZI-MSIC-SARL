import SectionTitle from "../ui/SectionTitle";

export default function About() {
  return (
    <section className="page section">
      <div className="container">
        <SectionTitle
          eyebrow="À propos de nous"
          title="ZI MSIC SARL"
          text="Une entreprise dynamique née d’une passion pour l’informatique, les solutions IT et l’énergie."
        />

        <div className="aboutGrid">
          <div className="infoCard">
            <h3>Notre mission</h3>
            <p>
              Satisfaire nos clients à travers des prestations de qualité et les
              rassurer par notre professionnalisme et notre dévouement.
            </p>
          </div>

          <div className="infoCard">
            <h3>Notre approche</h3>
            <p>
              Nous intervenons avec méthode sur l’étude, la conception, le
              déploiement, la formation, l’accompagnement et la maintenance.
            </p>
          </div>

          <div className="infoCard">
            <h3>Nos capacités</h3>
            <p>
              Nous opérons sur le marché national et international avec des
              compétences techniques dans l’IT, la sécurité, l’énergie et
              l’équipement professionnel.
            </p>
          </div>

          <div className="infoCard">
            <h3>Capital humain</h3>
            <p>
              La formation continue et le renforcement des compétences occupent
              une place centrale dans notre développement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
