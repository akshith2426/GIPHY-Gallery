import { createContext ,useReducer} from 'react';
import giphyReducer from './GiphyReducer';
const GiphyContext = createContext();


const GIPHY_TOKEN = process.env.REACT_APP_GIPHY_TOKEN

export const GiphyProvider = ({ children }) => {
    const initialState = {
        giphys: [],
        loading:false
    }

    const [state,dispatch]=useReducer(giphyReducer,initialState)


    //Get Search results
    const searchGiphys = async (text) => {
        setLoading();
        const params = new URLSearchParams({
            q:text
        })
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_TOKEN}&q=${params}&limit=50&lang=en`)
        const {data} = await response.json();
        dispatch({
            type: 'GET_GIPHYS',
            payload: data,
        })
    }
    const clearGiphys = () => {
        dispatch({
            type: 'CLEAR_GIPHYS',
            payload: [],
        })
    }

    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING',
        })
    }

    return <GiphyContext.Provider value={{
        giphys: state.giphys, loading: state.loading, searchGiphys, setLoading, clearGiphys
    }}>
        {children}
    </GiphyContext.Provider>

}

export default GiphyContext