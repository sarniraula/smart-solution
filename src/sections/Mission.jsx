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
      className="relative py-24 px-6 bg-gradient-to-br from-purple-50 via-green-50 to-blue-50 overflow-hidden"
    >
      {/* floating gradient circles */}
      <div className="absolute top-16 left-20 w-64 h-64 bg-purple-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-24 right-10 w-72 h-72 bg-green-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-1/3 w-56 h-56 bg-blue-300/20 rounded-full blur-2xl"></div>

      <div className="relative max-w-6xl mx-auto space-y-14 z-10">

        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-blue-700 to-purple-700 drop-shadow-sm mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We believe in the power of dreams and the promise of potential. Your career is more than a goal—it's our mission.
            With unwavering passion and a deep commitment to your education, we’re here to guide, support, and empower you every step of the way.
          </p>
        </motion.div>

        {/* Why Choose Section */}
        <motion.div
          className="space-y-3 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-blue-700 to-green-700">
            Why Choose Smart Solution
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            At Smart Solution, we see your potential. Our mission is to uncover your strengths, support your growth,
            and guide you—step by step—on the path to a fulfilling career.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-7 border border-white/60 hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon background ring */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-600 via-blue-700 to-purple-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>

              <div className="mt-5">
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
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
          <MdLightbulbOutline className="text-green-700 text-xl" />
          OSAP funding amounts vary depending on your program, duration, previous income, and family size. We’ll help you understand everything clearly.
        </motion.p>
      </div>
    </section>
  );
}
