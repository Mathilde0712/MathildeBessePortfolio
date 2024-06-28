import { Section } from "./Section";

export const Hero = () => {
  return (

    <Section className="flex max-md:flex-col-reverse items-start gap-4">
      <div id="presentation" className="flex-[3] w-full flex flex-col gap-2 max-md:items-center">
        <h2  className="font-caption text-5xl text-primary">Mathilde Besse</h2>
        <h3 className="text-3xl font-caption">Développeuse Front-end</h3>
        <p className="max-md:text-justify" >
          Après douze ans dans le commerce, j&apos;ai choisi de suivre une formation
          de développeur front-end. Cette décision est motivée par mon envie de
          relever de nouveaux défis et de me spécialiser dans les technologies
          numériques pour créer des interfaces utilisateur attrayantes et
          fonctionnelles.
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="https://avatars.githubusercontent.com/u/146964836?v=4"
          className="w-full h-auto max-w-xs rounded-xl "
          alt="photo de Mathilde"
        />
      </div>
    </Section>
  );
};
