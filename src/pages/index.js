import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Section from '../components/Section'

class IndexPage extends React.PureComponent {
  constructor(props) {
    super(props)
    this.scrolling = false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onWindowScroll)
  }

  onWindowScroll = () => {
    clearInterval(this.scrolling)
    this.scrolling = setTimeout(() => {
      this.setCurrentSlide()
    }, 250)
  }

  setCurrentSlide = () => {
    const windowScrollTop =
      (window.pageYOffset || document.documentElement.scrollTop) -
      (document.documentElement.clientTop || 0)
    const windowHeight = window.innerHeight
    if (window.history && window.history.pushState) {
      window.history.pushState(
        null,
        null,
        `#${document
          .querySelector(
            `section[data-order="${Math.floor(
              windowScrollTop / windowHeight
            )}"]`
          )
          .getAttribute('id')}`
      )
    }
  }

  render() {
    const { data } = this.props

    return (
      <Layout>
        {data.allSectionsJson.edges.map(({ node }) => {
          const works = data.allWorksJson
            ? data.allWorksJson.edges.filter(
                work => work.node.section === node.ref
              )
            : []
          return <Section key={node.ref} node={node} works={works} />
        })}
      </Layout>
    )
  }
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    allSectionsJson(sort: { fields: [order] }) {
      edges {
        node {
          order
          ref
          title
          logo {
            url
          }
          location
          copy
          copy2
          note
          cta {
            text
            url
          }
          image_set {
            sources {
              id
              srcset
              media
            }
            img {
              srcset
              alt
            }
          }
        }
      }
    }
    allWorksJson {
      edges {
        node {
          section
          ref
          title
          cta
        }
      }
    }
  }
`
