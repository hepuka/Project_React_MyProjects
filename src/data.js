import eurtohuf from "./images/eurtohuf.jpg";
import portfolio from "./images/portfolio.jpg";
import hepukashop from "./images/hepukashop.jpg";
import kvetes from "./images/kvetes.jpg";
import broads from "./images/broads.jpg";
import real from "./images/real.jpg";
import pfilter from "./images/pfilter.jpg";
import profiles from "./images/profiles.jpg";
import joke from "./images/joke.jpg";
import community from "./images/community.jpg";
import terminator from "./images/terminator.jpg";
import debhir from "./images/debhir.jpg";
import todo3 from "./images/todo3.jpg";
import covid from "./images/covid.jpg";
import hir from "./images/hir.jpg";
import netflix from "./images/netflix.jpg";

export const pageLinks = [
  { id: 1, href: "#js", text: "JS" },
  { id: 2, href: "#react", text: "React" },
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
    id: 7,
    image: todo3,
    title: "TODO",
    info: `Simple TODO app`,
    tags: "flexbox createElement appendChild removeChild",
    url: "https://simpletodoapp22.netlify.app/",
  },

  {
    id: 10,
    image: covid,
    title: "COVID",
    info: `Customers counter`,
    tags: "flexbox counter",
    url: "https://vasarloszamlalo.netlify.app/",
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
    image: netflix,
    title: "HepukaFlix",
    info: `Netflix movies`,
    tags: "flexbox useEffect fetchAPI",
    url: "https://hepukamovie.netlify.app/",
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
    image: kvetes,
    title: "Budget",
    info: `Simple budget app`,
    tags: "flexbox responsive moduljs localStorage IIFE",
    url: "https://koltsegvetes.netlify.app/",
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
    id: 13,
    image: terminator,
    title: "Terminator",
    info: `Simple terminator card app`,
    tags: "searchbox filtermethods fetchAPI",
    url: "https://terminatorapp.netlify.app/",
  },
];
