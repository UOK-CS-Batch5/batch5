import meta from "../../../pages/_meta.js";
import Amindu_Bhashana_meta from "../../../pages/Amindu_Bhashana/_meta.js";
import Apeksha_meta from "../../../pages/Apeksha/_meta.js";
import component_meta from "../../../pages/component/_meta.js";
import component_sample_meta from "../../../pages/component/sample/_meta.js";
import Dehemi_Weerakoon_meta from "../../../pages/Dehemi_Weerakoon/_meta.js";
import Dilshana_Ranawake_meta from "../../../pages/Dilshana_Ranawake/_meta.js";
import Mihitha_Wanniarachchi_meta from "../../../pages/Mihitha_Wanniarachchi/_meta.js";
import Pawan_Pinsara_meta from "../../../pages/Pawan_Pinsara/_meta.js";
import Piyumi_Weerarathna_meta from "../../../pages/Piyumi_Weerarathna/_meta.js";
import Tharusha_meta from "../../../pages/Tharusha/_meta.js";
import Viduruwan_meta from "../../../pages/Viduruwan/_meta.js";
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
  name: "Apeksha",
  route: "/Apeksha",
  children: [{
    data: Apeksha_meta
  }, {
    name: "about",
    route: "/Apeksha/about",
    frontMatter: {
      "title": "Apeksha's Profile",
      "description": "Learn more about Apeksha, a passionate AI undergraduate specializing in Artificial Intelligence at the University of Kelaniya."
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
  name: "Dehemi_Weerakoon",
  route: "/Dehemi_Weerakoon",
  children: [{
    data: Dehemi_Weerakoon_meta
  }, {
    name: "about",
    route: "/Dehemi_Weerakoon/about",
    frontMatter: {
      "title": "Meet Dehemi",
      "description": "Get to know Dehemi, a Computer Science student at the University of Kelaniya."
    }
  }]
}, {
  name: "Dilshana_Ranawake",
  route: "/Dilshana_Ranawake",
  children: [{
    data: Dilshana_Ranawake_meta
  }, {
    name: "about",
    route: "/Dilshana_Ranawake/about",
    frontMatter: {
      "title": "About Dilshana",
      "description": "Learn more about Dilshana, a passionate Computer Science student at the University of Kelaniya."
    }
  }, {
    name: "me",
    route: "/Dilshana_Ranawake/me",
    frontMatter: {
      "title": "Dilshana's Profile",
      "description": "Learn more about Dilshana, a passionate Computer Science student at UOK."
    }
  }]
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "title": "Introduction",
    "description": "Welcome to the official website of UOK CS 5th Batch"
  }
}, {
  name: "Mihitha_Wanniarachchi",
  route: "/Mihitha_Wanniarachchi",
  children: [{
    data: Mihitha_Wanniarachchi_meta
  }, {
    name: "about",
    route: "/Mihitha_Wanniarachchi/about",
    frontMatter: {
      "title": "Meet Mihitha",
      "description": "Get to know Mihitha, a Computer Science student at the University of Kelaniya."
    }
  }]
}, {
  name: "Pawan_Pinsara",
  route: "/Pawan_Pinsara",
  children: [{
    data: Pawan_Pinsara_meta
  }, {
    name: "about",
    route: "/Pawan_Pinsara/about",
    frontMatter: {
      "title": "Pawan Perera's Profile",
      "description": "Learn more about Pawan Perera, a passionate Computer Science student specializing in Artificial Intelligence at the University of Kelaniya."
    }
  }]
}, {
  name: "Piyumi_Weerarathna",
  route: "/Piyumi_Weerarathna",
  children: [{
    data: Piyumi_Weerarathna_meta
  }, {
    name: "about",
    route: "/Piyumi_Weerarathna/about",
    frontMatter: {
      "title": "Piyumi Weerarathna's Profile",
      "description": "Learn more about Piyumi Weerarathna, a passionate Computer Science student specializing in Data Science at the University of Kelaniya."
    }
  }]
}, {
  name: "Tharusha",
  route: "/Tharusha",
  children: [{
    data: Tharusha_meta
  }, {
    name: "about",
    route: "/Tharusha/about",
    frontMatter: {
      "title": "Meet Tharusha",
      "description": "Discover Tharusha's journey in Data Science and Web Development."
    }
  }]
}, {
  name: "Viduruwan",
  route: "/Viduruwan",
  children: [{
    data: Viduruwan_meta
  }, {
    name: "about",
    route: "/Viduruwan/about",
    frontMatter: {
      "title": "About Viduruwan",
      "description": "Learn more about Viduruwan, a passionate Computer Science student at the University of Kelaniya."
    }
  }, {
    name: "me",
    route: "/Viduruwan/me",
    frontMatter: {
      "title": "Viduruwan's Profile",
      "description": "Learn more about Viduruwan, a passionate Computer Science student at UOK."
    }
  }]
}];