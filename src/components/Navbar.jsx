import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import Logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105"
        >
          <div className="relative w-28 overflow-hidden">
            <img
              src={Logo}
              alt="Smart Solution"
              className="w-full h-full object-contain opacity-95 mix-blend-multiply"
            />
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          {[
            { name: "Mission", href: "#mission" },
            { name: "Services", href: "#services" },
            { name: "Success Stories", href: "#testimonials" },
            { name: "Contact", href: "#contact" },
          ].map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              className="relative text-gray-700 font-medium transition-colors hover:text-green-800"
              whileHover={{ scale: 1.2 }}
            >
              {link.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-green-700 transition-all duration-300 group-hover:w-full hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        {/* Inquiry Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-green-700 text-white px-5 py-2.5 rounded-full shadow-md hover:bg-green-800 transition-colors duration-300"
        >
          <FaPaperPlane className="text-sm" />
          <span>Send Inquiry</span>
        </motion.a>
      </div>
    </motion.header>
  );
}
