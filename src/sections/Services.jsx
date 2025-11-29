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
      `,
    },
    {
      name: "Immigration Case Management",
      icon: <FaMapMarkedAlt />,
      description:
        "We help manage, prepare, and organize your immigration case with full documentation support.",
    },
    {
      name: "Private Career College Admissions",
      icon: <FaGraduationCap />,
      description:
        "Guidance for choosing programs, preparing documents, and navigating admission requirements.",
    },
    {
      name: "OSAP Application",
      icon: <FaFileAlt />,
      description:
        "Complete support for OSAP eligibility, application preparation, documentation, and submission.",
    },
    {
      name: "Social Assistance Applications",
      icon: <FaHandsHelping />,
      description:
        "Full support with OW, ODSP, EI, and Housing applications with personalized guidance.",
    },
    {
      name: "Resume Writing",
      icon: <FaBriefcase />,
      description:
        "Professional resume writing tailored to your strengths, industry, and job goals.",
    },
    {
      name: "Rental Property Arrangement",
      icon: <FaHome />,
      description:
        "Support in finding reliable rental housing for newcomers and students.",
    },
    {
      name: "Guiding to Find Employment",
      icon: <FaUserTie />,
      description:
        "Job matching, interview prep, networking strategies, and employment pathways.",
    },
    {
      name: "University/College OSAP Application",
      icon: <FaUniversity />,
      description: "Help with OSAP applications specifically for university & college programs.",
    },
    {
      name: "Newcomers Settlement Services",
      icon: <FaHandsHelping />,
      description:
        "Complete settlement support including housing, forms, employment, and education guidance.",
    },
    {
      name: "PR/Citizenship Application",
      icon: <FaPassport />,
      description:
        "Support with PR renewal, PR card, citizenship forms, documentation, and submission.",
    },
    {
      name: "Passport Renewal",
      icon: <FaPassport />,
      description:
        "Assistance with document preparation, photo guidelines, and renewal application steps.",
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
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
            Explore a complete range of settlement, career, and immigration services—crafted to support your growth and success.
          </p>
        </motion.div>

        {/* Flip Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const isFlipped = flippedIndex === index;

            return (
              <motion.div
                key={index}
                className="relative w-full h-[240px] cursor-pointer perspective"
                onClick={() =>
                  setFlippedIndex(isFlipped ? null : index)
                }
              >
                {/* CARD INNER */}
                <motion.div
                  className="relative h-full w-full transition-transform duration-700 preserve-3d"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.7 }}
                >
                  {/* FRONT SIDE */}
                  <div className="absolute inset-0 bg-white border border-gray-100 rounded-2xl shadow-md p-8 flex flex-col items-center justify-center backface-hidden">
                    <div className="bg-green-100 text-green-800 p-4 rounded-full text-3xl shadow">
                      {service.icon}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">
                      {service.name}
                    </h3>
                    <div className="w-10 h-1 bg-green-700 rounded-full mt-3"></div>
                  </div>

                  {/* BACK SIDE */}
                  <div className="absolute inset-0 bg-green-800 text-white rounded-2xl p-6 overflow-y-auto backface-hidden rotateY-180">
                    <h3 className="text-lg font-bold">{service.name}</h3>
                    <p className="text-sm font-normal leading-relaxed whitespace-pre-line">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            Every service is crafted to simplify your journey with clarity, care, and professionalism.
          </p>
        </motion.div>
      </div>

      {/* Flip card CSS */}
      <style>{`
        .perspective { perspective: 1200px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { -webkit-backface-visibility: hidden; backface-visibility: hidden; }
        .rotateY-180 { transform: rotateY(180deg); }
      `}</style>
    </section>
  );
}
