import { motion } from "framer-motion";
import { FaGift, FaUsers, FaArrowRight } from "react-icons/fa";

export default function ReferralProgram() {
  return (
    <section
      id="referral"
      className="relative py-24 px-6 bg-gradient-to-br from-purple-50 via-green-50 to-blue-50 overflow-hidden"
    >
      {/* Floating Soft Gradient Circles */}
      <div className="absolute top-16 left-20 w-64 h-64 bg-purple-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-24 right-10 w-72 h-72 bg-green-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-1/3 w-56 h-56 bg-blue-300/20 rounded-full blur-2xl"></div>

      {/* Content Wrapper */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-blue-700 to-purple-700 leading-tight mb-6">
            Share Success, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-green-700">
              Earn Rewards
            </span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Your journey can inspire others! Refer your friends, family, or colleagues
            and help them take the first step toward a brighter future.
            Every referral brings you closer to unlocking
            <span className="font-semibold text-green-800"> exclusive rewards</span>.
          </p>

          {/* Glass Highlight Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl rounded-2xl p-6 mb-7 flex items-start gap-4"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-600 via-blue-700 to-purple-700 flex items-center justify-center shadow-lg">
              <FaGift className="text-white text-2xl" />
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 text-xl">
                What You Get
              </h4>
              <p className="text-gray-600 text-sm mt-1">
                Earn rewards for every successful referral. The more you help, the more you earn.
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.07, x: 6 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-gradient-to-r from-green-700 via-blue-700 to-purple-700 text-white px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all text-lg font-medium"
          >
            Refer Now <FaArrowRight className="text-white" />
          </motion.button>
        </motion.div>

        {/* RIGHT SIDE IMAGE + FLOATING CARDS */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Main Image */}
          <motion.img
            src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg"
            alt="Referral Program"
            className="w-full max-w-md rounded-3xl shadow-2xl ring-2 ring-white/60"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 200 }}
          />

          {/* Floating Card #1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute -top-8 -left-8 bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-4 flex items-center gap-3 border border-white/60"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 via-blue-700 to-purple-700 flex items-center justify-center">
              <FaUsers className="text-white text-lg" />
            </div>
            <p className="text-sm font-semibold text-gray-700">
              150+ referrals this year
            </p>
          </motion.div>

          {/* Floating Card #2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute bottom-6 -right-6 bg-gradient-to-br from-purple-700 via-blue-700 to-green-700 text-white shadow-xl rounded-xl px-6 py-4"
          >
            <p className="text-sm font-semibold">Earn Rewards Instantly</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
