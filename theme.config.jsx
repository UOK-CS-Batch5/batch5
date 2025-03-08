import Logo from "./components/Logo.jsx";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";

const config = {
  logo: <Logo />,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="UOK CS 5th Batch" />
      <meta property="og:description" content="Meet the UOK CS 5th Batch students and learn about their skills and projects" />
      <meta name="description" content="Meet the UOK CS 5th Batch students and learn about their skills and projects" />
    </>
  ),
  project: {
    name: "batch5",
    link: "https://github.com/UOK-CS-Batch5",
  },
  docsRepositoryBase: 'https://github.com/UOK-CS-Batch5/batch5/discussions',
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
  },
  toc: {
    float: true,
  },
  // banner: {
  //   key: 'Welcome to batch5',
  //   content: (
  //     <>
  //       <h1>👋 Welcome to batch5</h1>
  //       <p>
  //         This is the official website of batch5. You can find all the resources related to batch5 here.
  //       </p>
  //     </>
  //   ),
  //   content: (
  //     <a href="https://github.com/UOK-CS-Batch5" target="_blank">
  //       😊 UOK CS 5th Batch. View us here →
  //     </a>
  //   )
  // },
  footer: {
    content: (
      <>
        <h1>
          <a href="https://github.com/UOK-CS-Batch5" target="_blank">
            {"MIT License © 2024"}  
          </a>
        </h1>
      </>
    ),
  },
  editLink: {
    content: null,
  },
};

export default config;

