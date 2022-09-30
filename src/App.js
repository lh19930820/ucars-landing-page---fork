import Header from "./layouts/header/Header";
import Visual from "./components/main-visual/Visual";
import NewCars from "./components/new-cars/NewCars";
import HowItWorks from "components/how-it-works/HowItWorks";

function App() {
  return (
    <div className="App">
      <Header/>
      <Visual/>
      <NewCars/>
      <HowItWorks/>
    </div>
  );
}

export default App;


