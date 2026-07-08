import { Cpu, Globe, Lightbulb, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { servicesData } from "../data";

// Map icon name string to Lucide component
const getIcon = (name: string) => {
  switch (name) {
    case "Cpu":
      return <Cpu className="text-indigo-400 group-hover:text-indigo-300 transition-colors" size={32} />;
    case "Globe":
      return <Globe className="text-purple-400 group-hover:text-purple-300 transition-colors" size={32} />;
    case "Lightbulb":
      return <Lightbulb className="text-emerald-400 group-hover:text-emerald-300 transition-colors" size={32} />;
    default:
      return <Cpu className="text-indigo-400" size={32} />;
  }
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div id="services-heading-container" className="flex flex-col items-center text-center mb-16">
          <motion.p
            className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What I Offer
          </motion.p>
          <motion.h2
            id="services-title"
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Services Offered
          </motion.h2>
          <motion.div
            className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              id={service.id}
              key={service.id}
              className="p-8 rounded-2xl bg-[#0b0f19]/40 border border-slate-800 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/5 flex flex-col items-start justify-between group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>
                {/* Icon box */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-indigo-500/20 group-hover:bg-indigo-500/5 transition-all mb-6 flex items-center justify-center">
                  {getIcon(service.iconName)}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Read more or standard service tag */}
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-indigo-400 mt-2">
                <span>0{index + 1}</span>
                <span className="w-4 h-[1px] bg-indigo-500" />
                <span>ACTIVE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
