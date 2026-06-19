import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-orixis-bg/80 backdrop-blur-xl shadow-lg border-b border-orixis-text/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container-responsive mx-auto">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-9 h-9 bg-gradient-primary rounded-xl flex items-center justify-center shadow-md shadow-orixis-teal/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <span className="text-xl font-display font-bold gradient-text">Orixis</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-7">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-medium transition-colors hover:text-orixis-teal after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-gradient-primary after:transition-all after:duration-300 ${
                  location.pathname === item.path
                    ? 'text-orixis-teal after:w-full'
                    : 'text-orixis-text-muted after:w-0 hover:after:w-full'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            <Button asChild className="bg-gradient-primary hover:opacity-90 text-white shadow-md shadow-orixis-teal/30">
              <Link to="/contact">Let's Talk</Link>
            </Button>
          </div>

          {/* Mobile Nav Controls */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-orixis-text hover:text-orixis-teal transition-colors p-1"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-orixis-bg/95 backdrop-blur-xl rounded-2xl mt-2 mb-3 p-4 animate-fade-in shadow-xl border border-orixis-text/10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2.5 px-2 rounded-lg text-sm font-medium transition-colors hover:bg-orixis-teal/10 hover:text-orixis-teal ${
                  location.pathname === item.path ? 'text-orixis-teal' : 'text-orixis-text-muted'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-4 bg-gradient-primary hover:opacity-90 text-white">
              <Link to="/contact">Let's Talk</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
