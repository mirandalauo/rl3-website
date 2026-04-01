export default function SectionLabel({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <p className="section-label">
      {number} — {title}
    </p>
  );
}
