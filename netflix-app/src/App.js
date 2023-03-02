
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPost/RowPost';
import { action, horror, orginals, trending } from './Urls';


function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Banner />
      <RowPost titlee='Netflix Originals' url={orginals} islarge />
      <RowPost titlee='Trending Movies' url={trending}  />
      <RowPost titlee='Action Movies' url={action}  />
      <RowPost titlee='Horror Movies' url={horror} />

      </div>
      
  
  );
}

export default App;
