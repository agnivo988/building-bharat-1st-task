'use client'
import Image from 'next/image'

const features = [
  {
    title: 'Live Interactive Sessions',
    description: `Learn directly from policy experts, former MPs, senior bureaucrats, and successful political consultants through live, interactive sessions.`,
    points: [
      'Weekly live sessions with industry experts',
      'Q&A sessions with former parliamentarians',
      'Interactive policy workshops',
    ],
    image: '/images/session.png',
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
]

export default function FeatureSection() {
  return (
    <section className="px-4 sm:px-8 md:px-16 py-10 sm:py-16 bg-white space-y-20">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex flex-col-reverse md:flex-row ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          } items-center gap-10`}
        >
          {/* Text Block */}
          <div className="md:w-1/2 space-y-6 sm:space-y-8 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#00473E]">
              {feature.title}
            </h3>
            <p className="text-gray-700 text-base sm:text-lg">{feature.description}</p>
            <ul className="list-disc ml-5 text-gray-600 space-y-2 text-sm sm:text-base">
              {feature.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Image Block */}
          <div className="w-full max-w-md md:w-1/2">
            <div className="group relative w-full overflow-hidden rounded-xl shadow-md">
              <Image
                src={feature.image}
                alt={feature.title}
                width={600}
                height={400}
                className="w-full h-auto object-contain transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:rotate-[0.5deg]"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
