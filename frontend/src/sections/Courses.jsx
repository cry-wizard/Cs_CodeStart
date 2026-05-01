import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMonitor, FiSmartphone, FiTerminal, FiX, FiCheck } from 'react-icons/fi';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const courses = [
    {
      title: "Foundations of Code",
      level: "Beginner",
      duration: "8 Weeks",
      icon: <FiTerminal size={40} />,
      desc: "Perfect for beginners. Learn the absolute basics of programming logic, variables, loops, and simple algorithms.",
      color: "from-blue-500 to-cyan-400",
      price: "₹2,999",
      syllabus: [
        "Introduction to Programming concepts",
        "Variables, Data Types, and Operators",
        "Control Flow (If/Else, Loops)",
        "Functions and Scope",
        "Building a simple Calculator project"
      ]
    },
    {
      title: "Web Creator Pro",
      level: "Intermediate",
      duration: "12 Weeks",
      icon: <FiMonitor size={40} />,
      desc: "Dive into HTML, CSS, and JS. Build responsive websites from scratch and deploy them live on the internet.",
      color: "from-purple-500 to-pink-500",
      price: "₹4,999",
      syllabus: [
        "Semantic HTML5 & Accessibility",
        "Modern CSS3 (Flexbox & Grid)",
        "JavaScript DOM Manipulation",
        "Responsive Web Design",
        "Final Project: Portfolio Website"
      ]
    },
    {
      title: "App Builder Basics",
      level: "Advanced",
      duration: "10 Weeks",
      icon: <FiSmartphone size={40} />,
      desc: "Step up your game by building simple, interactive mobile-friendly web apps using modern frameworks.",
      color: "from-orange-500 to-yellow-400",
      price: "₹5,999",
      syllabus: [
        "Introduction to React.js",
        "State and Props",
        "Building reusable components",
        "Fetching data from APIs",
        "Final Project: Weather App"
      ]
    }
  ];

  return (
    <section id="courses" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-4 text-[var(--text-color)]"
          >
            Our <span className="text-[var(--color-brand-accent)]">Courses</span>
          </motion.h2>
          <p className="text-[var(--text-muted)] font-body max-w-2xl mx-auto">
            Carefully curated curriculum designed specifically for middle and high school students.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-3xl p-1 overflow-hidden group"
            >
              <div className="bg-[var(--card-bg)] backdrop-blur-xl h-full rounded-[1.4rem] p-8 relative overflow-hidden">
                {/* Decorative blob */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${course.color} rounded-full filter blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                
                <div className={`text-transparent bg-clip-text bg-gradient-to-r ${course.color} mb-6 inline-block`}>
                  {course.icon}
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] bg-[var(--bg-color)] px-3 py-1 rounded-full border border-[var(--border-color)]">
                    {course.level}
                  </span>
                  <span className="text-sm text-[var(--text-muted)] font-medium">
                    {course.duration}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold font-heading mb-3 text-[var(--text-color)]">
                  {course.title}
                </h3>
                
                <p className="text-[var(--text-muted)] font-body mb-8">
                  {course.desc}
                </p>
                
                <button 
                  onClick={() => setSelectedCourse(course)}
                  className="w-full py-3 rounded-xl border border-[var(--border-color)] font-medium text-[var(--text-color)] hover:bg-[var(--color-brand-accent)] hover:text-white hover:border-transparent hover:shadow-lg transition-all duration-300"
                >
                  View Syllabus & Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Syllabus Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[var(--bg-color)] border border-[var(--border-color)] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className={`h-3 bg-gradient-to-r ${selectedCourse.color}`}></div>
              
              <button 
                onClick={() => setSelectedCourse(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[var(--card-bg)] hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors z-10 text-[var(--text-color)]"
              >
                <FiX size={20} />
              </button>

              <div className="p-8 overflow-y-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedCourse.color} flex items-center justify-center text-white shadow-lg`}>
                    {selectedCourse.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-heading font-bold text-[var(--text-color)]">{selectedCourse.title}</h3>
                    <div className="flex gap-3 mt-2">
                      <span className="text-sm font-medium text-[var(--color-brand-accent)] bg-[var(--color-brand-accent)]/10 px-3 py-1 rounded-full">{selectedCourse.level}</span>
                      <span className="text-sm font-medium text-[var(--text-muted)] bg-[var(--card-bg)] px-3 py-1 rounded-full border border-[var(--border-color)]">{selectedCourse.duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-[var(--text-muted)] font-body text-lg mb-8 leading-relaxed">
                  {selectedCourse.desc}
                </p>

                <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 mb-8">
                  <h4 className="text-xl font-heading font-bold mb-4 text-[var(--text-color)]">What you will learn</h4>
                  <ul className="space-y-3">
                    {selectedCourse.syllabus.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[var(--text-color)]">
                        <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[var(--border-color)]">
                  <div>
                    <p className="text-sm text-[var(--text-muted)] font-medium uppercase tracking-widest mb-1">Course Fee</p>
                    <p className="text-4xl font-bold font-heading text-[var(--text-color)]">{selectedCourse.price}</p>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedCourse(null);
                      const contactSection = document.getElementById('contact');
                      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[var(--color-brand-accent)] text-white font-bold text-lg hover:opacity-90 shadow-xl shadow-[var(--color-brand-accent)]/30 glow-accent transition-all duration-300"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Courses;
