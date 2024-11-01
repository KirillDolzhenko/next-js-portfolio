import ButtonGlow from "@/components/ui/ButtonGlow";
import { GridBg } from "@/components/ui/GridBg";
import { socialMedia } from "@/data";
import React from "react";
import { FaArrowRight, FaArrowRightFromBracket } from "react-icons/fa6";

function Footer() {
  return (
    <div id="footer" className="relative overflow-hidden">
      <footer className="mx-auto flex flex-col items-center gap-6 pb-7">
        <div className="relative z-20">
          <h4 className="heading mb-5 max-w-screen-sm text-white">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </h4>
          <p className="text-center text-white-200">
            Reach out to me today and let's discuss how I can help you achieve
            your goals.
          </p>
        </div>
        <GridBg />
        <ButtonGlow>
          <div className="flex items-center gap-2 px-3">
            <span>Contact Me Now</span> <FaArrowRight />{" "}
          </div>
        </ButtonGlow>
        <div className="relative z-20 mt-28 flex w-full max-w-screen-lg flex-col flex-wrap items-center justify-between gap-5 px-[10px] text-white small-sm:flex-row">
          <span>Copyright © Kirill Dolzhenko</span>
          <ul className="flex gap-5">
            {socialMedia.map((el) => (
              <li key={el.id}>
                <a
                  href="#"
                  className="flex h-full items-center justify-center rounded-lg border border-white-100/50 p-[10px] transition-all duration-100 ease-in-out [box-shadow:_inset_0_0_4px_0_rgb(255_255_255_/_0.4)] hover:scale-105 hover:[box-shadow:_inset_0_0_8px_0_rgb(255_255_255_/_0.4)]"
                >
                  <img src={el.img} alt="icon" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
