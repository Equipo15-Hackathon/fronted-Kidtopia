import './Dropdown.css';

const Dropdown = ({ ageRange, brands, filterProducts, resetFilters }) => {


    return (
      <div className="dropdown">
        <button className="reset" onClick={resetFilters}>Reset</button>
        <div className="dropdown-sections">
        <div className="dropdown-section">
          <h3 className='filter-title'>Rango de Edades</h3>
          <ul>
            {ageRange.map((age) => (
              <li className='filter-item' 
                  key={age}
                  onClick={() => filterProducts(age, null)}
              >
                {age}
              </li>
            ))}
          </ul>
        </div>
        <div className="dropdown-section">
          <h3 className='filter-title'>Marcas</h3>
          <ul>
            {brands.map((brand) => (
              <li className='filter-item'
                  key={brand}
                  onClick={() => filterProducts(null, brand)}
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    );
  };
  
  export default Dropdown;