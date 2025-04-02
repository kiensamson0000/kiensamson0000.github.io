import { gsap, Linear } from "gsap";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { isSmallScreen, NO_MOTION_PREFERENCE_QUERY } from "pages";
import { NO_MOTION_PREFERENCE_QUERY } from "pages";

const COLLABORATION_STYLE = {
  SLIDING_TEXT: "opacity-20 text-[2.75rem] md:text-7xl font-bold whitespace-nowrap",
  SECTION: "w-full relative select-none tall:py-36 py-48 section-container flex flex-col",
  TITLE: "mt-6 md:mt-8 font-medium text-4xl md:text-5xl text-center",
};

const CollaborationSection = () => {
  const quoteRef: MutableRefObject<HTMLDivElement> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
  const slidingAnimation = useRef<ScrollTrigger | null>(null);
  const [willChange, setwillChange] = useState(false);
  const isMobile = useRef(false);
  const ctx = useRef<gsap.Context>();
  const isSmallScreen = () => {
    isMobile.current = window.innerWidth < 768; // Hoặc giá trị breakpoint của bạn
  };

  const initTextGradientAnimation = (): ScrollTrigger => {
    const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    timeline
      .from(quoteRef.current, { opacity: 0, duration: 2 })
      .to(quoteRef.current.querySelector(".collaboration-keyword"), {
        backgroundPositionX: "100%",
        duration: 1,
      });

    return ScrollTrigger.create({
      trigger: targetSection.current,
      start: "top bottom",
      end: "center center",
      scrub: 0,
      animation: timeline,
      onToggle: (self) => setwillChange(self.isActive),
    });
  };

  const initSlidingTextAnimation = () => {
    const slidingTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    const xPercent = isMobile.current ? -300 : -150;
    slidingTl
      .to(targetSection.current.querySelector(".ui-left"), {
        xPercent,
      })
      .from(targetSection.current.querySelector(".ui-right"), { xPercent }, "<");

    return ScrollTrigger.create({
      trigger: targetSection.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 0,
      animation: slidingTl,
    });
  };

  useEffect(() => {
    isSmallScreen(); // Khởi tạo giá trị ban đầu
    ctx.current = gsap.context(() => {
      // Animation chính
      const textBgAnimation = initTextGradientAnimation();

      // Xử lý motion preference
      const mediaQuery = window.matchMedia(NO_MOTION_PREFERENCE_QUERY);
      let slidingAnimation: ScrollTrigger | undefined;

      const initAnimations = () => {
        slidingAnimation?.kill();
        if (mediaQuery.matches) {
          slidingAnimation = initSlidingTextAnimation();
        }
      };

      // Xử lý resize
      const onResize = () => {
        isSmallScreen();
        ScrollTrigger.refresh(); // Quan trọng: refresh ScrollTrigger
        initAnimations();
      };

      // Lắng nghe sự kiện
      window.addEventListener("resize", onResize);
      mediaQuery.addEventListener("change", initAnimations);

      // Khởi chạy lần đầu
      initAnimations();

      return () => {
        window.removeEventListener("resize", onResize);
        mediaQuery.removeEventListener("change", initAnimations);
        textBgAnimation.kill();
        slidingAnimation?.kill();
      };
    }, targetSection);

    return () => ctx.current?.revert();
  }, []);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const textBgAnimation = initTextGradientAnimation(targetSection);
  //     // Xử lý media query động
  //     const mediaQuery = window.matchMedia(NO_MOTION_PREFERENCE_QUERY);
  //     const updateAnimations = (): void => {
  //       if (mediaQuery.matches) {
  //         slidingAnimation.current?.kill();
  //         slidingAnimation.current = initSlidingTextAnimation(targetSection);
  //       } else {
  //         slidingAnimation.current?.kill();
  //       }
  //     };
  //     mediaQuery.addEventListener("change", updateAnimations);
  //     updateAnimations(); // Khởi tạo ban đầu
  //     const onResize = () => {
  //       slidingAnimation.current?.kill();
  //       if (mediaQuery.matches) {
  //         slidingAnimation.current = initSlidingTextAnimation(targetSection);
  //       }
  //     };
  //     window.addEventListener("resize", onResize);
  //     return () => {
  //       mediaQuery.removeEventListener("change", updateAnimations);
  //       window.removeEventListener("resize", onResize);
  //       textBgAnimation.kill();
  //       slidingAnimation.current?.kill();
  //     };
  //   }, targetSection);

  //   return () => ctx.revert();
  // }, []);

  // useEffect(() => {
  //   const textBgAnimation = initTextGradientAnimation(targetSection);

  //   let slidingAnimation: ScrollTrigger | undefined;

  //   const { matches } = window.matchMedia(NO_MOTION_PREFERENCE_QUERY);

  //   if (matches) {
  //     slidingAnimation = initSlidingTextAnimation(targetSection);
  //   }

  //   return () => {
  //     textBgAnimation.kill();

  //     slidingAnimation?.kill();
  //   };
  // }, [quoteRef, targetSection]);

  const renderSlidingText = (text: string, layoutClasses: string) => (
    <p className={`${layoutClasses} ${COLLABORATION_STYLE.SLIDING_TEXT}`}>
      {Array(5)
        .fill(text)
        .reduce((str, el) => str.concat(el), "")}
    </p>
  );

  const renderTitle = () => (
    <h1
      ref={quoteRef}
      className={`${COLLABORATION_STYLE.TITLE} ${willChange ? "will-change-opacity" : ""}`}
    >
      Interested in
      <span className="text-strong collaboration-keyword font-bold"> Collaboration</span>?
    </h1>
  );

  return (
    <section className={COLLABORATION_STYLE.SECTION} ref={targetSection}>
      {renderSlidingText(" Full-Stack Expertise Proven Results Modern Tech Stack ", "ui-left")}
      {renderTitle()}
      {renderSlidingText(
        " Impactful Scalable Efficient Solutions Innovative ",
        "mt-6 md:mt-8 ui-right"
      )}
    </section>
  );
};

export default CollaborationSection;
