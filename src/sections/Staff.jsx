import { motion } from "framer-motion";
import { FaUsers, FaChalkboardTeacher, FaRegHeart } from "react-icons/fa";

export default function Staff() {
  const highlights = [
    {
      icon: <FaUsers className="text-green-800 text-3xl" />,
      title: "Experienced Professionals",
      desc: "Our team brings real-world experience from diverse industries to provide you with insights that go beyond the classroom.",
    },
    {
      icon: <FaChalkboardTeacher className="text-green-800 text-3xl" />,
      title: "Guidance that Empowers",
      desc: "Our counselors and advisors don’t just guide you—they empower you to make confident decisions about your education and career path.",
    },
    {
      icon: <FaRegHeart className="text-green-800 text-3xl" />,
      title: "Support that Cares",
      desc: "From enrollment to graduation, we stand beside you—offering personalized assistance, motivation, and mentorship every step of the way.",
    },
  ];

  return (
    <section id="staff" className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            Who Are Our Staff?
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our team is made up of dedicated professionals with real-world experience in their respective fields. 
            They've walked the path—and now, they’re here to guide you on yours.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto mt-4 leading-relaxed">
            With deep knowledge, compassion, and a commitment to your success, our staff provide personalized counseling 
            to help you choose the right program, stay on track, and build a career you’re proud of. 
            From day one to graduation—and beyond—you’ll have the support of experts who genuinely care about your future.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-gray-100 flex flex-col items-center text-center space-y-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Optional Subtle Quote */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-gray-500 italic text-lg max-w-2xl mx-auto">
            “The best guidance comes from those who’ve already walked the road you’re about to take.”
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
