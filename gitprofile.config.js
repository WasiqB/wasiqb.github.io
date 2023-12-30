const config = {
  github: {
    username: "WasiqB",
    sortBy: "stars",
    limit: 4,
    exclude: {
      forks: false,
      projects: [],
    },
  },
  social: {
    linkedin: "wasiqbhamla",
    twitter: "WasiqBhamla",
    facebook: "wasiqb",
    instagram: "WasiqBhamla",
    youtube: "WasiqBhamla",
    medium: "WasiqB",
    dev: "wasiqb",
    stackoverflow: "5320558/wasiq-bhamla",
    skype: "",
    telegram: "",
    website: "https://www.biodrop.io/WasiqB",
    phone: "",
    email: "wasbhamla2005@gmail.com",
  },
  resume: {
    fileUrl: "public/resume-wasiq-bhamla.pdf",
  },
  skills: [
    "Selenium WebDriver",
    "Appium",
    "JavaScript",
    "Java",
    "TypeScript",
    "WebDriverIO",
    "Rest-Assured",
    "GitHub Actions",
    "Git",
    "Docker",
    "GitHub",
    "BurpSuite",
    "Postman",
    "C#",
    "Ruby",
  ],
  experiences: [
    {
      company: "Cognizant",
      position: "Manager QA",
      from: "August 2023",
      to: "Present",
      companyLink: "https://www.cognizant.com/",
    },
    {
      company: "Xnsio",
      position: "Lead QA Engineer",
      from: "October 2022",
      to: "December 2022",
      companyLink: "https://xnsio.com/",
    },
    {
      company: "Thoughtworks",
      position: "Senior QA Consultant",
      from: "March 2019",
      to: "September 2022",
      companyLink: "https://www.thoughtworks.com/",
    },
    {
      company: "CrossAsyst Technologies Pvt Ltd",
      position: "Lead QA Automation Engineer",
      from: "April 2018",
      to: "March 2019",
      companyLink: "https://www.crossasyst.com/",
    },
    {
      company: "AurionPro Solutions Ltd",
      position: "Senior Test Engineer",
      from: "January 2015",
      to: "March 2018",
      companyLink: "https://www.aurionpro.com/",
    },
    {
      company: "Financial Technologies India Ltd",
      position: "Software Audit Lead",
      from: "March 2007",
      to: "January 2015",
      companyLink: "https://www.63moons.com/",
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: "Burhani College of Commerce and Arts",
      degree: "Bachelors of Commerce",
      from: "2003",
      to: "2006",
    },
    {
      institution: "Aptech Computer Education",
      degree: "Advance Diploma in Software Engineering",
      from: "2003",
      to: "2007",
    },
  ],

  externalProjects: [
    {
      title: "Boyka Framework",
      description:
        "🎉 Ultimate test automation framework for automating any application on any platform",
      imageUrl: "https://avatars.githubusercontent.com/u/90917766?s=200&v=4",
      link: "https://github.com/BoykaFramework/boyka-framework",
    },
    {
      title: "Boyka Framework Command line tool",
      description: "Command line tool for Boyka Framework",
      imageUrl: "https://avatars.githubusercontent.com/u/90917766?s=200&v=4",
      link: "https://github.com/BoykaFramework/boyka-cli",
    },
  ],
  blog: {
    source: "medium", // medium | dev
    username: "WasiqB",
    limit: 4,
  },
  googleAnalytics: {
    id: "G-R5T0D2R02L", // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: "",
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: "cupcake",

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "procyon",
    ],

    // Custom theme
    customTheme: {
      primary: "#fc055b",
      secondary: "#219aaf",
      accent: "#e8d03a",
      neutral: "#2A2730",
      "base-100": "#E3E3ED",
      "--rounded-box": "3rem",
      "--rounded-btn": "3rem",
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
