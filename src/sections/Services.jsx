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

  // 🎨 Solid colors for each flipped card
  const solidColors = [
    "bg-blue-600",
    "bg-green-600",
    "bg-orange-600",
    "bg-pink-600",
    "bg-purple-700",
    "bg-teal-600",
  ];

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
    { name: "OSAP Application", icon: <FaFileAlt />, 
      description: `
          - Estimate funding based on tuition, living costs, and financial need.
          - Explain OSAP includes grants (free money) and loans (repay later).
          - Application takes 15–30 minutes; approval takes 4–6 weeks.
          - Funding comes from both federal and Ontario provincial sources.
          - OSAP first pays tuition, remaining funds go to the student.
          - Loan repayment starts 6 months after studies end.
          - Federal portion = interest-free; provincial portion has interest.
          - Monthly payments depend on total borrowed and income.
          - RAP (Repayment Assistance Plan) helps reduce payments if needed.
      `},
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
      className="relative py-28 px-6 overflow-hidden bg-gradient-to-r from-purple-100 via-blue-100 to-green-100"
    >
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

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const isFlipped = flippedIndex === index;
            const colorClass = solidColors[index % solidColors.length]; // 🎨 Pick color

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
                    <div className="p-5 text-3xl rounded-full bg-gradient-to-br from-purple-200 via-blue-200 to-green-200 text-purple-800 shadow-md">
                      {service.icon}
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-gray-900">
                      {service.name}
                    </h3>

                    <div className="w-14 h-1 mt-3 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-full"></div>
                  </div>

                  {/* 🎨 BACK — Solid Color Per Card */}
                  <div
                    className={`absolute inset-0 rounded-3xl text-white p-6 overflow-y-auto backface-hidden rotateY-180 shadow-xl ${colorClass}`}
                  >
                    <h3 className="text-lg font-bold mb-2">{service.name}</h3>
                    <p className="text-sm leading-relaxed whitespace-pre-line">
                      {service.description}
                    </p>
                  </div>

                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* FOOTER */}
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
