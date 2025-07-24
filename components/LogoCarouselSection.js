'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const logos = [
  '/logos/dex.png',
  '/logos/political.png',
  '/logos/cvoter.png',
  '/logos/bimarc.png',
  '/logos/smartneta.png',
  '/logos/3c.png',
]

export default function LogoCarouselSection() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const container = scrollRef.current
    let scrollAmount = 0
    const scrollStep = 1
    let animationFrame

    const scrollLogos = () => {
      if (container) {
        scrollAmount += scrollStep
        container.scrollLeft = scrollAmount
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0 // reset
        }
        animationFrame = requestAnimationFrame(scrollLogos)
      }
    }

    animationFrame = requestAnimationFrame(scrollLogos)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <section className="bg-white py-12 px-4 md:px-16 relative">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
        Our Network & Strategic Influencers
      </h2>

      <div className="relative flex justify-center items-center">
        {/* Center Logo */}
        <div className="z-10 relative bg-white shadow-lg rounded-xl p-6 border border-orange-300">
          <Image
            src="/logos/logo.jpg"
            alt="Building Bharat"
            width={150}
            height={150}
            className="mx-auto"
          />
        </div>

        {/* Scrolling Logos */}
        <div className="absolute w-full overflow-hidden">
          <div
            className="flex gap-8 items-center whitespace-nowrap px-20 animate-none"
            ref={scrollRef}
          >
            {[...logos, ...logos].map((logo, i) => (
              <Image
                key={i}
                src={logo}
                alt={`partner-${i}`}
                width={90}
                height={90}
                className="object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
