'use client';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

export default function InitiativeSection() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId;
    let scrollAmount = 0;

    const scrollSpeed = 0.5;

    const autoScroll = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0; 
      } else {
        container.scrollLeft += scrollSpeed;
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const items = [
    {
      title: 'College Students',
      desc: 'Students from any discipline looking to build a career in politics and policy',
      img: '/icons/college.png',
    },
    {
      title: 'Career Switchers',
      desc: 'Professionals from other fields wanting to transition into political consulting',
      img: '/icons/switcher.png',
    },
    {
      title: 'Young Professionals',
      desc: 'Early-career professionals seeking to specialize in government and policy work',
      img: '/icons/professional.png',
    },
    {
      title: 'Policy Enthusiasts',
      desc: 'Anyone passionate about public service and creating positive social impact',
      img: '/icons/enthusiast.png',
    },
  ];

  const duplicatedItems = [...items, ...items]; // Duplicate to simulate infinite scroll

  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#04382D] mb-2">
        Who Is This Initiative For?
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
        Perfect for aspiring political and policy professionals from all backgrounds.
      </p>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-6 scrollbar-hide px-4"
        style={{ scrollBehavior: 'auto', whiteSpace: 'nowrap' }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="min-w-[280px] inline-block bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-primary transition-all duration-300 ease-in-out group"
          >
            <div className="w-14 h-14 mx-auto mb-4 transform group-hover:scale-110 transition duration-300">
              <Image
                src={item.img}
                alt={item.title}
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold text-lg text-center text-[#04382D] mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-center text-gray-600 group-hover:text-gray-800 transition-colors duration-200 overflow-hidden">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
