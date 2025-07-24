export default function Hero() {
  return (
    <section className="bg-white text-gray-900 px-8 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            <span className="text-dark">Crack Political and policies roles with Confidence!</span>
          </h1>
          <h2 className="text-primary text-2xl md:text-3xl font-bold mt-4">
            Learn. Lead. Transform Bharat
          </h2>
          <p className="mt-4 text-gray-700">
            We offer a world class curriculum and expert mentorship to help you break into politics and policy roles.
            No background needed—just your passion to lead and transform Bharat.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-orange-600 transition">
              Start Learning For Free
            </button>
            <button className="bg-orange-100 text-primary px-6 py-3 rounded-md hover:bg-orange-200 transition">
              Join Premium
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-right">
          <h1 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
            Building <span className="text-primary">BHARAT</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
