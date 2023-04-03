import eurtohuf from "./images/eurtohuf.jpg";
import portfolio from "./images/portfolio.jpg";
import fchat from "./images/fchat.jpg";
import hepukashop from "./images/hepukashop.jpg";
import szakdolgozat from "./images/szakdolgozat.jpg";
import kvetes from "./images/kvetes.jpg";
import sassjs from "./images/sassjs.jpg";
import anlog from "./images/anlog.jpg";
import broads from "./images/broads.jpg";
import dark from "./images/dark.jpg";
import real from "./images/real.jpg";
import pfilter from "./images/pfilter.jpg";
import profiles from "./images/profiles.jpg";
import joke from "./images/joke.jpg";
import community from "./images/community.jpg";
import terminator from "./images/terminator.jpg";
import todo from "./images/todo.jpg";
import todo2 from "./images/todo2.jpg";
import debhir from "./images/debhir.jpg";
import movie from "./images/movie.jpg";
import todo3 from "./images/todo3.jpg";
import beer from "./images/beer.jpg";
import yummy from "./images/yummy.jpg";
import covid from "./images/covid.jpg";
import recept from "./images/recept.jpg";
import hir from "./images/hir.jpg";

export const pageLinks = [
  { id: 1, href: "#js", text: "JS" },
  { id: 2, href: "#react", text: "React" },
  { id: 3, href: "#ts", text: "Typescript" },
];

export const headers = [
  "",
  "Company",
  "Contact",
  "Country",
  "Country",
  "Country",
];
export const rows = [
  {
    id: 1,
    data1: "x",
    data2: "",
    data3: "x",
    data4: "",
    data5: "x",
  },
  {
    id: 2,
    data1: "",
    data2: "x",
    data3: "x",
    data4: "",
    data5: "x",
  },
  {
    id: 3,
    data1: "x",
    data2: "x",
    data3: "x",
    data4: "",
    data5: "",
  },
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
  {
    id: 3,
    image: sassjs,
    title: "Portolio with SASS",
    info: `Simple portfolio template with SASS`,
    tags: "Sass flexbox responsive",
    url: "https://sassjsproject.netlify.app/",
  },
  {
    id: 4,
    image: debhir,
    title: "Debreceni Hirmondó",
    info: `Simple local newsportal`,
    tags: "flexbox onlysectionpartchangewithjs",
    url: "https://debhir.netlify.app/",
  },
  {
    id: 5,
    image: hir,
    title: "Newsportal",
    info: `Simple newsportal with GRID`,
    tags: "grid",
    url: "https://newsportalwithgrid.netlify.app/",
  },
  {
    id: 6,
    image: movie,
    title: "Mozi",
    info: `Mozijegyfoglaló app`,
    tags: "flexbox datafilemap localStorage",
    url: "https://moziapp.netlify.app/",
  },
  {
    id: 7,
    image: todo3,
    title: "TODO",
    info: `Simple TODO app`,
    tags: "flexbox createElement appendChild removeChild",
    url: "https://simpletodoapp22.netlify.app/",
  },
  {
    id: 8,
    image: beer,
    title: "BeerShop",
    info: `Beer Webshop`,
    tags: "flexbox",
    url: "https://beershop2.netlify.app/",
  },
  {
    id: 9,
    image: yummy,
    title: "Yummy",
    info: `Yummy food with bootstrap`,
    tags: "bootstrap php",
    url: "https://yummyfoodcopy.netlify.app/",
  },
  {
    id: 10,
    image: covid,
    title: "COVID",
    info: `Customers counter`,
    tags: "flexbox counter",
    url: "https://vasarloszamlalo.netlify.app/",
  },
  {
    id: 11,
    image: recept,
    title: "Recept",
    info: `Recept template`,
    tags: "flexbox datafilemap pagination",
    url: "https://receptsite.netlify.app/",
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
    tags: "Sass flexbox responsive firebase routes useEffect contextAPI useRef useNavigate searchbar login mixin",
    url: "https://familytalks.netlify.app/",
  },
  {
    id: 3,
    image: hepukashop,
    title: "Hepuka Shop",
    info: ` This is our shopping place`,
    tags: "moduleSass responsive server stripe firebase redux react-toastify react-icons pagination searchbox customhooks(useFetch) routes login register reset",
    url: "https://familyshop.onrender.com/",
  },
  {
    id: 4,
    image: szakdolgozat,
    title: "Thesis",
    info: ` University of Debrecen thesis`,
    tags: "moduleSass rfesponsive server redux firebase routes react-toastify customhooks(useFetch) protectedroutes login register searchbox pagination",
    url: "https://hepukashopb.onrender.com/",
  },
  {
    id: 5,
    image: anlog,
    title: "Animated login",
    info: ` Animated login, register, reset sites`,
    tags: "Sass flexbox responsive react-icons login register reset",
    url: "https://animatedloginregister.netlify.app/",
  },
  {
    id: 6,
    image: broads,
    title: "BACKROADS APP",
    info: ` Simple onepage site`,
    tags: "onepage flexbox responsive all_link_in_datafile datafilemap",
    url: "https://backroadsappcopy.netlify.app/",
  },
  {
    id: 7,
    image: dark,
    title: "Darkmode Toggle App",
    info: `Simple dark-light mode toggle app`,
    tags: "flexbox responsive useLocalStorage contextAPI react-icons",
    url: "https://darklighttoggleapp.netlify.app/",
  },
  {
    id: 8,
    image: real,
    title: "RealEstate",
    info: `realEstate app with Grip`,
    tags: "Sass grid responsive react-icons",
    url: "https://realestategridapp.netlify.app/",
  },
  {
    id: 9,
    image: pfilter,
    title: "ProductFilter",
    info: `filter and search app`,
    tags: "searchbox filtermethods datafilemap",
    url: "https://productfilterapp.netlify.app/",
  },
  {
    id: 10,
    image: profiles,
    title: "Profiles",
    info: `Simple profile app with cards`,
    tags: "CSSmodule datafilemap react-icons childrenprops",
    url: "https://profilesappwithcards.netlify.app/",
  },
  {
    id: 11,
    image: joke,
    title: "Joke generator",
    info: `Simple random joke generator`,
    tags: "flexbox fetchAPI useEffect spinner",
    url: "https://randomjokegeneratorapp.netlify.app/",
  },
  {
    id: 12,
    image: community,
    title: "Community ",
    info: `Simple community app with styled components`,
    tags: "styled-component flexbox datafilemap",
    url: "https://styledcomponentapp.netlify.app/",
  },
  {
    id: 13,
    image: terminator,
    title: "Terminator",
    info: `Simple terminator card app`,
    tags: "searchbox filtermethods fetchAPI",
    url: "https://terminatorapp.netlify.app/",
  },
  {
    id: 14,
    image: todo,
    title: "TODO",
    info: `Simple TODO app`,
    tags: "flexbox firebase async-await",
    url: "https://firebasetodoapp3.netlify.app/",
  },
];

export const projects_ts = [
  {
    id: 1,
    image: todo2,
    title: "TODO",
    info: `Simple TODO app with Typescript`,
    tags: "typescript flexbox localStorage CRUD vite",
    url: "https://todoappwithts.netlify.app/",
  },
];
