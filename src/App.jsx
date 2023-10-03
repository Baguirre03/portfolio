import Navbar from "./components/Nav";
import Name from "./components/Name";
import About from "./components/About";
import Tools from "./components/Tools";

import "./styles/app.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Name name="/"></Name>
        <About name="about"></About>
        <Tools name="tools"></Tools>
      </main>
    </>
  );
}

export default App;
