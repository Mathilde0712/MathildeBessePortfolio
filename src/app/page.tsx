import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { Works } from "./_components/Works";

export default function Home() {
  return (
    <main>
     <Header/>
     <Spacing size="md" />
     <Hero/>
     <Spacing size="md"/>
     <Works/>
    </main>
  );
}
