import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { personal } from '../data/portfolioData';
import { Mail, MapPin, Phone, GitBranch, Link2, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const { ref, inView } = useInView(0.1);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '14b04e25-ae10-48f4-8b3a-660dea25162f',
          name: form.name,
          email: form.email,
          subject: form.subject || `Portfolio Contact from ${form.name}`,
          message: form.message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 5000);
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}`, color: 'from-primary-500 to-violet-600' },
    { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}`, color: 'from-emerald-500 to-teal-600' },
    { icon: MapPin, label: 'Location', value: personal.location, href: undefined, color: 'from-rose-500 to-pink-600' },
    { icon: GitBranch, label: 'GitHub', value: 'PhyoZayYarKyaw', href: personal.github, color: 'from-slate-600 to-slate-800' },
    { icon: Link2, label: 'LinkedIn', value: 'phyo-zay-yar-kyaw', href: personal.linkedin, color: 'from-blue-500 to-blue-700' },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-dark-800 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-2" style={{ opacity: 0.08 }} />
        <div className="orb orb-3" style={{ opacity: 0.08 }} />
      </div>
      <div className="absolute inset-0 bg-dots opacity-30 dark:opacity-20 pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          id="contact-header"
        >
          <p className="text-primary-600 dark:text-primary-400 font-mono text-sm font-medium mb-2">05. LET'S CONNECT</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's build something great together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
            id="contact-info"
          >
            <div className="glass-card p-6 mb-2">
              <h3 className="font-bold text-slate-800 dark:text-white mb-1">Let's talk</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                I'm currently open to full-time roles, freelance projects, and exciting collaborations in cloud, AI, and full-stack development.
              </p>
            </div>

            {contactItems.map(({ icon: Icon, label, value, href, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="glass-card p-4 flex items-center gap-4 card-hover"
                id={`contact-item-${label.toLowerCase()}`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md flex-shrink-0`}>
                  <Icon size={16} className="text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors truncate block"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 truncate">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
            id="contact-form-wrapper"
          >
            <div className="glass-card p-8">
              <h3 className="font-bold text-slate-800 dark:text-white mb-6 text-lg">Send a Message</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" id="contact-form">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl text-sm
                                 bg-slate-50 dark:bg-dark-700 text-slate-800 dark:text-slate-200
                                 border border-slate-200 dark:border-white/10
                                 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500
                                 placeholder:text-slate-400 dark:placeholder:text-slate-600
                                 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl text-sm
                                 bg-slate-50 dark:bg-dark-700 text-slate-800 dark:text-slate-200
                                 border border-slate-200 dark:border-white/10
                                 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500
                                 placeholder:text-slate-400 dark:placeholder:text-slate-600
                                 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project collaboration, job opportunity..."
                    className="w-full px-4 py-3 rounded-xl text-sm
                               bg-slate-50 dark:bg-dark-700 text-slate-800 dark:text-slate-200
                               border border-slate-200 dark:border-white/10
                               focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500
                               placeholder:text-slate-400 dark:placeholder:text-slate-600
                               transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl text-sm resize-none
                               bg-slate-50 dark:bg-dark-700 text-slate-800 dark:text-slate-200
                               border border-slate-200 dark:border-white/10
                               focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500
                               placeholder:text-slate-400 dark:placeholder:text-slate-600
                               transition-all duration-200"
                  />
                </div>

                {/* Status messages */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-sm"
                    id="contact-success-msg"
                  >
                    <CheckCircle size={16} />
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm"
                    id="contact-error-msg"
                  >
                    <AlertCircle size={16} />
                    Something went wrong. Please try emailing directly.
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === 'sending'}
                  id="contact-submit-btn"
                  className="w-full btn-primary disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none py-3.5"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
