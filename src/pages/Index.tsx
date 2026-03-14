import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={handleComplete} />}
      </AnimatePresence>

      {!loading && (
        <div className="bg-background min-h-screen">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </div>
      )}
    </>
  );
};

export default Index;
