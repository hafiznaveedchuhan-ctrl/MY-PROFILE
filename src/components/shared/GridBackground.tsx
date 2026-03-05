export const GridBackground = () => {
  return (
    <div
      className="absolute inset-0 opacity-5 pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(0, 240, 255, 0.2) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }}
    />
  );
};
