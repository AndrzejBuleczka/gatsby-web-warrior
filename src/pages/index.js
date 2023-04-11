import * as React from "react";
import Layout from "../components/Layout";
import * as styles from '../styles/home.module.css';
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


export default function Home({data}) {
  console.log(data.file.childImageSharp.fluid)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop</h3>
          <p>Front-end & web developer based in Kraków</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="banner"/>
        {/* <img src="/banner.png" alt="site banner" style={{maxWidth: '100%'}}/> */}
      </section>
    </Layout>
  )
}

export const query = graphql`
query Banner {
  file(relativePath: { eq: "banner.png" }) {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED)
    }
  }
}
`
