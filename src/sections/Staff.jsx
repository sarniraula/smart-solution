import { motion } from "framer-motion";
import { FaUsers, FaChalkboardTeacher, FaRegHeart } from "react-icons/fa";

export default function Staff() {
  const highlights = [
    {
      icon: <FaUsers className="text-white text-4xl" />,
      title: "Experienced Professionals",
      desc: "Our team brings real-world experience from diverse industries to provide insights beyond the classroom.",
      color: "from-green-500 via-blue-500 to-purple-500",
    },
    {
      icon: <FaChalkboardTeacher className="text-white text-4xl" />,
      title: "Guidance that Empowers",
      desc: "Our counselors empower you to make confident decisions about your education and career path.",
      color: "from-pink-500 via-red-500 to-yellow-500",
    },
    {
      icon: <FaRegHeart className="text-white text-4xl" />,
      title: "Support that Cares",
      desc: "From enrollment to graduation, we offer personalized assistance, motivation, and mentorship.",
      color: "from-indigo-500 via-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="staff" className="relative py-28 px-6 bg-gradient-to-br from-purple-50 via-green-50 to-blue-50 overflow-hidden">
      
      {/* Floating color blobs */}
      <div className="absolute top-10 left-10 w-56 h-56 bg-pink-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-300/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-green-300/20 rounded-full blur-2xl"></div>

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 drop-shadow-md">
            Who Are Our Staff?
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our team is made up of dedicated professionals with real-world experience in their respective fields. 
            They've walked the path—and now, they’re here to guide you on yours.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto mt-4 leading-relaxed">
            With deep knowledge, compassion, and a commitment to your success, our staff provide personalized counseling 
            to help you choose the right program, stay on track, and build a career you’re proud of.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className={`rounded-3xl p-8 shadow-2xl border border-gray-100 flex flex-col items-center text-center space-y-4 transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br ${item.color}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex items-center justify-center w-20 h-20 rounded-full bg-white/20 shadow-lg"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-white/90 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Subtle Quote */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-gray-700 italic text-lg max-w-2xl mx-auto drop-shadow-sm">
            “The best guidance comes from those who’ve already walked the road you’re about to take.”
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
