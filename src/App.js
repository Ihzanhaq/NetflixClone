import logo from './logo.svg';
import './App.css';
import Nav from './Components/Navbar/Nav';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/RowPost/Rowpost';
import { action, originals } from './urls';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Rowpost url={originals} title="Netflix Originals"/>
      <Rowpost isSmall url={action} title="Action" />
    </div>
  );
}

export default App;
