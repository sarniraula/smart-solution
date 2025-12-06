import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import Logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-xl shadow-lg z-50 border-b border-gray-200"
    >
      {/* Floating accent circles */}
      <div className="absolute -top-5 left-10 w-20 h-20 bg-purple-300/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-5 right-10 w-24 h-24 bg-green-300/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center relative z-10">
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
              className="relative text-gray-700 font-semibold transition-colors hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-700 hover:via-blue-700 hover:to-purple-700"
              whileHover={{ scale: 1.15 }}
            >
              {link.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-gradient-to-r from-green-700 via-blue-700 to-purple-700 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        {/* Inquiry Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full shadow-lg text-white bg-gradient-to-r from-green-600 via-blue-600 to-purple-700 hover:from-green-700 hover:via-blue-700 hover:to-purple-800 transition-all duration-300"
        >
          <FaPaperPlane className="text-sm" />
          <span className="font-medium">Send Inquiry</span>
        </motion.a>
      </div>
    </motion.header>
  );
}
