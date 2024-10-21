import Grid from "@/components/Blocks/Grid/Grid";
import Hero from "@/components/Blocks/Hero/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

export default function Home() {
  return (
    <>
      <header>
        <FloatingNav
          navItems={[
            {
              name: "Home",
              link: "/",
            },
            {
              name: "About me",
              link: "/",
            },
            {
              name: "My Works",
              link: "/",
            },
          ]}
        />
      </header>
      <main
        className={
          "dark flex min-h-[130vh] justify-center bg-black px-[5px] sm:px-[10px]"
        }
      >
        <div className="flex-grow-1 mx-auto flex-auto">
          <Hero />
          <Grid />
        </div>
      </main>
    </>
  );
}
