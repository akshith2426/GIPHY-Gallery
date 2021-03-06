import React,{useState,useEffect} from 'react'
import './GiphyPagination.css'
const GiphyPagination = ({ data, RenderComponent,  pageLimit, dataLimit }) => {
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);
    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }
    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }
    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };
    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };
    useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [currentPage]);
    return (
    <div>

        {/* display of 9 GIF's at a time */}
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {getPaginatedData().map((giphy) => (
            <RenderComponent key={giphy.id} giphy={giphy} />
        ))}
        </div>
        <div className="pagination">
        {/* previous button */}
        <button
            onClick={goToPreviousPage}
            className={`btn ${currentPage === 1 ? 'disabled' : ''}`}
        >
            prev
        </button>

        {/* show page numbers */}
                    <div className="btn-group">
                        {getPaginationGroup().map((item, index) => (
            <button
            key={index}
            onClick={changePage}
            className={`btn btn-accent mx-1 my-5 ${currentPage === item ? 'active' : null}`}
            >
            {item}
            </button>
        ))}
        </div>

        {/* next button */}
        <button
            onClick={goToNextPage}
            className={`btn ${currentPage === pages ? 'disabled' : ''}`}
        >
            next
        </button>
        </div>
    </div>
);
}

export default GiphyPagination