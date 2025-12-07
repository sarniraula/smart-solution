import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-4 gap-10 mb-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-brand-secondary to-brand-blue bg-clip-text text-transparent">Smart Solution</h2>
          <p className="text-gray-400 leading-relaxed max-w-sm">
            Empowering your career journey with expert guidance, financial support, and educational opportunities.
            Your success is our mission.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-brand-secondary">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#mission" className="hover:text-white transition-colors">Our Mission</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#testimonials" className="hover:text-white transition-colors">Success Stories</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-brand-secondary">Connect</h3>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-secondary transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Smart Solution. All rights reserved. | Designed with care.
        </p>
      </div>
    </footer>
  );
}
