import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaUserTie,
  FaPassport,
  FaUniversity,
  FaHandsHelping,
  FaFileAlt,
  FaBriefcase,
  FaHome,
  FaMapMarkedAlt,
  FaGraduationCap,
} from "react-icons/fa";

export default function Services() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const services = [
    { 
      name: "Career Counselling", 
      icon: <FaUserTie />, 
      description: `
          - Assessment & exploration: Evaluate skills, work history, education, and personality to discover suitable career paths.  
          - Goal setting & planning: Help clients create structured career goals and action plans.  
          - Job search assistance: Improve resumes, cover letters, interview skills, and job search strategies.  
          - Training guidance: Inform about educational programs, financial aid, and skills development.  
          - Workplace support: Guide through career transitions, workplace challenges, and job dissatisfaction.  
          - Market insights: Provide job trends, entry requirements, and skill gap information.  
      ` },
    { name: "Immigration Case Management", icon: <FaMapMarkedAlt />, description: "Full documentation support and file management for immigration cases." },
    { name: "Private Career College Admissions", icon: <FaGraduationCap />, description: "Program selection, documentation, and admission guidance." },
    { name: "OSAP Application", icon: <FaFileAlt />, description: "Support for OSAP eligibility, applications, and documentation." },
    { name: "Social Assistance Applications", icon: <FaHandsHelping />, description: "Support for OW, ODSP, EI, Housing programs and more." },
    { name: "Resume Writing", icon: <FaBriefcase />, description: "Industry-standard professional resume writing." },
    { name: "Rental Property Arrangement", icon: <FaHome />, description: "Housing assistance for newcomers and students." },
    { name: "Guiding to Find Employment", icon: <FaUserTie />, description: "Job matching, interview prep, and career development." },
    { name: "University/College OSAP Application", icon: <FaUniversity />, description: "OSAP support for post-secondary education." },
    { name: "Newcomers Settlement Services", icon: <FaHandsHelping />, description: "Complete settlement support including housing & employment." },
    { name: "PR/Citizenship Application", icon: <FaPassport />, description: "PR renewal, PR card, citizenship forms & application help." },
    { name: "Passport Renewal", icon: <FaPassport />, description: "Document prep and renewal assistance." },
  ];

  return (
    <section
      id="services"
      className="relative py-28 px-6 overflow-hidden bg-gradient-to-br from-purple-100 via-blue-100 to-green-100"
    >
      {/* Floating blurred circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-green-300 opacity-30 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto space-y-16">
        {/* HEADER */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-700 via-blue-600 to-green-700 bg-clip-text text-transparent drop-shadow-sm">
            Our Services
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mt-4">
            Explore a complete range of settlement, career, and immigration services—crafted to support your growth and success.
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const isFlipped = flippedIndex === index;

            return (
              <motion.div
                key={index}
                className="relative w-full h-[260px] cursor-pointer perspective"
                onClick={() => setFlippedIndex(isFlipped ? null : index)}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                {/* INNER */}
                <motion.div
                  className="relative h-full w-full transition-transform duration-700 preserve-3d"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                >
                  {/* FRONT */}
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-lg border border-white/50 shadow-xl rounded-3xl p-8 flex flex-col items-center justify-center backface-hidden">
                    
                    <div className="p-5 text-3xl rounded-full 
                      bg-gradient-to-br from-purple-200 via-blue-200 to-green-200 
                      text-purple-800 shadow-md">
                      {service.icon}
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-gray-900">
                      {service.name}
                    </h3>

                    <div className="w-14 h-1 mt-3 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-full"></div>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 rounded-3xl text-white p-6 overflow-y-auto backface-hidden rotateY-180 
                    bg-gradient-to-br from-purple-700 via-blue-700 to-green-700 shadow-xl">
                    <h3 className="text-lg font-bold mb-2">
                      {service.name}
                    </h3>
                    <p className="text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* FOOTER TEXT */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-sm">
            Every service is crafted with clarity, care, and professionalism.
          </p>
        </motion.div>
      </div>

      {/* FLIP CARD CSS */}
      <style>{`
        .perspective { perspective: 1200px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotateY-180 { transform: rotateY(180deg); }
      `}</style>
    </section>
  );
}
