import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -120 : 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-10 transition-all duration-300">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3 group"
        >
          <div className="relative w-32">
            <img
              src={Logo}
              alt="Smart Solution"
              className="w-full h-full object-contain"
            />
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-10">
          {[
            { name: "Mission", href: "#mission" },
            { name: "Services", href: "#services" },
            { name: "Success Stories", href: "#testimonials" },
            { name: "Contact", href: "#contact" },
          ].map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="relative text-gray-600 font-medium transition-colors hover:text-brand-primary"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Inquiry Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-2.5 rounded-full text-white bg-brand-primary hover:bg-brand-light transition-colors shadow-sm font-semibold"
        >
          <FaPaperPlane className="text-sm" />
          <span>Send Inquiry</span>
        </motion.a>
      </div>
    </motion.header>
  );
}
