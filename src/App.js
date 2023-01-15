
import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import FirstStageVisit from './components/FirstStageVisit';
import ListOfDentists from './components/ListOfDentists';

function App() {
  return (
   <BrowserRouter>
          <div className="container-fluid p-1 relative">
            <Routes>
              <Route path="/" element={<FirstStageVisit/>}/>
              <Route path="/ListOfDentists" element={<ListOfDentists/>}/>
              
            </Routes>
          </div>
        </BrowserRouter>
  );
}

export default App;
