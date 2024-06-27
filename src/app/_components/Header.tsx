import { Button } from "@/components/ui/button"
import { Section } from "./Section"
import Link from "next/link"


export const Header =()=>{
    return (
        <header className="top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">Mathilde</h1>
                <div className="flex-1"/>
                <ul>
                <Link href="#presentation"><Button className="p-1" variant="outline">Présentation</Button></Link>
                    <Link href="#projet"><Button  className="p-1" variant="outline">Projets</Button></Link>
                    <Link href="#competence"><Button className="p-1" variant="outline">Compétences</Button></Link>
                    <Link href="#contact"><Button className="p-1" variant="outline">Contact</Button></Link>
                </ul>
            </Section>
        </header>
    )
}