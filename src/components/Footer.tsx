
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Services: [
      { name: 'Web Development', path: '/services' },
      { name: 'Mobile Apps', path: '/services' },
      { name: 'AI Solutions', path: '/services' },
      { name: 'ML & Data', path: '/services' },
    ],
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Products', path: '/products' },
    ],
    Legal: [
      { name: 'Privacy Policy', path: '/' },
      { name: 'Terms of Service', path: '/' },
      { name: 'Cookie Policy', path: '/' },
      { name: 'GDPR', path: '/' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-orixis-blue-light border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-display font-bold gradient-text">Orixis</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Engineering the future with AI, web, and mobile solutions. We transform ideas into intelligent, scalable technology that drives business growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-white/10 hover:bg-orixis-teal/20 rounded-lg flex items-center justify-center text-white/70 hover:text-orixis-teal transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-orixis-teal transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/70">
            <div>
              <h4 className="font-semibold text-white mb-2">Email</h4>
              <a href="mailto:hello@orixis.com" className="hover:text-orixis-teal transition-colors">
                hello@orixis.com
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Phone</h4>
              <a href="tel:+1234567890" className="hover:text-orixis-teal transition-colors">
                +1 (234) 567-890
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Address</h4>
              <p>123 Innovation Drive<br />Tech City, TC 12345</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/70">
          <p>&copy; 2024 Orixis. All rights reserved. | Engineering the Future with AI, Web & Mobile</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
