import Link from "next/link";

const footerLinks = {
  Product: [
    { href: "/components", label: "Components" },
    { href: "/docs", label: "Documentation" },
    { href: "/examples", label: "Examples" },
    { href: "/components/buttons", label: "Buttons" },
    { href: "/components/cards", label: "Cards" },
  ],
  Resources: [
    { href: "/docs/getting-started", label: "Getting Started" },
    { href: "/docs/installation", label: "Installation" },
    { href: "/docs/theming", label: "Theming" },
    { href: "/docs/api-reference", label: "API Reference" },
  ],
  Community: [
    { href: "/about", label: "About Us" },
    { href: "#", label: "GitHub" },
    { href: "#", label: "Discord" },
    { href: "#", label: "Twitter" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
                R
              </div>
              <span className="text-lg font-bold text-foreground">
                ReactUI
              </span>
            </div>
            <p className="mt-3 text-sm text-muted">
              A comprehensive React component library with beautiful design,
              accessibility, and developer experience in mind.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-foreground">{title}</h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} ReactUI Library. All rights
            reserved.
          </p>
          <div className="mt-3 flex gap-4 sm:mt-0">
            <Link
              href="#"
              className="text-sm text-muted transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted transition-colors hover:text-primary"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-muted transition-colors hover:text-primary"
            >
              License
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
