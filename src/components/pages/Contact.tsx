// import SectionTitle from "../components/ui/SectionTitle";
import SectionTitle from "../ui/SectionTitle";

export default function Contact() {
  return (
    <section className="page section">
      <div className="container">
        <SectionTitle
          eyebrow="Contact"
          title="Contactez notre équipe"
          text="Parlez-nous de votre besoin en informatique, sécurité, énergie ou équipements."
        />

        <div className="contactPageGrid">
          <div className="infoCard">
            <h3>Informations</h3>
            <p>
              <strong>Entreprise:</strong> ZI MSIC SARL
            </p>
            <p>
              <strong>Téléphone:</strong> 76 20 97 96 / 78 20 97 96
            </p>
            <p>
              <strong>Email:</strong> zi.msic.industry@gmail.com
            </p>
          </div>

          <form className="contactForm">
            <div className="formRow">
              <input type="text" placeholder="Votre nom" />
              <input type="email" placeholder="Votre email" />
            </div>

            <input type="text" placeholder="Sujet" />
            <textarea placeholder="Votre message" rows={6} />
            <button type="submit" className="btn btn-primary">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
