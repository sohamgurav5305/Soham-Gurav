import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const projects = [
  {
    slug: "foodshare",
    num: "01",
    tags: "WEB • PHP • FULLSTACK",
    title: "FoodShare",
    description: "A dynamic food-sharing website connecting donors with NGOs. Features donor registration, food listing, and request management with MySQL backend.",
    highlights: ["Donor Registration", "Food Listing", "Request Management"],
    tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    year: "2025",
    details: "FoodShare is a full-stack web application designed to bridge the gap between food donors and NGOs. The platform enables donors to register, list available food items with details like quantity and expiry, and allows NGOs to browse and request food donations. Built with PHP and MySQL, the system features secure authentication, real-time food availability tracking, and an admin dashboard for managing all operations efficiently.",
    features: [
      "User authentication and role-based access control",
      "Food listing with detailed descriptions, quantity, and expiry tracking",
      "NGO request management with approval workflows",
      "Admin dashboard for monitoring donations and requests",
      "Responsive design for mobile and desktop access",
      "MySQL database with optimized queries for fast retrieval",
    ],
  },
  {
    slug: "luxury-watch-price-prediction",
    num: "02",
    tags: "ML • DATA SCIENCE • PREDICTION",
    title: "Luxury Watch Price Prediction",
    description: "Machine learning model predicting luxury watch prices based on brand, material, condition, and year. Trained with Linear Regression, Random Forest, and XGBoost.",
    highlights: ["EDA", "Model Comparison", "Accuracy Metrics"],
    tech: ["Python", "Pandas", "NumPy", "XGBoost"],
    year: "2025",
    details: "This machine learning project focuses on predicting the prices of luxury watches using various features such as brand, material, condition, and manufacturing year. The project involved comprehensive exploratory data analysis, feature engineering, and training multiple models including Linear Regression, Random Forest, and XGBoost to compare performance and achieve optimal prediction accuracy.",
    features: [
      "Comprehensive Exploratory Data Analysis (EDA) with visualizations",
      "Feature engineering and preprocessing pipeline",
      "Model training with Linear Regression, Random Forest, and XGBoost",
      "Hyperparameter tuning for optimal performance",
      "Model comparison using RMSE, MAE, and R² metrics",
      "Data visualization with Matplotlib and Seaborn",
    ],
  },
  {
    slug: "serene-meditation-app",
    num: "03",
    tags: "UX • UI • CASE STUDY",
    title: "Serene — Meditation App",
    description: "A complete UX/UI case study for a mindfulness app focused on reducing stress through guided meditations, sleep stories, and mood tracking.",
    highlights: ["User Research", "Wireframes", "High-Fidelity Prototype", "Usability Testing"],
    tech: ["Figma", "Adobe XD", "Miro", "Maze"],
    year: "2025",
    details: "Serene is an end-to-end UX/UI case study designed to help young professionals manage stress and improve sleep quality through mindfulness. The project began with extensive user research — including surveys with 40+ participants and 8 in-depth interviews — to uncover the emotional barriers users face when starting a meditation practice. Findings revealed that overwhelming content libraries and rigid streak systems caused users to abandon existing apps. Serene addresses this with a calming, minimal interface, a personalized onboarding flow, mood-based session recommendations, and a gentle 'no-pressure' progress system that celebrates consistency without guilt.",
    problem: "70% of meditation app users churn within the first week due to choice overload, intimidating UI, and shame-based streak mechanics that punish missed days.",
    solution: "A warm, minimal interface with mood-driven recommendations, a flexible progress system, and bite-sized 3-minute sessions designed for busy lifestyles.",
    process: [
      "Discovery — Competitive audit of Calm, Headspace, and Insight Timer",
      "Research — 40+ survey responses, 8 user interviews, affinity mapping",
      "Define — User personas, journey maps, and problem statement",
      "Ideate — Crazy 8s, user flows, and information architecture",
      "Design — Low-fi wireframes → High-fi mockups in Figma",
      "Test — Moderated usability tests with 6 participants via Maze",
    ],
    features: [
      "Mood-based session recommendations powered by a 5-second daily check-in",
      "Personalized onboarding that adapts to experience level and goals",
      "Sleep stories library with ambient soundscapes and offline downloads",
      "Gentle progress tracking — no streaks, just celebrated milestones",
      "Dark mode with warm tones optimized for evening wind-down",
      "Accessible design meeting WCAG 2.1 AA standards (contrast, motion, screen reader)",
    ],
    outcomes: [
      "92% task success rate in usability testing",
      "SUS score of 84 (excellent)",
      "Reduced average time-to-first-session from 4 min to 45 sec",
      "Featured in SPIT Design Showcase 2025",
    ],
  },
];

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display italic text-primary mb-4">Project Not Found</h1>
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6 py-12"
      >
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs tracking-[0.2em] uppercase">Back to Projects</span>
        </Link>

        <div className="flex items-start justify-between mb-4">
          <span className="text-7xl md:text-9xl font-display italic text-muted-foreground/10">{project.num}</span>
          <span className="text-xs tracking-[0.2em] text-primary uppercase mt-4">{project.tags}</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-display italic text-primary mb-4"
        >
          {project.title}
        </motion.h1>

        <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-12">{project.year}</p>

        <div className="border-t border-subtle pt-12 space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6">Overview</h2>
            <p className="text-foreground/80 leading-relaxed text-lg max-w-3xl">{project.details}</p>
          </motion.div>

          {"problem" in project && (project as any).problem && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <div className="border border-subtle p-8">
                <h2 className="text-xs tracking-[0.3em] text-primary uppercase mb-4">The Problem</h2>
                <p className="text-foreground/80 leading-relaxed">{(project as any).problem}</p>
              </div>
              <div className="border border-primary/30 bg-primary/5 p-8">
                <h2 className="text-xs tracking-[0.3em] text-primary uppercase mb-4">The Solution</h2>
                <p className="text-foreground/80 leading-relaxed">{(project as any).solution}</p>
              </div>
            </motion.div>
          )}

          {"process" in project && Array.isArray((project as any).process) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6">Design Process</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {(project as any).process.map((step: string, i: number) => (
                  <div key={i} className="border border-subtle p-6 flex gap-4">
                    <span className="text-2xl font-display italic text-primary shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-foreground/80 leading-relaxed text-sm">{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6">Key Features</h2>
            <ul className="space-y-4">
              {project.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-primary text-xs mt-1.5">●</span>
                  <span className="text-foreground/80 leading-relaxed">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6">Main Portions</h2>
            <div className="flex flex-wrap gap-4">
              {project.highlights.map((h) => (
                <span key={h} className="text-sm text-foreground/70 border border-subtle px-4 py-2">{h}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-4 py-2 border border-primary/30 text-primary bg-primary/5">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {"outcomes" in project && Array.isArray((project as any).outcomes) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6">Outcomes & Impact</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {(project as any).outcomes.map((o: string, i: number) => (
                  <div key={i} className="border-l-2 border-primary pl-6 py-2">
                    <p className="text-foreground/80 leading-relaxed">{o}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
