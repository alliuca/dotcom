import React, { PureComponent } from 'react'
import Section from './theme'
import Picture from '../Picture'
import Work from '../Work'
import scrollTo from '../../utils/scrollTo'

class SectionComponent extends PureComponent {
  state = {
    work: null,
  }

  openWork = ref => this.setState({ work: ref })

  closeWork = () => this.setState({ work: null })

  render() {
    const { node, works } = this.props

    return (
      <Section
        id={node.ref}
        data-order={node.order}
        place={node.location ? node.ref : false}
        isContactFooter={node.ref === 'contact'}
      >
        {node.ref === 'contact' ? (
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
            {node.ref === 'intro' ? (
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
                    key={work.node.ref}
                    ref={work.node.ref}
                    onClick={() => this.openWork(work.node.ref)}
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
              data-ga-label={node.cta.data_ga_label}
              scroll={node.location ? node.ref : false}
              onClick={() => scrollTo(node.cta.url)}
              dangerouslySetInnerHTML={{ __html: node.cta.text }}
              small={node.ref !== 'intro'}
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
              key={node.ref}
              active={this.state.work === node.ref}
              reference={node.ref}
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
