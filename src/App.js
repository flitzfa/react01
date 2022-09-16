import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <ItemListContainer />
        <ItemDetailContainer />
      </header>
    </div>
  );
}


export default App;