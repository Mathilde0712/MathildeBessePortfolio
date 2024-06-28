
import { Section } from "./Section";
import { ReactIcon } from "./icons/ReactIcon";
import { NextJsIcon } from "./icons/NextJsIcon";
import { TypeScriptIcon } from "./icons/TypeScriptIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { SassIcon } from "./icons/SassIcon";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <h2 id="competence" className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        J&apos;aime travailler sur ...
      </h2>

      <div className=" w-full flex justify-between max-md:flex-col max-md:items-center ">
        <div className="flex max-md:flex-col gap-4 items-center mb-5">
          <div className="flex flex-col gap-2  ">
            <ReactIcon
              size={42}
              className="animate-spin"
              style={{ animationDuration: "10s" }}
            />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">React</h3>
        </div>

        <div className=" flex max-md:flex-col gap-4 items-center mb-5">
          <div className="flex flex-col gap-2">
            <NextJsIcon
              size={42}
              className="animate-spin"
              style={{ animationDuration: "10s" }}
            />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">NextJs</h3>
        </div>
        <div className="flex max-md:flex-col gap-4 items-center mb-5">
          <div className="flex flex-col gap-2">
            <TypeScriptIcon
              size={42}
              className="animate-spin"
              style={{ animationDuration: "10s" }}
            />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">TypeScript</h3>
        </div>
      </div>
      <div className="w-full flex justify-around max-md:flex-col max-md:items-center ">
        <div className="flex max-md:flex-col gap-4 items-center mb-5">
          <div className="flex flex-col gap-2">
            <TailwindIcon
              size={42}
              className="animate-spin"
              style={{ animationDuration: "10s" }}
            />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
        </div>
        <div className="flex max-md:flex-col gap-4 items-center mb-5">
          <div className="flex flex-col gap-2 ">
            <SassIcon
              size={42}
              className="animate-spin"
              style={{ animationDuration: "10s" }}
            />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">SASS</h3>
        </div>
      </div>
    </Section>
  );
};
