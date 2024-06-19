import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex max-mg:flex-col items-start">
      <div className="flex-[2]">
        <h2 className="font-caption text-5xl text-primary">Mathilde Besse</h2>
        <h3 className="text-3xl font-caption">Développeuse Front-end</h3>
        <p>
          Après douze ans dans le commerce, j'ai choisi de suivre une formation
          de développeur front-end. Cette décision est motivée par mon envie de
          relever de nouveaux défis et de me spécialiser dans les technologies
          numériques pour créer des interfaces utilisateur attrayantes et
          fonctionnelles.
        </p>
      </div>
      <div className="flex-1 max-md:m-auto ml-auto">
        <img
          src="https://avatars.githubusercontent.com/u/146964836?v=4"
          className="w-full h-auto max-w-xs"
          alt="photo de Mathilde"
        />
      </div>
    </Section>
  );
};
