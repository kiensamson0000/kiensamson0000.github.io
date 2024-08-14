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
      start: "center 80%",
      end: "center top",
      scrub: 0,
      animation: timeline,
      onToggle: (self) => setwillChange(self.isActive),
    });
    return scrollTriggerInstance;
  };

  useEffect(() => {
    const aboutScrollTriggerInstance = initAboutAnimation(quoteRef, targetSection);

    return aboutScrollTriggerInstance.kill;
  }, [quoteRef, targetSection]);

  const renderQuotes = (): React.ReactNode => (
    <div ref={quoteRef}>
      <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl">
        <span className={`about-1 leading-tight ${willChange ? "will-change-opacity" : ""}`}>
          With a solid foundation in both front-end and back-end technologies, I bring over two
          years of hands-on experience to every project. My passion is to create seamless, dynamic
          web applications that exceed user expectations.
        </span>
      </h1>
      <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl mt-2">
        <span className={`about-2 leading-tight ${willChange ? "will-change-opacity" : ""}`}>
          {`In my career, I’ve specialized in leveraging the latest web technologies to build scalable
          solutions. Whether it's crafting user-friendly interfaces or optimizing server-side
          performance, my approach is always centered around innovation and excellence.`}
        </span>
      </h1>
      <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl mt-2">
        <span className={`about-3 leading-tight ${willChange ? "will-change-opacity" : ""}`}>
          My journey into technology began long before my professional career. The curiosity that
          started it all still drives me today. Outside of coding, I’m constantly exploring new tech
          trends, experimenting with emerging tools, and refining my skill set.
        </span>
      </h1>
      <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl mt-2">
        <span className={`about-4 leading-tight ${willChange ? "will-change-opacity" : ""}`}>
          I’m always open to new opportunities and collaborations. If you’re looking to build
          something amazing together, feel free to connect.
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
