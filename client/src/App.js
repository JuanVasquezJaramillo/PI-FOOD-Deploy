import './App.css';
import axios from 'axios';
import Loading from './components/loadingPage/loadingPage';
import Home from './components/homePage/homePage';
import Form from './components/formPage/formPage';
import Detail from './components/detailPage/detailPage'
import About from './components/aboutPage/about';
import { Route, Routes} from 'react-router-dom';
axios.defaults.baseURL = "http://localhost:3001"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Loading />} />
        {/* <Home onSearch={onSearch} recipes={recipes}/> */}
        <Route path='/home' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/detail/:name' element={<Detail />} />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
