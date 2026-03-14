import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Hero = () => {
  const marqueeText = "WEB DEVELOPMENT • REACT.JS • MACHINE LEARNING • UI/UX DESIGN • BACKEND • BUILDING DIGITAL PRODUCTS • REPEAT • ";

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden">
      {/* Marquee */}
      <div className="absolute top-24 left-0 right-0 overflow-hidden border-y border-subtle py-3">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-xs tracking-[0.3em] text-muted-foreground/40 uppercase">
            {marqueeText}{marqueeText}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          <p className="text-sm font-mono-custom text-primary tracking-widest uppercase mb-6">
            Frontend Developer_
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] mb-8">
            <span className="font-semibold">Soham</span>{" "}
            <span className="font-display italic text-primary">Gurav</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-6 mb-12"
        >
          <a href="#projects" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors">
            Explore Works
          </a>
          <a href="/blank.pdf" download className="inline-flex items-center gap-2 border border-foreground/20 px-6 py-3 text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-colors">
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center gap-5"
        >
          {[
            { icon: Github, href: "https://github.com/sohamgurav5305", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/soham-gurav-8799a7307/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:gurav.sohamsudhakar@gmail.com", label: "Mail" },
            { icon: FileText, href: "/blank.pdf", label: "Resume" },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}
              className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Status cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="max-w-7xl mx-auto px-6 w-full mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: "Available for", value: "Freelance & Roles" },
          { label: "Specialization", value: "React & Full Stack" },
          { label: "Contact", value: "Mumbai, India" },
          { label: "Opportunities", value: "Open for Internships" },
        ].map((item) => (
          <div key={item.label} className="border border-subtle p-4">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{item.label}</p>
            <p className="text-sm font-medium">{item.value}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
