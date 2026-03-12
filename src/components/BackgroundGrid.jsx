export default function BackgroundGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-motion opacity-30" />
      <div className="noise-overlay" />
    </div>
  );
}
