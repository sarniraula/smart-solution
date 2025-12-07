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
      className="relative py-28 px-6 overflow-hidden"
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
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-brand-primary via-brand-blue to-brand-secondary bg-clip-text text-transparent drop-shadow-sm">
            Our Services
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mt-4">
            Explore a complete range of settlement, career, and immigration services—crafted to support your growth and success.
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive support tailored to your unique goals and aspirations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group h-[320px] [perspective:1000px] cursor-pointer"
            >
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl rounded-2xl">

                {/* Front Side */}
                <div className="absolute inset-0 bg-white rounded-2xl p-8 flex flex-col justify-center items-center text-center [backface-visibility:hidden] border border-gray-100">
                  <div className="text-5xl text-brand-primary mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Hover for details</p>
                </div>

                {/* Back Side */}
                <div
                  className={`absolute inset-0 ${solidColors[index % solidColors.length]} rounded-2xl p-8 flex flex-col justify-center items-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] text-white`}
                >
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="leading-relaxed font-medium opacity-95 whitespace-pre-line">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
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
    </section>
  );
}
