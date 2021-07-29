import * as React from "react";
import { Link } from "gatsby";

import { headerContainer, links, link, linkItem } from "./layout.module.css";

// markup
const Header = ({ pageTitle, title }) => {
  return (
    <main className={headerContainer}>
      <title>
        {pageTitle} | {title}
      </title>
      <nav>
        <ul className={links}>
          <li className={link}>
            <Link to="/" className={linkItem}>
              Home
            </Link>
          </li>
          <li className={link}>
            <Link to="/blog" className={linkItem}>
              Blog
            </Link>
          </li>
          <li className={link}>
            <Link to="/about" className={linkItem}>
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Header;
