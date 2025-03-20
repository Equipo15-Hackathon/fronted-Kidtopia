import { Icon } from "@iconify/react";
import "./Sidebar.css";

export default function Sidebar({ open, setOpen, setSelectedCategory }) {
  const categories = [
    "Muñecas y Figuras de Acción",
    "Juegos de Construcción",
    "Juguetes Educativos",
    "Vehículos y Pistas",
    "Juegos de Mesa",
    "Juguetes Electrónicos",
    "Peluches y Marionetas",
    "Arte y Manualidades",
    "Deportes y Aire Libre",
    "Instrumentos Musicales",
    "Robótica y Programación",
    "Juguetes para Bebés",
  ];

  return (
    <div className={`sidebar-container ${open ? "open" : ""}`}>
      <div className="sidebar">
        <button className="toggle-button" onClick={() => setOpen(!open)}>
          <Icon icon="teenyicons:x-outline" width={24} height={24} />
        </button>
        <h2 className="sidebar-title">Categorías</h2>
        <ul className="sidebar-list">
          {categories.map((category, index) => (
            <li
              key={index}
              className="sidebar-item"
              onClick={() => setSelectedCategory(category)}
            >
              <Icon icon="teenyicons:box-outline" width={24} height={24} /> {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
