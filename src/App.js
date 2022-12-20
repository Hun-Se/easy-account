import Header from "./components/Layout/Header/Header";
import Aside from "./components/Layout/Aside/Aside";
import Body from "./components/Layout/Body/Body";
import "./App.css";
import "./styles/color.css";
import "./styles/reset.css";
import "./styles/blind.css";

function App() {
  return (
    <div className="App">
      <Aside></Aside>
      <main>
        <Header></Header>
        <Body></Body>
      </main>
    </div>
  );
}

export default App;
