import { Link } from "wouter";
import './footer.less';
import LOGO from '../../assets/logo.svg';

const footerLinks = {
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Contact Us", href: "#contact" },
    { label: "Services", href: "#contact" },
    { label: "Solution", href: "#contact" },
  ],
  ContactUs: [
    { label: "hello@catalystiqs.com", href: "#about" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t">
      <div className="footer-contain container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <img src={LOGO} />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              At Catalyst IQ, we believe that success is a journey, and we’re here to help guide you every step of the way. We offer expert guidance using data-proven techniques and results-focused best practices to drive major performance improvements across your entire organization.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              support@marketpro.com
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="text-center">
              <h3 className="font-semibold mb-4 text-white">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
        <p>© 2024 MarketPro. All rights reserved.</p>
      </div>
    </footer>
  );
}
