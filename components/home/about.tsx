import { gsap, Linear } from "gsap";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AboutSection = () => {
  const quoteRef: MutableRefObject<HTMLDivElement> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  const [willChange, setwillChange] = useState(false);

  const initAboutAnimation = (
    quoteRef: MutableRefObject<HTMLDivElement>,
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.1 },
    });
    timeline
      .fromTo(quoteRef.current.querySelector(".about-1"), { opacity: 0.2 }, { opacity: 1 })
      .to(quoteRef.current.querySelector(".about-1"), {
        opacity: 0.2,
        delay: 0.5,
      })
      .fromTo(quoteRef.current.querySelector(".about-2"), { opacity: 0.2 }, { opacity: 1 }, "<")
      .to(quoteRef.current.querySelector(".about-2"), {
        opacity: 0.2,
        delay: 1,
      })
      .fromTo(quoteRef.current.querySelector(".about-3"), { opacity: 0.2 }, { opacity: 1 }, "<")
      .to(quoteRef.current.querySelector(".about-3"), {
        opacity: 0.2,
        delay: 1,
      })
      .fromTo(quoteRef.current.querySelector(".about-4"), { opacity: 0.2 }, { opacity: 1 }, "<")
      .to(quoteRef.current.querySelector(".about-4"), {
        opacity: 0.2,
        delay: 1,
      });
    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center 85%",
      end: "center top",
      scrub: 0,
      animation: timeline,
      onToggle: (self) => setwillChange(self.isActive),
    });
    return scrollTriggerInstance;
  };

  // useEffect(() => {
  //   const aboutScrollTriggerInstance = initAboutAnimation(quoteRef, targetSection);

  //   return () => {
  //     aboutScrollTriggerInstance?.kill;
  //   };
  // }, [quoteRef, targetSection]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      initAboutAnimation(quoteRef, targetSection);
    }, targetSection);
    return () => {
      ctx.revert();
      // ctx.kill();
    };
  }, [quoteRef, targetSection]);

  const renderQuotes = (): React.ReactNode => (
    <div ref={quoteRef}>
      <h1 className="font-medium text-[1.75rem] sm:text-4xl md:text-[2.5rem]">
        <span className={`about-1 leading-tight ${willChange ? "will-change-opacity" : ""}`}>
          Full-Stack Software Engineer with 2.5 years of experience, combining 2.5 years of
          expertise in developing engaging, user-centric front-end solutions with 1 year of
          experience in building robust back-end systems.
        </span>
      </h1>
      <h1 className="font-medium text-[1.75rem] sm:text-4xl md:text-[2.5rem] mt-2">
        <span className={`about-2 leading-tight ${willChange ? "will-change-opacity" : ""}`}>
          Proficient in leveraging modern frameworks and tools to build scalable, high-performance
          web applications that optimize user experiences and business goals.
        </span>
      </h1>
      <h1 className="font-medium text-[1.75rem] sm:text-4xl md:text-[2.5rem] mt-2">
        <span className={`about-3 leading-tight ${willChange ? "will-change-opacity" : ""}`}>
          Experienced in agile methodologies, skilled in collaborative problem-solving, and with a
          proven ability to rapidly adapt to new technologies, I consistently deliver high-quality
          solutions.
        </span>
      </h1>
      <h1 className="font-medium text-[1.75rem] sm:text-4xl md:text-[2.5rem] mt-2">
        <span className={`about-4 leading-tight ${willChange ? "will-change-opacity" : ""}`}>
          I am always open to new opportunities and collaborations. If you are looking to build
          something amazing together, please feel free to connect.
        </span>
      </h1>
    </div>
  );

  return (
    <section
      className={`tall:pt-20 tall:pb-16 pt-40 pb-24 w-full relative select-none section-container`}
      ref={targetSection}
    >
      {renderQuotes()}
    </section>
  );
};

export default AboutSection;
