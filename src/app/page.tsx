import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { Works } from "./_components/Works";
import { Skills } from "./_components/Skills";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";

export default function Home() {
  return (
    <main>
     <Header/>
     <Spacing size="md" />
     <Hero/>
     <Spacing size="md"/>
     <Works/>
     <Spacing size="md"/>
     <Skills />
     <Spacing size="md"/>
     <Contact />
     <Spacing size="md"/>
     <Footer />
    </main>
  );
}
