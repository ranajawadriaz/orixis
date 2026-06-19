import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Index from '@/pages/Index';
import Services from '@/pages/Services';
import Products from '@/pages/Products';
import CaseStudies from '@/pages/CaseStudies';
import About from '@/pages/About';
import Careers from '@/pages/Careers';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

/** Routes wrapped in a fade/slide page transition (respects reduced-motion). */
const AnimatedRoutes = () => {
  const location = useLocation();
  const reduce = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduce ? undefined : { opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
