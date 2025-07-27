'use client'
import Image from 'next/image';

const features = [
  {
    title: 'Live Interactive Sessions',
    description: `Learn directly from policy experts, former MPs, senior bureaucrats, and successful political consultants through live, interactive sessions.`,
    points: [
      'Weekly live sessions with industry experts',
      'Q&A sessions with former parliamentarians',
      'Interactive policy workshops',
    ],
    image: '/images/session.png', // replace with your image path
  },
  {
    title: 'Guaranteed Job/Internship Opportunities',
    description: `Access exclusive job openings and internship opportunities with partner organizations, think tanks, and political parties.`,
    points: [
      'Exclusive partnership with 50+ organizations',
      'Direct placement assistance',
      'Networking events with industry leaders',
    ],
    image: '/images/internship.png',
  },
  {
    title: 'Boost Your Resume with Projects & Hackathons',
    description: `Work on real policy projects, participate in governance hackathons, and build a standout portfolio.`,
    points: [
      'Real-world policy research projects',
      'Monthly governance hackathons',
      'Published research opportunities',
    ],
    image: '/images/hackathon.png',
  },
  {
    title: 'Mock Interviews & Previous Year Questions',
    description: `Practice with curated questions from top consulting firms, think tanks, and government interviews.`,
    points: [
      '1000+ previous year interview questions',
      'Weekly mock interview sessions',
      'Personalized feedback and improvement plans',
    ],
    image: '/images/mock-interview.png',
  },
];

export default function FeatureSection() {
  return (
    <div className="px-4 md:px-16 py-12 space-y-20 bg-white">
      {features.map((feature, index) => (
        <div key={index} className={`flex flex-col-reverse md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-10`}>
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-xl font-semibold text-[#00473E]">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
            <ul className="list-disc ml-5 text-gray-600 space-y-1">
              {feature.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="group relative w-full h-auto overflow-hidden rounded-xl shadow-md">
  <Image
    src={feature.image}
    alt={feature.title}
    width={600}
    height={400}
    className="transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:rotate-[0.5deg]"
  />
</div>

        </div>
      ))}
    </div>
  );
}
