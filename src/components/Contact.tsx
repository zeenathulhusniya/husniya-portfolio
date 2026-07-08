import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { personalInfo } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [validationError, setValidationError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (validationError) setValidationError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Standard client side validations
    if (!formData.name.trim()) {
      setValidationError("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setValidationError("Please enter a valid email address.");
      return;
    }
    if (!formData.message.trim()) {
      setValidationError("Please write a message.");
      return;
    }

    setValidationError("");
    setFormState("submitting");

    // Simulate sending message
    setTimeout(() => {
      setFormState("success");
      // Reset after some time
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const contactCards = [
    {
      icon: <Mail className="text-indigo-400" size={20} />,
      title: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: <Phone className="text-purple-400" size={20} />,
      title: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`
    },
    {
      icon: <MapPin className="text-emerald-400" size={20} />,
      title: "Location",
      value: personalInfo.location,
      href: "https://maps.google.com/?q=Colombo,Sri+Lanka"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div id="contact-heading-container" className="flex flex-col items-center text-center mb-16">
          <motion.p
            className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.p>
          <motion.h2
            id="contact-title"
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Contact Me
          </motion.h2>
          <motion.div
            className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info */}
          <div id="contact-info-cards" className="lg:col-span-5 space-y-6">
            <motion.div
              className="p-8 rounded-2xl bg-[#0b0f19]/40 border border-slate-800"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-display text-xl font-bold text-white mb-2">Let's connect!</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                I'm currently seeking Junior Software Developer opportunities. If you have any inquiries, project proposals, or just want to connect, feel free to drop a message or reach out through my contacts below.
              </p>

              {/* Status Info Badge */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 mb-8">
                <Clock className="text-indigo-400 shrink-0" size={18} />
                <div>
                  <p className="text-xs font-semibold text-white">Usual Response Time</p>
                  <p className="text-xs text-slate-400 mt-0.5">Replies within 24 hours</p>
                </div>
              </div>

              {/* Individual Contact Details */}
              <div className="space-y-4">
                {contactCards.map((card, idx) => (
                  <a
                    id={`contact-card-${card.title.toLowerCase()}`}
                    href={card.href}
                    target={card.title === "Location" ? "_blank" : undefined}
                    rel="noreferrer"
                    key={card.title}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 hover:bg-slate-800/40 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 group-hover:bg-indigo-500/5 group-hover:border-indigo-500/20 transition-all">
                      {card.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-slate-500 font-bold uppercase">{card.title}</h4>
                      <p className="text-sm font-semibold text-white mt-1 group-hover:text-indigo-400 transition-colors">
                        {card.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <div id="contact-form-container" className="lg:col-span-7">
            <motion.div
              className="p-8 sm:p-10 rounded-2xl bg-[#0b0f19]/40 border border-slate-800 relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    id="contact-form-success"
                    className="flex flex-col items-center text-center py-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <CheckCircle className="text-emerald-500 mb-6" size={64} />
                    <h3 className="font-display text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-400 text-sm max-w-sm">
                      Thank you for reaching out! Your message has been received, and Zeenathul will get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setFormState("idle")}
                      className="mt-8 px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 text-xs font-mono font-bold text-indigo-400 cursor-pointer transition-all"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    id="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-mono font-bold text-slate-500 uppercase">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Zeenathul Husniya"
                          className="px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 focus:border-indigo-500 focus:bg-slate-900 text-white text-sm outline-none transition-all"
                          disabled={formState === "submitting"}
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-mono font-bold text-slate-500 uppercase">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="zeenathul.it@gmail.com"
                          className="px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 focus:border-indigo-500 focus:bg-slate-900 text-white text-sm outline-none transition-all"
                          disabled={formState === "submitting"}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="subject" className="text-xs font-mono font-bold text-slate-500 uppercase">
                        Subject (Optional)
                      </label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Inquiry about Recruitment / Project"
                        className="px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 focus:border-indigo-500 focus:bg-slate-900 text-white text-sm outline-none transition-all"
                        disabled={formState === "submitting"}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-mono font-bold text-slate-500 uppercase">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Hi Zeenathul, we'd love to discuss an opportunity..."
                        className="px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 focus:border-indigo-500 focus:bg-slate-900 text-white text-sm outline-none transition-all resize-none"
                        disabled={formState === "submitting"}
                      />
                    </div>

                    {/* Form Feedback */}
                    {validationError && (
                      <div className="flex items-center gap-2 text-rose-500 text-xs bg-rose-500/5 border border-rose-500/10 p-3 rounded-lg">
                        <AlertCircle size={14} />
                        <span>{validationError}</span>
                      </div>
                    )}

                    {/* Send Button */}
                    <button
                      id="contact-form-submit"
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      disabled={formState === "submitting"}
                    >
                      {formState === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
