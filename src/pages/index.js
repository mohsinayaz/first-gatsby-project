import * as React from "react";
import Layout from "./layout";
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This is home page bidu</p>
      <StaticImage
        alt="this is vegita wallpaper"
        src="../images/vegita-wallpaper.jpg"
      />
    </Layout>
  );
};

export default IndexPage;
