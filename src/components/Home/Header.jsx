// HEADER
import Casa from "../../midia/logo Casa de saberes.png"
import Usuario from "../../midia/usuario.png"

// IMAGE-SLIDER
import setaEsquerda from "../../midia/left-64.png"
import setaDireita from "../../midia/right-64.png"
import slide1 from "../../midia/slide1.png"
import cegoAderaldo from "../../midia/CegoAderaldo.png"

// FOOTER
import logoBranca from "../../midia/Logo Branca.png"
import Whatssap from "../../midia/zap.png"
import Facebook from "../../midia/face.png"
import Instagram from "../../midia/insta.png"



const Header = () => {
    return (
        <div className="header">
            <div className="barra-header"></div>
            <div className="header-content">
                <a href="Pagina_Inicial.html"><img src={Casa} alt="" style={{ width: "150px" }} /></a>
                <div className="header-functions">
                    <a href="trabalhosPublicos/Trabalhos_Publicos.html">Publicações</a>
                    <a href="">Noticias e Oportunidades</a>
                    <a href="">Calendário de Eventos</a>
                    <img src={Usuario} alt="" />
                </div>
            </div>
        </div>
    )
}

const ImageSlider = () => {
    return (
        <div className="image-slider">
            <div className="pra-traz"><img src={setaEsquerda} alt="" style={{ width: "40px" }} /></div>
            <div className="pra-frente"><img src={setaDireita} alt="" style={{ width: "40px" }} /></div>
            <div className="bolinhas"></div>
            <div className="slides">
                <div className="slide1 slide  active">
                    <div className="conteudo">
                        <img src={slide1} alt="" />
                        <div className="texto">
                            <h1>Primeiro Slide </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia aut expedita veritatis ea optio pariatur itaque, obcaecati excepturi officiis. Hic dolor iste minus provident dolores deleniti, maxime quaerat velit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia aut expedita veritatis ea optio pariatur itaque, obcaecati excepturi officiis. Hic dolor iste minus provident dolores deleniti, maxime quaerat velit?</p>
                        </div>
                    </div>
                </div>
                <div className="slide2 slide conteudo  ">
                    <div className="texto">
                        <h1>Segundo Slide </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia aut expedita veritatis ea optio pariatur itaque, obcaecati excepturi officiis. Hic dolor iste minus provident dolores deleniti, maxime quaerat velit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia aut expedita veritatis ea optio pariatur itaque, obcaecati excepturi officiis. Hic dolor iste minus provident dolores deleniti, maxime quaerat velit?</p>
                    </div>
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
                <img src= {logoBranca} alt="" />
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
                    <img src= {Whatssap} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Facebook} alt="" />   
                </div>
            </div>
        </div>
        </>
    )
}

export {Header, ImageSlider, SobreNos, Footer}