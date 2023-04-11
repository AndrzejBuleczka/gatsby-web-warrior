import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  // const data = useStaticQuery(graphql`
  // query TitleQuery {
  //   site {
  //     siteMetadata {
  //       title
  //       description
  //       copyright
  //     }
  //   }
  // }
  // `)

  // const { title } = data.site.siteMetadata

  return (
    <nav>
      <h1>Web Warrior</h1>
      <div className="links">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Portfolio Projects</Link>
      </div>
    </nav>
  )
}
