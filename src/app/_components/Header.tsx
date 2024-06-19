import { Button } from "@/components/ui/button"
import { Section } from "./Section"


export const Header =()=>{
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">Mathilde</h1>
                <div className="flex-1"/>
                <ul>
                    <Button className="p-1" variant="outline">Présentation</Button>
                    <Button className="p-1" variant="outline">Projets</Button>
                    <Button className="p-1" variant="outline">Compétences</Button>
                    <Button className="p-1" variant="outline">Contact</Button>
                </ul>
            </Section>
        </header>
    )
}