import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend, FiCheckCircle } from 'react-icons/fi';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    if (formData.message.length < 10) {
      toast.error("Message must be at least 10 characters long.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('loading');

    try {
      // Sending data to backend
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        toast.success("Message sent successfully!");
      } else {
        setStatus('idle');
        toast.error(data.error || "Something went wrong.");
      }
    } catch (error) {
      setStatus('idle');
      toast.error("Unable to connect to the server. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto glass rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-5 h-full">
            
            {/* Left Side: Info */}
            <div className="md:col-span-2 bg-gray-900 text-white p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-accent)] rounded-full mix-blend-screen filter blur-[80px] opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-heading font-bold mb-4">Get in Touch</h3>
                <p className="text-gray-300 font-body mb-8">
                  Have questions about our courses or want to enroll? Drop us a message and we'll get back to you shortly.
                </p>
                
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <FiMail size={20} />
                  </div>
                  <span className="font-medium">cscodestart@gmail.com</span>
                </div>
              </div>
              
              <div className="relative z-10 mt-12 md:mt-0">
                <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">CS Code Start</p>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="md:col-span-3 p-10 bg-[var(--card-bg)]">
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <FiCheckCircle size={64} className="text-green-500 mb-6" />
                  <h4 className="text-2xl font-bold font-heading mb-2 text-[var(--text-color)]">Message Sent!</h4>
                  <p className="text-[var(--text-muted)] font-body mb-6">Thank you for reaching out. We will get back to you soon.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2 rounded-lg border border-[var(--border-color)] font-medium text-[var(--text-color)] hover:bg-[var(--bg-color)] transition-colors"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3 text-red-500"
                    >
                      <FiAlertCircle className="mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-medium">{errorMessage}</p>
                    </motion.div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--text-muted)] mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-color)] rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)] transition-shadow"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text-muted)] mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-color)] rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)] transition-shadow"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--text-muted)] mb-2">Your Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-color)] rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)] transition-shadow resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className={`mt-2 flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-white transition-all duration-300 ${status === 'loading' ? 'bg-[var(--color-brand-accent)] opacity-70 cursor-not-allowed' : 'bg-[var(--color-brand-accent)] hover:opacity-90 shadow-lg shadow-[var(--color-brand-accent)]/30 hover:shadow-[var(--color-brand-accent)]/50 hover:-translate-y-1 glow-accent'}`}
                  >
                    {status === 'loading' ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FiSend />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
