import './App.css';
import './assets/Home';

import MainPage from "../src/components/MainPage/MainPage"
// import VLibras from 'vlibras-react';
import VLibras from '@djpfs/react-vlibras/dist/esm';

function App() {
  return (
    <>
    <MainPage  />
    <VLibras />
    </>
  );
}
export default App;
