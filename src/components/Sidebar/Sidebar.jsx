import { Icon } from "@iconify/react";
import "./Sidebar.css";

export default function Sidebar({ open, setOpen, setSelectedCategory, categories }) {
  return (
    <div className={`sidebar-container ${open ? "open" : ""}`}>
      <div className="sidebar">
        <h2 className="sidebar-title">Categorías</h2>
        <ul className="sidebar-list">
          {categories.map((category) => (
            <li
              key={category.id}
              className="sidebar-item"
              onClick={() => setSelectedCategory(Number(category.id))}
            >
              <Icon icon="teenyicons:box-outline" width={24} height={24} /> {category.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}