import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-[20vh] border-t border-subtle">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs tracking-[0.3em] text-primary uppercase mb-6">
            Ready to collaborate?
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9] mb-12">
            <span className="font-display italic text-primary">Let's</span>{" "}
            <span className="font-semibold">Build The</span>
            <br />
            <span className="font-display italic">unexpected</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-8"
        >
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Direct Inquiries</p>
            <a
              href="mailto:gurav.sohamsudhakar@gmail.com"
              className="text-lg md:text-xl text-foreground hover:text-primary transition-colors duration-300 underline underline-offset-4 decoration-subtle hover:decoration-primary"
            >
              gurav.sohamsudhakar@gmail.com
            </a>
          </div>

          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Social Presence</p>
            <div className="flex items-center justify-center gap-6">
              <a href="https://github.com/sohamgurav5305" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300">
                <Github size={18} />
                <span className="text-sm">Github</span>
              </a>
              <a href="https://www.linkedin.com/in/soham-gurav-8799a7307/" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300">
                <Linkedin size={18} />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a href="mailto:gurav.sohamsudhakar@gmail.com"
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300">
                <Mail size={18} />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-xs text-muted-foreground/40"
        >
          © 2026 Soham Gurav. Crafted with precision.
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
