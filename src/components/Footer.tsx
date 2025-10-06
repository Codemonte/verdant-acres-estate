import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Real Estate", path: "/real-estate" },
    { name: "Agribusiness", path: "/agribusiness" },
    { name: "Impact & CSR", path: "/csr" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Section - Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-10 w-10 object-contain brightness-0 invert" />
              <span className="font-display font-bold text-lg">AgriEstate</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Building the future of real estate and agriculture through sustainable investments
              and innovative solutions.
            </p>
          </div>

          {/* Center Section - Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Contact & Social */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80 mb-4">
              <p>Email: info@agriestate.com</p>
              <p>Phone: +234 (0) 123 456 7890</p>
              <p>Hours: Mon - Fri, 9:00 AM - 5:00 PM</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} AgriEstate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
