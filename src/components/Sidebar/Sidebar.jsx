import { Icon } from "@iconify/react";
import { categories } from "../../services/temporal/localProducts";
import "./Sidebar.css";
/* import { useEffect, useState } from "react";
import { categoriesRequest } from "../../services/api/categories"; */

/* export default function Sidebar({ open, setOpen, setSelectedCategory }) {

  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await categoriesRequest.getCategories();
      if (data) {
        setCategories(data);
      }
    };

    fetchCategories();
  }, []); */
  export default function Sidebar({ open, setOpen, setSelectedCategory }) {

  return (
    <div className={`sidebar-container ${open ? "open" : ""}`}>
      <div className="sidebar">
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
