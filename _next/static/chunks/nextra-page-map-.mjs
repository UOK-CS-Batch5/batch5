import meta from "../../../pages/_meta.js";
import Amindu_Bhashana_meta from "../../../pages/Amindu_Bhashana/_meta.js";
import component_meta from "../../../pages/component/_meta.js";
import component_sample_meta from "../../../pages/component/sample/_meta.js";
import Pawan_Pinsara_meta from "../../../pages/Pawan_Pinsara/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "about",
  route: "/about",
  frontMatter: {
    "title": "About",
    "description": "Learn more about UOK CS 5th Batch and our journey"
  }
}, {
  name: "Amindu_Bhashana",
  route: "/Amindu_Bhashana",
  children: [{
    data: Amindu_Bhashana_meta
  }, {
    name: "about",
    route: "/Amindu_Bhashana/about",
    frontMatter: {
      "title": "About Amindu",
      "description": "Learn more about Pawan, a passionate Computer Science student at the University of Kelaniya."
    }
  }, {
    name: "me",
    route: "/Amindu_Bhashana/me",
    frontMatter: {
      "title": "Amindu's Profile",
      "description": "Learn more about Pawan, a passionate Computer Science student at UOK."
    }
  }]
}, {
  name: "component",
  route: "/component",
  children: [{
    data: component_meta
  }, {
    name: "mydoc",
    route: "/component/mydoc",
    frontMatter: {
      "sidebarTitle": "Mydoc"
    }
  }, {
    name: "sample",
    route: "/component/sample",
    children: [{
      data: component_sample_meta
    }, {
      name: "sample",
      route: "/component/sample/sample",
      frontMatter: {
        "sidebarTitle": "Sample"
      }
    }]
  }]
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "title": "Introduction",
    "description": "Welcome to the official website of UOK CS 5th Batch"
  }
}, {
  name: "Pawan_Pinsara",
  route: "/Pawan_Pinsara",
  children: [{
    data: Pawan_Pinsara_meta
  }, {
    name: "about",
    route: "/Pawan_Pinsara/about",
    frontMatter: {
      "title": "About Pawan",
      "description": "Learn more about Pawan, a passionate Computer Science student at the University of Kelaniya."
    }
  }, {
    name: "me",
    route: "/Pawan_Pinsara/me",
    frontMatter: {
      "title": "Pawan Perera's Profile",
      "description": "Learn more about Pawan Perera, a passionate Computer Science student specializing in Artificial Intelligence at the University of Kelaniya."
    }
  }]
}];