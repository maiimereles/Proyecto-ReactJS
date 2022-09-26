import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer name="people"/>
    </>
  );
}

export default App;