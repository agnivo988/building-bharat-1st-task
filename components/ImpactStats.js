'use client'
import { GraduationCap, Link2, Users } from 'lucide-react'

const stats = [
  { value: '2500+', label: 'Students Trained' },
  { value: '1200+', label: 'Successful Placements' },
  { value: '50+', label: 'Partner Organizations' },
  { value: '15+', label: 'Specialized Courses' },
];

const highlights = [
  {
    title: 'Excellence in Education',
    description: 'Recognized as India’s leading platform for political and policy education with industry-validated curriculum.',
    icon: <GraduationCap className="w-6 h-6 text-white" />,
  },
  {
    title: 'Strong Industry Network',
    description: 'Partnerships with leading think tanks, political parties, and government organizations across India.',
    icon: <Link2 className="w-6 h-6 text-white" />,
  },
  {
    title: 'Alumni Success',
    description: 'Our alumni are making real impact in Parliament, state governments, and top consulting firms nationwide.',
    icon: <Users className="w-6 h-6 text-white" />,
  },
];

export default function ImpactStats() {
  return (
    <section className="bg-gradient-to-b from-[#08C3BE] to-[#045D5B] text-white py-16 px-6 md:px-20 space-y-14">
      
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold">Building Bharat Till Date</h2>
        <p className="text-white/80 text-sm md:text-base">
          Our journey in shaping India’s political and policy landscape
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="w-32 sm:w-40 md:w-48">
            <h3 className="text-2xl md:text-3xl font-bold">{stat.value}</h3>
            <p className="text-sm text-white/80">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {highlights.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 bg-white/10 border border-white/20 shadow-sm hover:shadow-lg transition duration-300 backdrop-blur"
          >
            <div className="bg-white/20 w-10 h-10 flex items-center justify-center rounded-full mb-4">
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
