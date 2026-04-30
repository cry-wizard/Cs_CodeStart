import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const team = [
    {
      name: "Siddharth",
      role: "CEO & Founder",
      bio: "Passionate about empowering the next generation through tech education.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop",
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Director Name",
      role: "Director of Education",
      bio: "Crafting curriculum that makes complex concepts easy to grasp for young minds.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Instructor Name",
      role: "Lead Developer / Instructor",
      bio: "Building real-world applications and guiding students through practical projects.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      color: "from-teal-400 to-emerald-600"
    }
  ];

  return (
    <section id="team" className="py-24 bg-gray-50/50 dark:bg-gray-900/20">
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
              className="glass p-6 rounded-2xl text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
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
