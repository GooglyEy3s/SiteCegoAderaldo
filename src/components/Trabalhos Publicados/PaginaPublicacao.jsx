
import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import PdfIcon from '../../midia/pdf-icon.png';
import lixo from "../../midia/lixo.png";
import pesquisa from "../../midia/pesquisa.png";

import { useContext } from "react"
import { AdminContext, AdminProvider } from "../Login_Contexto/ContextoLogin";
import { Link } from 'react-router-dom';

import { publicacoes2 } from '../CriarPublicacao/publicacoes';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



function PaginaPublicacao() {

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [publicacoesPerPage] = useState(4);

  const { isAdmin, setIsAdmin } = useContext(AdminContext);

  // const [publicacoes, setPublicacoes] = useState([


  //   { id: 11, titulo: 'Artigo Casa Saberes' },
  //   { id: 12, titulo: 'Publicação 10' }

  // ])


  const [publicacoes, setTrabalhos] = useState([])
  const [mudou, setMudou] = useState(false)
  const navigate = useNavigate()

  useEffect(
    () => {
      axios.get("http://localhost:3001/trabalhos/listar")
        .then(
          (response) => {
            console.log(mudou)
            setTrabalhos(response.data)
          }
        )
        .catch(error => console.log(error))
    }
    ,
    []
  )
  useEffect(
    () => {
      axios.get("http://localhost:3001/trabalhos/listar")
        .then(
          (response) => {
            console.log(mudou)
            setTrabalhos(response.data)
          }
        )
        .catch(error => console.log(error))
    }
    ,
    [mudou]
  )

  function deleteTrabalho(id) {
    if (window.confirm("Deseja Excluir? " + id)) {
      axios.delete(`http://localhost:3001/trabalhos/delete/${id}`)
        .then(
          (response) => {
            deleteTeste(id)
            setMudou(!mudou)
          }
        )
        .catch(error => console.log(error))
    }
  }

  function deleteTeste(id) {
    for (let i = 0; i < publicacoes.length; i++) {
      if (publicacoes[i].id == id) {
        publicacoes.splice(i, 1);
        return true;
      }
    }
    return false
  }



  // setPublicacoes(publicacoes2)

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const filteredPublicacoes = publicacoes.filter((publicacao) =>
    publicacao.titulo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const hasResults = filteredPublicacoes.length > 0;
  const showNoResults = searchQuery.length > 0 && !hasResults;

  const indexOfLastPublicacao = currentPage * publicacoesPerPage;
  const indexOfFirstPublicacao = indexOfLastPublicacao - publicacoesPerPage;
  const currentPublicacoes = filteredPublicacoes.slice(indexOfFirstPublicacao, indexOfLastPublicacao);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredPublicacoes.length / publicacoesPerPage); i++) {
    pageNumbers.push(i);
  }
  // const deletePublicacao = (id) =>{
  //   const updatedPublicacoes = publicacoes.filter((publicacao) => publicacao.id !== id);
  //   setTrabalhos(updatedPublicacoes);
  // };



  return (
    <div className='todaspublicacoes'>
      <div className="cabecalho">
        <h1 className="titulo"> Publicações</h1>
        <p className="subtitulo">Trabalhos e Pesquisas publicadas pela Casa de Saberes!</p>
      </div>

      <div className="search-container">
        <img src={pesquisa} alt="Lupa de pesquisa ilustrada" />
        <TextField
          label="Pesquisar"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          fullWidth
          className="search-input"
        />
        <div class="botao-postar"><h1>+</h1> Nova Publicação</div>
        <Link to={'/novaPublicacao'}>
          <div className={isAdmin === true ? 'botao-postar active' : 'botao-postar '}><h1>+</h1> Nova Publicação</div>
        </Link>

      </div>

      <div
        className={`publicacoes-container ${showNoResults ? "no-results-message" : ""}`}
      >
        {currentPublicacoes.map((publicacao) => (
          <>

          
              {isAdmin ? (
                <div key={publicacao.id} className="publicacao-item">
                  <div className="publicacao-item-content">
                    <a href="#" className="publicacao-link">
                      <img src={PdfIcon} alt="Ícone PDF" className="pdf-icon" />
                    </a>
                    <h3>
                      <a href="#" className="publicacao-link">
                        {publicacao.titulo}
                      </a>
                    </h3>
                    {/* <img src={BaixoImage} alt="Baixo" className="baixo-image" /> */}
                    <Button
                      variant="contained"

                      onClick={() => deleteTrabalho(publicacao._id)}
                    >
                      <img src={lixo} alt="ícone de lixeira para excluir trabalho selecionado" />
                    </Button>
                  </div> 
                </div>
            ) : (
              publicacao.publico == true ?(
                <div key={publicacao.id} className="publicacao-item">
                    <div className="publicacao-item-content">
                    <a href="#" className="publicacao-link">
                      <img src={PdfIcon} alt="Ícone PDF" className="pdf-icon" />
                    </a>
                    <h3>
                      <a href="#" className="publicacao-link">
                        {publicacao.titulo}
                      </a>
                    </h3>
                    {/* <img src={BaixoImage} alt="Baixo" className="baixo-image" /> */}
                  </div>
                </div>
                
              ) : null
            )}
           
          
          </>
          
        ))}
        {showNoResults && (
          <div className="no-results-text">
            Nenhum resultado encontrado para a pesquisa: {searchQuery}
          </div>
        )}
      </div>

      <div className="pagination">
        {pageNumbers.map((number) => (
          <Button
            key={number}
            variant="contained"
            color={number === currentPage ? 'secondary' : 'default'}
            onClick={() => paginate(number)}
          >
            {number}
          </Button>
        ))}
      </div>

      {/* <div className="casal-container">
        <img src={CasalImage} alt="Casal" className="casal-image" />
      </div> */}
    </div>
  );
}

export default PaginaPublicacao