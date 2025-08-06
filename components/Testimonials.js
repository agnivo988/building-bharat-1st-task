'use client'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Student Leader, Nagpur",
      image: "/testimonials/priya.png",
      title: "Student to Social Impact Leader",
      text: "Building Bharat transformed the way I learn and think. With hands-on projects, expert mentorship, and constant support, I discovered my leadership potential.",
    },
    {
      name: "Ravi Kumar",
      role: "Policy Analyst, Delhi",
      image: "/testimonials/ravi.png",
      title: "From Student to Policy Analyst",
      text: "The Building Bharat curriculum gave me the confidence to take up real-world policy challenges. With practical exposure and guidance from mentors, I was able to turn my passion into a career.",
    },
    {
      name: "Sneha Verma",
      role: "Youth Leader, Lucknow",
      image: "/testimonials/sneha.png",
      title: "Leadership Through Mentorship",
      text: "Being part of Building Bharat has been life-changing. I learned how to manage initiatives, lead teams, and create real impact in my community.",
    },
  ]

  const duplicated = [...testimonials, ...testimonials] // for infinite loop

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
          Stories That Inspire
        </h2>

        {/* Auto-scroll on large screens */}
        <div className="relative">
          <div className="hidden md:flex w-max animate-slide-scroll space-x-6">
            {duplicated.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[500px] bg-white rounded-xl shadow-md p-6"
              >
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      {item.text}
                    </p>
                    <p className="text-primary font-semibold">{item.name}</p>
                    <p className="text-gray-600 text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fallback: vertical layout on small screens */}
          <div className="flex flex-col space-y-6 md:hidden">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="w-full bg-white rounded-xl shadow-md p-6"
              >
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      {item.text}
                    </p>
                    <p className="text-primary font-semibold">{item.name}</p>
                    <p className="text-gray-600 text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}





