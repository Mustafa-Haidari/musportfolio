import slider from "../src/assets/projects/Slider.png";
import placeholder from "../src/assets/projects/imgplaceholder.png";
import colorgame from "../src/assets/projects/colorgame.png";
import filterjs from "../src/assets/projects/filterjs.png";
import stickynav from "../src/assets/projects/stickynav.png";
import kaakah from "../src/assets/projects/kaakah.png";

const PortfolioData = [
  {
    id: 0,
    created: new Date(2022, 9, 1).toLocaleDateString(),
    title: "Kaakah Topup",
    image: kaakah,
    description:
      "Kaakah is a mobile topup service that allows you to send topups/credits to your friends and family in more than 150 countries worldwide.",
    frontendTechs: ["JavaScript", "React", "Bootstrap"],
    backendTechs: ["NodeJS", "Stripe", "Reloadly API"],
    url: "https://kaakah.com/",
    status: "Live",
    statusNote: "This app is live being used by the public",
  },
  {
    id: 1,
    created: new Date(2021, 12, 10).toLocaleDateString(),
    title: "Expense tracker",
    image:
      "https://raw.githubusercontent.com/Mustafa-Haidari/Mustafa/main/assets/expense-tracker.png",
    description:
      "Expense tracker is a simple React app with a filter and a cool custom graph displaying expenses for each month. This cool project was part of a React course that I learned on Udemy.",
    frontendTechs: ["JavaScript", "CSS", "HTML", "React"],
    backendTechs: [],
    url: "https://mustafa-haidari.github.io/expense-tracker/",
    status: "Demo",
    statusNote: "Demo app hosted on Github",
  },
  {
    id: 2,
    created: new Date(2022, 1, 15).toLocaleDateString(),
    title: "Task assignment app",
    image:
      "https://mustafa-haidari.github.io/Mustafa/assets/task-assignment.png",
    description:
      "The Task assignment app was built with Vanilla JavaScript and uses localStorage to save the data with the ability to view, edit, update and delete inserted data.",
    frontendTechs: ["JavaScript", "CSS", "HTML"],
    backendTechs: [],
    url: "https://mustafa-haidari.github.io/task-assignment/",
    status: "Demo",
    statusNote: "Demo app hosted on Github",
  },
  {
    id: 3,
    created: new Date(2021, 11, 10).toLocaleDateString(),
    title: "Weather app",
    image: "https://mustafa-haidari.github.io/Mustafa/assets/weather-app.png",
    description:
      "The weather app is a simple app that makes an API call directly from the frontend and fetches the relevant data. Only CSS is used to design this app.",
    frontendTechs: ["JavaScript", "CSS", "HTML"],
    backendTechs: [],
    url: "https://mustafa-haidari.github.io/weather-app/",
    status: "Demo",
    statusNote: "Demo app hosted on Github",
  },
  {
    id: 4,
    created: new Date(2021, 12, 10).toLocaleDateString(),
    title: "Filter and print",
    image: filterjs,
    description:
      "The Filter and print app is a basic copy of the Australian Curriculum website. I was asked to build this for the BCE teachers so that they can easily select parts of the curriculum and print a copy.",
    frontendTechs: ["JavaScript", "CSS", "HTML"],
    backendTechs: [],
    url: "https://mustafa-haidari.github.io/JS-filter-tool/",
    status: "Demo",
    statusNote: "Demo app hosted on Github",
  },
  {
    id: 5,
    created: new Date(2021, 11, 20).toLocaleDateString(),
    title: "TV show app",
    image: "https://mustafa-haidari.github.io/Mustafa/assets/tv-show.png",
    description:
      "The TV Show app is another simple Javascript app that makes an API call from the frontend and fetches TV shows with details. This app has the ability to save shows to localStorage.",
    frontendTechs: ["JavaScript", "CSS", "HTML"],
    backendTechs: [],
    url: "https://mustafa-haidari.github.io/tv-shows/",
    status: "Demo",
    statusNote: "Demo app hosted on Github",
  },
  {
    id: 6,
    created: new Date(2020, 9, 8).toLocaleDateString(),
    title: "Calculator",
    image: "https://mustafa-haidari.github.io/Mustafa/assets/calculator.png",
    description:
      "The calculator app was built following a YouTube tutorial. All I can say about the calculator app is that coding this project was certainly intersting and valuable.",
    frontendTechs: ["JavaScript", "CSS", "HTML"],
    backendTechs: [],
    url: "https://mustafa-haidari.github.io/calculator/",
    status: "Demo",
    statusNote: "Demo app hosted on Github",
  },
  {
    id: 7,
    created: new Date(2018, 9, 2).toLocaleDateString(),
    title: "Color Game",
    image: colorgame,
    description:
      "The color game was built in 2018 when I was completing an advanced JavaScript course on Udemy. This is a great beginner project.",
    frontendTechs: ["JavaScript", "CSS", "HTML"],
    backendTechs: [],
    url: "https://mustafa-haidari.github.io/ColorGame.github.io/",
    status: "Demo",
    statusNote: "Demo app hosted on Github",
  },
  {
    id: 8,
    created: new Date(2017, 1, 10).toLocaleDateString(),
    title: "Sticky nav and footer toggle",
    image: stickynav,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
    frontendTechs: ["JavaScript", "CSS", "HTML"],
    backendTechs: [],
    url: "https://mustafa-haidari.github.io/stickyNav-footerToggle/",
    status: "Demo",
    statusNote: "Demo app hosted on Github",
  },
  // {
  //   id: 9,
  //   created: new Date(2018, 9, 2).toLocaleDateString(),
  //   title: "Slider",
  //   image: slider,
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
  //   frontendTechs: ["JavaScript", "CSS", "HTML"],
  //   backendTechs: [],
  //   url: "https://mustafa-haidari.github.io/slideshow-JS/",

  // status: "Demo",
  // statusNote: "Demo app hosted on Github",
  // },
  // {
  //   id: 10,
  //   created: new Date(2021, 12, 10).toLocaleDateString(),
  //   title: "Search filter",
  //   image: "https://mustafa-haidari.github.io/Mustafa/assets/search.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
  //   frontendTechs: ["JavaScript", "CSS", "HTML"],
  //   backendTechs: ["node"],
  //   url: "https://mustafa-haidari.github.io/search-filter/",
  // status: "Demo",
  // statusNote: "Demo app hosted on Github",
  // },
  // {
  //   id: 11,
  //   created: new Date(2021, 12, 10).toLocaleDateString(),
  //   title: "React Food Order App",
  //   image: placeholder,
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
  //   frontendTechs: ["JavaScript", "CSS", "HTML", "React"],
  //   backendTechs: [],
  //   url: "https://mustafa-haidari.github.io/React-Food-order-app/",
  // status: "Demo",
  // statusNote: "Demo app hosted on Github",
  // },
  // {
  //   id: 12,
  //   title: "Content placeholder",
  //   image:
  //     "https://mustafa-haidari.github.io/Mustafa/assets/content-placeholder.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
  //   frontendTechs: ["JavaScript", "CSS", "HTML"],
  //   backendTechs: [],
  //   url: "https://mustafa-haidari.github.io/content-placeholder/",
  // status: "Demo",
  // statusNote: "Demo app hosted on Github",
  // },
];

export default PortfolioData;
