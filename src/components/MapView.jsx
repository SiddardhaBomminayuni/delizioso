export default function MapView({ lat, lng, zoom = 12, title, className = "", children }) {
  const src = `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

  return (
    <div className={`relative overflow-hidden bg-[#e5e3df] ${className}`}>
      <iframe
        title={title}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 size-full border-0"
      />
      {children}
    </div>
  );
}
