import { useState } from "react";
import { Icon } from "@iconify/react";
import "./Sidebar.css";

export default function Sidebar({open, setOpen}) {

  //Data example
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

  // To close sidebar when clicking outside
  const handleOutsideClick = (e) => {
    if (open && !e.target.closest(".sidebar")) {
      setOpen(false);
    }
  };

  return (
    <div className="sidebar-container" onClick={handleOutsideClick}>
      <button
        className="toggle-button"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
      >
        <Icon
          icon={open ? "teenyicons:x-outline" : "teenyicons:menu-outline"}
          width={24}
          height={24}
        />
      </button>

      <div
        className={`sidebar ${open ? "open" : "closed"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="sidebar-title">Categorias</h2>
        <ul className="sidebar-list">
          {categories.map((category, index) => (
            <li key={index} className="sidebar-item">
              <Icon icon="teenyicons:box-outline" width={24} height={24} />{" "}
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
