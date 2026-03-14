import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-[15vh] border-t border-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-baseline gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-display italic text-primary">Journey</h2>
            <span className="text-4xl md:text-5xl font-semibold tracking-tighter">milestone</span>
          </div>
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-16">
            Professional path & impact
          </p>
        </motion.div>

        <div className="space-y-0">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-subtle py-10"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <p className="font-mono-custom text-xs text-muted-foreground mb-3">June 2025 — July 2025</p>
                <h3 className="text-2xl md:text-3xl font-display italic mb-1">Frontend Developer Intern</h3>
                <p className="text-muted-foreground">Excel Technologies</p>
              </div>
              <span className="text-xs px-3 py-1 border border-primary/30 text-primary uppercase tracking-widest self-start">
                Intern
              </span>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground max-w-2xl">
              <li>• Developed responsive web interfaces using React.js, HTML, CSS, and JavaScript</li>
              <li>• Implemented reusable components and optimized rendering for better performance</li>
              <li>• Collaborated with backend developers to integrate RESTful APIs</li>
              <li>• Improved UI/UX design using Tailwind CSS and Bootstrap</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {["React.js", "Tailwind CSS", "JavaScript", "REST APIs"].map((t) => (
                <span key={t} className="text-xs px-3 py-1 border border-subtle text-muted-foreground">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Teaching Assistant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-subtle py-10"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <p className="font-mono-custom text-xs text-muted-foreground mb-3">Aug 2025 — Present</p>
                <h3 className="text-2xl md:text-3xl font-display italic mb-1">Teaching Assistant</h3>
                <p className="text-muted-foreground">of Dr. B. N. Chaudhari</p>
              </div>
              <span className="text-xs px-3 py-1 border border-primary/30 text-primary uppercase tracking-widest self-start">
                Active
              </span>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-subtle py-10"
          >
            <div>
              <p className="font-mono-custom text-xs text-muted-foreground mb-3">2023 — Present</p>
              <h3 className="text-2xl md:text-3xl font-display italic mb-1">B.Tech in Computer Science</h3>
              <p className="text-muted-foreground">Sardar Patel Institute Of Technology, Mumbai</p>
              <p className="text-sm text-primary mt-2">CGPA: 7.79/10</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-subtle py-10"
          >
            <div>
              <p className="font-mono-custom text-xs text-muted-foreground mb-3">2024 — Present</p>
              <h3 className="text-2xl md:text-3xl font-display italic mb-1">Minor in UI/UX</h3>
              <p className="text-muted-foreground">Pearl Academy</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
