import React, { useContext} from 'react'
import Spinner from '../layouts/Spinner';
import GiphyItem from '../giphys/GiphyItem'
import GiphyContext from '../../context/giphy/GiphyContext'

const GiphyResults = () => {
    const {giphys, loading } = useContext(GiphyContext);
    
    if (!loading) {
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {giphys.map((giphy) => {
                    return <GiphyItem key={giphy.id} giphy={giphy} />
                })}
            </div>
        )
    } else {
        return <Spinner />
    }
}

export default GiphyResults