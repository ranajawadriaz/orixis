
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-orixis-bg/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-responsive mx-auto">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <span className="text-xl font-display font-bold gradient-text">Orixis</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-orixis-teal ${
                  location.pathname === item.path ? 'text-orixis-teal' : 'text-orixis-text-muted'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            <Button className="bg-gradient-primary hover:opacity-90 text-white">
              Let's Talk
            </Button>
          </div>

          {/* Mobile Nav Controls */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-orixis-text hover:text-orixis-teal transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-orixis-bg-secondary/95 backdrop-blur-md rounded-lg mt-2 p-4 animate-fade-in shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors hover:text-orixis-teal ${
                  location.pathname === item.path ? 'text-orixis-teal' : 'text-orixis-text-muted'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full mt-4 bg-gradient-primary hover:opacity-90 text-white">
              Let's Talk
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
