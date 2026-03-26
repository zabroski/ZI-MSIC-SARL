export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <h3>ZI MSIC SARL</h3>
          <p>
            Solutions professionnelles en informatique, sécurité, énergie et
            équipements de protection.
          </p>
        </div>

        <div>
          <h4>Coordonnées</h4>
          <p>Tél: 76 20 97 96 / 78 20 97 96</p>
          <p>Email: zi.msic.industry@gmail.com</p>
        </div>

        <div>
          <h4>Navigation</h4>
          <p>Accueil</p>
          <p>À propos</p>
          <p>Services</p>
          <p>Contact</p>
        </div>
      </div>

      <div className="footerBottom">
        © {new Date().getFullYear()} ZI MSIC SARL. Tous droits réservés.
      </div>
    </footer>
  );
}
