"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const logos = [
  "/dex.png",
  "/3c.png",
  "/political.png",
  "/cvoter.png",
  "/bimarc.png",
  "/smartneta.png",
];

export default function LogoCarouselSection() {
  const middleLogo = "/logo.jpg"; 

  const firstHalf = logos.slice(0, Math.ceil(logos.length / 2));
  const secondHalf = logos.slice(Math.ceil(logos.length / 2));

  return (
    <div className="py-10 px-4 bg-white">
      <h2 className="text-center text-2xl font-bold text-primary mb-4">
        Our Network & Strategic Influencers
      </h2>
      <Marquee gradient={false} speed={80} pauseOnHover>
        <div className="flex items-center gap-10">
          {firstHalf.map((logo, index) => (
            <Image
              key={`first-${index}`}
              src={logo}
              alt={`Partner logo ${index + 1}`}
              width={120}
              height={60}
              className="object-contain w-28 h-auto"
            />
          ))}

          <Image
            src={middleLogo}
            alt="Building Bharat Logo"
            width={140}
            height={70}
            className="object-contain w-36 h-auto mx-6"
          />

          {secondHalf.map((logo, index) => (
            <Image
              key={`second-${index}`}
              src={logo}
              alt={`Partner logo ${index + 1 + firstHalf.length}`}
              width={120}
              height={60}
              className="object-contain w-28 h-auto"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
}
