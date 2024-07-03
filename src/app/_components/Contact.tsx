import { Section } from "./Section";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <h2
        id="contact"
        className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      >
        Contactez moi !
      </h2>

      <div className="flex flex-col w-full gap-2">
        <a href="https://www.linkedin.com/in/mathilde-besse-bb620223b/"  target="_blank" rel="noopener noreferrer" >
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

        <a href="mailto:mathildebesse07@gmail.com">
          <ContactCard
            image="https://avatars.githubusercontent.com/u/146964836?v=4"
            mediumImage="https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI"
            name="mathildebesse07@gmail.com"
            description="Je serais ravie de travailler avec toi!"
          />
        </a>
      </div>
    </Section>
  );
};
