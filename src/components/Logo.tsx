export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="RL3 AI Agency"
    >
      <text
        x="20"
        y="78"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="72"
        letterSpacing="-2"
        fill="#ffffff"
      >
        RL<tspan fill="#c8b88a">3</tspan>
      </text>
      <text
        x="22"
        y="104"
        fontFamily="'Space Mono', monospace"
        fontSize="11"
        letterSpacing="5"
        fill="#7a7a7a"
      >
        AI AGENCY
      </text>
    </svg>
  );
}
