import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="contact" element={<div>Contacto</div>}></Route>
        <Route path="products" element={<div>Productos</div>}></Route>
        <Route path="detail/:id" element={<ItemDetailContainer />}></Route>
        <Route
          path="category/:categoryName"
          element={<ItemListContainer />}
        ></Route>
        <Route path="cart" element={<div>cart</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;