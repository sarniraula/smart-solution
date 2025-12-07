import { motion } from "framer-motion";
import { FaUserTie, FaHandshake, FaGraduationCap, FaHandsHelping } from "react-icons/fa";
import { MdLightbulbOutline } from "react-icons/md";

export default function Mission() {
  const features = [
    {
      icon: <FaUserTie className="text-white text-2xl" />,
      title: "Personalized Career Guidance",
      desc: "We work one-on-one to understand your goals, identify your strengths, and help you overcome any obstacles standing in your way.",
    },
    {
      icon: <FaHandshake className="text-white text-2xl" />,
      title: "OSAP Assistance & Support",
      desc: "Navigating student financial aid can be challenging—but you’re not alone. We provide full OSAP support, including documentation, application preparation, and submission.",
    },
    {
      icon: <FaGraduationCap className="text-white text-2xl" />,
      title: "Strong Educational Partnerships",
      desc: "We collaborate with trusted Private Career Colleges (PCCs) and schools to connect students and working adults with programs tailored for career growth and success.",
    },
    {
      icon: <FaHandsHelping className="text-white text-2xl" />,
      title: "Student-Focused Approach",
      desc: "Our dedicated team is here to support your journey with care, clarity, and commitment—always focused on helping you achieve the best possible outcomes.",
    },
  ];

  return (
    <section
      id="mission"
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* floating gradient circles */}
      <div className="absolute top-16 left-20 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-24 right-10 w-72 h-72 bg-brand-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-1/3 w-56 h-56 bg-brand-blue/20 rounded-full blur-2xl"></div>

      <div className="relative max-w-6xl mx-auto space-y-14 z-10">

        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-brand-primary mb-6">
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are dedicated to providing clear, compassionate, and professional guidance.
            Our goal is to assist students and individuals in navigating their educational and
            career paths with confidence and ease.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-brand-primary/10`}>
                <span className="text-3xl text-brand-primary">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed font-light">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          className="text-sm text-gray-600 mt-10 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <MdLightbulbOutline className="text-brand-primary text-xl" />
          OSAP funding amounts vary depending on your program, duration, previous income, and family size. We’ll help you understand everything clearly.
        </motion.p>
      </div >
    </section >
  );
}
