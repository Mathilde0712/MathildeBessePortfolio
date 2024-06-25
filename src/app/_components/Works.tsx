import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import {
  Bed,
  Building,
  Camera,
  ChefHat,
  CircleDollarSign,
  LucideIcon,
} from "lucide-react";

export const Works = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className=" w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Projets</p>
          <div className="flex flex-col gap-4">
            {Projets.map((projet, index) => (
              <Projet
                key={index}
                Logo={projet.Logo}
                title={projet.title}
                description={projet.description}
                url={projet.url}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full ">
        <Card className="w-full p-4 flex-1">
          <p className="text-lg text-muted-foreground">Contact</p>
        </Card>
      </div>
    </Section>
  );
};

const Projets = [
  {
    Logo: Bed,
    title: "Booki",
    description:
      "Créer la page d'accueil d'une agence de voyage en utilisant HTML et CSS.",
    url: "https://github.com/Mathilde0712/Booki",
  },
  {
    Logo: ChefHat,
    title: "Oh my food",
    description:
      "Améliorez l'interface d'un site mobile avec des animations CSS.",
    url: "https://github.com/Mathilde0712/Ohmyfood-",
  },
  {
    Logo: Camera,
    title: "Sophie Bluel",
    description: "Créez une page web dynamique avec JavaScript.",
    url: "https://github.com/Mathilde0712/Sophie-Bluel",
  },
  {
    Logo: Building,
    title: "Kasa",
    description:
      "Créez une application web de location immobilière avec React.",
    url: "https://github.com/Mathilde0712/Kasa",
  },
  {
    Logo: CircleDollarSign,
    title: "ArgentBank",
    description:
      "Implémentez le front-end d'une application bancaire avec React.",
    url: "https://github.com/Mathilde0712/ArgentBank",
  },
];

const Projet = (props: {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
}) => {
  return (
    <a
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent "
    >
      <span className="bg-accent text-accent-foreground p-4 rounded-sm">
        <props.Logo />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </a>
  );
};
