import "./components/Main/App.css";
import NavBar from "./components/NavBar/NavBar";
//import ItemListContainer from "./components/Main/ItemListContainer";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/Main/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemDetailContainer />
      <Footer />
    </>
  );
}

export default App;
