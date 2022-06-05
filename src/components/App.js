import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GetData from '../API/GetData';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Home from '../pages/Home';
import Pizza from '../pages/Pizza';
import Sushi from '../pages/Sushi';
import Snacks from '../pages/Snacks';
import Drinks from '../pages/Drinks';
import Desserts from '../pages/Desserts';

const App = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const res = new GetData();
    res.getPizza()
    .then(data => setData(data))
    .catch(err => console.error(err))
  }, []);

  return ( 
    <>
      <Header />
      <Router>
        <Menu />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/pizza' element={data && <Pizza items={data[0].pizza}/>} />
          <Route path='/sushi' element={data && <Sushi items={data[1].sushi}/>} />
          <Route path='/snacks' element={<Snacks items={false}/>} />
          <Route path='/drinks' element={<Drinks items={false}/>} />
          <Route path='/desserts' element={<Desserts items={false}/>} />
        </Routes>
      </Router>
    </>
  );
}
 
export default App;