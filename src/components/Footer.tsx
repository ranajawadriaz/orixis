import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaWhatsapp, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { SITE, SOCIAL, mailtoLink } from '@/lib/site';

const Footer = () => {
  const footerLinks = {
    Services: [
      { name: 'Web Development', path: '/services' },
      { name: 'Mobile Apps', path: '/services' },
      { name: 'AI Solutions', path: '/services' },
      { name: 'Data & Analytics', path: '/services' },
    ],
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Products', path: '/products' },
    ],
    'Get Started': [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Our Products', path: '/products' },
      { name: 'Success Stories', path: '/case-studies' },
      { name: 'Join the Team', path: '/careers' },
    ],
  };

  const socialLinks = [
    { icon: FaWhatsapp, href: SOCIAL.whatsapp, label: 'WhatsApp', external: true },
    { icon: MdEmail, href: SOCIAL.email, label: 'Email', external: false },
    { icon: FaLinkedinIn, href: SOCIAL.linkedin, label: 'LinkedIn', external: true },
    { icon: FaInstagram, href: SOCIAL.instagram, label: 'Instagram', external: true },
  ];

  return (
    <footer className="bg-orixis-bg-secondary border-t border-orixis-text/10">
      <div className="container-responsive mx-auto py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4 w-fit">
              <div className="w-9 h-9 bg-gradient-primary rounded-xl flex items-center justify-center shadow-md shadow-orixis-teal/30">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-display font-bold gradient-text">Orixis</span>
            </Link>
            <p className="text-orixis-text-muted mb-6 max-w-md">
              Engineering the future with AI, web, and mobile solutions. We transform ideas into
              intelligent, scalable technology that drives business growth.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map(({ icon: Icon, href, label, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="w-10 h-10 bg-orixis-text/10 hover:bg-gradient-primary rounded-lg flex items-center justify-center text-orixis-text-muted hover:text-white transition-all duration-300 hover:-translate-y-1"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-orixis-text mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-orixis-text-muted hover:text-orixis-teal transition-colors duration-300"
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
        <div className="border-t border-orixis-text/10 mt-10 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-orixis-text-muted">
            <div className="flex items-start gap-3">
              <Mail className="text-orixis-teal mt-0.5 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-orixis-text mb-1">Email</h4>
                <a href={mailtoLink()} className="hover:text-orixis-teal transition-colors break-all">
                  {SITE.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-orixis-teal mt-0.5 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-orixis-text mb-1">WhatsApp / Phone</h4>
                <a href={`tel:${SITE.phoneTel}`} className="hover:text-orixis-teal transition-colors">
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-orixis-teal mt-0.5 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-orixis-text mb-1">Address</h4>
                <p>
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-orixis-text/10 mt-8 pt-6 text-center text-orixis-text-muted text-sm">
          <p>
            &copy; {new Date().getFullYear()} Orixis. All rights reserved. | Engineering the Future with
            AI, Web &amp; Mobile
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
