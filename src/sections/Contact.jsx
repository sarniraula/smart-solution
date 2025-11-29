import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaUserTie,
} from "react-icons/fa";
import Map from "../components/Map";
import buildingImage from '../assets/building.jpeg'

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white to-green-50 py-24 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            Reach Us At
          </h2>
          <p className="text-gray-700 text-lg">
            Connect with us through your favorite platforms — we’re always here
            to help.
          </p>

          {/* Maps Section */}
          <Map />
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left: Contact Details */}
          <div
            className="bg-white p-10 rounded-2xl shadow-md border border-gray-100 bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: `url(${buildingImage})`,
            }}
          >
            {/* Overlay to make the text readable */}
            <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

            {/* Actual content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <FaUserTie className="text-white text-2xl" />
                <h3 className="text-2xl font-semibold text-white">
                  Contact Information
                </h3>
              </div>

              <ul className="space-y-4 text-white">
                <li className="flex items-start gap-3">
                  <FaUserTie className="text-white mt-1" />
                  <p>
                    <span className="font-semibold">Shan Kumar</span>, Career Counsellor
                    <br />
                    Smart Solutions
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-white mt-1" />
                  <p>
                    2855 Markham Road, Suite 305—01,
                    <br />
                    Scarborough, ON M1X 0C3
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <FaPhoneAlt className="text-white mt-1" />
                  <a
                    href="tel:+16478817148"
                    className="hover:text-blue-200 transition-colors"
                  >
                    (647) 881-7148
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <FaEnvelope className="text-white mt-1" />
                  <a
                    href="mailto:no1smartsolution@gmail.com"
                    className="hover:text-blue-200 transition-colors"
                  >
                    no1smartsolution@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>


          {/* Right: Hours of Operation */}
          <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <FaClock className="text-green-700 text-2xl" />
              <h3 className="text-2xl font-semibold text-green-800">
                Hours of Operation
              </h3>
            </div>
            <ul className="text-gray-700 space-y-3">
              <li>
                <strong>Monday:</strong> 9 AM – 6 PM
              </li>
              <li>
                <strong>Tuesday:</strong> 9 AM – 6 PM
              </li>
              <li>
                <strong>Wednesday:</strong> 9 AM – 6 PM
              </li>
              <li>
                <strong>Thursday:</strong> 9 AM – 6 PM
              </li>
              <li>
                <strong>Friday:</strong> 9 AM – 6 PM
              </li>
              <li>
                <strong>Saturday:</strong> 10 AM – 3 PM
              </li>
              <li>
                <strong>Sunday:</strong> 10 AM – 3 PM
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {[
            {
              icon: <FaWhatsapp />,
              color: "bg-green-600",
              link: "https://wa.me/16478817148",
            },
            {
              icon: <FaFacebookF />,
              color: "bg-blue-600",
              link: "https://www.facebook.com/",
            },
            {
              icon: <FaInstagram />,
              color: "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500",
              link: "https://www.instagram.com/",
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-14 h-14 flex items-center justify-center rounded-full shadow-md text-white ${social.color} hover:scale-110 transition-transform duration-300`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <span className="text-2xl">{social.icon}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Closing Line */}
        <motion.div
          className="text-center mt-16 text-gray-600 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p>
            We’re committed to providing personalized guidance and support — reach
            out anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
