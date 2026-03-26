type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  centered?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  text,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={centered ? "sectionTitle centered" : "sectionTitle"}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
