'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-10 sm:py-16 bg-white"
      ref={ref}
    >
      <motion.div
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl shadow-xl bg-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Left Side */}
        <div className="p-8 sm:p-10 flex flex-col justify-center items-center text-white bg-[linear-gradient(180deg,rgba(7,150,146,0.9)_0%,rgba(2,48,47,0.9)_100%)]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center leading-snug mb-6">
            Together,<br /> We Build Bharat
          </h2>
          <div className="w-40 sm:w-60 md:w-72">
            <Image
              src="/map-india.png"
              alt="India Map"
              width={300}
              height={300}
              className="w-full object-contain"
            />
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-[linear-gradient(180deg,rgba(7,150,146,0.9)_0%,rgba(2,48,47,0.9)_100%)] p-6 sm:p-8 text-white flex flex-col justify-center">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6">Contact Us</h3>

          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Your name</label>
              <input
                type="text"
                placeholder="Write your name here"
                className="w-full border rounded-lg px-4 py-2 sm:py-2.5 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-transform duration-300 focus:scale-105"
              />
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  className="w-full border rounded-lg px-4 py-2 sm:py-2.5 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-transform duration-300 focus:scale-105"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone no.</label>
                <input
                  type="tel"
                  placeholder="+91XX-XXX-XXXXX"
                  className="w-full border rounded-lg px-4 py-2 sm:py-2.5 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-transform duration-300 focus:scale-105"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                placeholder="Write your subject"
                className="w-full border rounded-lg px-4 py-2 sm:py-2.5 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-transform duration-300 focus:scale-105"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                rows={4}
                placeholder="Write your description here"
                className="w-full border rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-transform duration-300 focus:scale-105 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                Submit
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  )
}

