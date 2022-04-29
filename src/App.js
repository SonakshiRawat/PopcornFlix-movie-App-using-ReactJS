import "./App.css";
import Center from "./components/center/Center";
import Right from "./components/right/Right";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <div className="divide">
        <Center />
        <Right />
      </div>
    </div>
  );
}

export default App;
