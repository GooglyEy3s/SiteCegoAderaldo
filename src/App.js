import './App.css';
import './assets/Home';

import MainPage from "../src/components/MainPage/MainPage"
// import Vlibras from './components/Vlibras/Vlibras';
// import VLibras from 'vlibras-react';
// import VLibras from 'vlibras-react';
// import Vlibras from './components/Vlibras/Vlibras.json'
// import VLibras from '@moreiraste/react-vlibras/dist/types';
import VLibras from '@djpfs/react-vlibras/dist/types';


function App() {
  return (
    <>
    <MainPage />
    <VLibras />
    </>
  );
}
export default App;
