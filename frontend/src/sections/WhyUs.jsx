import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const WhyUs = () => {
  const reasons = [
    "School-Level Friendly Teaching",
    "Real-World Projects & Applications",
    "Beginner to Intermediate Progression",
    "Small Batch Learning for Personal Attention",
    "Modern Tech Stack (HTML, CSS, JS)",
    "Doubt Solving & Mentorship"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-[var(--text-color)]">
              Why <span className="text-gradient">Choose Us?</span>
            </h2>
            <p className="text-[var(--text-muted)] font-body mb-8 text-lg">
              We don't just teach code; we build confidence. Our platform is designed keeping young minds in focus—simplifying complex concepts into bite-sized, engaging lessons.
            </p>
            
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FiCheckCircle className="text-[var(--color-brand-accent)] flex-shrink-0" size={24} />
                  <span className="font-medium text-[var(--text-color)] text-lg">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass p-2 rounded-3xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-[var(--card-bg)] backdrop-blur-xl rounded-2xl overflow-hidden shadow-inner border border-[var(--border-color)]">
                {/* Mock Code Editor */}
                <div className="h-8 bg-gray-800 dark:bg-gray-900 flex items-center px-4 gap-2 border-b border-gray-700">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-4 text-xs font-mono text-gray-400">script.js</div>
                </div>
                <div className="p-6 font-mono text-sm leading-loose bg-[#1e1e1e] text-[#d4d4d4] overflow-x-auto">
                  <div><span className="text-[#569cd6]">function</span> <span className="text-[#dcdcaa]">buildFuture</span>() {"{"}</div>
                  <div className="pl-4"><span className="text-[#569cd6]">const</span> student = <span className="text-[#569cd6]">new</span> <span className="text-[#4ec9b0]">Student</span>();</div>
                  <div className="pl-4">student.<span className="text-[#dcdcaa]">learnCode</span>();</div>
                  <div className="pl-4"><span className="text-[#c586c0]">if</span> (student.<span className="text-[#9cdcfe]">skills</span> &gt; <span className="text-[#b5cea8]">100</span>) {"{"}</div>
                  <div className="pl-8"><span className="text-[#569cd6]">return</span> <span className="text-[#ce9178]">"Success"</span>;</div>
                  <div className="pl-4">{"}"}</div>
                  <div>{"}"}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
