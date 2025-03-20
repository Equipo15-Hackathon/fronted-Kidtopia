import './Searcher.css'

export const Searcher = () => {


    return (
        <div className="searcher">
            <img src="/img/search.png" alt="search-icon" className="search-icon" />
            <div >
                <input type="text" placeholder='Buscar' className="search-input"/>
            </div>
        </div>
    )
}