import './Dropdown.css';

const Dropdown = ({ ageRange, brands }) => {


    return (
      <div className="dropdown">
        <div className="dropdown-section">
          <h3 className='filter-title'>Rango de Edades</h3>
          <ul>
            {ageRange.map((age) => (
              <li className='filter-item' key={age}>{age}</li>
            ))}
          </ul>
        </div>
        <div className="dropdown-section">
          <h3 className='filter-title'>Marcas</h3>
          <ul>
            {brands.map((brand) => (
              <li className='filter-item' key={brand}>{brand}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Dropdown;