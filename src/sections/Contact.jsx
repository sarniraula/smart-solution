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
      className="relative py-28 px-6 overflow-hidden bg-gray-50"
    >
      <div className="max-w-6xl mx-auto space-y-20 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4 text-brand-primary">
            Reach Us At
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto mb-6">
            Connect with us — we’re always here to support you.
          </p>
          <Map />
        </motion.div>

        {/* Contact + Hours Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Contact Card */}
          <div
            className="p-10 rounded-2xl relative shadow-lg border border-gray-100 overflow-hidden bg-cover bg-center bg-no-repeat group"
            style={{ backgroundImage: `url(${buildingImage})` }}
          >
            <div className="absolute inset-0 bg-brand-primary/90 transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <FaUserTie className="text-white text-2xl" />
                <h3 className="text-3xl font-bold text-white">
                  Contact Info
                </h3>
              </div>

              <ul className="space-y-6 text-white">
                <li className="flex items-start gap-4">
                  <div className="bg-white/20 p-2 rounded-full"><FaUserTie /></div>
                  <p>
                    <span className="font-semibold text-white/90">Shan Kumar</span>, Career Counsellor
                    <br /> <span className="text-white/70">Smart Solutions</span>
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <div className="bg-white/20 p-2 rounded-full"><FaMapMarkerAlt /></div>
                  <p>
                    2855 Markham Road, Suite 305—01,
                    <br /> Scarborough, ON M1X 0C3
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <div className="bg-white/20 p-2 rounded-full"><FaPhoneAlt /></div>
                  <a
                    href="tel:+16478817148"
                    className="hover:text-brand-orange transition font-medium"
                  >
                    (647) 881-7148
                  </a>
                </li>

                <li className="flex items-start gap-4">
                  <div className="bg-white/20 p-2 rounded-full"><FaEnvelope /></div>
                  <a
                    href="mailto:no1smartsolution@gmail.com"
                    className="hover:text-brand-orange transition font-medium"
                  >
                    no1smartsolution@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Hours Card */}
          <div className="p-10 rounded-2xl shadow-lg border border-gray-100 bg-white">
            <div className="flex items-center gap-3 mb-8">
              <FaClock className="text-brand-primary text-2xl" />
              <h3 className="text-3xl font-bold text-gray-900">
                Hours of Operation
              </h3>
            </div>

            <ul className="text-gray-600 space-y-4 font-medium">
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
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
                  {day}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {[
            {
              icon: <FaWhatsapp />,
              bg: "bg-[#25D366]",
              link: "https://wa.me/16478817148",
            },
            {
              icon: <FaFacebookF />,
              bg: "bg-[#1877F2]",
              link: "https://facebook.com",
            },
            {
              icon: <FaInstagram />,
              bg: "bg-[#E4405F]",
              link: "https://instagram.com",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              className={`
                w-14 h-14 flex items-center justify-center
                rounded-full shadow-lg text-white ${item.bg}
                hover:scale-110 hover:shadow-xl transition-all duration-300
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
          className="text-center mt-10 text-gray-500 text-sm"
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
