/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "mrsawy's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "mrsawy Hathidara Portfolio",
    type: "website",
    url: "http://mrsawyhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Ahmed Elmrsawy",
  logo_name: "Ahmed Elmrsawy",
  nickname: "Mrsawy",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/drive/folders/1kZ0aeKJu8KYEfOcJuCd2MR1NEvy-sUFB?usp=drive_link",
  portfolio_repository:
    "https://github.com/mrsawy",
  githubProfile: "https://github.com/mrsawy",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/mrsawy1919",
  // linkedin: "https://www.linkedin.com/in/mrsawy-hathidara-88710b138/",
  // gmail: "mrsawyhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/mrsawyhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/mrsawy_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/mrsawy",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ahmed-elmrsawy-a15528224/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:mrsawy1@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/AhmedEl_mrsawy",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ahmed_elmrsawy/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Deeplearning",
    //       imageSrc: "deeplearning_ai_logo.png",
    //     },
    //   ],
    // },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React , Angular and React-native",
        "⚡ Integrate and work with databases, like MongoDB,PostgreSQL and MySql for data storage and retrieval.",
        "⚡ Work collaboratively with cross-functional teams, including frontend developers, backend developers, and designers.",
        "⚡ Creating application backend in Node & Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        {
          skillName: "React native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Back-end node js developer",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ designing and implementing RESTful APIs using Node.js",
        "⚡ Competent in integrating databases with Node.js applications. Familiarity with working with both SQL and NoSQL databases",
        "⚡ Proficient Using AWS Databases and S3 buckets .",
        "⚡  building scalable and efficient server-side applications using Node.js, leveraging its event-driven architecture and asynchronous programming model",
      ],
      softwareSkills: [
        // {
        //   name: "AWS",
        //   fontAwesomeClassname: "simple-icons:amazonaws",

        //   style: {
        //     color: "#4285F4",
        //   },
        // },

        {
          name: "AWS S3",
          fontAwesomeClassname: "simple-icons:amazons3",
        },

        {
          name: "AWS RDS ",
          fontAwesomeClassname: "simple-icons:amazonrds",
        },
        // {
        //   skillName: "GCP",
        //   fontAwesomeClassname: "simple-icons:googlecloud",
        //   style: {
        //     color: "#4285F4",
        //   },
        // },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },

        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    //(React js - Angular - React native)
    {
      title: "Front-end & mobile developer ",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ building interactive and responsive user interfaces using React.js ",
        "⚡ Skilled in developing web applications using Angular framework. Familiar with Angular concepts such as modules, components, services, and routing.",
        "⚡ developing cross-platform mobile applications for ios & android using React Native framework.",
        "⚡ Knowledgeable in HTML, CSS, and JavaScript, including modern CSS frameworks like Bootstrap, Material-UI, or Tailwind CSs",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#F24E0E",
          },
        },
        {
          skillName: "React native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      // profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      // profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#323754",
      },
      profileLink: "https://github.com/mrsawy",
    },
    {
      siteName: "linkedin",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://www.linkedin.com/in/ahmed-elmrsawy-a15528224",
    },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/mrsawy_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "pluralsight",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@mrsawy391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Mansoura university",
      subtitle: "bachelor degree in electronics and communications Engineering",
      logo_path: "eng_mans.png",
      alt_name: "ECE",
      duration: "2019 - 2024",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I studied communications and signal analysis beside learning about IOT technologies",
      ],
      website_link: "https://www.mans.edu.eg/en",
    },
    {
      title: "Information Technology Institute",
      subtitle: "MEAN stack development",
      logo_path: "iti-logo.png",
      alt_name: "ITI",
      duration: "2022 - 2023",
      descriptions: [
        "⚡ MongoDB: Learn NoSQL database design and operations for efficient data management.",
        "⚡ Express.js: Build scalable web applications with RESTful APIs and routing.",
        "⚡ Angular: Create dynamic front-end applications with powerful UI features and backend integration.",
        "⚡ Node.js: Develop server-side applications using event-driven, non-blocking I/O model.",
      ],
      website_link: "https://www.iti.gov.eg/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "professional web development",
      subtitle: "- full stack",
      logo_path: "fwdE.png",
      certificate_link: "https://graduation.udacity.com/confirm/KDYDJKDF",
      alt_name: "FWD egypt forward",
      color_code: "#00000099",
    },
    {
      title: "JavaScript (Intermediate) Certificate",
      subtitle: "- javascript",
      logo_path: "hackerrank.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/a0ae329aeaaf?utm_medium=email&utm_source=mail_template_1393&utm_campaign=hrc_skills_certificate",
      alt_name: "hacker rank",
      color_code: "#0C9D5899",
    },
    {
      title: "ITI iot summer training",
      subtitle: "- IOT",
      logo_path: "iti-logo.png",
      // certificate_link:
      // "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "iti",
      color_code: "#0C9D5899",
    },
    {
      title: "Problem Solving  Certificate",
      subtitle: "- ",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/e39bb35f80f3",
      alt_name: "hacker rank",
      color_code: "#1F70C199",
    },
    {
      title: "React cross skilling platform",
      subtitle: "react js",
      logo_path: "fwdE.png",
      certificate_link: "https://graduation.udacity.com/confirm/GXPKRSZM",
      alt_name: "FWD egypt forward",
      color_code: "#8C151599",
    },
    {
      title: "CSS in-depth",
      subtitle: "- css",
      logo_path: "pluralsightE.png",
      certificate_link:
        "https://drive.google.com/file/d/1waGQEBXvaodfATcJGO1YetoQQmjmHaIm/view?usp=sharing",
      alt_name: "pluralsight",
      color_code: "#D83B0199",
    },
    {
      title: "MEAN full-stack development",
      subtitle: "- Angular + Express",
      logo_path: "iti-logo.png",
      // certificate_link:
      // "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "ITI",
      color_code: "#1F70C199",
    },

    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    " As a MERN freelancer, I specialize in developing web applications using the MERN stack and a variety of other technologies. My expertise includes designing and implementing visually appealing and functional websites with HTML, CSS, JavaScript, and Tailwind CSS for the front-end, as well as Node.js, Express.js, and MongoDB for the back-end. I also have experience with AWS for deploying scalable applications, and I'm proficient in WordPress and PHP for creating dynamic and customizable websites. I collaborate with clients to understand their requirements, create intuitive UI/UX designs, and deliver secure, efficient, and high-quality applications.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Junior Software Engineer",
          company: "Codezilla",
          company_url: "https://codzilla.net/",
          logo_path: "cod.jpg",
          duration: "June 2023 - Now",
          location: "Remote",
          description: `Worked with Node js (express) ,React , React-natvie , socket.io , Redux, Angular
            ,PHP , Wordpress , , mySql and mongoDb . mainly in E-commerce apps and Companies Portfolios .`,
          color: "#0879bf",
        },
        {
          title: "Instructor at Hasoub",
          company: "Hasoub",
          company_url: "https://academy.hsoub.com/",
          logo_path: "has.jpg",
          duration: "June 2023 - Now",
          location: "Remote",
          description: `Helped students with answering their questions which reated with javascript , React
          , React Native , Node js , MySl , noSql , PHP , Wordpress , Laravel , and more.`,
          color: "#0879be",
        },
        {
          title: "Full stack web developer (Freelancer)",
          company: "Mostaql",
          company_url: "https://mostaql.com/",
          logo_path: "mos.png",
          duration: "June 2022 - Now",
          location: "Remote",
          description:
            "As a MERN freelancer, I specialize in developing web applications using the MERN stack and a variety of other technologies. My expertise includes designing and implementing visually appealing and functional websites with HTML, CSS, JavaScript, and Tailwind CSS for the front-end, as well as Node.js, Express.js, and MongoDB for the back-end. I also have experience with AWS for deploying scalable applications, and I'm proficient in WordPress and PHP for creating dynamic and customizable websites. I collaborate with clients to understand their requirements, create intuitive UI/UX designs, and deliver secure, efficient, and high-quality applications.",
          color: "#0879bf",
        },
        {
          title: "Engineering instructor",
          company: "online in saudiarabia",
          // company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "eng_mans.png",
          duration: "May 2020 - Oct 2021",
          location: "Aaudi arabia",
          description:
            "During the pandemic I was an online instructor for Saudi Arabian Engineering students in the following subjects: programming, discrete math, electrical machines,digital circuits, and logic",
          color: "#9b1578",
        },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "iot summer training Intern",
          company: "iti",
          company_url: "https://www.iti.gov.eg/",
          logo_path: "iti-logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description: `As an IoT intern, I have gained practical experience and expertise in MQTT, a lightweight messaging protocol used in IoT applications. I have learned how to set up MQTT brokers, configure network infrastructure, and integrate MQTT into embedded systems and IoT platforms. I have developed MQTT-based solutions for real-time data transmission, device control, and remote monitoring. Additionally, I possess troubleshooting skills and have optimized MQTT setups for improved performance and security. Overall, I have contributed to the development of efficient and reliable IoT solutions through your MQTT knowledge.`,
          color: "#000000",
        },
        // {
        //   title: "Data Science Research Intern",
        //   company: "Delhivery Pvt. Ltd.",
        //   company_url: "https://www.delhivery.com/",
        //   logo_path: "delhivery_logo.png",
        //   duration: "May 2019 - Sept 2019",
        //   location: "Gurgaon, Haryana",
        //   description:
        //     "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        //   color: "#ee3c26",
        // },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Resala Charity Organization | جمعية رسالة للأعمال الخيرية",
          company: "Resala",
          company_url: "https://resala.org/",
          logo_path: "Resala-logo.png",
          duration: "June 2019 - April 2020",
          location: "Mahalla elkoubra",
          description:
            "was a volunteer in organizing events and distributing cloth and food",
          color: "#4285F4",
        },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create web projects and deploy them to web applications",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ahmed.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.mrsawyhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
