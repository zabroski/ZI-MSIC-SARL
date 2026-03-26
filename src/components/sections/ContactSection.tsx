import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";

export default function ContactSection() {
  return (
    <section className="section contactBand">
      <div className="container contactBandInner">
        <div>
          <SectionTitle
            eyebrow="Contact"
            title="Parlons de votre projet"
            text="Notre équipe est disponible pour étudier vos besoins et vous proposer une solution adaptée."
          />
        </div>

        <div className="contactBox">
          <p>
            <strong>Téléphone:</strong> 76 20 97 96 / 78 20 97 96
          </p>
          <p>
            <strong>Email:</strong> zi.msic.industry@gmail.com
          </p>
          <Button to="/contact">Nous contacter</Button>
        </div>
      </div>
    </section>
  );
}
