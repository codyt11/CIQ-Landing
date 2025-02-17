import { Link } from "wouter";

const footerLinks = {
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Contact Us", href: "#contact" },
  ],
  Services: [
    { label: "Digital Marketing", href: "#services" },
    { label: "Brand Strategy", href: "#services" },
    { label: "Content Creation", href: "#services" },
  ],
  Solutions: [
    { label: "For Startups", href: "#solutions" },
    { label: "For Enterprise", href: "#solutions" },
    { label: "For E-commerce", href: "#solutions" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <a className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                MarketPro
              </a>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Transforming businesses through innovative digital marketing solutions.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              support@marketpro.com
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
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

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 MarketPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
