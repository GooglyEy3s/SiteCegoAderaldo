import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import lupa from "../../midia/lupa.png"
import x from "../../midia/volta3.png"

const Pesquisas = () => {
    const [linkForm,SetLinkForm] = useState ('')
    const [pesquisas,SetPesquisa] = useState ([{}])
    const [classe,SetClass] = useState ('')
    const [modalClass,SetmodalClass] = useState ('')
    

    const PesquisaClicada = (link) => {
        const links = link.split('=').map(link => link.replace(/"/g, ''));
        SetLinkForm(links[1])

        SetClass('active')
        console.log(links[1])
    }

    useEffect(
        () => {
            axios.get("http://localhost:3001/pesquisas/listar")
                .then(
                    (response) => {
                        SetPesquisa(response.data)
                    }
                )
                .catch(error => console.log(error))
        }
        ,
        []
      )

    return(
        <>
        <div className="header-pesquisas">
            <div className="cabecalho">
                <h1 className="titulo"> Pesquisas</h1>
                <p className="subtitulo">Nós ajude a entender você da melhor forma!</p>
            </div>
            <div className="botao" onClick={() => SetmodalClass('active')}><p>+ Nova Pesquisa</p></div>
        </div>
        
        <div className={"overlayNovoEvento "+ classe + modalClass}>
            <div className= {"formulario-container "+ classe}>
                <div className="fechar-formulario">
                    <img src={x} alt="" onClick={() => SetClass('')} />
                    <h1>Pesquisa</h1>
                </div> 
                <iframe src={linkForm} width="100%" height="90%" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
            </div>
        </div>
        <div className="pesquisas">
            {pesquisas.map((pesquisa) =>
                <>
                    <div className="item-pesquisa" onClick={() => PesquisaClicada(pesquisa.link)}>
                        <div className="pesquisa">
                            <img src={lupa} alt="" />
                            <h1>{pesquisa.titulo}</h1>
                        </div>
                        <div className="descricao"><p>{pesquisa.descricao}</p></div>
                    </div>
                </> 
            )}
        </div>
            
        
        </>
    )
}

export default Pesquisas