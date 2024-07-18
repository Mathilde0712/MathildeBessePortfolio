import { Button } from "@/components/ui/button";
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
        <ul>
          <li>
            <Link href="#presentation">
              <Button className="p-1" variant="outline">
                Présentation
              </Button>
            </Link>
          </li>
          <li>
            <Link href="#projet">
              <Button className="p-1" variant="outline">
                Projets
              </Button>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="#competence">
              <Button className="p-1" variant="outline">
                Compétences
              </Button>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <Button className="p-1" variant="outline">
                Contact
              </Button>
            </Link>
          </li>
        </ul>
      </Section>
    </header>
  );
};
