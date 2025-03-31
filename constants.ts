export const METADATA = {
  title: "Portfolio | Kien Khuat",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://github.com/kiensamson0000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "Building scalable web solutions",
  "Full-Stack expert in web innovation",
  "Designing seamless, user-centric UIs",
  "Delivering agile, innovative results",
  "Let’s create impactful solutions",
];

export const EMAIL = "kienkh99@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/kien-khuat",
  github: "https://github.com/kiensamson0000",
  facebook: "https://www.facebook.com/kinn.khk",
  instagram: "https://www.instagram.com/kinn.koh.i.noor",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Unichat -- Yody's internal platform",
    image: "/projects/figgen.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description:
      "Managed 200+ FB pages, processing 1M+ messages/orders, supporting 1000+ users, and optimizing sales and costs.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "",
    tech: [
      "react",
      "typescript",
      "redux",
      "tailwind",
      "nestjs",
      "mongodb",
      "redis",
      "socket.io",
      "facebook",
    ],
  },
  {
    name: "WoMS -- Workflow Management System",
    image: "/projects/myokr.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description:
      "Web app for 1,000+ users achieving 40% less task time, 32% more on-time deadlines, and 25% shorter meetings.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "",
    tech: ["react", "typescript", "redux", "antd", "sass"],
  },
  {
    name: "KMS Yody -- Knowledge Management System",
    image: "/projects/dlt-website.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description:
      "A unified platform that centralizes knowledge, streamlines collaboration, and empowers data-driven decisions.",
    gradient: ["#245B57", "#004741"],
    url: "",
    tech: ["python", "odoo", "javascript", "sass"],
  },
  {
    name: "Unicorn -- O2O Omnichannel Retail Platform",
    image: "/projects/dl-unify.jpg",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description:
      "Multi-channel warehouse-sales platform serving 1,500+ users, boosting inventory accuracy 30% and reducing order time 25%.",
    gradient: ["#003052", "#167187"],
    url: "",
    tech: ["react", "typescript", "redux", "antd", "sass"],
  },
];
//     gradient: ["#3A0000", "#771E1E"],
//     gradient: ["#17007B", "#3A2C79"],
//     gradient: ["#5E4C06", "#746528"],
//     gradient: ["#172839", "#334659"],
//     gradient: ["#142D46", "#2E4964"],
//     gradient: ["#470700", "#712A23"],
//     gradient: ["#552A04", "#614023"],
//     gradient: ["#685506", "#7B6921"],

export interface ISkillDetail {
  name: string;
  icon: string;
}

interface ISkill {
  frontend: ISkillDetail[];
  backend: ISkillDetail[];
  devops: ISkillDetail[];
  developmentOperations: ISkillDetail[];
}

export const SKILLS: ISkill = {
  frontend: [
    {
      name: "JavaScript",
      icon: "skill-icons:javascript",
    },
    {
      name: "TypeScript",
      icon: "skill-icons:typescript",
    },
    {
      name: "React",
      icon: "skill-icons:react-light",
    },
    {
      name: "NextJs",
      icon: "skill-icons:nextjs-light",
    },
    {
      name: "VueJs",
      icon: "skill-icons:vuejs-light",
    },
    {
      name: "Bootstrap",
      icon: "skill-icons:bootstrap",
    },
    {
      name: "Tailwind",
      icon: "skill-icons:tailwindcss-light",
    },
    // "antdesign",
    // "redux",
    // "storybooks",
    {
      name: "Sass",
      icon: "skill-icons:sass",
    },
    {
      name: "HTML",
      icon: "skill-icons:html",
    },
    {
      name: "CSS",
      icon: "skill-icons:css",
    },
  ],
  backend: [
    {
      name: "NodeJs",
      icon: "skill-icons:nodejs-light",
    },
    {
      name: "Python",
      icon: "skill-icons:python-light",
    },
    {
      name: "Nestjs",
      icon: "skill-icons:nestjs-light",
    },
    // {
    //   name: "Odoo",
    //   icon: "skill-icons:python-light",
    // },
    // {
    //   name: "Sql",
    //   icon: "skill-icons:python-light",
    // },
    {
      name: "MongoDB",
      icon: "skill-icons:mongodb",
    },
    {
      name: "MySQL",
      icon: "skill-icons:mysql-light",
    },
    {
      name: "Redis",
      icon: "skill-icons:redis-light",
    },
    // {
    //   name: "websocket",
    //   icon: "skill-icons:python-light",
    // },
    {
      name: "Elasticsearch",
      icon: "skill-icons:elasticsearch-light",
    },
    // {
    //   name: "RESTful API",
    //   icon: "skill-icons:python-light",
    // },
    {
      name: "GraphQL",
      icon: "skill-icons:graphql-light",
    },
    // {
    //   name: "json",
    //   icon: "skill-icons:python-light",
    // },
  ],
  devops: [],
  developmentOperations: [
    {
      name: "jest",
      icon: "skill-icons:jest",
    },
    // {
    //   name: "Design Patterns",
    //   icon: "skill-icons:git",
    // },
    // {
    //   name: "Scrum",
    //   icon: "skill-icons:git",
    // },
    // {
    //   name: "Agile",
    //   icon: "skill-icons:git",
    // },
    {
      name: "Git",
      icon: "skill-icons:git",
    },
  ],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Speaker at React India",
    size: ItemSize.SMALL,
    subtitle: "Discussed on Interaction to Next Paint (INP), a Google Core Web Vital metric",
    image: "/timeline/reactindia.svg",
    slideImage: "/timeline/reactindia.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend Engineer 2 (Current)",
    size: ItemSize.SMALL,
    subtitle:
      "Frontend Engineering @ Core team, solving problems around Livingroom device performance",
    image: "/timeline/hotstar.svg",
    slideImage: "/timeline/hotstar.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Contributed to Server driven UI framework for powering experiences @ Flipkart Wholesale 😎",
    image: "/timeline/flipkart.svg",
    slideImage: "/timeline/flipkart.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer (freelance)",
    size: ItemSize.SMALL,
    subtitle: "Built solutions for employee engagement, productivity and performance 🎯",
    image: "/timeline/huminos.svg",
    slideImage: "/timeline/huminos-freelance.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Motion Graphics (freelance)",
    size: ItemSize.SMALL,
    subtitle: "Motion Graphics content for Product Launch 🚀",
    image: "/timeline/octanner.svg",
    slideImage: "/timeline/aftereffects.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Built a design system.",
    image: "/timeline/dltlabs.svg",
    slideImage: "/timeline/dlt-website.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UX Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "First job! 🥳 Product design and development for employee engagement chatbot suite for workplace by facebook",
    image: "/timeline/huminos.svg",
    slideImage: "/timeline/huminos-website.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated from College 🎓",
    size: ItemSize.SMALL,
    subtitle: "Spent 4 years laying the foundation of Frontend Engineering, UI/UX, and Fitness!",
    image: "/timeline/akgec.svg",
    slideImage: "/timeline/farewell.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2018",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Student lead at SDC-SI",
    size: ItemSize.SMALL,
    subtitle:
      "Represented a team of 39 talented developers. Served different roles of leadership, project management and delivery.",
    image: "/timeline/si.svg",
    slideImage: "/timeline/si-head.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on SVG animations",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 200 students to create their first animated SVG using CSS/SMIL at PHP Workshop, SDC-SI",

    slideImage: "/timeline/svg-lecture.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2017",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Designing, IMSU",
    size: ItemSize.SMALL,
    subtitle: "Competed against 20+ teams for design and development of web project from scratch",
    slideImage: "/timeline/ims-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on Javascript",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 200 students for javascript fundamentals at Game Development workshop, SDC-SI",
    slideImage: "/timeline/js-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Design, ABES ACM",
    size: ItemSize.SMALL,
    subtitle: "Competed in web and graphic design challenge with 100+ participants.",
    slideImage: "/timeline/abes-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on Web Technologies",
    size: ItemSize.SMALL,
    subtitle: "Guided 300+ students on getting started with web technologies like HTML/CSS and JS",
    slideImage: "/timeline/web-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2016",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Designing, IMSU",
    size: ItemSize.SMALL,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/timeline/ims-16.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI/UX, Frontend Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Started journey in SDC-SI, where I learnt the fundamentals of Frontend, UI/UX, Graphic design and more...",
    image: "/timeline/si.svg",
    slideImage: "/timeline/si-start.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2014",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Recognized Themer",
    size: ItemSize.SMALL,
    subtitle:
      "Awarded as recognized themer,  Developed themes and ROMs for Xperia 2011 devices lineup with over 15k+ downloads. Featured on xda portal twice.",
    image: "/timeline/xda.svg",
    slideImage: "/timeline/xda-rt.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "G-5PGJS1C1ZS";

export const appIdChaport = "66bac5f03140ae6faa215a5d";
