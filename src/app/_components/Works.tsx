import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Projet } from "./Projet";

import { Bed, Building, Camera, ChefHat, CircleDollarSign } from "lucide-react";
import { ContactCard } from "./ContactCard";

export const Works = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div id="projet" className="flex-[3] w-full">
        <Card className=" w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Projets</p>
          <div className="flex flex-col gap-4">
            {Projets.map((projet, index) => (
              <Projet
                key={index}
                Logo={projet.Logo}
                title={projet.title}
                description={projet.description}
                technos={projet.technos}
                url={projet.url}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full ">
        <Card className="w-full p-4 flex-1 flex flex-col gap-2 ">
          <p className="text-lg text-muted-foreground">Contact</p>
          <a
            href="https://www.linkedin.com/in/mathilde-besse-bb620223b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactCard
              image="/images/mathilde.webp"
              mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgV3rvl_AvDgG9o7p9b_b1sb1ZVChFrvuNQ&s"
              name="Mathilde Besse"
              description="Rejoins-moi sur LinkedIn!"
            />
          </a>
          <a
            href="https://github.com/Mathilde0712?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactCard
              image="/images/mathilde.webp"
              mediumImage="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              name="Mathilde Besse"
              description="Rejoins-moi sur GitHub!"
            />
          </a>
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
      "Site internet permettant aux usagers de trouver un hébergement et des activités dans la ville de leur choix.",
    technos: "HTML, CSS",
    url: "https://github.com/Mathilde0712/Booki",
  },
  {
    Logo: ChefHat,
    title: "Oh my food",
    description:
      "Site internet qui répertorie les menus de restaurants gastronomiques.",
    technos: "HTML, SASS",
    url: "https://github.com/Mathilde0712/Ohmyfood-",
  },
  {
    Logo: Camera,
    title: "Sophie Bluel",
    description: "Conception du site portfolio d’une architecte d’intérieur.",
    technos: "HTML, CSS, JAVASCRIPT",
    url: "https://github.com/Mathilde0712/Sophie-Bluel",
  },
  {
    Logo: Building,
    title: "Kasa",
    description:
      "Site internet d'une entreprise leader dans le domaine de la location d'appartements entre particuliers.",
    technos: "REACT,REACT ROUTER DOM, SASS",
    url: "https://github.com/Mathilde0712/Kasa",
  },
  {
    Logo: CircleDollarSign,
    title: "ArgentBank",
    description:
      "Argent Bank est une nouvelle banque en ligne qui souhaite percer dans le secteur bancaire.",
    technos: "REACT, REDUX, TYPESCRIPT, CSS",
    url: "https://github.com/Mathilde0712/ArgentBank",
  },
];
