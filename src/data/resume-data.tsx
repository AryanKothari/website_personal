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
    "Student @ Duke studying CS + Energy",
  summary:
    "Senior at Duke University, pursuing a Bachelor of Science in Computer Science alongside an Energy & the Environment Certificate. Passionate about catalyzing climate solutions through scalable technology and entrepreneurship. With 3 years of work experience at YC-backed startups and over 2 years of Product Management expertise, I strive to craft products that combat the climate crisis. Beyond my professional pursuits, you can catch me delving into artificial intelligence, acting, meditation, and biographical books.",
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
        "In progress.",
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
    "SQL",
    "MongoDB",
    "Figma",
    "Mixpanel",
    "Swift",
    "Next.js",
    "React",
    "Product Roadmapping",
    "Public Speaking",
    "Stakeholder Management",
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
      link: {
        label: "youtube.com/watch?v=s02Sedci6tg",
        href: "https://www.youtube.com/watch?v=s02Sedci6tg",
      },
    },
    {
      title: "Energy Prediction Models",
      techStack: [
        "Machine Learning",
        "Data Preprocessing",
        "Hyperparameter Tuning",
        "Python",
      ],
      description:
        "Tuning and evaluating K-Nearest Neighbors and Random Forest models to predict energy output",
      link: {
        label: "colab.research.google.com/drive/1CXppwpa8EH-eLRdT36qblUjV1d_oum1h?usp=sharing",
        href: "https://colab.research.google.com/drive/1CXppwpa8EH-eLRdT36qblUjV1d_oum1h?usp=sharing",
      },
    },
    {
      title: "CCN 2022 Report",
      techStack: ["Energy & Climate", "Data Analytics", "Tableau", "Pitchbook", "Web Scraping"],
      description:
        "Research Fellow for annual XPRIZE climate report, synthesizing market trends",
      link: {
        label: "circularcarbon.org/wp-content/uploads/2023/03/CCN-2022-MarketReport.pdf",
        href: "https://circularcarbon.org/wp-content/uploads/2023/03/CCN-2022-MarketReport.pdf",
      },
    },
    {
      title: "Duke Energy & Climate Club",
      techStack: ["Energy & Climate", "Leadership", "Alumni Relations"],
      description:
        "Responsible for alumni relations as part of the DUECC",
      link: {
        label: "dukeundergradenergyclub.org/",
        href: "https://www.dukeundergradenergyclub.org/",
      },
    },
    {
      title: "Energy Terminal",
      techStack: ["Energy & Climate", "Podcast", "Data Analytics", "Growth"],
      description: "Awarded the 2022 Duke Clean Energy Prize for energy community and media platform.",
      link: {
        label: "nicholasinstitute.duke.edu/articles/duke-undergraduate-team-wins-2022-clean-energy-prize-support-energy-terminal-media",
        href: "https://nicholasinstitute.duke.edu/articles/duke-undergraduate-team-wins-2022-clean-energy-prize-support-energy-terminal-media",
      },
    },
    {
      title: "Duke Conversations Ambassador",
      techStack: ["Leadership", "Event Planning", "Moderating"],
      description:
        "Hosting lunches between students and Duke faculty",
      link: {
        label: "www.linkedin.com/posts/shep-moyle-13b37a43_dukeconversations-activity-7182073365132644354-f3XM?utm_source=combined_share_message&utm_medium=member_desktop",
        href: "https://www.linkedin.com/posts/shep-moyle-13b37a43_dukeconversations-activity-7182073365132644354-f3XM?utm_source=combined_share_message&utm_medium=member_desktop",
      },
    },
    {
      title: "MeToo Monlogues",
      techStack: ["Theatre", "Public Speaking", "Campus Engagement"],
      description:
        "Performed an anonymously submitted story to Duke student body",
      link: {
        label: "www.youtube.com/watch?v=rTdxZZLBwx0&t=145s",
        href: "https://www.youtube.com/watch?v=rTdxZZLBwx0&t=145s",
      },
    },
  ],
} as const;
