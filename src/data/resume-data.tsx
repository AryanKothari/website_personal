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
      start: "June",
      end: "August '24",
      description:
        "In process.",
    },
    {
      company: "Raptor Maps (YC S16)",
      link: "https://raptormaps.com/",
      badges: [],
      title: "Product Manager Intern",
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
      start: "June",
      end: "August '22",
      description:
        "Secured 12,000 carbon credits on the VCM through partnerships with more than 10 carbon credit marketplaces. Tracked methane emissions from affiliated commercial feedlots, effectively quantifying 2.5k tons in methane reductions. Created comprehensive reports on the US dairy and beef industry for internal stakeholders, with focus on GHG emissions.",
    },
    {
      company: "Flockjay (YC W19)",
      link: "https://flockjay.com/",
      badges: [],
      title: "Operations & Growth Intern (Gap Year)",
      start: "October '21",
      end: "February '22",
      description:
        "Organized 'Sell with Serena', an initiative with Serena Williams to generate $50M in generational wealth for women in tech. Spearheaded public relation endeavors, resulting in announcement of the company's $15 million Series A funding round. Conducted research on over 20 Income Share Agreement (ISA) providers to pinpoint most cost-effective partnership.",
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
        "Technical",
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
      title: "DELP",
      techStack: ["Technical", "Swift", "Figma", "CoreData"],
      description:
        "iOS app allowing students to read and review Duke's dining options",
      logo: MonitoLogo,
      link: {
        label: "youtube.com/watch?v=s02Sedci6tg",
        href: "https://www.youtube.com/watch?v=s02Sedci6tg",
      },
    },
    {
      title: "CCN 2022 Report",
      techStack: ["Energy & Climate", "Data Analytics", "Tableau", "Pitchbook", "Web Scraping"],
      description:
        "Research Fellow for annual XPRIZE climate report, synthesizing market trends",
      logo: JarockiMeLogo,
      link: {
        label: "circularcarbon.org/wp-content/uploads/2023/03/CCN-2022-MarketReport.pdf",
        href: "https://circularcarbon.org/wp-content/uploads/2023/03/CCN-2022-MarketReport.pdf",
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
      techStack: ["Theatre", "Public Speaking", "Campus Engagement"],
      description:
        "Performed anonymously submitted story to Duke student body",
      logo: BarepapersLogo,
      link: {
        label: "www.youtube.com/watch?v=rTdxZZLBwx0&t=145s",
        href: "https://www.youtube.com/watch?v=rTdxZZLBwx0&t=145s",
      },
    },
    {
      title: "Energy Terminal",
      techStack: ["Energy & Climate", "Podcast", "Data Analytics", "Growth"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Solar Weather Predictor",
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
      title: "Rise of Tidal Energy",
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
    
  ],
} as const;
