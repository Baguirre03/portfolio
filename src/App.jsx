import Navbar from "./components/Nav";
import Name from "./components/Name";
import About from "./components/About";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles/app.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Name name="/"></Name>
        <About name="about"></About>
        <Tools name="tools"></Tools>
        <Projects name="projects"></Projects>
      </main>
      <Contact name="contact"></Contact>
    </>
  );
}

export default App;
