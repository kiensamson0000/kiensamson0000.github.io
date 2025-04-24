import { ISkillDetail, MENULINKS, SKILLS } from "../../constants";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Icon } from "@iconify/react";

const SKILL_STYLES = {
  SECTION: "w-full relative select-none mb-24 section-container py-12 flex flex-col justify-center",
  SKILL_TITLE: "section-title-sm sm:text-lg mb-[0.275rem] seq",
};

const SkillsSection = () => {
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
  const [willChange, setwillChange] = useState(false);

  const initRevealAnimation = (targetSection: MutableRefObject<HTMLDivElement>): ScrollTrigger => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    return ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".skills-wrapper"),
      start: "100px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
      onToggle: (self) => setwillChange(self.isActive),
    });
  };

  useEffect(() => {
    const revealAnimationRef = initRevealAnimation(targetSection);

    return revealAnimationRef.kill;
  }, [targetSection]);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     initRevealAnimation(targetSection);
  //   }, targetSection);
  //   return () => {
  //     ctx.revert();
  //     // ctx.kill();
  //   };
  // }, [targetSection]);

  const renderSectionTitle = (): React.ReactNode => (
    <div className="flex flex-col">
      <p className="section-title-sm seq">SKILLS</p>
      <h1 className="section-heading seq mt-2">My Skills</h1>
      <h2 className="text-2xl md:max-w-[50rem] w-full seq mt-2">
        A highly skilled full stack developer with expertise in crafting efficient and scalable web
        applications. I bring a strong foundation in both dynamic front-end development and robust
        back-end architecture.
      </h2>
    </div>
  );

  const renderBackgroundPattern = (): React.ReactNode => (
    <>
      <div className="absolute right-0 -bottom-1/3 w-1/5 max-w-xs md:flex hidden justify-end">
        <Image src="/pattern-r.svg" loading="lazy" height={700} width={320} alt="pattern" />
      </div>
      <div className="absolute left-0 -bottom-3.5 w-1/12 max-w-xs md:block hidden">
        <Image src="/pattern-l.svg" loading="lazy" height={335} width={140} alt="pattern" />
      </div>
    </>
  );

  const renderSkillColumn = (title: string, skills: ISkillDetail[]): React.ReactNode => (
    <>
      <h3 className={SKILL_STYLES.SKILL_TITLE}>{title}</h3>
      <div className={`flex flex-wrap seq ${willChange ? "will-change-opacity" : ""}`}>
        {skills.map((skill) => (
          <>
            {skill.icon.includes("icon-custom-") && (
              <Image
                key={skill.icon}
                src={`/projects/tech/${skill.icon}.svg`}
                alt={skill.icon}
                width={67}
                height={67}
                className="skill w-16 h-16 md:w-[72px] md:h-[72px]"
                objectFit="contain"
              />
            )}
            {!skill.icon.includes("icon-custom:") && (
              <Icon
                key={skill.icon}
                icon={skill.icon}
                className="w-16 h-16 md:w-[72px] md:h-[72px] skill"
              />
            )}
          </>
        ))}
      </div>
    </>
  );

  return (
    <section className="relative">
      {renderBackgroundPattern()}
      <div className={SKILL_STYLES.SECTION} id={MENULINKS[2].ref} ref={targetSection}>
        <div className="flex flex-col skills-wrapper">
          {renderSectionTitle()}
          <div className="mt-8 sm:mt-10">
            {renderSkillColumn("PROGRAMMING LANGUAGES", SKILLS.programmingLanguages)}
          </div>
          <div className="mt-3 sm:mt-5">
            {renderSkillColumn("FRAMEWORKS/PLATFORMS", SKILLS.frameworkOrPlatforms)}
          </div>
          <div className="flex flex-wrap mt-3 sm:mt-5">
            <div className="mr-6 mb-3">
              {renderSkillColumn("DATABASE MANAGEMENT SYSTEMS", SKILLS.database)}
            </div>
            <div>{renderSkillColumn("OTHERS", SKILLS.others)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
