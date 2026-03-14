import { motion } from "framer-motion";

const skillCategories = [
  {
    num: "1",
    title: "Languages & Databases",
    items: ["Java", "C", "JavaScript", "PHP", "SQL", "MySQL", "MongoDB"],
  },
  {
    num: "2",
    title: "Web & Frameworks",
    items: ["React.js", "Node.js", "Bootstrap", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    num: "3",
    title: "ML & Data",
    items: ["NumPy", "Pandas", "Matplotlib", "XGBoost", "Scikit-learn"],
  },
  {
    num: "4",
    title: "Tools & Design",
    items: ["Git", "GitHub", "Figma", "VS Code", "Postman"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-[15vh] border-t border-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-baseline gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-display italic text-primary">Stack</h2>
            <span className="text-4xl md:text-5xl font-semibold tracking-tighter">tools</span>
          </div>
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-16">
            High-performance weapons of choice
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="border border-subtle p-6"
            >
              <span className="text-4xl font-display italic text-muted-foreground/20 block mb-4">{cat.num}</span>
              <h3 className="text-lg font-semibold mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
