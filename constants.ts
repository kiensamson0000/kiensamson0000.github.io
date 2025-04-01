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
    image: "/projects/myokr.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
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
    image: "/projects/dl-unify.jpg",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description:
      "Web app for 1,000+ users achieving 40% less task time, 32% more on-time deadlines, and 25% shorter meetings.",
    gradient: ["#003052", "#167187"],
    url: "",
    tech: ["react", "typescript", "redux-filled", "antd", "sass"],
  },
  {
    name: "KMS -- Knowledge Management System",
    image: "/projects/dlt-website.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description:
      "A unified platform that centralizes knowledge, streamlines collaboration, and empowers data-driven decisions.",
    gradient: ["#245B57", "#004741"],
    url: "",
    tech: ["python", "icon-custom-skill_odoo", "javascript", "sass"],
  },
  {
    name: "Unicorn -- O2O Omnichannel Retail Platform",
    image: "/projects/huminos.jpg",
    blurImage: "/projects/blur/huminos-blur.jpg",
    description:
      "Multi-channel warehouse-sales platform serving 1,500+ users, boosting inventory accuracy 30% and reducing order time 25%.",
    gradient: ["#17007B", "#3A2C79"],
    url: "",
    tech: ["react", "typescript", "redux-filled", "antd", "sass"],
  },
];
// gradient: ["#1F6582", "#1ABCFE"],
// gradient: ["#153BB9", "#0E2C8B"],
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
    title: "2025",
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
    subtitle: "Freelancer",
    // slideImage: "/timeline/svg-lecture.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Portfolio Website",
    size: ItemSize.SMALL,
    subtitle: "Website..............",
    // image: "/timeline/huminos.svg",
    // slideImage: "/timeline/svg-lecture.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Full-Stack Developer",
    size: ItemSize.SMALL,
    subtitle: "Freelancer",
    // slideImage: "/timeline/svg-lecture.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Du an ca nhan",
    size: ItemSize.SMALL,
    subtitle: "Built solutions for employee engagement, productivity and performance 🎯",
    image: "/timeline/huminos.svg",
    slideImage: "/timeline/yody-training.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
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
      "Contributed to Server driven UI framework for powering experiences @ Flipkart Wholesale 😎",
    image: "/timeline/yody-logo.svg",
    slideImage: "/timeline/yody-unichat.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Back-end Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Contributed to Server driven UI framework for powering experiences @ Flipkart Wholesale 😎",
    image: "/timeline/yody-logo.svg",
    slideImage: "/timeline/yody-team.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Front-end Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Contributed to Server driven UI framework for powering experiences @ Flipkart Wholesale 😎",
    image: "/timeline/yody-logo.svg",
    slideImage: "/timeline/yody-unicorn.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Front-end Developer",
    size: ItemSize.SMALL,
    subtitle:
      "First job! 🥳 Product design and development for employee engagement chatbot suite for workplace by facebook",
    image: "/timeline/yody-logo.svg",
    slideImage: "/timeline/yody-it-department.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
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
    title: "Odoo Developer",
    size: ItemSize.SMALL,
    subtitle:
      "First job! 🥳 Product design and development for employee engagement chatbot suite for workplace by facebook",
    image: "/timeline/magenest-light.svg",
    slideImage: "/timeline/magenest-odoo.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Bachelor of Software Engineering",
    size: ItemSize.SMALL,
    subtitle: "tot nghiep loai gi loai gi",
    image: "/timeline/haui-logo.svg",
    slideImage: "/timeline/haui-graduate.jpg",
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
