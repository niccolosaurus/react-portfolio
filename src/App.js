import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className="App">
        <Header buttonText={'button'}/>
      </div>

      <div>
        <Main />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
