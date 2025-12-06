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
import buildingImage from "../assets/building.jpeg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-gradient-to-br from-green-50 via-purple-50 to-blue-50 overflow-hidden"
    >
      {/* Floating blobs for richness */}
      <div className="absolute top-0 left-10 w-60 h-60 bg-pink-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-300/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-green-300/20 rounded-full blur-2xl"></div>

      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-700 via-blue-700 to-purple-700 text-transparent bg-clip-text">
            Reach Us At
          </h2>
          <p className="text-gray-700 text-lg max-w-xl mx-auto mb-6">
            Connect with us — we’re always here to support you.
          </p>
          <Map />
        </motion.div>

        {/* Contact + Hours Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Contact Card */}
          <div
            className="p-10 rounded-3xl relative shadow-2xl border overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${buildingImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-800/20 to-green-800/40 backdrop-blur-[1px] rounded-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <FaUserTie className="text-white text-2xl" />
                <h3 className="text-3xl font-semibold text-white">
                  Contact Info
                </h3>
              </div>

              <ul className="space-y-5 text-white">
                <li className="flex items-start gap-3">
                  <FaUserTie className="mt-1 text-purple-300" />
                  <p>
                    <span className="font-semibold">Shan Kumar</span>, Career
                    Counsellor
                    <br /> Smart Solutions
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 text-red-300" />
                  <p>
                    2855 Markham Road, Suite 305—01,
                    <br /> Scarborough, ON M1X 0C3
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <FaPhoneAlt className="mt-1 text-green-300" />
                  <a
                    href="tel:+16478817148"
                    className="hover:text-blue-200 transition"
                  >
                    (647) 881-7148
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <FaEnvelope className="mt-1 text-yellow-300" />
                  <a
                    href="mailto:no1smartsolution@gmail.com"
                    className="hover:text-blue-200 transition"
                  >
                    no1smartsolution@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Hours Card */}
          <div className="p-10 rounded-3xl shadow-2xl border bg-white/70 backdrop-blur-lg bg-gradient-to-br from-white/60 via-purple-50 to-green-50">
            <div className="flex items-center gap-3 mb-6">
              <FaClock className="text-purple-700 text-2xl" />
              <h3 className="text-3xl font-semibold text-purple-800">
                Hours of Operation
              </h3>
            </div>

            <ul className="text-gray-700 space-y-3 font-medium">
              {[
                "Monday: 9 AM – 6 PM",
                "Tuesday: 9 AM – 6 PM",
                "Wednesday: 9 AM – 6 PM",
                "Thursday: 9 AM – 6 PM",
                "Friday: 9 AM – 6 PM",
                "Saturday: 10 AM – 3 PM",
                "Sunday: 10 AM – 3 PM",
              ].map((day, idx) => (
                <li
                  key={idx}
                  className="hover:text-purple-700 transition-colors"
                >
                  {day}
                </li>
              ))}
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
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {[
            {
              icon: <FaWhatsapp />,
              gradient: "from-green-500 to-emerald-600",
              link: "https://wa.me/16478817148",
            },
            {
              icon: <FaFacebookF />,
              gradient: "from-blue-500 to-blue-700",
              link: "https://facebook.com",
            },
            {
              icon: <FaInstagram />,
              gradient: "from-pink-500 via-red-500 to-yellow-500",
              link: "https://instagram.com",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              className={`
                w-16 h-16 flex items-center justify-center
                rounded-full shadow-2xl text-white bg-gradient-to-br ${item.gradient}
                hover:scale-110 transition-all duration-300
              `}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <span className="text-2xl">{item.icon}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer Text */}
        <motion.p
          className="text-center mt-10 text-gray-600 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          We’re committed to providing personalized guidance—reach out anytime.
        </motion.p>
      </div>
    </section>
  );
}
