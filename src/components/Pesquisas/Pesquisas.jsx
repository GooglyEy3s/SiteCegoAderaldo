import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import lupa from "../../midia/lupa.png"
import x from "../../midia/volta3.png"
import volta from "../../midia/volta3.png";

import { Container, Box, Typography, TextField, Button } from "@mui/material"

const Pesquisas = () => {
    const [linkForm, SetLinkForm] = useState('')
    const [pesquisas, SetPesquisa] = useState([{}])
    const [classe, SetClass] = useState('')
    const [modalClass, SetmodalClass] = useState('')

    const [tituloPesquisa, SetTituloPesquisa] = useState('')
    const [descricaoPesquisa, SetDescricaoPesquisa] = useState('')
    const [linkPesquisa, SetLinkPesquisa] = useState('')

    const [mudou, setMudou] = useState(false)



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
        [mudou]
    )

    const MontarPesquisa = () => {
        const novoTrabalho = { titulo: tituloPesquisa, descricao: descricaoPesquisa, link: linkPesquisa}
        axios.post("http://localhost:3001/pesquisas/adicionar", novoTrabalho)
          .then(
            (response) => {
              alert(`Trabalho: ${response.data.nome} adicionado!`)
              SetmodalClass("")
              setMudou(!mudou)
              
            }
          )
          .catch(error => console.log(error))
      }

    return (
        <>
            <div className="header-pesquisas">
                <div className="cabecalho">
                    <h1 className="titulo"> Pesquisas</h1>
                    <p className="subtitulo">Nós ajude a entender você da melhor forma!</p>
                </div>
                <div className="botao" onClick={() => SetmodalClass('active')}><p>+ Nova Pesquisa</p></div>
            </div>

            <div className={"overlayNovoEvento " + classe + modalClass}>
                <div className={"container-data-novo-evento " + modalClass}>
                    <div className="titulo">
                        <img src={volta} alt="" onClick={() => SetmodalClass('')} />
                        <h1>Nova pesquisa</h1>


                    </div>
                    <div className="informacoesEvento">
                    

                    <Container maxWidth="md" marginLeft="10%" >

                        <div className="titulo-calendario"><h2>Informações sobre a Pesquisa</h2></div>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                width: "80%",
                                height:"80%",
                                mt: "3%",
                                // alignItems: "center",

                            }}
                        >
                            <TextField
                                required
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Titulo da pesquisa"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={(x) => {SetTituloPesquisa(x.target.value)}}
                            />
                            <TextField
                                required
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Descrição dapesquisa"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={(x) => {SetDescricaoPesquisa(x.target.value)}}

                            />
                            <TextField
                                sx={{ width: "100%", }}
                                required
                                margin="normal"
                                fullWidth
                                id="email"
                                label="link da pesquisa"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={(x) => {SetLinkPesquisa(x.target.value)}}

                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                onClick={MontarPesquisa}
                                className="botao-envio" 
                            >
                                Criar nova pesquisa
                            </Button>
                        </Box>
                    </Container>
                </div>
                </div>
                <div className={"formulario-container " + classe}>
                    <div className="fechar-formulario">
                        <img src={x} alt="" onClick={() => SetClass('')} />
                        <h1>Pesquisa</h1>
                    </div>
                    <iframe src={linkForm} width="100%" height="90%" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
                </div>
            </div>
            <div className="pesquisas">
                {pesquisas.slice().reverse().map((pesquisa) =>
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