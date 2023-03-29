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
    tags: "onepage responsive simplejs carousel email",
    url: "https://kunfagyalzoltan.netlify.app/",
  },
  {
    id: 2,
    image: kvetes,
    title: "Budget",
    info: `Simple budget app`,
    tags: "flexbox responsive moduljs localStorage IIFE",
    url: "https://ephemeral-hummingbird-4122a5.netlify.app/",
  },
];

export const projects_react = [
  {
    id: 1,
    image: eurtohuf,
    title: "EUR TO HUF",
    info: ` EUR TO HUF converter`,
    tags: "flexbox useEffect fetchAPI",
    url: "https://eurtohuf.netlify.app/",
  },
  {
    id: 2,
    image: fchat,
    title: "Family Chat",
    info: ` This is our family chat`,
    tags: "Sass flexbox responsive firebase routes useEffect useContext useRef useNavigate searchbar login mixin",
    url: "https://familytalks.netlify.app/",
  },
  {
    id: 3,
    image: hepukashop,
    title: "Hepuka Shop",
    info: ` This is our shopping place`,
    tags: "moduleSass server stripe firebase redux react-toastify react-icons pagination searchbox customhooks(useFetch) routes login register reset",
    url: "https://familyshop.onrender.com/",
  },
  {
    id: 4,
    image: szakdolgozat,
    title: "Thesis",
    info: ` University of Debrecen thesis`,
    tags: "moduleSass  server redux firebase routes react-toastify customhooks(useFetch) protectedroutes login register searchbox pagination",
    url: "https://hepukashopb.onrender.com/",
  },
];
