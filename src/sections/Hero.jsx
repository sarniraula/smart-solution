import { useState } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaArrowRight } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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
    <section className="relative py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10">

        {/* Left side text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Empower Your Career with{" "}
            <span className="text-brand-primary block mt-2">
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
            With passion and dedication, we guide and empower you every step of the way.
          </p>

          {/* Form */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-3">

            {/* Email input */}
            <div className="relative flex-1 w-full">
              <MdEmail className="absolute left-3 top-3.5 text-gray-400 text-xl" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition text-gray-800 placeholder-gray-400 bg-gray-50"
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
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition text-gray-800 placeholder-gray-400 bg-gray-50"
              />
            </div>

            {/* Button */}
            <button
              className="flex items-center gap-2 bg-brand-primary text-white px-7 py-3 rounded-lg hover:bg-brand-light transition-colors shadow-md font-semibold"
              onClick={handleClick}
            >
              Get a Consultation <FaArrowRight />
            </button>
          </div>

          <p className="text-sm text-gray-500">
            We’re here to support you every step of your educational journey.
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
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <motion.img
              src="https://images.pexels.com/photos/3757369/pexels-photo-3757369.jpeg"
              alt="Career Guidance"
              className="max-w-md object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
