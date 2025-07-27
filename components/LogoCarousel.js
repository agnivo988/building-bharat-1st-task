'use client'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

const logos = [
  '/dex.png',
  '/cvoter.png',
  '/3c.png',
  '/bimarc.png',
  '/smartneta.png',
  '/political.png'
]

export default function LogoCarousel() {
  return (
    <div className="w-full py-6 bg-white">
      <Marquee speed={100} pauseOnHover gradient={false} className="flex items-center">
        {logos.map((logo, index) => (
          <div key={index} className="mx-8 min-w-[120px] flex items-center justify-center">
            <Image
              src={logo}
              alt={`Partner Logo ${index + 1}`}
              width={100}
              height={60}
              className="object-contain h-12 w-auto"
            />
          </div>
        ))}
      </Marquee>
    </div>
  )
}
