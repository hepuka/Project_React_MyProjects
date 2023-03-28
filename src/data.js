import eurtohuf from "./images/eurtohuf.jpg";
import portfolio from "./images/portfolio.jpg";
import fchat from "./images/fchat.jpg";
import hepukashop from "./images/hepukashop.jpg";
import szakdolgozat from "./images/szakdolgozat.jpg";
import kvetes from "./images/kvetes.jpg";

export const pageLinks = [
  { id: 1, href: "#js", text: "JS" },
  { id: 2, href: "#react", text: "React" },
];

export const projects_js = [
  {
    id: 1,
    image: portfolio,
    title: "My Portfolio",
    info: ` My personal portfolio.`,
    tags: "onepage - simplejs - carousel - email",
    url: "https://kunfagyalzoltan.netlify.app/",
  },
  {
    id: 2,
    image: kvetes,
    title: "Budget",
    info: `Simple budget app`,
    tags: " tag-eket ellenőrizni",
    url: "https://ephemeral-hummingbird-4122a5.netlify.app/",
  },
];

export const projects_react = [
  {
    id: 1,
    image: eurtohuf,
    title: "EUR TO HUF",
    info: ` EUR TO HUF converter`,
    tags: " tag-eket ellenőrizni",
    url: "https://eurtohuf.netlify.app/",
  },
  {
    id: 2,
    image: fchat,
    title: "Family Chat",
    info: ` This is our family chat`,
    tags: " tag-eket ellenőrizni",
    url: "https://familytalks.netlify.app/",
  },
  {
    id: 3,
    image: hepukashop,
    title: "Hepuka Shop",
    info: ` This is our shopping place`,
    tags: " tag-eket ellenőrizni",
    url: "https://familyshop.onrender.com/",
  },
  {
    id: 4,
    image: szakdolgozat,
    title: "Thesis",
    info: ` University of Debrecen thesis`,
    tags: " tag-eket ellenőrizni",
    url: "https://hepukashopb.onrender.com/",
  },
];
