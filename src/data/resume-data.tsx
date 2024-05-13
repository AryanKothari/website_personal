import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon} from "@/components/icons";

export const RESUME_DATA = {
  name: "Aryan Kothari",
  initials: "AK",
  location: "Durham, NC",
  locationLink: "https://maps.app.goo.gl/zT6qvs62hYsxkyfCA",
  about:
    "Student at Duke University pursuing a B.S in Computer Science and Certificate in Energy & the Environment",
  summary:
    "Senior at Duke University, pursuing a Bachelor of Science in Computer Science alongside an Energy & the Environment Certificate. Passionate about catalyzing climate solutions through scalable technology and entrepreneurship. With 3 years of work experience at YC-backed startups and over 2 years of Product Management expertise, I'm committed to crafting products that combat the climate crisis. Beyond my professional pursuits, you can catch me delving into artificial intelligence, acting, meditation, and biographical books.",
  avatarUrl: "https://avatars.githubusercontent.com/u/20924784?v=4",
  personalWebsiteUrl: "https://www.aryankothari.com",
  contact: {
    email: "kothari.s.aryan@gmail.com",
    tel: "+16468843359",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/AryanKothari",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/akothari12/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Duke University",
      degree: "Bachelor's Degree in Computer Science, Energy & the Environment Certificate",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Appian Corporation",
      link: "https://appian.com/",
      badges: [],
      title: "Product Manager Intern",
      logo: ParabolLogo,
      start: "June",
      end: "August '24",
      description:
        "TBD",
    },
    {
      company: "Raptor Maps (YC S16)",
      link: "https://raptormaps.com/",
      badges: [],
      title: "Product Manager Intern",
      logo: ClevertechLogo,
      start: "May",
      end: "August '23",
      description:
        "Managed full integration of the solar financial tracker into the Raptor app, resulting in a 25% increase in user engagement. Pioneered the expansion into the secondary solar market, resulting in launch of directory featuring 30+ solar vendors. Collaborated with cross-functional teams and engaged with five key customers to enhance OST and product roadmap.",
    },
    {
      company: "Alga Biosciences (YC W22)",
      link: "https://www.alga.bio/",
      badges: [],
      title: "Generalist Intern",
      logo: JojoMobileLogo,
      start: "June",
      end: "August '22",
      description:
        "Secured 12,000 carbon credits on the VCM through partnerships with more than 10 carbon credit marketplaces. Tracked methane emissions from affiliated commercial feedlots, effectively quantifying 2.5k tons in methane reductions. Created comprehensive reports on the US dairy and beef industry for internal stakeholders, with focus on GHG emissions.",
    },
  ],
  skills: [
    "JavaScript",
    "R",
    "Python",
    "noSQL",
    "MongoDB",
  ],
  projects: [
    {
      title: "OOGASalad",
      techStack: [
        "Coding",
        "JavaFX",
        "Agile Programming",
        "OpenJFX",
        "MVC",
        "API",
      ],
      description: "Java program: No-code 2D game designer with visual tools.",
      link: {
        label: "github.com/AryanKothari/OOGASalad",
        href: "https://github.com/AryanKothari/OOGASalad",
      },
    },
    {
      title: "DukeDines",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Circular Carbon Network Report",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Duke Energy Club Database",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "MeToo Monlogues",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Energy Terminal",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
