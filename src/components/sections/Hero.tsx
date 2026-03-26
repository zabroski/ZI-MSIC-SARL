import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container heroGrid">
        <div className="heroContent">
          <span className="heroBadge">Solutions IT • Sécurité • Énergie</span>
          <h1>
            Une entreprise de confiance pour vos projets techniques, industriels
            et énergétiques
          </h1>
          <p>
            ZI MSIC SARL accompagne les entreprises avec des solutions sur
            mesure en informatique, sécurité, réseaux électriques,
            électrification, énergies renouvelables et protection des
            travailleurs.
          </p>

          <div className="heroActions">
            <Button to="/contact">Demander un devis</Button>
            <Button to="/services" variant="secondary">
              Découvrir nos services
            </Button>
          </div>
        </div>

        <div className="heroCard">
          <div className="heroStat">
            <strong>IT</strong>
            <span>Étude, conception, déploiement, maintenance</span>
          </div>
          <div className="heroStat">
            <strong>Sécurité</strong>
            <span>Contrôle d’accès, vidéosurveillance, alarmes</span>
          </div>
          <div className="heroStat">
            <strong>Énergie</strong>
            <span>Réseaux, centrales, solaire, maintenance</span>
          </div>
        </div>
      </div>
    </section>
  );
}
