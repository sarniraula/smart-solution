export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

        {/* Left side text */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Empower Your Career with <span className="text-green-800">Smart Solution</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            We believe in the power of dreams and the promise of potential. Your career is more than a goal—it's our mission. 
            With unwavering passion and a deep commitment to your education, we’re here to guide, support, and empower you every step of the way.
          </p>

          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email for consultation"
              className="flex-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800"
            />
            <button className="bg-green-800 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
              Get a Consultation
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-2">
            We’re here to support you in every step of your educational journey.
          </p>
        </div>

        {/* Right side image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.pexels.com/photos/3757369/pexels-photo-3757369.jpeg"
            alt="Career Guidance"
            className="rounded-2xl shadow-lg max-w-md"
          />
        </div>

      </div>
    </section>
  );
}
