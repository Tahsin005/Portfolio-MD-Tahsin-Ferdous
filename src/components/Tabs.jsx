import react_icon from "../assets/icons/react_icon.svg";
import html_icon from "../assets/icons/html_icon.svg";
import css_icon from "../assets/icons/css_icon.svg";
import js_icon from "../assets/icons/js_icon.svg";
import json_icon from "../assets/icons/json_icon.svg";
import markdown_icon from "../assets/icons/markdown_icon.svg";
import { Link, useLocation } from "react-router-dom";
import Tab from './Tab.jsx';

import styles from '../styles/Tabsbar.module.css';
import styles2 from '../styles/Tab.module.css';

const TabsItems = [
  {
    name: "home.jsx",
    path: "/",
    icon: `${react_icon}`,
  },
  {
    name: "about.html",
    path: "/about",
    icon: `${html_icon}`,
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: `${css_icon}`,
  },
  {
    name: "projects.js",
    path: "/projects",
    icon: `${js_icon}`,
  },
  {
    name: "articles.json",
    path: "/articles",
    icon: `${json_icon}`,
  },
  {
    name: "tahsin.md",
    path: "/github",
    icon: `${markdown_icon}`,
  },
];
function Tabs() {
  const location = useLocation();
  // console.log(location);
  return (
    <div className={`${styles.tabs}`}>
      {TabsItems.map((tab) => {
        return (
          <Tab key={tab.name} icon={tab.icon} filename={tab.name} path={tab.path} />
        );
      })}
    </div>
  );
}

export default Tabs;
