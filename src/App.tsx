import './App.css';

import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Explorer from './pages/Explorer';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Dashboard />}></Route>
      <Route path='/explorer' element={<Explorer />}></Route>
    </Routes>
  );
}

export default App;
