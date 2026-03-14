import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-[15vh] border-t border-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-baseline gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-display italic text-primary">About</h2>
            <span className="text-4xl md:text-5xl font-semibold tracking-tighter">me</span>
          </div>
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-16">
            React & Full Stack Developer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Based in Mumbai, I'm a Computer Science and Engineering undergraduate skilled in web development, 
              backend technologies, and machine learning. Currently pursuing B.Tech at Sardar Patel Institute of Technology 
              along with a Minor in UI/UX from Pearl Academy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My work spans frontend development with React.js, backend integration, and data-driven projects. 
              I focus on crafting interfaces that are both technically robust and visually compelling, 
              turning ideas into real, usable software.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { label: "Degree", value: "B.Tech CSE" },
              { label: "Location", value: "Mumbai" },
              { label: "Focus", value: "Full Stack & ML" },
              { label: "Status", value: "Active" },
            ].map((item) => (
              <div key={item.label} className="border border-subtle p-5">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">{item.label}</p>
                <p className="text-lg font-medium">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
