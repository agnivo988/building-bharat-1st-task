import Image from 'next/image'
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaDiscord
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white py-10 px-4 sm:px-8 md:px-20 text-[#00312F] text-sm sm:text-base">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo and Info */}
        <div className="text-center px-10 md:text-left">
          <div className="flex justify-center md:justify-start space-x-3 mb-4">
            <Image src="/logo.jpg" alt="Building Bharat" width={50} height={50} />
            <div>
              <p className="font-bold text-lg leading-4">BUILDING</p>
              <p className="text-primary font-bold text-lg">BHARAT</p>
            </div>
          </div>
          <p className="text-xs sm:text-sm font-medium mb-2">
            India’s most trusted policy & political education platform
          </p>
          <p className="text-xs sm:text-sm">Plot No XX, Building Bharat Campus,</p>
          <p className="text-xs sm:text-sm mb-2">New Delhi, India – 1100XX</p>
          <p className="text-xs sm:text-sm flex justify-center md:justify-start items-center">
            📞 Contact Us: +91 XXXXXXXXXX
          </p>
        </div>

        {/* Column 1 */}
        <div className="text-center md:text-left px-10">
          <h4 className="font-bold text-base mb-2">Building Bharat</h4>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blogs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="text-center md:text-left px-10">
          <h4 className="font-bold text-base mb-2">Programs</h4>
          <ul className="space-y-1">
            <li>Certificate Courses</li>
            <li>Live Workshops</li>
            <li>Research Projects</li>
            <li>Placement Assistance</li>
            <li>Governance</li>
            <li>Hackathons</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left px-20">
          <h4 className="font-bold text-base mb-2">Follow us</h4>
          <ul className="space-y-3">
            <li className="flex justify-center md:justify-start items-center gap-2 sm:gap-3">
              <FaInstagram /> Instagram
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2 sm:gap-3">
              <FaLinkedinIn /> LinkedIn
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2 sm:gap-3">
              <FaFacebookF /> Facebook
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2 sm:gap-3">
              <FaYoutube /> YouTube
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2 sm:gap-3">
              <FaDiscord /> Discord
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

