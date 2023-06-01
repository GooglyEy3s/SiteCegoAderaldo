import { BrowserRouter, Routes, Route } from "react-router-dom"


import PaginaPublicacao from "../Trabalhos Publicados/PaginaPublicacao"
import {Header, Footer} from '../Home/Home';
import ChamarHome from "../Home/ChamarHome";


const MainPage = () => {
    return (
        
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/PaginaPublicacao' element={<PaginaPublicacao/>}/>
                <Route path='/' element={<ChamarHome/>}/>
            </Routes>
            <Footer />
           
                     
        </BrowserRouter>
        
    )
}
export default MainPage
