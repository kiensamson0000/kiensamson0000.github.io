import styles from "./ProjectTile.module.scss";
import Image from "next/image";
import React, { MutableRefObject, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { IProject } from "../../constants";

const ProjectTile = ({
  project,
  animationEnabled,
}: {
  project: IProject;
  animationEnabled: boolean;
}) => {
  const projectCard: MutableRefObject<HTMLDivElement> = useRef(null);
  const {
    name,
    tech,
    image,
    blurImage,
    description,
    gradient: [stop1, stop2],
  } = project;

  useEffect(() => {
    VanillaTilt.init(projectCard.current, {
      max: 5,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
      gyroscope: false,
    });
  }, [projectCard]);

  const renderTechIcons = (techStack: string[]): React.ReactNode => (
    <div
      className={`
      ${styles.techIcons} w-1/2 h-full absolute left-6 top-[-0.5rem] sm:flex items-center hidden
    `}
    >
      <div className="flex flex-wrap justify-center mx-auto max-w-4xl px-7">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="w-[4.25rem] h-[4.25rem] flex justify-center items-center rounded-lg shadow-md"
          >
            <Image
              src={`/projects/tech/${tech}.svg`}
              alt={tech}
              height={45}
              objectFit="contain"
              width={45}
            />
          </div>
        ))}
      </div>
    </div>
  );

  const renderDescription = (description: string): React.ReactNode => (
    <h2
      className="text-lg z-10 tracking-wide font-medium"
      style={{ transform: "translateZ(0.8rem)" }}
    >
      {description}
    </h2>
  );

  const renderProjectName = (name: string): React.ReactNode => (
    <h1 className="text-2xl sm:text-[1.75rem] z-10 pl-2" style={{ transform: "translateZ(3rem)" }}>
      {name}
    </h1>
  );

  const renderTopBottomGradient = (gradient: string): React.ReactNode => (
    <>
      <div
        className="absolute top-0 left-0 w-full h-20"
        style={{
          background: `linear-gradient(180deg, ${gradient} 0%, rgba(0,0,0,0) 100%)`,
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-full h-32"
        style={{
          background: `linear-gradient(0deg, ${gradient} 10%, rgba(0,0,0,0) 100%)`,
        }}
      ></div>
    </>
  );

  const renderProjectImage = (image: string, blurImage: string, name: string): React.ReactNode => (
    <span className={`${styles.ImageFrame}`}>
      <Image
        placeholder="blur"
        blurDataURL={blurImage}
        src={image}
        alt={name}
        layout="fill"
        loading="lazy"
        className={`${styles.ProjectImg} z-0`}
      />
    </span>
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!project.url) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
  };

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="link overflow-hidden rounded-3xl snap-start"
      style={{
        maxWidth: animationEnabled ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
      onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClick(e)}
    >
      <div
        ref={projectCard}
        className={`
          ${styles.ProjectTile}
           rounded-3xl relative p-6 flex-col flex justify-between max-w-full
        `}
        style={{
          background: `linear-gradient(90deg, ${stop1} 0%, ${stop2} 100%)`,
        }}
      >
        <Image
          src="/project-bg.svg"
          alt="Project"
          layout="fill"
          className="absolute w-full h-full top-0 left-0 opacity-20"
        />
        {renderProjectImage(image, blurImage, name)}
        {renderTopBottomGradient(stop1)}
        {renderProjectName(name)}
        {renderTechIcons(tech)}
        {renderDescription(description)}
      </div>
    </a>
  );
};

export default ProjectTile;
