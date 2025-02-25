/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import nextImg from "./assets/images/next-js.svg";
import nestImg from "./assets/images/nestjs.svg";
import mongodbImg from "./assets/images/mongodb.svg";
import aws from "./assets/images/aws.svg";
import firebase from "./assets/images/firebase.svg";
import docker from "./assets/images/docker.svg";
import node from "./assets/images/node.svg";
import angular from "./assets/images/angular.svg";
import react from "./assets/images/react.svg";
import vercel from "./assets/images/vercel.svg";
import prisma from "./assets/images/prisma.svg";
import htb from "./assets/images/htb.svg";
import sql from "./assets/images/sql.svg";
import tailwind from "./assets/images/tailwind.svg";
import wordpress from "./assets/images/wordpress.svg";
import jquery from "./assets/images/jquery.svg";
import manpower from "./assets/images/manpower.svg";
import nlkCapital from "./assets/images/nlkCapital.svg";
import crowdev from "./assets/images/crowdev.svg";
import chatBot from "./assets/images/chatBot.svg";
import openai from "./assets/images/openai.svg";
import uchat from "./assets/images/uchat.svg";
import gemini from "./assets/images/gemini.svg";
import vacamuerta from "./assets/images/vacamuerta.svg";
import fiducialys from "./assets/images/fiducialys.svg";
import langchain from "./assets/images/langchain.png";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

const getImage = (imageName) => skillsSection.softwareSkills.find((skill) => skill.skillName === imageName)?.image || ''

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pato Fara",
  title: "Hi all, I'm Pato",
  subTitle: emoji(
    "I am a passionate developer with more than 4 years of experience building frontend & backend services for big and new companies. I have fun creating, I am passionate about problem solving. 'You never stop learning.' "
  ),
  resumeLink: "",// Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/deevpfa",
  linkedin: "https://www.linkedin.com/in/patriciofara/",
  gmail: "deevpfa@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Passionate about developing my skills in web security"
    ),
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web sites"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Langchain",
      fontAwesomeClassname: "fab fa-hackerrank",
      image: langchain
    },
    {
      skillName: "OpenAi",
      fontAwesomeClassname: "fab fa-hackerrank",
      image: openai
    },
    {
      skillName: "Gemini",
      fontAwesomeClassname: "fab fa-hackerrank",
      image: gemini
    },
    // {
    //   skillName: "UChat",
    //   fontAwesomeClassname: "fab fa-hackerrank",
    //   image: uchat
    // },
    {
      skillName: "Vercel",
      fontAwesomeClassname: "fab fa-hackerrank",
      image: vercel
    },
    {
      skillName: "Prisma",
      fontAwesomeClassname: "fab fa-hackerrank",
      image: prisma
    },
    {
      skillName: "HackTheBox",
      fontAwesomeClassname: "fab fa-hackerrank",
      image: htb
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
      image: docker
    },
    {
      skillName: "reactJs",
      fontAwesomeClassname: "fab fa-react",
      image: react
    },
    {
      skillName: "nextJs",
      fontAwesomeClassname: "fab fa-next",
      image: nextImg
    },
    {
      skillName: "nestJs",
      fontAwesomeClassname: "fab fa-next",
      image: nestImg
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular",
      image: angular
    },
    {
      skillName: "nodeJs",
      fontAwesomeClassname: "fab fa-node",
      image: node
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "fas fa-database",
      image: mongodbImg
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database",
      image: sql
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
      image: aws
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
      image: firebase
    },
    {
      skillName: "tailwind",
      fontAwesomeClassname: "fab fa-tailwind",
      image: tailwind
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress",
      image: wordpress
    },
    {
      skillName: "jquery",
      fontAwesomeClassname: "fab fa-jquery",
      image: jquery
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Codo a Codo 4.0",
      logo: require("./assets/images/codoacodo.png"),
      subHeader: "Codo a codo 4.0",
      duration: "Jan 2021 - Dic 2021",
    },
    {
      schoolName: "Acámica",
      logo: require("./assets/images/acamica.png"),
      subHeader: "Full Stack Developer",
      duration: "Jan 2019 - Setp 2020",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Web Security",
      progressPercentage: "80%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front-End Developer",
      company: "Crowdium",
      companylogo: require("./assets/images/crowdium.jpeg"),
      date: "Aug 2021 – Present",
      desc: "In charge of developing the front end of the platform"
    },
    {
      role: "Front-End Developer",
      company: "Crowdev",
      companylogo: crowdev,
      date: "Jan 2022 – Present",
      desc: "We are a group of programmers who work as freelancers for big projects",
    },
    // {
    //   role: "Freelancer",
    //   company: "Autónomo",
    //   companylogo: require("./assets/images/freelancer.avif"),
    //   date: "Oct. 2020 – Present",
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Some Projects",
  projects: [
    {
      image: chatBot,
      projectName: "Automated chat bots",
      tech: [getImage('OpenAi'), getImage('Gemini')],
      projectDesc: "Chatbots for companies to automate customer service.",
      footerLink: [
        {
          name: "Chat With Me",
          url: "https://wa.me/5491141410758"
        }
        //  you can add extra buttons here.
      ]
    },

    {
      image: vacamuerta,
      projectName: "QR Mode",
      tech: [uchat, getImage('mongoDB'), prisma,],
      projectDesc: "QRMode is an innovative system that allows guests to make claims quickly and easily using QR codes. Accommodations improve their operational efficiency, reduce costs and increase guest satisfaction.",
      footerLink: [
        {
          name: "Visit newspaper note",
          url: "https://www.cronista.com/brand-strategy/vaca-muerta-housing-el-desarrollo-del-sistema-qr-mode-que-los-convirtio-en-la-rentaltech-de-hospedajes-corporativos-mas-potente-de-anelo/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: fiducialys,
      projectName: "Fiducialys",
      tech: [nextImg, getImage('mongoDB'), vercel,],
      projectDesc: "Fiduciary management platform.",
      footerLink: [
        {
          name: "Comming soon",
          // url: "https://www.cronista.com/brand-strategy/vaca-muerta-housing-el-desarrollo-del-sistema-qr-mode-que-los-convirtio-en-la-rentaltech-de-hospedajes-corporativos-mas-potente-de-anelo/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/crowdium-logo.png"),
      projectName: "Crowdium",
      tech: [getImage('angular'), getImage('nestJs'), getImage('mongoDB')],
      projectDesc: "Robust and complex platform to manage client investments, completed projects, achieving a product adaptable to any country, whether from the language, its coins and any of their peculiarities. Based on Angular and NestJs",
      footerLink: [
        {
          name: "Visit Crowdium",
          url: "https://www.crowdium.com.ar/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/mapa.png"),
      projectName: "Digital Audit",
      tech: [getImage('nextJs'), getImage('mongoDB')],
      projectDesc: "WebbApp for digital inspection, used by the La Libertad Avanza (Javier Milei's political party) computing center in the presidential elections of November 2023. Helping to make voting more secure and transparent. Based on NextJs and NestJs",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "https://elecciontransparente.com/mesas"
      //   }
      // ]
    },
    {
      image: require("./assets/images/techfinance-logo.png"),
      projectName: "Techfinance",
      tech: [getImage('nextJs'), getImage('mongoDB')],
      projectDesc: "Robust and complex platform to manage client investments, completed projects, achieving a product adaptable to any country, whether from the language, its coins and any of their peculiarities. Based on Next and Mongo",
      footerLink: [
        {
          name: "Visit Techfinance",
          url: "https://www.techfinance.com.ar/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/fulldata.png"),
      projectName: "Full Data Pro",
      tech: [getImage('nextJs'), getImage('mongoDB')],
      projectDesc: "CRM to be able to obtain public data of people",
      footerLink: [
        {
          name: "Coming Soon",
        }
      ]
    },

    {
      image: manpower,
      projectName: "Manpower",
      tech: [getImage('nextJs'), getImage('mongoDB'), getImage('aws')],
      projectDesc: "Redesign and launch of an update of the Manpower UY website",
      footerLink: [
        {
          name: "Visit Manpower",
          url: "https://ejobs.manpower.com.uy/"
        }
      ]
    },
    {
      image: nlkCapital,
      projectName: "NLK Capital",
      tech: [getImage('nextJs'), getImage('mongoDB'), vercel],
      projectDesc: "Creation and maintenance of all landing pages of the business conglomerate",
      footerLink: [
        {
          name: "NLK Capital",
          url: "https://nlk.capital/"
        },
        {
          name: "Next Neuquen",
          url: "https://www.nextneuquen.com/"
        },
        {
          name: "Vaca Muerta Housing",
          url: "https://vacamuertahousing.com.ar/"
        },
        {
          name: "Next Pampa 2.0",
          url: "https://nextpampa20.com/"
        },
        {
          name: "Landium",
          url: "https://landium.com.ar/"
        },
      ]
    },

    // {
    //   image: require("./assets/images/logopixel.png"),
    //   projectName: "PixelPanada",
    //   tech: [getImage('nextJs'), getImage('mongoDB')],
    //   projectDesc: "Small and Interactive Landing Page for Food Company",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://pixelpanadas.com/"
    //     }
    //     //  you can add extra buttons here.
    //   ]
    // },
    // {
    //   image: require("./assets/images/logoJuanaFranquez.png"),
    //   projectName: "Architect Portfolio",
    //   projectDesc: "Portfolio deployed on Vercel",
    //   tech: [getImage('nextJs'), getImage('mongoDB')],
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://juana-portfolio.vercel.app/"
    //     }
    //     //  you can add extra buttons here.
    //   ]
    // },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: null,
  email_address: "deevpfa@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
