import { Section } from "./Section";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="top-0 py-4">
      <Section className="flex items-baseline max-md:flex-col max-md:justify-center max-md:items-center">
        <h1 className="text-lg font-bold text-primary max-md:flex max-md:items-center">
          Mathilde
        </h1>
        <div className="flex-1 max-md:flex[2]" />
        <ul className="flex">
          <li>
            <Link
              href="#presentation"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground p-1"
            >
              Présentation
            </Link>
          </li>
          <li>
            <Link
              href="#projet"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground p-1"
            >
              Projets
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href="#competence"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground p-1"
            >
              Compétences
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground p-1"
            >
              Contact
            </Link>
          </li>
        </ul>
      </Section>
    </header>
  );
};
