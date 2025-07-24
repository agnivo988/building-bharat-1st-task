export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Student Leader, Nagpur",
      image: "/testimonials/priya.png",
      title: "Student to Social Impact Leader",
      text: "Building Bharat transformed the way I learn and think. With hands-on projects, expert mentorship, and constant support, I discovered my leadership potential. The journey wasn’t easy, but every doubt and every win was celebrated."
    },
    {
      name: "Ravi Kumar",
      role: "Policy Analyst, Delhi",
      image: "/testimonials/ravi.png",
      title: "From Student to Policy Analyst",
      text: "The Building Bharat curriculum gave me the confidence to take up real-world policy challenges. With practical exposure and guidance from mentors, I was able to turn my passion into a career."
    },
    {
      name: "Sneha Verma",
      role: "Youth Leader, Lucknow",
      image: "/testimonials/sneha.png",
      title: "Leadership Through Mentorship",
      text: "Being part of Building Bharat has been life-changing. I learned how to manage initiatives, lead teams, and create real impact in my community."
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-dark">
          Stories That Inspire
        </h2>
      </div>

      {/* Scroll Snap Container */}
      <div className="max-w-4xl mx-auto mt-10 overflow-x-auto flex snap-x snap-mandatory scrollbar-hide scroll-smooth">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full md:w-[500px] bg-white rounded-2xl shadow-md p-6 mx-2 snap-center"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-xl"
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
    </section>
  );
}
