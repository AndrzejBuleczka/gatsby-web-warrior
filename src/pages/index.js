import * as React from "react";
import Layout from "../components/Layout";
import * as styles from '../styles/home.module.css';
import { Link, graphql } from "gatsby";


export default function Home({data}) {
  const { title, description} = data.site.siteMetadata
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop</h3>
          <p>Front-end & web developer based in Kraków</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{maxWidth: '100%'}}/>
      </section>
    </Layout>
  )
}

export const query = graphql`
query SiteInfo {
  site {
    siteMetadata {
    	title
      description
  	}
	}
}
`
