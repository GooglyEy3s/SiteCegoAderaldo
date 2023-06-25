import { useState } from "react"
import { Link } from "react-router-dom"

// HEADER
import Casa from "../../midia/logo Casa de saberes2.png"
import Usuario from "../../midia/usuario.png"
import Fonte from "./Fonte"
import contrat from "../../midia/contrast.png"


// // // IMAGE-SLIDER
import setaEsquerda from "../../midia/left-64.png"
import setaDireita from "../../midia/right-64.png"
import cegoAderaldo from "../../midia/CegoAderaldo.png"
import { SliderData } from "../../assets/ImageSlider2/SliderData"

// NOTICIAS
import { useEffect } from "react"
import { useRef } from "react"
import image from "../../midia//216151_right_chevron_icon.png"
import {AdminContext, AdminProvider} from "../Login_Contexto/ContextoLogin";
import { useContext } from "react"
import { Container, Box, Typography, TextField, Button } from "@mui/material"
import volta from "../../midia/volta2.png"
import { useNavigate } from "react-router-dom"


// FOOTER
import logoBranca from "../../midia/Logo Branca.png"
import Whatssap from "../../midia/zap.png"
import Facebook from "../../midia/face.png"
import Instagram from "../../midia/insta.png"
import axios from "axios";




const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

   


    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1); //Forma simples de se fazer uma expressão de condição sem precisar dizer explicitamente if e else
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1); //depois do ponto de interogação é como se fosse um "=" que defini o que vai acontecer com o current
    };

    if (!Array.isArray(slides) || slides.length <= 0) { //retornar nulo caso o image slider esteja vázio
        return null;
    }
    const bolinhaCreator = () => {
        let bolinhas = []
        for(let i = 0; i<length; i++){
            bolinhas.push(<div className={i === current ? 'bolinha active' : 'bolinha'} ></div>)
        }
        return (bolinhas)
    }

    
    return (
        <div className="image-slider">
            <div className="pra-traz"><img src={setaEsquerda} alt="Slide anterior do carrosel de imagens" height="40px" onClick={prevSlide} /></div>
            <div className="pra-frente"><img src={setaDireita} alt="Próximo slide do carrosel de imagens" height="40px" onClick={nextSlide} /></div>
            <div className="bolinhas">
                {bolinhaCreator()}
            </div>
            
            {SliderData.map((slide, index) => {
                return (
                    <>
                        
                        <div className={index === current ? 'slide  conteudo active' : 'slide conteudo '}
                                key={index}>
                            <div
                                className={index === current ? 'slide active' : 'slide'}
                                key={index}
                            >

                                {index === current && (
                                    <img src={slide.image} alt='Imagem do carrosel de imagens' className='image' />
                                )}
                            </div>
                            <div className={index === current ? 'slide texto active' : 'slide texto'}
                                key={index}>
                                <h1 className="content">{slide.titulo}</h1>
                                <p>{slide.descrisao}</p>
                            </div>
                        </div>
                    </>            
                   
                );
            })}
        </div>
    );
};

const Header = () => {
    return (
        <div className="header">
            <div className="barra-header">
                <div className="functions">
                    <Fonte />
                    <img className="contraste" src={contrat} alt="Botão Contraste" />
                </div>
            </div>
            <div className="header-content">
                <Link to={'/'}><img src={Casa} alt="Página inicial" style={{ width: "25%" }} /></Link>
                <div className="header-functions">
                    <Link to={'/PaginaPublicacao'}><a > Calendario de Eventos</a></Link>
                    <Link to={'/PaginaPublicacao'}><a > Noticias e Oportunidade</a></Link>
                    <Link to={'/PaginaPublicacao'}><a > Publicações</a></Link>
                    <Link to={'/pesquisas'}><a > Pesquisas</a></Link>
                    
                    <Link className="user-icon" to={'/Login'}>
                        <img  src={Usuario} alt="Login" />
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

const SobreNos = () => {
    return (
        <div className="sobrenos">
            <div className="conteudo">
                <img src={cegoAderaldo} alt="Imagem do cego aderaldo junto com xilogravuras" />
                <div className="texto">
                    <h4>Casa de saberes</h4>
                    <h1>Sobre nós </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia aut expedita veritatis ea optio pariatur itaque, obcaecati excepturi officiis. Hic dolor iste minus provident dolores deleniti, maxime quaerat velit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia aut expedita veritatis ea optio pariatur itaque, obcaecati excepturi officiis. Hic dolor iste minus provident dolores deleniti, maxime quaerat velit?</p>

                </div>
            </div>
        </div>
    )
}

const Noticias = () => {
    const { isAdmin, setIsAdmin } = useContext(AdminContext);
    const [data, setData] = useState([]);
    const carousel = useRef(null);
    const navigate = useNavigate()
    const [nomeNoticia,SetNNoticia] = useState('')
    const [linkNoticia,SetLinkNoticia] = useState('')
    const [linkImg,SetLinkImg] = useState('')
    const [mudou, setMudou] = useState(false)
    const [classe, SetClasse] = useState('overlayNoticias')

  
    useEffect(
        () => {
            axios.get("http://localhost:3001/noticias/listar")
                .then(
                    (response) => {
                        setData(response.data)
                    }
                )
                .catch(error => console.log(error))
        }
        ,
        []
      )

      useEffect(
        () => {
            axios.get("http://localhost:3001/noticias/listar")
                .then(
                    (response) => {
                        setData(response.data)
                    }
                )
                .catch(error => console.log(error))
        }
        ,
        [mudou]
      )
    
  
    const handleLeftClick = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };
  
    const handleRightClick = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    };
  
    if (!data || !data.length) return null;

    
   
  
    const MontarNoticia = () =>{
        SetClasse('overlayNoticias')
        const novoTrabalho = {  name:nomeNoticia, link:linkNoticia,image:linkImg}
        axios.post("http://localhost:3001/noticias/adicionar", novoTrabalho)
      .then(
        (response) => {
          alert(`Trabalho: ${response.data.nome} adicionado!`)
          
          setMudou(!mudou)
        }
      )
      .catch(error => console.log(error))
    }
    return (
      <div className="bloco-calendario1">
        <div className={classe}>
            <div className="noticiasContainer">
                <div className="titulo">
                    <img src={volta} alt="" onClick={() => SetClasse('overlayNoticias')} /> 
                    <h1>Nova Noticia</h1>
                </div>
                    <Container maxWidth="sm" sx={{marginLeft:"10%"}}>
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
                                label="Nome da Notícia"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={(x)=> {SetNNoticia(x.target.value)}}

                                
                            />
                            <TextField
                                margin="normal"
                                fullWidth
                                name="senha"
                                label="Insira o link da noticia"
                                id="senha"
                                onChange={(x)=> {SetLinkNoticia(x.target.value)}}
                                
                            />
                             <TextField
                                margin="normal"
                                fullWidth
                                name="senha"
                                label="Insira o link da imagem da noticia"
                                id="senha"
                                onChange={(x)=> {SetLinkImg(x.target.value)}}
                                
                            />
                            { }
                            
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, color: "white"}}
                                    onClick={MontarNoticia}
                                    
                                >
                                    Criar Noticia
                                </Button>
                           
                        </Box>
                    </Container>
            </div>
        </div>
        <div className="header-pesquisas">
            <div className="cabecalho">
                <h1 className="titulo"> Pesquisas</h1>
                <p className="subtitulo">Nós ajude a entender você da melhor forma!</p>
            </div>
            {isAdmin? (<div className="botao" onClick={() => SetClasse('overlayNoticias active')}><p>+ Adicionar Noticia </p></div>):(null)}
        </div>
  
        <div className="container">
          {/* <div className="blur"></div> */}
          <div className="carousel" ref={carousel}>
            {data.map((item) => {
              const { id, name, price, oldPrice, image, link } = item;
              return (
                <a href={link} className="item" key={id}>
                  <div className="image">
                    <div className="filtroVermelho" id="grad1">
                        <h1>{item.name}</h1>
                    </div>
                    <img src={image} alt={name} />
                  </div>
                </a>
              );
            })}
          </div>
          <div className="buttons">
            <button onClick={handleLeftClick}>
              <img src={image} />
            </button>
            <button onClick={handleRightClick}>
              <img src={image} alt="Scroll Right" />
            </button>
          </div>
        </div>
      </div>
    );
  };

const Footer = () => {
    return (
        <>
            <div class="wrapper">
                <div class="push"></div>
            </div>
            <div className="cor">
                <div className="rodape">
                    <div className="logo">
                        <img src={logoBranca} alt="Logo da casa de saberes branca" />
                    </div>
                    <div className="sessoes">
                        <div className="incio">
                            <h1>Inicio</h1>
                            <a href="">Calendário de eventos</a>
                            <a href="">Notícias</a>
                            <a href="">Publicações</a>
                        </div>
                        <div className="incio">
                            <h1>Sobre Nós</h1>
                            <a href="">Quem somos?</a>
                            <a href="">Qual a nossa missão</a>
                            <a href="">Participe!</a>
                        </div>
                        <div className="incio">
                            <h1>Fale conosco</h1>
                            <a href="">FAQ</a>
                            <a href="">Telefone</a>
                            <a href="">Chats</a>
                        </div>
                    </div>
                    <div className="contatos">
                        <h1>Redes Sociais </h1>
                        <div>
                            <img src={Whatssap} alt="Ícone Whattsap" />
                            <img src={Instagram} alt="Ícone Instagram" />
                            <img src={Facebook} alt="Ícone do Facebook" />
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export { Header,Footer, ImageSlider, SobreNos, Noticias}