
import { Route, Routes} from 'react-router-dom';
import './App.css';
import AddEmployeeComponent from './component/AddEmployeeComponent';
import FooterComponenet from './component/FooterComponenet';
import HeaderComponent from './component/HeaderComponent';
import ListEmployeecomponent from './component/ListEmployeecomponent';
import ViewEmployeeComponent from "./component/ViewEmployeeComponent";

function App() {
  return (
    <div>
      
      <HeaderComponent/>
      <div className='container'>
     <Routes>
      <Route path="/" element={<ListEmployeecomponent/>}></Route>
      <Route path="/employees" element={<ListEmployeecomponent/>}></Route>
      <Route path="/addemployee" element={<AddEmployeeComponent/>}></Route>
      <Route path="/edit_employee/:id" element={<AddEmployeeComponent/>}></Route>
      <Route path="/view_employee/:id" element={<ViewEmployeeComponent/>}></Route>
      </Routes>
      </div>

      
      <FooterComponenet/>
    
    </div>
  );
}

export default App;
