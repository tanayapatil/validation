import logo from './logo.svg';
import './App.css';
import FormComonent from './copmonents/FormComonent';
import Header from './copmonents/Header';
import Data from './copmonents/Data';
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    < >
    <Header/>
    <Routes>
    <Route path="/" exact element={<FormComonent/>} />
    <Route path="/data" exact element={<Data/>} />
    </Routes>
      
    </>
  );
}

export default App;
