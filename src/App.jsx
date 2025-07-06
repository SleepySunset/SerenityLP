import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import Contact from "./pages/Contact.jsx";
import Layout from "./layouts/Layout.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/servicios" element={<Services />}></Route>
        <Route path="/sobrenosotros" element={<Aboutus />}></Route>
        <Route path="/contacto" element={<Contact />}></Route>
        <Route path="*" element={<h1>Error 404 - Page not found</h1>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
