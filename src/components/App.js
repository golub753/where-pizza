import { useEffect } from 'react';
import GetData from '../API/GetData';
import Header from './Header/Header';

const App = () => {

  useEffect(() => {
    const res = new GetData();
    res.getPizza()
    .then(data => console.log(data))
    .catch(err => console.error(err))
  }, []);

  return ( 
    <>
      <Header />
    </>
  );
}
 
export default App;