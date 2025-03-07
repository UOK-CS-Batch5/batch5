import meta from "../../../pages/_meta.js";
import component_meta from "../../../pages/component/_meta.js";
import component_sample_meta from "../../../pages/component/sample/_meta.js";
import Meet_our_team_meta from "../../../pages/Meet_our_team/_meta.js";
import Meet_our_team_Amindu_Bhashana_meta from "../../../pages/Meet_our_team/Amindu_Bhashana/_meta.js";
import Meet_our_team_Apeksha_meta from "../../../pages/Meet_our_team/Apeksha/_meta.js";
import Meet_our_team_Dehemi_Weerakoon_meta from "../../../pages/Meet_our_team/Dehemi_Weerakoon/_meta.js";
import Meet_our_team_Dilshana_Ranawake_meta from "../../../pages/Meet_our_team/Dilshana_Ranawake/_meta.js";
import Meet_our_team_Mihitha_Wanniarachchi_meta from "../../../pages/Meet_our_team/Mihitha_Wanniarachchi/_meta.js";
import Meet_our_team_Pawan_Pinsara_meta from "../../../pages/Meet_our_team/Pawan_Pinsara/_meta.js";
import Meet_our_team_Piyumi_Weerarathna_meta from "../../../pages/Meet_our_team/Piyumi_Weerarathna/_meta.js";
import Meet_our_team_Tharindu_Damruwan_meta from "../../../pages/Meet_our_team/Tharindu_Damruwan/_meta.js";
import Meet_our_team_Tharusha_meta from "../../../pages/Meet_our_team/Tharusha/_meta.js";
import Meet_our_team_Viduruwan_meta from "../../../pages/Meet_our_team/Viduruwan/_meta.js";
export const pageMap = [{
  data: meta
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
  name: "Meet_our_team",
  route: "/Meet_our_team",
  children: [{
    data: Meet_our_team_meta
  }, {
    name: "Amindu_Bhashana",
    route: "/Meet_our_team/Amindu_Bhashana",
    children: [{
      data: Meet_our_team_Amindu_Bhashana_meta
    }, {
      name: "about",
      route: "/Meet_our_team/Amindu_Bhashana/about",
      frontMatter: {
        "title": "About Amindu",
        "description": "Learn more about Pawan, a passionate Computer Science student at the University of Kelaniya."
      }
    }, {
      name: "me",
      route: "/Meet_our_team/Amindu_Bhashana/me",
      frontMatter: {
        "title": "Amindu's Profile",
        "description": "Learn more about Pawan, a passionate Computer Science student at UOK."
      }
    }]
  }, {
    name: "Apeksha",
    route: "/Meet_our_team/Apeksha",
    children: [{
      data: Meet_our_team_Apeksha_meta
    }, {
      name: "about",
      route: "/Meet_our_team/Apeksha/about",
      frontMatter: {
        "title": "Apeksha's Profile",
        "description": "Learn more about Apeksha, a passionate AI undergraduate specializing in Artificial Intelligence at the University of Kelaniya."
      }
    }]
  }, {
    name: "batch",
    route: "/Meet_our_team/batch",
    frontMatter: {
      "title": "About",
      "description": "Learn more about UOK CS 5th Batch and our journey"
    }
  }, {
    name: "Dehemi_Weerakoon",
    route: "/Meet_our_team/Dehemi_Weerakoon",
    children: [{
      data: Meet_our_team_Dehemi_Weerakoon_meta
    }, {
      name: "about",
      route: "/Meet_our_team/Dehemi_Weerakoon/about",
      frontMatter: {
        "title": "Meet Dehemi",
        "description": "Get to know Dehemi, a Computer Science student at the University of Kelaniya."
      }
    }]
  }, {
    name: "Dilshana_Ranawake",
    route: "/Meet_our_team/Dilshana_Ranawake",
    children: [{
      data: Meet_our_team_Dilshana_Ranawake_meta
    }, {
      name: "about",
      route: "/Meet_our_team/Dilshana_Ranawake/about",
      frontMatter: {
        "title": "About Dilshana",
        "description": "Learn more about Dilshana, a passionate Computer Science student at the University of Kelaniya."
      }
    }, {
      name: "me",
      route: "/Meet_our_team/Dilshana_Ranawake/me",
      frontMatter: {
        "title": "Dilshana's Profile",
        "description": "Learn more about Dilshana, a passionate Computer Science student at UOK."
      }
    }]
  }, {
    name: "Mihitha_Wanniarachchi",
    route: "/Meet_our_team/Mihitha_Wanniarachchi",
    children: [{
      data: Meet_our_team_Mihitha_Wanniarachchi_meta
    }, {
      name: "about",
      route: "/Meet_our_team/Mihitha_Wanniarachchi/about",
      frontMatter: {
        "title": "Meet Mihitha",
        "description": "Get to know Mihitha, a Computer Science student at the University of Kelaniya."
      }
    }]
  }, {
    name: "Pawan_Pinsara",
    route: "/Meet_our_team/Pawan_Pinsara",
    children: [{
      data: Meet_our_team_Pawan_Pinsara_meta
    }, {
      name: "about",
      route: "/Meet_our_team/Pawan_Pinsara/about",
      frontMatter: {
        "title": "Pawan Perera's Profile",
        "description": "Learn more about Pawan Perera, a passionate Computer Science student specializing in Artificial Intelligence at the University of Kelaniya."
      }
    }]
  }, {
    name: "Piyumi_Weerarathna",
    route: "/Meet_our_team/Piyumi_Weerarathna",
    children: [{
      data: Meet_our_team_Piyumi_Weerarathna_meta
    }, {
      name: "about",
      route: "/Meet_our_team/Piyumi_Weerarathna/about",
      frontMatter: {
        "title": "Piyumi Weerarathna's Profile",
        "description": "Learn more about Piyumi Weerarathna, a passionate Computer Science student specializing in Data Science at the University of Kelaniya."
      }
    }]
  }, {
    name: "Tharindu_Damruwan",
    route: "/Meet_our_team/Tharindu_Damruwan",
    children: [{
      data: Meet_our_team_Tharindu_Damruwan_meta
    }, {
      name: "about",
      route: "/Meet_our_team/Tharindu_Damruwan/about",
      frontMatter: {
        "title": "Tharindu Damruwan's Profile",
        "description": "Learn more about Tharindu Damruwan, a passionate Computer Science student specializing in Artificial Intelligence at the University of Kelaniya."
      }
    }]
  }, {
    name: "Tharusha",
    route: "/Meet_our_team/Tharusha",
    children: [{
      data: Meet_our_team_Tharusha_meta
    }, {
      name: "about",
      route: "/Meet_our_team/Tharusha/about",
      frontMatter: {
        "title": "Meet Tharusha",
        "description": "Discover Tharusha's journey in Data Science and Web Development."
      }
    }]
  }, {
    name: "Viduruwan",
    route: "/Meet_our_team/Viduruwan",
    children: [{
      data: Meet_our_team_Viduruwan_meta
    }, {
      name: "about",
      route: "/Meet_our_team/Viduruwan/about",
      frontMatter: {
        "title": "About Viduruwan",
        "description": "Learn more about Viduruwan, a passionate Computer Science student at the University of Kelaniya."
      }
    }, {
      name: "me",
      route: "/Meet_our_team/Viduruwan/me",
      frontMatter: {
        "title": "Viduruwan's Profile",
        "description": "Learn more about Viduruwan, a passionate Computer Science student at UOK."
      }
    }]
  }]
}];