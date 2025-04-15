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
    image: "/projects/unichat-project.png",
    blurImage: "/projects/blur/unichatProjectBlur.png",
    description:
      "Managed 200+ FB pages, processing 1M+ messages/orders, supporting 1000+ users, and optimizing sales and costs.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "",
    tech: [
      "react",
      "typescript",
      "redux-filled",
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
    image: "/projects/woms-project.png",
    blurImage: "/projects/blur/womsProjectBlur.png",
    description:
      "Web app for 1,000+ users achieving 40% less task time, 32% more on-time deadlines, and 25% shorter meetings.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "",
    tech: ["react", "typescript", "redux-filled", "antd", "sass"],
  },
  {
    name: "KMS -- Knowledge Management System",
    image: "/projects/kms-website.png",
    blurImage: "/projects/blur/kmsWebsiteBlur.png",
    description:
      "A unified platform that centralizes knowledge, streamlines collaboration, and empowers data-driven decisions.",
    gradient: ["#875A7B", "#5A2B46"],
    url: "",
    tech: ["python", "icon-custom-skill_odoo", "javascript", "sass"],
  },
  {
    name: "Unicorn -- O2O Omnichannel Retail Platform",
    image: "/projects/unicorn-project.png",
    blurImage: "/projects/blur/unicornProjectBlur.png",
    description:
      "Multi-channel warehouse-sales platform serving 1,500+ users, boosting inventory accuracy 30% and reducing order time 25%.",
    gradient: ["#003052", "#167187"],
    url: "",
    tech: ["react", "typescript", "redux-filled", "antd", "sass"],
  },
  {
    name: "DashStack -- Admin Dashboard",
    image: "/projects/adminDashboard.png",
    blurImage: "/projects/blur/adminDashboard-blur.png",
    description: "",
    url: "UI auto-generated from Figma by Cursor AI on MCP Server",
    gradient: ["#245B57", "#004741"],
    tech: ["react", "typescript", "tailwind"],
  },
  {
    name: "Portfolio Website",
    image: "/projects/portfolio-website.png",
    blurImage: "/projects/blur/portfolioWebsiteBlur.png",
    description:
      "Full Stack Software Engineer's portfolio showcasing projects, skills, timeline, and collaboration opportunities.",
    url: "",
    gradient: ["#142D46", "#2E4964"],
    tech: ["react", "next", "typescript", "tailwind", "sass"],
  },
];

export interface ISkillDetail {
  name: string;
  icon: string;
}

interface ISkill {
  programmingLanguages: ISkillDetail[];
  frameworkOrPlatforms: ISkillDetail[];
  database: ISkillDetail[];
  others: ISkillDetail[];
}

export const SKILLS: ISkill = {
  programmingLanguages: [
    {
      name: "JavaScript",
      icon: "skill-icons:javascript",
    },
    {
      name: "TypeScript",
      icon: "skill-icons:typescript",
    },
    {
      name: "Python",
      icon: "skill-icons:python-light",
    },
  ],
  frameworkOrPlatforms: [
    {
      name: "ReactJS",
      icon: "skill-icons:react-light",
    },
    {
      name: "NodeJS",
      icon: "skill-icons:nodejs-light",
    },
    {
      name: "NestJS",
      icon: "skill-icons:nestjs-light",
    },
    {
      name: "Odoo",
      icon: "icon-custom-skill_odoo",
    },
    {
      name: "Redux",
      icon: "skill-icons:redux",
    },
    {
      name: "Ant Design",
      icon: "icon-custom-skill_antd",
    },
    {
      name: "Tailwind",
      icon: "skill-icons:tailwindcss-light",
    },
    {
      name: "Bootstrap",
      icon: "skill-icons:bootstrap",
    },
    {
      name: "Sass",
      icon: "skill-icons:sass",
    },
    {
      name: "Socket.io",
      icon: "icon-custom-skill_socket-io",
    },
    {
      name: "Redis",
      icon: "skill-icons:redis-light",
    },

    // {
    //   name: "Elasticsearch",
    //   icon: "skill-icons:elasticsearch-light",
    // },
    // {
    //   name: "GraphQL",
    //   icon: "skill-icons:graphql-light",
    // },
  ],
  database: [
    {
      name: "MongoDB",
      icon: "skill-icons:mongodb",
    },
    {
      name: "MySQL",
      icon: "skill-icons:mysql-light",
    },
  ],
  others: [
    // {
    //   name: "jest",
    //   icon: "skill-icons:jest",
    // },
    {
      name: "NextJS",
      icon: "skill-icons:nextjs-light",
    },
    {
      name: "Docker",
      icon: "skill-icons:docker",
    },
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
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Full-Stack Developer",
    size: ItemSize.SMALL,
    subtitle: "Freelancer",
    image: {
      url: "/timeline/freelancer-logo.svg",
      width: "145",
    },
    slideImage: {
      url: "/timeline/imageOptimize/freelancer-image-3_optimized.png",
    },
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Full-Stack Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Delivered full lifecycle development for internal web applications by combining front-end and back-end expertise, reducing production bugs by 30%, and mentoring team members to enhance operational efficiency.",
    image: {
      url: "/timeline/yody-logo.svg",
      width: "65",
    },
    slideImage: {
      url: "/timeline/yody-unichat.png",
      className: "object-fill",
    },
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    // fix bug tam thoi => sau se phai sua logic => shouldDrawLine = false
    slideImage: {
      url: "/timeline/yody-unichat.png",
      className: "object-fill",
    },
    size: ItemSize.LARGE,
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Back-end Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Engineered scalable APIs and integrated caching mechanisms with NodeJS and NestJS, achieving a 30% boost in application response times and ensuring system stability under high real-time messaging loads.",
    image: {
      url: "/timeline/yody-logo.svg",
      width: "65",
    },
    slideImage: {
      url: "/timeline/yody-unicorn.jpg",
    },
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Front-end Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Optimized user interfaces by implementing advanced React.js techniques, dynamic component rendering, and modern state management, which increased user satisfaction by 25% and reduced support tickets by 20%.",
    image: {
      url: "/timeline/yody-logo.svg",
      width: "65",
    },
    slideImage: {
      url: "/timeline/yody-it-department.jpg",
    },
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    // fix bug tam thoi => sau se phai sua logic => shouldDrawLine = false
    slideImage: {
      url: "/timeline/yody-it-department.jpg",
    },
    size: ItemSize.LARGE,
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Odoo Developer",
    size: ItemSize.SMALL,
    subtitle:
      "First job! 🥳 Engineered enterprise solutions with the Odoo framework by customizing ERP modules and integrating multi-channel platforms, achieving a 35% increase in client sales and a 50% reduction in manual errors.",
    image: { url: "/timeline/magenest-light.svg", width: "145" },
    slideImage: {
      url: "/timeline/magenest-odoo.png",
      className: "object-fill",
    },
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Bachelor of Software Engineering",
    size: ItemSize.SMALL,
    subtitle:
      "Graduated 2021 (2017–2021) with a Good GPA (3.24/4.0) — honed core software development, programming, and problem-solving foundations through academic projects.",
    image: { url: "/timeline/haui-logo.svg", width: "145" },
    slideImage: {
      url: "/timeline/haui-graduate.jpg",
    },
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
  image?: IImage;
  slideImage?: ISlideImage;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface IImage {
  url: string;
  width?: string;
  height?: string;
}

export interface ISlideImage {
  url: string;
  className?: string;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "G-5PGJS1C1ZS";

export const appIdChaport = "66bac5f03140ae6faa215a5d";
