
import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import PdfIcon from '../../midia/pdf-icon.png';
import BaixoImage from '../../midia/baixo.png';
import CasalImage from '../../midia/casal.png';


function PaginaPublicacao() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [publicacoesPerPage] = useState(4);

  const publicacoes = [
    { id: 1, titulo: 'Publicação 1' },
    { id: 2, titulo: 'Publicação 2' },
    { id: 3, titulo: 'Publicação 3' },
    { id: 4, titulo: 'Publicação 4' },
    { id: 5, titulo: 'Publicação 5' },
    { id: 6, titulo: 'Publicação 6' },
    { id: 7, titulo: 'Publicação 7' },
    { id: 8, titulo: 'Publicação 8' },
    { id: 9, titulo: 'Publicação 9' },
    { id: 10, titulo: 'Publicação 10' },
    { id: 11, titulo: 'Publicação 10' },
    { id: 12, titulo: 'Publicação 10' },
  ];

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

  return (
    <div>
      <h3 className="publicacoes-title">Publicações</h3>
      <h2 className="publicacoes-subtitle">Trabalhos e Pesquisas publicadas pela Casa de Saberes!</h2>
      <div className="search-container">
        <TextField
          label="Pesquisar"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          fullWidth
          className="search-input"
        />
      </div>

      <div
        className={`publicacoes-container ${showNoResults ? "no-results-message" : ""}`}
      >
        {currentPublicacoes.map((publicacao) => (
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
              <img src={BaixoImage} alt="Baixo" className="baixo-image" />
            </div>
          </div>
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

      <div className="casal-container">
        <img src={CasalImage} alt="Casal" className="casal-image" />
      </div>
    </div>
  );
}

export default PaginaPublicacao