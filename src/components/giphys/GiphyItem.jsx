import React from 'react'
import PropTypes from 'prop-types'
const GiphyItem = ({ giphy: { title, images } }) => {
    
    return (
        <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src={images.original.url} alt="GIF's No Image" className="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {title}
              </a>
            </h3>
          </div>
        </div>
      </div>
    )
}

GiphyItem.propTypes = {
    giphy: PropTypes.object.isRequired,
    
}

export default GiphyItem