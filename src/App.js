import "./components/Main/App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Main/ItemListContainer";
//import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/Main/ItemDetailContainer";
import Cart from './components/Main/Cart'
import CartContextProvider from "./components/Main/CartContext";

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path='/' element= {<ItemListContainer />}/>
        <Route path='/category/:id' element= {<ItemListContainer/>}/>
        <Route path='/id/:id' element= {<ItemDetailContainer />}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
