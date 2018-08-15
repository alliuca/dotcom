import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Nav from './theme'
import scrollTo from '../../utils/scrollTo'

const NavComponent = () => {
  return (
    <Nav>
      <Nav.MainNav>
        <StaticQuery
          query={graphql`
            query NavQuery {
              allNavJson {
                edges {
                  node {
                    id
                    title
                    url
                  }
                }
              }
            }
          `}
          render={data =>
            data.allNavJson.edges.map(doc => (
              <Nav.MainNavItem key={doc.node.id.toString()}>
                <Nav.MainNavItemLink
                  href={doc.node.url}
                  data-ga-label={doc.node.title}
                  onClick={() => scrollTo(doc.node.url)}
                >
                  {doc.node.title}
                </Nav.MainNavItemLink>
              </Nav.MainNavItem>
            ))
          }
        />
      </Nav.MainNav>
    </Nav>
  )
}

export default NavComponent
