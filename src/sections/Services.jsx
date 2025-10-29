import { motion } from "framer-motion";
import {
  FaUserTie,
  FaPassport,
  FaUniversity,
  FaHandsHelping,
  FaFileAlt,
  FaBriefcase,
  FaHome,
  FaLanguage,
  FaMapMarkedAlt,
  FaGraduationCap,
} from "react-icons/fa";

export default function Services() {
  const services = [
    { name: "Career Counselling", icon: <FaUserTie /> },
    { name: "Immigration Case Management", icon: <FaMapMarkedAlt /> },
    { name: "Private Career College Admissions", icon: <FaGraduationCap /> },
    // { name: "Tamil/Sinhala to English Translation", icon: <FaLanguage /> },
    { name: "OSAP Application", icon: <FaFileAlt /> },
    { name: "Social Assistance OW/ODSP/EI/Housing Application", icon: <FaHandsHelping /> },
    { name: "Resume Writing", icon: <FaBriefcase /> },
    { name: "Rental Property Arrangement", icon: <FaHome /> },
    { name: "Guiding to Find Employment", icon: <FaUserTie /> },
    { name: "University/Community College OSAP Application", icon: <FaUniversity /> },
    { name: "Newcomers Settlement Services", icon: <FaHandsHelping /> },
    { name: "PR/Citizenship Application", icon: <FaPassport /> },
    { name: "Passport Renewal", icon: <FaPassport /> },
  ];

  return (
    <section id="services" className="bg-gray-50 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of professional and settlement services 
            designed to help you succeed — whether you’re building your career, 
            pursuing education, or settling in a new country.
          </p>
        </motion.div>

        {/* Creative Services Display */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 p-8 text-center flex flex-col items-center"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
            >
              {/* Floating Icon Bubble */}
              <motion.div
                className="absolute -top-8 flex items-center justify-center bg-green-100 text-green-800 rounded-full w-16 h-16 shadow-md group-hover:bg-green-800 group-hover:text-white transition-all duration-500"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                {service.icon}
              </motion.div>

              {/* Service Name */}
              <h3 className="mt-10 text-lg font-semibold text-gray-900 group-hover:text-green-800 transition-colors">
                {service.name}
              </h3>

              {/* Subtle decorative line */}
              <div className="w-10 h-1 bg-green-700 rounded-full mx-auto mt-3 mb-2 group-hover:w-16 transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Line */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            Every service we provide is designed to simplify your path toward success — 
            with clarity, care, and professionalism.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
