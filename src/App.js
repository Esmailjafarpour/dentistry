
import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import FirstStageVisit from './components/FirstStageVisit';
import SecondStageVisit from './components/SecondStageVisit';

function App() {
  return (
   <BrowserRouter>
          <div className="container-fluid p-1 relative">
            <Routes>
              <Route path="/" element={<FirstStageVisit/>}/>
              <Route path="/SecondStageVisit" element={<SecondStageVisit/>}/>
              
            </Routes>
          </div>
        </BrowserRouter>
  );
}

export default App;
