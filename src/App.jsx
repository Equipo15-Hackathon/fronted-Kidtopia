import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";

function App() {
    return (
        <Router>
            <Routes>
            </Routes>
            <Footer />
        </Router>
    );
}

const Contact = () => <h1>Formulario de Contacto (Próximamente)</h1>;

export default App;


