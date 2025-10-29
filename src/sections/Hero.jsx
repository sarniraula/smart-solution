import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ReactWhatsapp from "react-whatsapp";

export default function Hero() {
  const [email, setEmail] = useState("");

  // WhatsApp number (use your business number)
  const whatsappNumber = "+16478817148";

  // Prefilled message
  const message = `Hi! I want to inquire about your services. My email is: ${email}`;

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

        {/* Left side text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Empower Your Career with{" "}
            <span className="text-green-800 relative inline-block">
              Smart Solution
              <span className="absolute bottom-0 left-0 w-full h-1 bg-green-700 rounded-full"></span>
            </span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We believe in the power of dreams and the promise of potential. 
            Your career is more than a goal—it's our mission. 
            With unwavering passion and a deep commitment to your education, 
            we’re here to guide, support, and empower you every step of the way.
          </p>

          {/* Form + WhatsApp button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-3">
            <div className="relative flex-1 w-full">
              <MdEmail className="absolute left-3 top-3.5 text-gray-400 text-xl" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for consultation"
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 transition"
              />
            </div>

            <ReactWhatsapp
              number={whatsappNumber}
              message={message}
              className="flex items-center gap-2 bg-green-800 text-white px-6 py-3 rounded-xl hover:bg-green-700 hover:gap-3 transition-all duration-300 shadow-md cursor-pointer"
            >
              Get a Consultation
              <FaArrowRight />
            </ReactWhatsapp>
          </div>

          <p className="text-sm text-gray-500">
            We’re here to support you in every step of your educational journey.
          </p>
        </motion.div>

        {/* Right side image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src="https://images.pexels.com/photos/3757369/pexels-photo-3757369.jpeg"
            alt="Career Guidance"
            className="rounded-2xl shadow-2xl max-w-md cursor-pointer"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>

      </div>
    </section>
  );
}
