import { BrowserRouter, Routes, Route } from "react-router-dom"

import ChamarHome from "../Home/ChamarHome";
import ChamarPaginaPublicacao from "../Trabalhos Publicados/ChamarPaginaPublicacao";
import ChamarLogin from "../Login/ChamarLogin";


const MainPage = () => {
    return (
        
        <BrowserRouter>
           
            <Routes>
                <Route path='/PaginaPublicacao' element={<ChamarPaginaPublicacao/>}/>
                <Route path='/' element={<ChamarHome/>}/>
                <Route path='/Login' element={<ChamarLogin/>}/>
            </Routes>
              
        </BrowserRouter>
        
    )
}
export default MainPage
