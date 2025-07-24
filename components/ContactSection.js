'use client'
import Image from 'next/image'

export default function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl shadow-lg">
        
        {/* Left Side */}
        <div className="p-10 flex flex-col justify-center items-center text-white bg-[linear-gradient(180deg,rgba(7,150,146,0.77)_0%,rgba(2,48,47,0.77)_78.85%)]">
          <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left leading-snug mb-6">
            Together,<br /> We Build Bharat
          </h2>
          <div className="w-60 md:w-72">
            <Image
              src="/map-india.png"
              alt="India Map"
              width={300}
              height={300}
              className="w-full object-contain"
            />
          </div>
        </div>

        {/* Right Side - Contact Form with same background */}
        <div className="bg-[linear-gradient(180deg,rgba(7,150,146,0.77)_0%,rgba(2,48,47,0.77)_78.85%)] p-8 text-white flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-center mb-6">Contact us</h3>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Your name</label>
              <input
                type="text"
                placeholder="Write your name here"
                className="w-full border rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  className="w-full border rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone no.</label>
                <input
                  type="tel"
                  placeholder="+91XX-XXX-XXXXX"
                  className="w-full border rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                placeholder="Write your Subject"
                className="w-full border rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                rows="4"
                placeholder="Write your description here"
                className="w-full border rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="bg-primary text-white font-medium px-6 py-2 rounded-lg shadow hover:opacity-90 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
