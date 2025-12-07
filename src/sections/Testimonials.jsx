import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Aarav Patel",
    role: "Student, Business Management",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Smart Solution helped me choose the perfect college and guided me throughout my OSAP process. I couldn’t have done it without their support!",
  },
  {
    name: "Sofia Nguyen",
    role: "Healthcare Program Graduate",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Their team is so professional and caring. I felt supported every step of the way — from admission to graduation!",
  },
  {
    name: "David Lee",
    role: "IT Professional",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    text: "Thanks to Smart Solution, I found the right career program and financial support that truly changed my life.",
  },
  {
    name: "Isabella Rossi",
    role: "Newcomer to Canada",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    text: "They made my settlement process so much easier! I’m now enrolled in a great course and couldn’t be happier.",
  },
  {
    name: "Mohamed Ali",
    role: "Engineering Student",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
    text: "The counselors at Smart Solution really care. They don’t just advise — they inspire you to aim higher.",
  },
  {
    name: "Emily Chen",
    role: "Social Service Worker",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    text: "Professional, friendly, and efficient! Their expertise in education and OSAP support is unmatched.",
  },
];

export default function Testimonials() {
  const solidColors = [
    "bg-brand-primary",
    "bg-brand-secondary",
    "bg-brand-blue",
  ];

  return (
    <section id="testimonials" className="relative py-28 px-6 overflow-hidden bg-white">

      {/* Floating color blobs */}
      {/* <div className="absolute top-0 left-10 w-60 h-60 bg-brand-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-brand-primary/20 rounded-full blur-2xl"></div> */}

      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-brand-primary mb-4"
        >
          Success Stories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg"
        >
          Hear from our students and clients who transformed their dreams into reality with Smart Solution.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, translateY: -5 }}
            className={`rounded-2xl p-8 shadow-xl transition-all duration-300 ${solidColors[index % solidColors.length]} relative overflow-hidden`}
          >
            <FaQuoteLeft className="text-white/20 text-6xl absolute top-4 left-6" />

            <div className="flex flex-col items-center mt-4 relative z-10">
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full border-4 border-white/20 shadow-md mb-4 object-cover"
              />
              <h3 className="text-lg font-bold text-white">{t.name}</h3>
              <p className="text-white/90 mb-3 font-medium text-sm">{t.role}</p>

              <div className="flex text-yellow-300 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-white leading-relaxed text-sm italic font-medium opacity-90 text-center">{t.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
