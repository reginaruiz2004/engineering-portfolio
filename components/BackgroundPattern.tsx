export default function BackgroundPattern() {
  return (
    <div
      className="fixed inset-0 -z-50 opacity-[0.35]"
      style={{
        backgroundImage:
          "radial-gradient(circle, #1F3D2E1a 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />
  );
}