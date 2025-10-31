import { useState } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaArrowRight } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // Add state for phone number

  const whatsappNumber = "+16478817148";

  const handleClick = () => {
    const waUrl = `https://wa.me/${whatsappNumber.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(
      `Hi! I want to inquire about your services. My email is: ${email}, my phone number is: ${phone}`
    )}`;
    window.open(waUrl, "_blank");
  };

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
            <span className="block text-green-900 text-center mt-2">
              <ReactTyped
                strings={["Smart Solution"]}
                typeSpeed={90}
                backSpeed={50}
                loop
              />
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
            {/* Email input */}
            <div className="relative flex-1 w-full">
              <MdEmail className="absolute left-3 top-3.5 text-gray-400 text-xl" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 transition"
              />
            </div>

            {/* Phone input */}
            <div className="relative flex-1 w-full">
              <MdPhone className="absolute left-3 top-3.5 text-gray-400 text-xl" />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Your phone"
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 transition"
              />
            </div>

            <button
              className="flex items-center gap-2 bg-green-800 text-white px-6 py-3 rounded-xl hover:bg-green-700 hover:gap-3 transition-all duration-300 shadow-md"
              onClick={handleClick}
            >
              Get a Consultation <FaArrowRight />
            </button>
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
