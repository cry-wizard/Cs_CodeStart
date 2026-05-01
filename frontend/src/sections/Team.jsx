import React from 'react';
import { motion } from 'framer-motion';
import ceoImg from '../assets/team/ceo.jpg';
import abhishekImg from '../assets/team/abhishek.jpg';
import priyanshuImg from '../assets/team/priyanshu.jpg';

const Team = () => {
  const team = [
    {
      name: "Siddharth Raj",
      role: "CEO & Founder",
      bio: "Passionate about empowering the next generation through tech education.",
      image: ceoImg,
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Abhishek",
      role: "Director",
      bio: "Crafting curriculum that makes complex concepts easy to grasp for young minds.",
      image: abhishekImg,
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Priyanshu",
      role: "Lead Developer",
      bio: "Building real-world applications and architecting core platforms to enhance the user experience.",
      image: priyanshuImg,
      color: "from-teal-400 to-emerald-600"
    }
  ];

  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-4 text-[var(--text-color)]"
          >
            Meet Our <span className="text-[var(--color-brand-accent)]">Team</span>
          </motion.h2>
          <p className="text-[var(--text-muted)] font-body max-w-2xl mx-auto text-lg">
            Dedicated professionals committed to shaping your coding journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass p-6 rounded-2xl text-center group card-hover relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative w-32 h-32 mx-auto mb-6 z-10">
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 filter blur-md -z-10 scale-110`}></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full rounded-full object-cover shadow-lg border-4 border-[var(--bg-color)] group-hover:border-[var(--color-brand-accent)] transition-colors duration-300`}
                />
              </div>

              <h3 className="text-2xl font-bold font-heading mb-1 text-[var(--text-color)]">{member.name}</h3>
              <p className="text-[var(--color-brand-accent)] font-medium mb-4 text-sm uppercase tracking-wider">{member.role}</p>
              <p className="text-[var(--text-muted)] font-body text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
