import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <nav>Our Navbar</nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <footer>Our Footer</footer>
    </BrowserRouter>
  );
}

export default App;
