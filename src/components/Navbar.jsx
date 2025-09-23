import Logo from '../assets/logo.png'; // import at the top

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={Logo} alt="Smart Solution" className="w-auto h-20" />
        </a>

        <nav className="space-x-6 hidden md:flex">
          <a href="#mission" className="text-gray-700 hover:text-green-800">Mission</a>
          <a href="#services" className="text-gray-700 hover:text-green-800">Services</a>
          <a href="#testimonials" className="text-gray-700 hover:text-green-800">Success Stories</a>
          <a href="#contact" className="text-gray-700 hover:text-green-800">Contact</a>
        </nav>

        <button className="btn-primary">Send inquiry</button>
      </div>
    </header>
  );
}
