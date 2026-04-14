import "../../styles/brochureShowcaseSection.css";

type GalleryItem = {
  src: string;
  alt: string;
  label?: string;
};

type BrochureShowcaseSectionProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  paragraphs?: string[];
  bullets?: string[];
  highlights?: string[];
  gallery?: GalleryItem[];
  variant?: "default" | "energy" | "safety" | "team" | "gallery";
};

export default function BrochureShowcaseSection({
  eyebrow,
  title,
  intro,
  paragraphs = [],
  bullets = [],
  highlights = [],
  gallery = [],
  variant = "default",
}: BrochureShowcaseSectionProps) {
  return (
    <section className={`brochureShowcase brochureShowcase--${variant}`}>
      <div className="brochureShowcase__shell">
        <div className="brochureShowcase__header">
          {eyebrow ? (
            <p className="brochureShowcase__eyebrow">{eyebrow}</p>
          ) : null}
          <h2 className="brochureShowcase__title">{title}</h2>
          {intro ? <p className="brochureShowcase__intro">{intro}</p> : null}
        </div>

        <div className="brochureShowcase__grid">
          <article className="brochureShowcase__panel brochureShowcase__panel--content">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="brochureShowcase__paragraph">
                {paragraph}
              </p>
            ))}

            {highlights.length > 0 ? (
              <div className="brochureShowcase__highlights">
                {highlights.map((item) => (
                  <div key={item} className="brochureShowcase__chip">
                    {item}
                  </div>
                ))}
              </div>
            ) : null}

            {bullets.length > 0 ? (
              <ul className="brochureShowcase__list">
                {bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </article>

          <aside className="brochureShowcase__panel brochureShowcase__panel--gallery">
            <div className="brochureShowcase__gallery">
              {gallery.map((item) => (
                <figure
                  key={`${item.src}-${item.alt}`}
                  className="brochureShowcase__card"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="brochureShowcase__image"
                  />
                  {item.label ? (
                    <figcaption className="brochureShowcase__caption">
                      {item.label}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
