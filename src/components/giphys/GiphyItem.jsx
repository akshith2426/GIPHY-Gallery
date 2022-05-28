import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const GiphyItem = ({giphy:{title,images}}) => {
    return (
        <div className='card shadow-md  bg-base-100'>
            <div className='flex-column items-center space-x-4 card-body'>
                <div>
                    <div className='avatar'>
                        <div className=' shadow w-30 h-30'>
                            <img src={images.original.url} alt='GIFs' />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='card-title' style={{color:'red'}}>{title}</h2>
                </div>
            </div>
        </div>
    )
}

GiphyItem.propTypes = {
    giphy: PropTypes.object.isRequired,
    
}

export default GiphyItem