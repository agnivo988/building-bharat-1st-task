'use client';
import { GraduationCap, Link2, Users } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const stats = [
  { value: 2500, suffix: '+', label: 'Students Trained' },
  { value: 1200, suffix: '+', label: 'Successful Placements' },
  { value: 50, suffix: '+', label: 'Partner Organizations' },
  { value: 15, suffix: '+', label: 'Specialized Courses' },
];

const highlights = [
  {
    title: 'Excellence in Education',
    description:
      'Recognized as India’s leading platform for political and policy education with industry-validated curriculum.',
    icon: <GraduationCap className="w-6 h-6 text-white" />,
  },
  {
    title: 'Strong Industry Network',
    description:
      'Partnerships with leading think tanks, political parties, and government organizations across India.',
    icon: <Link2 className="w-6 h-6 text-white" />,
  },
  {
    title: 'Alumni Success',
    description:
      'Our alumni are making real impact in Parliament, state governments, and top consulting firms nationwide.',
    icon: <Users className="w-6 h-6 text-white" />,
  },
];

export default function ImpactStats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  return (
    <section
      className="bg-gradient-to-b from-[#08C3BE] to-[#045D5B] text-white py-16 px-6 md:px-20 space-y-14"
      ref={ref}
    >
      {/* Title */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold">Building Bharat Till Date</h2>
        <p className="text-white/80 text-sm md:text-base">
          Our journey in shaping India’s political and policy landscape
        </p>
      </div>

      {/* Stats with CountUp */}
      <div className="flex flex-wrap justify-center gap-8 text-center">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="group rounded-2xl p-6 bg-white/10 border border-white/20 shadow-sm hover:shadow-xl hover:bg-white/20 hover:border-white/40 transform hover:scale-[1.03] transition-all duration-300 ease-in-out backdrop-blur cursor-pointer"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              {startCount ? (
                <CountUp end={stat.value} duration={3.5} separator="," />
              ) : (
                '0'
              )}
              {stat.suffix}
            </h3>
            <p className="text-sm text-white/80">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {highlights.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 bg-white/10 border border-white/20 shadow-sm hover:shadow-xl hover:bg-white/20 hover:border-white/40 transform hover:scale-[1.03] transition-all duration-300 ease-in-out backdrop-blur cursor-pointer"
          >
            <div className="bg-white/20 w-10 h-10 flex items-center justify-center rounded-full mb-4 group-hover:bg-white/30 transition-colors duration-300">
              {item.icon}
            </div>
            <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
            <p className="text-white/80 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


