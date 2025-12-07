import { motion } from "framer-motion";
import { FaGift, FaUsers, FaArrowRight, FaHandHoldingHeart, FaBullhorn } from "react-icons/fa";

export default function ReferralProgram() {
  return (
    <section id="referral" className="relative py-28 px-6 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1 bg-brand-light/10 text-brand-primary rounded-full text-sm font-semibold mb-6">
            Help Others, Get Rewarded
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Refer a Friend & <br /> <span className="text-brand-primary">Earn Great Rewards</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Know someone looking for career guidance or admission support?
            Refer them to Smart Solution and earn exclusive rewards when they successfully enroll.
          </p>

          <div className="bg-white border border-gray-100 shadow-lg rounded-2xl p-6 mb-7 flex items-start gap-4">
            <div className="p-3 bg-brand-primary/10 rounded-full text-brand-primary">
              <FaGift className="text-2xl" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">How it works</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                1. Share your unique referral link.<br />
                2. Your friend books a consultation.<br />
                3. You both get rewarded upon enrollment!
              </p>
            </div>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-primary text-white rounded-lg shadow-md hover:bg-brand-light transition-all duration-300 font-semibold"
          >
            Start Referring <FaArrowRight />
          </motion.a>
        </motion.div>

        {/* Right Side: Visuals */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main Card */}
          <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider font-medium">Total Earned</p>
                <h3 className="text-4xl font-bold text-gray-900 mt-1">$1,250</h3>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xl">
                <FaHandHoldingHeart />
              </div>
            </div>

            <div className="space-y-4">
              {[
                { name: "Sarah J.", status: "Enrolled", reward: "+$50" },
                { name: "Michael B.", status: "Pending", reward: "Processing" },
                { name: "Jessica L.", status: "Enrolled", reward: "+$50" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-sm">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 text-sm">{item.name}</h5>
                      <span className={`text-xs ${item.status === 'Enrolled' ? 'text-green-600' : 'text-amber-500'}`}>{item.status}</span>
                    </div>
                  </div>
                  <span className={`text-sm font-bold ${item.reward.includes('+') ? 'text-brand-primary' : 'text-gray-400'}`}>
                    {item.reward}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-brand-blue font-semibold text-sm cursor-pointer hover:underline">View all referrals</p>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-20 flex items-center gap-3"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, type: "tween" }}
          >
            <div className="bg-brand-orange/10 p-2 rounded-lg text-brand-orange">
              <FaBullhorn />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">New Campaign</p>
              <p className="text-sm font-bold text-gray-800">Student Bonus</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
