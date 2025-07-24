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
    <footer className="bg-white py-10 px-4 md:px-20 text-sm text-[#00312F]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 ">

        {/* Logo and Info */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image src="/logo.jpg" alt="Building Bharat" width={50} height={50} />
            <div>
              <p className="font-bold text-lg leading-4">BUILDING</p>
              <p className="text-primary font-bold text-lg">BHARAT</p>
            </div>
          </div>
          <p className="text-[13px] font-medium mb-2">
            India’s most trusted policy & political education platform
          </p>
          <p className="text-[13px]">Plot No XX, Building Bharat Campus,</p>
          <p className="text-[13px] mb-2">New Delhi, India – 1100XX</p>
          <p className="text-[13px] flex items-center">
            📞 Contact Us: +91 XXXXXXXXXX
          </p>
        </div>

        {/* Column 1 */}
        <div>
          <h4 className="font-bold text-[15px] mb-2">Building Bharat</h4>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blogs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-bold text-[15px] mb-2">Programs</h4>
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
        <div>
          <h4 className="font-bold text-[15px] mb-2">Follow us</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaInstagram /> Instagram
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedinIn /> LinkedIn
            </li>
            <li className="flex items-center gap-2">
              <FaFacebookF /> Facebook
            </li>
            <li className="flex items-center gap-2">
              <FaYoutube /> YouTube
            </li>
            <li className="flex items-center gap-2">
              <FaDiscord /> Discord
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
