import Navbar from "./Nav";
import Name from "./Name";
import About from "./About";
import "./app.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Name name="/"></Name>
        <About name="about"></About>
      </main>
    </>
  );
}

export default App;
