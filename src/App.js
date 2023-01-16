
import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import FirstStageVisit from './components/FirstStageVisit/index.jsx';
import ListOfDentists from './components/ListOfDentists/index.jsx';
import Appointment from './components/Appointment/index.jsx';

function App() {
  return (
   <BrowserRouter>
          <div className="container-fluid p-1 relative">
            <Routes>
              <Route path="/" element={<FirstStageVisit/>}/>
              <Route path="/ListOfDentists" element={<ListOfDentists/>}/>
              <Route path="/ListOfDentists" element={<ListOfDentists/>}/>
              <Route path="/Appointment" element={<Appointment/>}/>
            </Routes>
          </div>
        </BrowserRouter>
  );
}

export default App;
