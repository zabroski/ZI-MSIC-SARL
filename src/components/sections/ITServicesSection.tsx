// import "../../styles/ITServicesSection.css";

// const points = [
//   "Étude, Conseil et Développement de solutions informatiques spécifiques.",
//   "Fourniture de logiciels standard de gestion d’entreprise.",
//   "Développement de logiciels spécifiques sur demande.",
//   "Conception et hébergement des Sites Web.",
//   "Conception et Réalisation des applications Web.",
//   "Installation, configuration et soutien des réseaux informatiques.",
//   "Installation et configuration de logiciels et systèmes d'exploitation.",
//   "Dépannages, diagnostics, récupération de données et optimisation des performances des micro-ordinateurs.",
//   "La vente, l'installation des matériels informatique.",
//   "Assistance et conseil.",
//   "Les réseaux informatiques.",
// ];

// export default function ITServicesSection() {
//   return (
//     <section className="itServices">
//       <div className="itServices__container">
//         <div className="itServices__grid">
//           <div className="itServices__content">
//             <p>
//               À l'air du numérique ou les logiciels et les applications font
//               parties de notre environnement quotidien, ZI MSIC Sarl propose des
//               solutions innovantes qui vont aider à optimiser les productions ou
//               à mieux valoriser les produits ou services.
//             </p>

//             <p>
//               Acteur majeur du conseil dans l'informatique, ZI MSIC Sarl
//               accompagne des grands groupes et filiales du secteur industriel
//               tout au long de leurs projets et les a aidés à optimiser et
//               valoriser leurs productions.
//             </p>

//             <p>
//               Les intervenants de ZI MSIC Sarl sont capables de gérer vos
//               projets (étude, conception, déploiement et mise en service,
//               formation, accompagnement et maintenance). Et en s'adaptant à
//               votre environnement technologique, fonctionnel et métier.
//             </p>

//             <p>
//               Ils élaborent des applications qui répondent parfaitement à vos
//               attentes et à vos besoins. Que ce soit au niveau de l'analyse
//               fonctionnelle, de la planification, du développement, des tests,
//               de la mise en place, du suivi ou du transfert de compétences vous
//               trouverez chez ZI MSIC Sarl la rigueur nécessaire.
//             </p>

//             <p>
//               La maîtrise de plusieurs outils de programmation et de
//               développement ainsi que des bases de données et les Framework nous
//               permettent de vous proposer : nos clients la solution la plus
//               optimale et la plus adaptée à leurs besoins.
//             </p>

//             <ul className="itServices__list">
//               {points.map((point) => (
//                 <li key={point}>{point}</li>
//               ))}
//             </ul>
//           </div>

//           <div className="itServices__images">
//             <div className="itServices__imageCard">
//               <img
//                 src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
//                 alt="Infrastructure informatique"
//               />
//             </div>

//             <div className="itServices__imageCard">
//               <img
//                 src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=900&q=80"
//                 alt="Cybersécurité"
//               />
//             </div>

//             <div className="itServices__imageCard">
//               <img
//                 src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
//                 alt="Réseaux et systèmes"
//               />
//             </div>

//             <div className="itServices__imageCard">
//               <img
//                 src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80"
//                 alt="Réseau mondial"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import "../../styles/ITServicesSection.css";
import "../../styles/itServicesSection.css";

const points = [
  "Étude, conseil et développement de solutions informatiques spécifiques.",
  "Fourniture de logiciels standard de gestion d’entreprise.",
  "Développement de logiciels spécifiques sur demande.",
  "Conception et hébergement de sites web.",
  "Conception et réalisation d’applications web.",
  "Installation, configuration et support des réseaux informatiques.",
  "Installation et configuration de logiciels et systèmes d’exploitation.",
  "Dépannage, diagnostic, récupération de données et optimisation des performances des micro-ordinateurs.",
  "Vente et installation de matériels informatiques.",
  "Assistance et conseil.",
  "Réseaux informatiques.",
];

export default function ITServicesSection() {
  return (
    <section className="itServices">
      <div className="itServices__container">
        <div className="itServices__grid">
          <div className="itServices__content">
            <p>
              À l’ère du numérique, où les logiciels et les applications font
              partie de notre environnement quotidien, ZI MSIC SARL propose des
              solutions innovantes pour optimiser la production et mieux
              valoriser les produits et services.
            </p>

            <p>
              Acteur majeur du conseil informatique, ZI MSIC SARL accompagne de
              grands groupes ainsi que des filiales du secteur industriel tout
              au long de leurs projets, en les aidant à améliorer et valoriser
              leurs performances.
            </p>

            <p>
              Les intervenants de ZI MSIC SARL sont capables de gérer vos
              projets de bout en bout : étude, conception, déploiement, mise en
              service, formation, accompagnement et maintenance, tout en
              s’adaptant à votre environnement technologique, fonctionnel et
              métier.
            </p>

            <p>
              Ils élaborent des applications qui répondent précisément à vos
              attentes et à vos besoins. De l’analyse fonctionnelle à la
              planification, du développement aux tests, de la mise en place au
              suivi, jusqu’au transfert de compétences, vous trouverez chez ZI
              MSIC SARL la rigueur nécessaire.
            </p>

            <p>
              La maîtrise de plusieurs outils de programmation, de
              développement, de bases de données et de frameworks nous permet de
              proposer à nos clients la solution la plus optimale et la plus
              adaptée à leurs besoins.
            </p>

            <ul className="itServices__list">
              {points.map((point, index) => (
                <li key={`${index}-${point}`}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="itServices__images">
            <div className="itServices__imageCard">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
                alt="Infrastructure informatique"
                loading="lazy"
              />
            </div>

            <div className="itServices__imageCard">
              <img
                src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=900&q=80"
                alt="Cybersécurité"
                loading="lazy"
              />
            </div>

            <div className="itServices__imageCard">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
                alt="Réseaux et systèmes"
                loading="lazy"
              />
            </div>

            <div className="itServices__imageCard">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80"
                alt="Réseau mondial"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
