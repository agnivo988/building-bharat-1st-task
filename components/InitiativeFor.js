// components/InitiativeSection.jsx
import Image from "next/image";

export default function InitiativeSection() {
  const items = [
    {
      title: "College Students",
      desc: "Students from any discipline looking to build a career in politics and policy",
      img: "/icons/college.png",
    },
    {
      title: "Career Switchers",
      desc: "Professionals from other fields wanting to transition into political consulting",
      img: "/icons/switcher.png",
    },
    {
      title: "Young Professionals",
      desc: "Early-career professionals seeking to specialize in government and policy work",
      img: "/icons/professional.png",
    },
    {
      title: "Policy Enthusiasts",
      desc: "Anyone passionate about public service and creating positive social impact",
      img: "/icons/enthusiast.png",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#04382D] mb-2">
        Who Is This Initiative For?
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Perfect for Aspiring Political and policy professionals from all backgrounds
      </p>

      <div className="flex overflow-x-auto space-x-6 scrollbar-hide px-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="min-w-[280px] flex-shrink-0 bg-white border-2 border-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-200"
          >
            <div className="w-12 h-12 mx-auto mb-4">
              <Image
                src={item.img}
                alt={item.title}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold text-lg text-center text-[#04382D] mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-center text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
    
  );
}
