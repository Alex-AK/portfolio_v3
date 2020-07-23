// import desktop images
import line_desktop from "../assets/project_desktop/line_desktop.jpg";
import training_bot_desktop from "../assets/project_desktop/training_bot_desktop.jpg";
import mentor_me_desktop from "../assets/project_desktop/mentor_me_desktop.jpg";
import good_time_journal_desktop from "../assets/project_desktop/good_time_journal_desktop.jpg";
import smith_and_jones_desktop from "../assets/project_desktop/smith_and_jones_desktop.jpg";
import kingston_desktop from "../assets/project_desktop/kingston_desktop.jpg";
import triohub_desktop from "../assets/project_desktop/triohub_desktop.jpg";
import brainsquall_desktop from "../assets/project_desktop/brainsquall_desktop.jpg";

// import mobile images
import training_bot_mobile from "../assets/project_mobile/training_bot_mobile.png";
import line_mobile from "../assets/project_mobile/line_mobile.png";
import mentor_me_mobile from "../assets/project_mobile/mentor_me_mobile.png";
import good_time_journal_mobile from "../assets/project_mobile/good_time_journal_mobile.png";
import smith_and_jones_mobile from "../assets/project_mobile/smith_and_jones_mobile.png";
import kingston_mobile from "../assets/project_mobile/kingston_mobile.png";
import brainsquall_mobile from "../assets/project_mobile/brainsquall_mobile.png";
import triohub_mobile from "../assets/project_mobile/triohub_mobile.png";

const content = {
  navigation: ["projects", "writing", "contact"],
  landing: {
    title: "Hi, I'm Alex.",
    sub_title:
      "I'm a Seattle based software engineer with a love for coffee, pleasant user experience, and intentionality.",
  },
  projects: [
    {
      images: {
        desktop: brainsquall_desktop,
        mobile: brainsquall_mobile,
      },
      title: "BrainSquall",
      intro:
        "A web application that combines a mind map, outline, and table to gather, organize, and share complex ideas.",
      content: {
        p_1:
          "Established and maintain engineering guidelines and development workflow including version control, continuous integration, pipeline config, and code review practices.",
        p_2:
          "Delivered a PostgreSQL version-controlled database with secure production level RESTful API using Node.",
        p_3:
          "Maintain approximately 80% server and client automated test coverage with Jest and React Testing Library.",
        p_4:
          "Architect and contribute to rapidly expanding client-side React feature set with modular context state management.",
      },
      links: {
        live_site: "https://brainsquall.co",
      },
    },
    {
      images: {
        desktop: kingston_desktop,
        mobile: kingston_mobile,
      },
      title: "Kingston Co.",
      intro:
        "A custom developed performant e-commerce platform for men's high fashion products.",
      content: {
        p_1:
          "Designed and implemented database schema with production level RESTful API endpoints for a complex item and SKU based inventory management system.",
        p_2:
          "Developed checkout flow with Stripe API integration, dynamic tax calculation, and server side price verification.",
        p_3:
          "Custom built item reservation system with automatic reservation expiration and database sync to maintain data continuity.",
        p_4:
          "Implemented address management system with input validation and error handling.",
      },
      links: {
        live_site: "https://kingstonco.netlify.app",
      },
    },
    {
      images: {
        desktop: triohub_desktop,
        mobile: triohub_mobile,
      },
      title: "TrioHub",
      intro:
        "A rental organization web and mobile application allowing users track potential rentals, collaborate with housemates, and secure a home with ease.",
      content: {
        p_1:
          "Established application architecture and guidelines with an emphasis on expandability and maintainability for small engineering team.",
        p_2:
          "Established application styled guide, UI wireframes and high fidelity mockups, and UX flows for onboarding and main use cases using Figma.",
        p_3:
          "Implemented drag and drop functionality with a custom positioning algorithm for a performant and accessible drag and drop experience.",
      },
      links: {
        live_site: "https://triohub.io",
      },
    },
    {
      images: {
        desktop: training_bot_desktop,
        mobile: training_bot_mobile,
      },
      title: "Training Bot",
      intro:
        "A web application allowing training managers to send employees automated text message and email notifications.",
      content: {
        p_1:
          "Built and deployed production level notification bot utilizing Node, MySQL, and AWS with custom written automation functions to manage notification data, interval timers, and notification triggers.",
        p_2:
          "Coordinate with team of four developers to meet daily feature goals based on agile methodologies to build and deliver a scalable React, Redux notification bot with automated text and email services.",
        p_3:
          "Utilized APIs such as Twilio, SendGrid, Auth0, and Stripe to meet feature complete deadlines.",
      },
      links: {
        github: "https://github.com/training-bot/",
        live_site: "https://trainingbot.co",
      },
    },
    {
      title: "LINE",
      intro:
        "An e-commerce site built with SquareSpace to meet client requirements of being able to manage store inventory and customer orders.",
      content: {
        p_1:
          "Produced site wire frames, UI / UX mockups for website and established new data schema for project.",
        p_2:
          "Designed and implemented a home goods e-commerce site with Content Management System (CMS).",
        p_3:
          " Serve as webmaster; handle web management, security assurance, and site integrity.",
      },
      images: {
        desktop: line_desktop,
        mobile: line_mobile,
      },
      links: {
        // github: 'https://github.com/alex-ak',
        // live_site: "https://linebyhand.com",
      },
    },
  ],
  archived: [
    {
      title: "Mentor Me",
      intro:
        "Mentor Me lets new entrepreneurs seek advice from qualified business professionals.",
      content: {
        p_1:
          "Designed and implemented database schema with production level RESTful API endpoints for a full stack messaging application using Node and PostgreSQL based on front end endpoint requests.",
        p_2:
          "Utilized unit and integration testing with Jest to ensured integrity of endpoints and data models.",
        p_3:
          "Wrote back end documentation detailing database schema and production endpoints.",
      },
      images: {
        desktop: mentor_me_desktop,
        mobile: mentor_me_mobile,
      },
      links: {
        github: "https://github.com/team-mentor-me/mentor-me-back",
        // live_site: 'https://team-mentor-me.github.io/mentor-me-landing/#'
      },
    },
    {
      title: "Good Time Journal",
      intro:
        "A full stack lifestyle design web application to track activities and weekly reflections. Built with React, Redux, and Node.",
      content: {
        p_1:
          "Coordinated with team lead, back end engineer, UI / UX and iOS developers to deliver a full stack React lifestyle web application to track daily activities and log weekly reflections.",
        p_2:
          "Implemented user authentication with JSON Web Token and bcrypt to ensure application security.",
        p_3:
          "Coordinated with back end developer to connect with RESTful API for data access and implemented Redux for application state management.",
      },
      images: {
        desktop: good_time_journal_desktop,
        mobile: good_time_journal_mobile,
      },
      links: {
        github: "https://github.com/GoodTimeJournal/react-front-end",
        live_site: "https://goodtimejournal.netlify.com/",
      },
    },
    {
      title: "Smith and Jones Architecture",
      intro:
        "A modern responsive architecture website built with HTML, CSS, and custom ES6 JavaScript components.",
      content: {
        p_1:
          "Implemented static website using modern JavaScript ES6 and LESS preproccessing with custom built tab navigation and carousel components.",
        p_2:
          "Utilized GSAP animation library to enhance user experience across site.",
      },
      images: {
        desktop: smith_and_jones_desktop,
        mobile: smith_and_jones_mobile,
      },
      links: {
        github: "https://github.com/lambda-projects-ak/sj-architecture",
        live_site: "https://smithandjohnson.netlify.com/",
      },
    },
  ],
};

export default content;
