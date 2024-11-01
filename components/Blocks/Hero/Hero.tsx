import ButtonBorderMagic from "@/components/ui/ButtonBorderMagic";
import { GridBg } from "@/components/ui/GridBg";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HiCursorClick } from "react-icons/hi";

const Hero = () => {
  return (
    <div
      id="header"
      className="ssm:p-10 relative flex min-h-[100vh] w-[100%] flex-col justify-center p-5"
    >
      <Spotlight
        className="h=[100vh] left-[15%] top-[20%] w-[40vw]"
        fill="blue"
      />
      <Spotlight className="h=[100vh] left-10 top-10 w-[50vw]" fill="white" />
      <Spotlight className="h=[100vh] -left-10 top-40 w-[40vw]" fill="purple" />

      <GridBg />

      <section className="relative z-[20] flex flex-col items-center gap-4">
        <h4 className="text-center uppercase tracking-widest text-black-100">
          Dynamic Web Magic with Next.js
        </h4>
        <h1>
          <TextGenerateEffect
            filter={false}
            duration={2}
            className="max-w-[500px] text-center text-5xl font-bold"
            words="Portfolio with some dope animation"
          />
        </h1>
        <p className="text-center text-xl text-black-100">
          Hi! It's my first project with Framer-motion library!
        </p>
        <ButtonBorderMagic icon={<HiCursorClick />}>
          Awesome button!
        </ButtonBorderMagic>
      </section>
    </div>
  );
};

export default Hero;
