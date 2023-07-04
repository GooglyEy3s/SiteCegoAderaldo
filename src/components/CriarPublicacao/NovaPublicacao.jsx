import { Container, Box, Typography, TextField, Button, FormControl,FormLabel,RadioGroup,FormControlLabel,Radio } from "@mui/material"
import casa from '../../midia/casa-de-saberes.jpg'
import volta from "../../midia/volta.png"
import beija from "../../midia/beija.png"
import { Link } from "react-router-dom"

import { useContext, useEffect } from "react"
import Administrador from "../Login_Contexto/ContextoLogin";
import { useState } from "react";
import { publicacoes2 } from "./publicacoes"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const NovaPublicacao = () => {
    const [titulo, setNome] = useState('');
    const [descricao, setDescricaoe] = useState('aaaaaa');
    const [publico, setPublico] = useState(true);
    const [numeroAcessos, setNumeroAcessos] = useState(0);
    const [novotrabalho2,SetNovoTrabalho2] = useState(true);
    const navigate = useNavigate()


    const pegarNome = (event) => {
        setNome(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault()
        SetNovoTrabalho2(false)
        console.log(novotrabalho2)
        const novoTrabalho = { titulo, descricao, publico:acesso }
        axios.post("http://localhost:3001/trabalhos/adicionar", novoTrabalho)
            .then(
                (response) => {
                    alert(`Trabalho: ${response.data.nome} adicionado!`)
                    navigate("/PaginaPublicacao")
                    
                }
            )
            .catch(error => console.log(error))
    }
    useEffect(() => {
        axios.get("http://localhost:3001/acessos/listar")
          .then(response => {
            setNumeroAcessos(response.data[1].numero);
            console.log(response.data[1].numero)
          })
          .catch(error => console.log(error));
      }, []);

    useEffect(() => {
        if (numeroAcessos !== 0) {
          const novoNumero = numeroAcessos + 1;
          axios.put(`http://localhost:3001/acessos/update/64a04531194652b31b25b012`, { numero: novoNumero })
            .then(response => {
              console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
            })
            .catch(error => console.log(error));
        }
      }, [novotrabalho2]);

    const [acesso,SetAcesso] = useState ()

    useEffect(
        () =>{
            console.log(acesso)
        }
        ,
        [acesso]
    )
    return (
        <>
            <div className="nova-publicacao">
                <div className="image-nova"><img src={beija} alt="" /></div>
                <div className="conteudo">
                    <div className="titulo">
                        <Link to={'/PaginaPublicacao'}> <img src={volta} alt="" /> </Link>
                        <h1>Nova Publicação</h1>
                    </div>

                    <Container maxWidth="md" >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                // alignItems: "center",
                                mt: 10
                            }}
                        >
                            <TextField
                                required
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Coloque o nome da sua publicação"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={pegarNome}
                            />
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">Escolha o tipo de acesso</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="publico" control={<Radio />} label="Público" onClick={(select) => SetAcesso(true) } />
                                    <FormControlLabel value="privado" control={<Radio />} label="Privado" onClick={(select) => SetAcesso(false) }/>
                                </RadioGroup>
                            </FormControl>

                            <Link to={'/PaginaPublicacao'} >
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, color: "white" }}
                                    onClick={handleSubmit}
                                >
                                    Publicar
                                </Button>
                            </Link>
                        </Box>
                    </Container>
                </div>
            </div>

        </>
    )
}

export default NovaPublicacao