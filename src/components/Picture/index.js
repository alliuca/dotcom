import React from 'react'
import Picture from './theme'

const PictureComponent = ({ imageSet }) => {
  return (
    <Picture>
      {imageSet.sources.map(source => (
        <source key={source.id} srcSet={source.srcset} media={source.media} />
      ))}
      <img srcSet={imageSet.img.srcset} alt={imageSet.img.alt} />
    </Picture>
  )
}

export default PictureComponent
