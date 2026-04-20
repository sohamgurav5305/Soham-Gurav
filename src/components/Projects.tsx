import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    num: "01",
    tags: "WEB • PHP • FULLSTACK",
    slug: "foodshare",
    title: "FoodShare",
    description: "A dynamic food-sharing website connecting donors with NGOs. Features donor registration, food listing, and request management with MySQL backend.",
    highlights: "Donor Registration • Food Listing • Request Management",
    tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    year: "2025",
  },
  {
    num: "02",
    tags: "ML • DATA SCIENCE • PREDICTION",
    slug: "luxury-watch-price-prediction",
    title: "Luxury Watch Price Prediction",
    description: "Machine learning model predicting luxury watch prices based on brand, material, condition, and year. Trained with Linear Regression, Random Forest, and XGBoost.",
    highlights: "EDA • Model Comparison • Accuracy Metrics",
    tech: ["Python", "Pandas", "NumPy", "XGBoost"],
    year: "2025",
  },
  {
    num: "03",
    tags: "UX • UI • CASE STUDY",
    slug: "serene-meditation-app",
    title: "Serene — Meditation App",
    description: "A complete UX/UI case study for a mindfulness app focused on reducing stress through guided meditations, sleep stories, and mood tracking. Designed in Figma with full user research and prototyping.",
    highlights: "User Research • Wireframes • High-Fidelity Prototype",
    tech: ["Figma", "Adobe XD", "Miro", "Maze"],
    year: "2025",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-[15vh] border-t border-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-baseline gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-display italic text-primary">Project</h2>
            <span className="text-4xl md:text-5xl font-semibold tracking-tighter">gallery</span>
          </div>
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-16">
            Handpicked selection
          </p>
        </motion.div>

        <div className="space-y-0">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="border-b border-subtle py-12 group"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-5xl font-display italic text-muted-foreground/20">{project.num}</span>
                <span className="text-xs tracking-[0.2em] text-primary uppercase">{project.tags}</span>
              </div>

              <Link to={`/project/${project.slug}`}>
                <h3 className="text-3xl md:text-5xl font-display italic mb-4 group-hover:text-primary transition-colors duration-500 cursor-pointer">
                  {project.title}
                </h3>
              </Link>

              <p className="text-muted-foreground leading-relaxed max-w-2xl mb-6">
                {project.description}
              </p>

              <div className="mb-6">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Main Portions</p>
                <p className="text-sm text-foreground/80">{project.highlights}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 border border-subtle text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
