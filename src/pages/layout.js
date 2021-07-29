import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import { container, heading } from "./layout.module.css";

// markup
const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header
        pageTitle={pageTitle}
        title={data.site.siteMetadata.title}
      ></Header>
      <main className={container}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </>
  );
};

export default Layout;
