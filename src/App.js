import { useEffect } from 'react';
import GetData from './API/GetData';

const App = () => {

  useEffect(() => {
    const res = new GetData();
    res.getPizza()
    .then(data => console.log(data))
    .catch(err => console.error(err))
  }, []);

  return ( 
  <div>
    test
  </div>
  );
}
 
export default App;