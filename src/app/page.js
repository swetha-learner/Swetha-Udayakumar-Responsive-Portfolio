import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import InterSkills from "./components/InterSkills"
import TechStack from "./components/TechStack";
import ProjectsBento from "./components/ProjectsBento"
import ContactMe from "./components/ContactMe"
import Credential from "./components/Credential"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-900 ">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero />
        <TechStack />
        <ProjectsBento />
        <InterSkills />
        <Credential />
        <ContactMe />
        
      </div>
    </main>
  );
}
