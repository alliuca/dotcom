import React from 'react'
import PropTypes from 'prop-types'
import Work from './theme'
import Icon from '../Icon'
import Slider from '../Slider'
import Picture from '../Picture'
import Section from '../Section/theme'

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
    {screenshots && (
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
