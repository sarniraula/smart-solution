import { motion } from "framer-motion";
import { FaUserTie, FaHandshake, FaGraduationCap, FaHandsHelping } from "react-icons/fa";
import { MdLightbulbOutline } from "react-icons/md";

export default function Mission() {
  const features = [
    {
      icon: <FaUserTie className="text-green-800 text-2xl" />,
      title: "Personalized Career Guidance",
      desc: "We work one-on-one to understand your goals, identify your strengths, and help you overcome any obstacles standing in your way.",
    },
    {
      icon: <FaHandshake className="text-green-800 text-2xl" />,
      title: "OSAP Assistance & Support",
      desc: "Navigating student financial aid can be challenging—but you’re not alone. We provide full OSAP support, including documentation, application preparation, and submission.",
    },
    {
      icon: <FaGraduationCap className="text-green-800 text-2xl" />,
      title: "Strong Educational Partnerships",
      desc: "We collaborate with trusted Private Career Colleges (PCCs) and schools to connect students and working adults with programs tailored for career growth and success.",
    },
    {
      icon: <FaHandsHelping className="text-green-800 text-2xl" />,
      title: "Student-Focused Approach",
      desc: "Our dedicated team is here to support your journey with care, clarity, and commitment—always focused on helping you achieve the best possible outcomes.",
    },
  ];

  return (
    <section id="mission" className="bg-gray-50 py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-green-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We believe in the power of dreams and the promise of potential. Your career is more than a goal—it's our mission. With unwavering passion and a deep commitment to your education, we’re here to guide, support, and empower you every step of the way.
          </p>
        </motion.div>

        {/* Why Choose Section */}
        <motion.div
          className="space-y-4 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-green-800">
            Why Choose Smart Solution
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            At Smart Solution, we see your potential. Our mission is to uncover your strengths, support your growth, and guide you—step by step—on the path to a fulfilling career.
          </p>
        </motion.div>

        {/* Feature List */}
        <div className="grid sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-6 flex items-start gap-4 border border-gray-100 hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          className="text-sm text-gray-500 mt-8 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <MdLightbulbOutline className="text-green-700 text-lg" />
          OSAP funding amounts vary based on your program choice, its duration, your previous income, and your family size. We’ll help you understand your options clearly.
        </motion.p>
      </div>
    </section>
  );
}
