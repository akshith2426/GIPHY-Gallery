import React, { useContext} from 'react'
import Spinner from '../layouts/Spinner';
import GiphyItem from '../giphys/GiphyItem'
import GiphyContext from '../../context/giphy/GiphyContext'
import GiphyPagination from './GiphyPagination';

const GiphyResults = () => {
    const { giphys, loading } = useContext(GiphyContext);
    const len = giphys.length;
    
    if (!loading) {
        return (
            <div>
                {giphys.length > 0 ? (
                    <GiphyPagination data={giphys}
                        RenderComponent={GiphyItem}
                        pageLimit={Math.ceil(len/9)}
                        dataLimit={9}
                    />
                ) : (
                        <h4 >No GIF's To Display.
                            <br/>
                            Please search for something above.
                        </h4>
                    )
            } 
        </div>
        )
    } else {
        return <Spinner />
    }
}

export default GiphyResults