import './App.css';
import Home from "../src/assets/Home"

import {Header, ImageSlider, SobreNos, Footer} from './components/Home/Header';
function App() {
  return (
    <>
       <Header />
      <ImageSlider />
      <SobreNos />
      <Footer />
    </>
   
  );
}

export default App;
