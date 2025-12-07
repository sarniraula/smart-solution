import { motion } from "framer-motion";
import { FaUsers, FaChalkboardTeacher, FaRegHeart } from "react-icons/fa";

export default function Staff() {
  const highlights = [
    {
      icon: <FaUsers className="text-white text-4xl" />,
      title: "Experienced Professionals",
      desc: "Our team brings real-world experience from diverse industries to provide insights beyond the classroom.",
    },
    {
      icon: <FaChalkboardTeacher className="text-white text-4xl" />,
      title: "Guidance that Empowers",
      desc: "Our counselors empower you to make confident decisions about your education and career path.",
    },
    {
      icon: <FaRegHeart className="text-white text-4xl" />,
      title: "Support that Cares",
      desc: "From enrollment to graduation, we offer personalized assistance, motivation, and mentorship.",
    },
  ];

  return (
    <section id="staff" className="relative py-28 px-6 overflow-hidden bg-white">

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-brand-primary mb-4">
            Who Are Our Staff?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team is made up of dedicated professionals with real-world experience in their respective fields.
            They've walked the path—and now, they’re here to guide you on yours.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { ...highlights[0], bg: "bg-brand-primary" },
            { ...highlights[1], bg: "bg-brand-secondary" },
            { ...highlights[2], bg: "bg-brand-purple" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl p-8 shadow-lg flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300 ${item.bg}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex items-center justify-center w-20 h-20 rounded-full bg-white/20"
                whileHover={{ scale: 1.1 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-white/90 leading-relaxed font-medium">{item.desc}</p>
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
          <blockquote className="text-gray-500 italic text-lg max-w-2xl mx-auto border-l-4 border-brand-primary pl-4">
            “The best guidance comes from those who’ve already walked the road you’re about to take.”
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
