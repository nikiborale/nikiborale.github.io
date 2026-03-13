export default function BackgroundGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 watercolor-surface" />
      <div className="absolute inset-0 floral-texture opacity-45" />
      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-blush/25 blur-3xl" />
      <div className="absolute right-10 top-12 h-72 w-72 rounded-full bg-lavender/35 blur-3xl" />
      <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-sage/28 blur-3xl" />
    </div>
  );
}
