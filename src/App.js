import { Routes, Route } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import Listado from "componentes/ListadoLugares";
import Places from "./componentes/Places/Places";
import FormSecurePlace from "./componentes/FormSecurePlace/FormSecurePlace";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FormSecurePlace />} />
        <Route path="/places" element={<Places />} />
        <Route path="/lugares" element={<Listado />} />
      </Routes>
    </div>
  );
}

export default App;
