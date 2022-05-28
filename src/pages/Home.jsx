import React from 'react'
import GiphyResults from '../components/giphys/GiphyResults'
import GiphySearch from '../components/giphys/GiphySearch'

const Home = () => {
  return (
    <div>
          <GiphySearch />
          <GiphyResults/>
    </div>
  )
}

export default Home