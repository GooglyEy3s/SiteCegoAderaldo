import { BrowserRouter, Routes, Route } from "react-router-dom"


import PaginaPublicacao from "../Trabalhos Publicados/PaginaPublicacao"
import {Header, Footer} from '../Home/Home';
import ChamarHome from "../Home/ChamarHome";
import ChamarPaginaPublicacao from "../Trabalhos Publicados/ChamarPaginaPublicacao";


const MainPage = () => {
    return (
        
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/PaginaPublicacao' element={<ChamarPaginaPublicacao/>}/>
                <Route path='/' element={<ChamarHome/>}/>
            </Routes>
            <Footer />
           
                     
        </BrowserRouter>
        
    )
}
export default MainPage
