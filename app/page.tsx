import Approach from "@/components/Blocks/Approach/Approach";
import Footer from "@/components/Blocks/Footer/Footer";
import Grid from "@/components/Blocks/Grid/Grid";
import Hero from "@/components/Blocks/Hero/Hero";
import KindWords from "@/components/Blocks/KindWords/KindWords";
import MyWork from "@/components/Blocks/MyWork/MyWork";
import Projects from "@/components/Blocks/Projects/Projects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

export default function Home() {
  return (
    <>
      <header className="hidden md:block">
        <FloatingNav
          navItems={[
            {
              name: "Home",
              link: "#header",
            },
            {
              name: "About Me",
              link: "#about",
            },
            {
              name: "Projects",
              link: "#projects",
            },
            {
              name: "Kind Words",
              link: "#words",
            },
            {
              name: "My Work",
              link: "#work",
            },
            {
              name: "Approach",
              link: "#approach",
            },
            {
              name: "Contact Me",
              link: "#footer",
            },
          ]}
        />
      </header>
      <div className="dark relative flex flex-col gap-20 overflow-hidden bg-black md:gap-32 lg:gap-40">
        <main
          className={
            "flex min-h-[130vh] flex-col justify-center px-[5px] sm:px-[10px]"
          }
        >
          <div className="flex-grow-1 mx-auto flex flex-auto flex-col gap-20 md:gap-32">
            <Hero />
            <Grid />
            <Projects />
            <KindWords />
            <MyWork />
            <Approach />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
