import { motion } from "framer-motion";

const Navbar = () => {
  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-subtle"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-tight">
          SOHAM<span className="font-display italic text-primary ml-1">G</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
        <a
          href="/blank.pdf"
          download
          className="text-xs tracking-widest uppercase text-primary border border-primary/30 px-4 py-2 hover:bg-primary/10 transition-colors duration-300"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
