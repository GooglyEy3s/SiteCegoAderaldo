import { useState } from "react"
import { Link } from "react-router-dom"

//CALENDARIO
import Calendar from "./Calendar"

// HEADER
import Casa from "../../midia/logo Casa de saberes.png"
import Usuario from "../../midia/usuario.png"


// // // IMAGE-SLIDER
import setaEsquerda from "../../midia/left-64.png"
import setaDireita from "../../midia/right-64.png"
import cegoAderaldo from "../../midia/CegoAderaldo.png"
import { SliderData } from "../../assets/ImageSlider2/SliderData"

// FOOTER
import logoBranca from "../../midia/Logo Branca.png"
import Whatssap from "../../midia/zap.png"
import Facebook from "../../midia/face.png"
import Instagram from "../../midia/insta.png"
// import { useState } from "react"


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
            <div className="pra-traz"><img src={setaEsquerda} alt="" height="40px" onClick={prevSlide} /></div>
            <div className="pra-frente"><img src={setaDireita} alt="" height="40px" onClick={nextSlide} /></div>
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
                                    <img src={slide.image} alt='travel image' className='image' />
                                )}
                            </div>
                            <div className={index === current ? 'slide texto active' : 'slide texto'}
                                key={index}>
                                <h1>{slide.titulo}</h1>
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
            <div className="barra-header"></div>
            <div className="header-content">
                <Link to={'/'}><img src={Casa} alt="" style={{ width: "150px" }} /></Link>
                <div className="header-functions">
                    <a href="trabalhoPublico"> Publicações</a>
                    <a href="trabalhoPublico">Noticias e Oportunidades</a>
                    <a href="">Calendário de Eventos</a>
                    <Link to={'/PaginaPublicacao'}>
                        <img src={Usuario} alt="" />
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
                <img src={cegoAderaldo} alt="" />
                <div className="texto">
                    <h4>Casa de saberes</h4>
                    <h1>Sobre nós </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia aut expedita veritatis ea optio pariatur itaque, obcaecati excepturi officiis. Hic dolor iste minus provident dolores deleniti, maxime quaerat velit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia aut expedita veritatis ea optio pariatur itaque, obcaecati excepturi officiis. Hic dolor iste minus provident dolores deleniti, maxime quaerat velit?</p>

                </div>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <>
            <div class="wrapper">
                <div class="push"></div>
            </div>
            <div className="rodape">
                <div className="logo">
                    <img src={logoBranca} alt="" />
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
                        <img src={Whatssap} alt="" />
                        <img src={Instagram} alt="" />
                        <img src={Facebook} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export { Header,Footer, ImageSlider, SobreNos}