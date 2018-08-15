import React from 'react'
import PropTypes from 'prop-types'
import Work from './theme'
import Icon from '../Icon'

const WorkComponent = ({
  title,
  description,
  technologies,
  reference,
  active,
}) => (
  <Work reference={reference} active={active}>
    <Work.Content>
      <button onClick={() => {}}>
        <span className="icon icon--close" />
      </button>
      <h2>{title}</h2>
      <p>{description}</p>
      <Work.Technologies>
        {technologies.map(technology => (
          <Icon key={technology} type={technology} />
        ))}
      </Work.Technologies>
    </Work.Content>
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
