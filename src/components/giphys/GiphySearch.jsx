import React,{useState,useContext} from 'react'
import GiphyContext from '../../context/giphy/GiphyContext';
import AlertContext from '../../context/alert/AlertContext';
const GiphySearch = () => {
    const [text, setText] = useState('');
    const { giphys,searchGiphys,clearGiphys} = useContext(GiphyContext);
    const { setAlert } = useContext(AlertContext);
    const handleChange = (e) => {
        setText(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (text === '') {
            setAlert('Please enter something','error')
        } else {
            //@todo search users
            searchGiphys(text);

            setText('');
        }
    }
    const handleClear = () => {
        clearGiphys();
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
            <div>
                <form onSubmit={handleSubmit} className="form-control">
                    <div className="relative">
                        <input value={text} onChange={handleChange}
                            type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black" placeholder="Search" />
                        <button type="submit" className="absolute top-0 right-0 rounded-l-none btn btn-lg">Go</button>
                    </div>
                </form>
            </div>
            {giphys.length > 0 && (
                <div>
                    <button onClick={handleClear} className="btn btn-host btn-lg">
                    Clear
                </button>
            </div>
            ) }
            
        </div>
    )
}

export default GiphySearch