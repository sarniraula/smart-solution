import { motion } from "framer-motion";
import { FaGift, FaUsers, FaArrowRight } from "react-icons/fa";

export default function ReferralProgram() {
  return (
    <section
      id="referral"
      className="relative bg-gradient-to-br from-green-50 to-white py-20 px-6 overflow-hidden"
    >
      {/* Background Decorative Blur */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-green-200 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-green-300 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT SIDE TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 leading-tight mb-6">
            Share Success,  
            <span className="text-green-700"> Earn Rewards</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Your journey can inspire others! Refer your friends and family and 
            help them take the first step toward a brighter future.  
            As a thank-you, you'll receive **exclusive rewards** through our referral program—because success is even better when shared.
          </p>

          {/* Highlight Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white border border-green-200 shadow-lg rounded-2xl p-5 mb-6 flex items-start gap-4"
          >
            <FaGift className="text-green-700 text-3xl" />
            <div>
              <h4 className="font-semibold text-green-900 text-xl">
                What You Get
              </h4>
              <p className="text-gray-600 text-sm mt-1">
                Earn rewards for every successful referral. The more people you help, 
                the more you earn!
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05, x: 6 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-green-800 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-700 transition-all"
          >
            Refer Now <FaArrowRight />
          </motion.button>
        </motion.div>

        {/* RIGHT SIDE IMAGE + CARDS */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Main Illustration */}
          <motion.img
            src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg"
            alt="Referral Program"
            className="w-full max-w-md rounded-3xl shadow-xl"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          />

          {/* Floating Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute -top-6 -left-6 bg-white shadow-lg rounded-xl p-4 flex items-center gap-3 border border-green-100"
          >
            <FaUsers className="text-green-700 text-2xl" />
            <p class="text-sm font-medium text-gray-700">
              150+ referrals this year
            </p>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute bottom-6 -right-6 bg-green-700 text-white shadow-lg rounded-xl px-4 py-3"
          >
            <p className="text-sm font-semibold">Earn Rewards Instantly</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
