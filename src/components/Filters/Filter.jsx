import './Filter.css';
import { useState } from 'react';
import Dropdown from './Dropdown/Dropdown';

const Filter = ({ageRange, brands}) => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className='filter-container'>
        <button className={`filter-button ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
            <p className="filter-txt">Filtrar</p>
            <img src="/img/down-arrow.png" alt="down-arrow" className="down-arrow" />
        </button>

        {isOpen && <Dropdown 
                        ageRange={["0-2 años", "3-5 años", "6-8 años", "9-12 años"]} 
                        brands={["Mattel", "Hasbro", "Fisher-Price", "Lego", "Playmobil", "Barbie"]} 
                    />
        }
        </div>
    )
}

export default Filter;