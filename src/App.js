import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="App">
        <Header buttonText={"button"} />
      </div>
      <Main />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
