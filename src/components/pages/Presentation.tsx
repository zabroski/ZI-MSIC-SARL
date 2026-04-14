import "./presentation.css";

export default function Presentation() {
  return (
    <section className="presentation">
      <div className="presentation__container">
        <h1 className="presentation__title">Présentation</h1>

        <div className="presentation__card">
          <p>
            La société{" "}
            <strong>
              ZI MULTI SERVICES D'INDUSTRIE ET DE COMMERCE (ZI MSIC SARL)
            </strong>
            , dynamique, née d'une véritable passion pour l'informatique, la
            solution IT et l'énergie.
          </p>

          <p>
            Dans ses domaines au Burkina Faso, notre entreprise fait partie des
            plus importantes sociétés grâce à la qualité de ses services et ses
            réalisations, ainsi que ses partenariats stratégiques au niveau
            local et international.
          </p>

          <p>
            ZI MSIC SARL s’est assignée l’objectif de satisfaire ses clients à
            travers la qualité de ses prestations et de les rassurer par le
            dévouement à son métier.
          </p>

          <p className="center">
            Comme toute entreprise, ZI-MSIC SARL adopte une organisation interne
            structurée par secteur d’activité et par degré de responsabilité.
          </p>

          <p>
            La Direction Générale assure la gestion globale avec une vision
            stratégique à long terme, permettant aux différentes directions de
            fonctionner en harmonie et avec autonomie.
          </p>

          <p>
            Elle opère sur le marché national et international avec des
            capacités professionnelles solides, grâce à son expérience dans
            plusieurs domaines.
          </p>

          <div className="agrements">
            <h3>ZI-MSIC SARL POSSEDE LES AGREMENTS SUIVANT :</h3>
            <ul>
              <li>
                Agrément R3-C3 : réseaux électrique et centrale électrique
              </li>
              <li>
                Agrément D5 Catégorie unique : réseaux informatiques et télécom
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
