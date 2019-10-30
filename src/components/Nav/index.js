import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Nav from './theme'
import scrollTo from '../../utils/scrollTo'
import gaTrack from '../../utils/gaTrack'

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
                  onClick={() => {
                    gaTrack('Main nav item', doc.node.title)
                    scrollTo(doc.node.url)
                  }}
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
