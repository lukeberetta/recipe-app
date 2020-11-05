import "./App.css";
import Navbar from "./components/Navbar";
import { Recipes } from "./components/Recipes";
import { darktheme } from "./theme";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Recipes />
    </div>
  );
}

export default App;
