export default function LogoCarousel() {
  const logos = [
    { src: "/dex.png", alt: "Dex" },
    { src: "/smartneta.png", alt: "Smart Neta" },
    { src: "/political.png", alt: "Political" },
    { src: "/cvoter.png", alt: "Cvoter" },
    { src: "/3c.png", alt: "3C" },
    { src: "/bimarc.png", alt: "Bimarc Neta" },
  ];

  return (
    <div className="overflow-hidden bg-white py-6">
      <div className="flex gap-10 animate-scroll">
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
