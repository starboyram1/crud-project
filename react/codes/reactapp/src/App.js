import './App.css';
import Add from './Addbooks';
import View from './View';
import Update from './Update';
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function App() {
  return (
<>
<div>
  <h1>Bookstore</h1>
</div>
    <div>
      <Link to="/Addbooks"><button name='add' className='btn btn-info'>Add</button></Link>
    </div>
    <Routes>
      <Route path="/Addbooks" element={<Add />}/>
      <Route path="/Update" element={<Update />}/>
    </Routes>
    <div>
      <View />
    </div>
</>

  );
}

export default App;
