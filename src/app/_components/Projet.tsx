import { LucideIcon } from "lucide-react";

export const Projet = (props: {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
  }) => {
    return (
      <a
        href={props.url}
        className="inline-flex items-center gap-4 hover:bg-accent"
        target="_blank" rel="noopener noreferrer"
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
  