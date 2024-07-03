import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import {Projet} from "./Projet"

import {
  Bed,
  Building,
  Camera,
  ChefHat,
  CircleDollarSign,
} from "lucide-react";
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
                url={projet.url}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full ">
        <Card className="w-full p-4 flex-1 flex flex-col gap-2 ">
          <p className="text-lg text-muted-foreground">Contact</p>
          <a href="https://www.linkedin.com/in/mathilde-besse-bb620223b/" target="_blank" rel="noopener noreferrer" >
          <ContactCard
            image="https://avatars.githubusercontent.com/u/146964836?v=4"
            mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgV3rvl_AvDgG9o7p9b_b1sb1ZVChFrvuNQ&s"
            name="Mathilde Besse"
            description="Rejoins-moi sur LinkedIn!"
          />
          </a>
          <a href="https://github.com/Mathilde0712?tab=repositories" target="_blank" rel="noopener noreferrer" >
          <ContactCard
            image="https://avatars.githubusercontent.com/u/146964836?v=4"
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

