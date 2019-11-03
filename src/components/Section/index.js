import React, { PureComponent } from 'react'
import Section from './theme'
import Picture from '../Picture'
import Work from '../Work'
import scrollTo from '../../utils/scrollTo'
import gaTrack from '../../utils/gaTrack'

class SectionComponent extends PureComponent {
  state = {
    work: null,
  }

  openWork = name => this.setState({ work: name })

  closeWork = () => this.setState({ work: null })

  render() {
    const { node, works } = this.props

    return (
      <Section
        id={node.name}
        data-order={node.order}
        place={node.location ? node.name : false}
        isContactFooter={node.name === 'contact'}
      >
        {node.name === 'contact' ? (
          <>
            <Section.Content>
              <Section.ContentHeading2>{node.title}</Section.ContentHeading2>
              <p dangerouslySetInnerHTML={{ __html: node.copy }} />
            </Section.Content>
            <Section.Content>
              <p dangerouslySetInnerHTML={{ __html: node.copy2 }} />
            </Section.Content>
          </>
        ) : (
          <Section.Content>
            {node.name === 'intro' ? (
              <Section.ContentIntroMain>
                <Section.ContentHeading>{node.title}</Section.ContentHeading>
                <p dangerouslySetInnerHTML={{ __html: node.copy }} />
              </Section.ContentIntroMain>
            ) : (
              <>
                <Section.ContentLogo>
                  <img src={node.logo.url} alt={node.title} />
                </Section.ContentLogo>
                <Section.ContentLocation
                  dangerouslySetInnerHTML={{ __html: node.location }}
                />
                <Section.ContentCopy
                  dangerouslySetInnerHTML={{ __html: node.copy }}
                />
              </>
            )}
            {works && (
              <Section.ContentCtas>
                {works.map(work => (
                  <Section.ContentCtaButton
                    key={work.node.name}
                    // ref={work.node.ref}
                    onClick={() => {
                      gaTrack('Work Button', work.node.title)
                      scrollTo(`#${work.node.section}`)
                      this.openWork(work.node.name)
                    }}
                    small
                    white
                  >
                    {work.node.cta}
                  </Section.ContentCtaButton>
                ))}
              </Section.ContentCtas>
            )}
            <Section.ContentCtaButton
              href={node.cta.url}
              scroll={node.location ? node.name : false}
              onClick={() => {
                gaTrack('Scroll to section Button', node.cta.data_ga_label)
                scrollTo(node.cta.url)
              }}
              dangerouslySetInnerHTML={{ __html: node.cta.text }}
              small={node.name !== 'intro'}
            />
            <Section.ContentNote
              dangerouslySetInnerHTML={{ __html: node.note }}
            />
          </Section.Content>
        )}
        {node.image_set && (
          <Section.Background>
            <Picture imageSet={node.image_set} />
          </Section.Background>
        )}
        {works &&
          works.map(({ node }) => (
            <Work
              key={node.name}
              active={this.state.work === node.name}
              reference={node.name}
              imageSet={node.image_set}
              screenshots={node.screenshots}
              closeWork={this.closeWork}
              {...node}
            />
          ))}
      </Section>
    )
  }
}

export default SectionComponent
