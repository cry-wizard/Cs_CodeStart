import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiGlobe } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-[var(--text-color)]">
              About <span className="text-[var(--color-brand-accent)]">CS Code Start</span>
            </h2>
            <p className="text-lg text-[var(--text-muted)] font-body leading-relaxed mb-6">
              Our mission is to make coding accessible, engaging, and highly practical for school students.
              We believe that early exposure to programming builds exceptional problem-solving skills and
              prepares students for a tech-driven future.
            </p>
            <p className="text-lg text-[var(--text-muted)] font-body leading-relaxed">
              Started by passionate developers, we bridge the gap between traditional schooling and modern technology demands.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] w-full"
          >
            {/* Main Image */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-[80%] h-[300px] z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-brand-accent)] to-orange-500 rounded-3xl transform rotate-2 opacity-30 blur-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                alt="Students learning"
                className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10 border-4 border-[var(--bg-color)]"
              />
            </motion.div>

            {/* Secondary Image */}
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 w-[60%] h-[200px] z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"
                alt="Coding"
                className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-[var(--bg-color)]"
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.6 }}
              className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 z-30 glass px-6 py-4 rounded-2xl flex items-center gap-4 border border-[var(--color-brand-accent)]/30 shadow-[0_0_30px_rgba(244,63,94,0.2)]"
            >
              <div className="w-12 h-12 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-xl font-bold">
                ✓
              </div>
              <div>
                <p className="text-2xl font-bold font-heading text-[var(--text-color)]">100%</p>
                <p className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider">Practical</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FiCode size={32} />,
              title: "Learn by Doing",
              desc: "Hands-on projects that make learning to code fun and tangible, not just theoretical."
            },
            {
              icon: <FiGlobe size={32} />,
              title: "Web Development",
              desc: "Master the foundations of the web: HTML, CSS, and modern JavaScript to build real websites."
            },
            {
              icon: <FiCpu size={32} />,
              title: "Logical Thinking",
              desc: "Develop computational thinking that helps in math, science, and everyday problem-solving."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-brand-accent)]/10 text-[var(--color-brand-accent)] flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-[var(--text-color)]">{feature.title}</h3>
              <p className="text-[var(--text-muted)] font-body">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
