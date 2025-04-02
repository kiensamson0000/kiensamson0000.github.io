import { MENULINKS, SOCIAL_LINKS, TYPED_STRINGS } from "../../constants";
import React, { MutableRefObject, useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import { gsap, Linear } from "gsap";
import Button, { ButtonTypes } from "../common/button";
import HeroImage from "./hero-image";
import ContactSection from "./contact";

const HERO_STYLES = {
  SECTION: "w-full flex md:items-center py-8 section-container min-h-screen relative mb-24",
  CONTENT: "font-medium flex flex-col pt-32 md:pt-0 select-none",
  SOCIAL_LINK: "link hover:opacity-80 duration-300 md:mr-4 mr-2",
  BG_WRAPPER:
    "absolute hero-bg right-0 md:bottom-0 bottom-8 -z-1 md:w-3/4 w-full scale-125 sm:scale-100 flex items-end",
  TYPED_SPAN: "text-[1.375rem] sm:text-3xl md:text-[2rem] seq",
};

interface HeroSectionProps {
  isDesktop: boolean;
}

const HeroSection = React.memo(({ isDesktop }: HeroSectionProps) => {
  const typedSpanElement: MutableRefObject<HTMLSpanElement> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  const initRevealAnimation = (targetSection: MutableRefObject<HTMLDivElement>): GSAPTimeline => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl
      .to(targetSection.current, { opacity: 1, duration: 2 })
      .from(
        targetSection.current.querySelectorAll(".seq"),
        { opacity: 0, duration: 0.5, stagger: 0.5 },
        "<"
      );

    return revealTl;
  };

  // useEffect(() => {
  //   const typed = new Typed(typedSpanElement.current, {
  //     strings: TYPED_STRINGS,
  //     typeSpeed: 50,
  //     backSpeed: 50,
  //     backDelay: 8000,
  //     loop: true,
  //   });

  //   initRevealAnimation(targetSection);

  //   return () => {
  //     typed.destroy();
  //   };
  // }, [typedSpanElement, targetSection]);

  useEffect(() => {
    const typed = new Typed(typedSpanElement.current, {
      strings: TYPED_STRINGS,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 8000,
      loop: true,
    });
    const ctx = gsap.context(() => {
      initRevealAnimation(targetSection);
    }, targetSection);
    return () => {
      typed.destroy();
      ctx.revert();
      // ctx.kill();
    };
  }, [typedSpanElement, targetSection]);

  const renderBackgroundImage = (): React.ReactNode => (
    <div className={HERO_STYLES.BG_WRAPPER} style={{ maxHeight: "650px" }}>
      <HeroImage />
    </div>
  );

  const renderSocialLinks = (): React.ReactNode =>
    Object.keys(SOCIAL_LINKS).map((el: keyof typeof SOCIAL_LINKS) => (
      <a
        href={SOCIAL_LINKS[el]}
        key={el}
        className={HERO_STYLES.SOCIAL_LINK}
        rel="noreferrer"
        target="_blank"
      >
        <Image src={`/social/${el}.svg`} alt={el} width={40} height={40} />
      </a>
    ));

  const renderHeroContent = (): React.ReactNode => (
    <div className={HERO_STYLES.CONTENT}>
      <div className="md:mb-4 mb-2">
        <h2 className="text-3xl sm:text-4xl seq">{`Hello, I am Kien Khuat`}👋🏻</h2>
        <h2 className="text-[1.75rem] sm:text-4xl seq">Full-Stack Software Engineer</h2>
      </div>
      <p className="mb-4">
        <span className={HERO_STYLES.TYPED_SPAN} ref={typedSpanElement}></span>
      </p>
      <div className="flex seq mb-5">{renderSocialLinks()}</div>
      <div className="flex seq">
        <Button
          classes="mr-3"
          type={ButtonTypes.OUTLINE}
          name="Resume"
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
          href={SOCIAL_LINKS.linkedin}
        ></Button>
        <ContactSection typeButton={ButtonTypes.PRIMARY} isDesktop={isDesktop} />
      </div>
    </div>
  );

  const { ref: heroSectionRef } = MENULINKS[0];

  return (
    <section
      className={HERO_STYLES.SECTION}
      id={heroSectionRef}
      ref={targetSection}
      style={{ opacity: 0 }}
    >
      {renderHeroContent()}
      {renderBackgroundImage()}
    </section>
  );
});

HeroSection.displayName = "LandingHero";

export default HeroSection;
