import React from 'react'
import PropTypes from 'prop-types'
import Loadable from 'react-loadable'
import Work, { PlaceholderContainer } from './theme'
import Icon from '../Icon'
import Picture from '../Picture'
import Section from '../Section/theme'

const Slider = Loadable({
  loader: () => import('../Slider'),
  loading() {
    return (
      <PlaceholderContainer>
        <Picture
          imageSet={{
            sources: [
              {
                id: 1,
                srcset: '/images/work/safari.png',
                media: '(min-width: 62rem)',
              },
              {
                id: 2,
                srcset: '/images/work/safari.png',
                media: '(min-width: 48rem)',
              },
            ],
            img: {
              srcset: '/images/work/iphone-transparent.png',
              alt: 'iPhone placeholder',
            },
          }}
        />
      </PlaceholderContainer>
    )
  },
})

const WorkComponent = ({
  title,
  description,
  technologies,
  reference,
  imageSet,
  screenshots,
  active,
  closeWork,
}) => (
  <Work reference={reference} active={active}>
    <Work.Content>
      <Work.Close aria-label="Close" onClick={closeWork}>
        <span className="icon icon--close" />
      </Work.Close>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <Work.Technologies>
        {technologies.map(technology => (
          <Icon key={technology.id} type={technology.id} />
        ))}
      </Work.Technologies>
    </Work.Content>
    {screenshots &&
      active && (
        <Work.Gallery>
          <Slider slides={screenshots} />
        </Work.Gallery>
      )}
    {imageSet && (
      <Section.Background className="SectionBackground">
        <Picture imageSet={imageSet} />
      </Section.Background>
    )}
  </Work>
)

WorkComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.array,
  reference: PropTypes.string.isRequired,
}

WorkComponent.defaultProps = {
  technologies: [],
}

export default WorkComponent
