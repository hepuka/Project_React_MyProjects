import main from "./images/main.jpeg";
import eurtohuf from "./images/eurtohuf.jpg";
import portfolio from "./images/portfolio.jpg";
import fchat from "./images/fchat.jpg";

export const pageLinks = [
  { id: 1, href: "#js", text: "JS" },
  { id: 2, href: "#react", text: "React" },
];

export const projects_js = [
  {
    id: 1,
    image: portfolio,
    title: "My Portfolio",
    info: ` This is my personal portfolio.`,
    tags: " tag-eket ellenőrizni",
    url: "https://kunfagyalzoltan.netlify.app/",
  },
  {
    id: 2,
    image: main,
    title: "Tibet Adventure",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    tags: " tag-eket ellenőrizni",
  },
];

export const projects_react = [
  {
    id: 1,
    image: eurtohuf,
    title: "EUR TO HUF",
    info: ` EUR TO HUF Converter`,
    tags: " tag-eket ellenőrizni",
    url: "https://eurtohuf.netlify.app/",
  },
  {
    id: 1,
    image: fchat,
    title: "Family Chat",
    info: ` This is our family chat`,
    tags: " tag-eket ellenőrizni",
    url: "https://familytalks.netlify.app/",
  },
];
