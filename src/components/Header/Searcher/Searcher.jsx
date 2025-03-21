import { useState, useRef, useEffect } from "react";
import "./Searcher.css";

const Searcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const searchRef = useRef(null);


    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={searchRef} className={`searcher ${isOpen ? "open" : ""}`}>
            <img
                src="/img/search.png"
                alt="search-icon"
                className="search-icon"
                onClick={() => setIsOpen(!isOpen)}
            />
            {isOpen && (
                <div>
                    <input type="text" placeholder="Buscar" className="search-input" />
                </div>
            )}
        </div>
    );
};

export default Searcher;