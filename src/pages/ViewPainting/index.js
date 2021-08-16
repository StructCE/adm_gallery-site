import { HiOutlineHeart, HiHeart } from 'react-icons/hi';
import { useState } from 'react'; 
import { IoIosArrowDown } from 'react-icons/io'
import { FirstScreen, SecondScreen } from './styles';
import Guernica from '../../assets/guernica.jpg'
import Monalisa from '../../assets/monalisa.jpg'
import Button from '../../components/Button'
import Arrow from '../../assets/arrow-icon.png'


const ViewPainting = () => {

    const [favorite, setFavorite] = useState(false);
    const handleFavoriteClick = () => {
        setFavorite(!favorite)
    }

    return (
        <>
            <FirstScreen>
                <h1>A noite Estrelada</h1>
                <h3 className="year">1889</h3>
                <div className="the-painting">
                    <div className="image-container">
                        <img alt="painting" src={Guernica}/>
                    </div>
                    <div className="about">
                        <h3>Pós Impressionismo</h3>
                        <h3>Van Ghogh</h3>
                        <p>Adicione essa obra à sua coleção 
                            <span onClick={() => handleFavoriteClick()}>
                                {favorite ? <HiHeart className="icon" color="#6F1D1B"/> : <HiOutlineHeart className="icon"/> }
                            </span>
                        </p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="previous">
                        <img src={Arrow} alt="Anterior"/>
                        <p>Anterior na Categoria</p>
                    </div>
                    <h5>
                        Leia sobre
                        <IoIosArrowDown/>
                    </h5>
                    <div className="next">
                        <p>Próximo na Categoria</p>
                        <img src={Arrow} alt="Próximo"/>
                    </div>
                </div>
            </FirstScreen>
            <SecondScreen>
                <div className="top">
                    <div className="left">
                        <div className="image-container">
                            <img alt="artista" src={Monalisa}/>
                        </div>
                        <p>Noite estrelada foi pintada por van Ghogh em 1889</p>
                        <div className="artist-btn">
                            <Button className="a">+ Conheça o Artista</Button>
                        </div>
                    </div>
                    <div className="right">
                        <p>
                            Vincent van Gogh pintou esta tela quando estava no hospício de Saint-Rémy-de-Provence,
                            onde se internou voluntariamente em 1889. Van Gogh teve uma vida emocional conturbada,
                            sofrendo de depressão e surtos psicóticos.
                        </p>
                        <span>Atualmente a obra está localizada no museu de Arte moderna</span>
                        <div className="image-container">
                            <img src={Guernica} alt="estilo"/>
                        </div>
                    </div>
                </div>
                <div className="about-style">
                    <p>
                        Os pós-impressionistas valorizavam a expressão do lado subjetivo, humano,
                        emocional e sentimental. Em resumo, os artistas que compõem o pós-impressionismo
                    </p>
                </div>
                <div className="bottom">
                    <div className="previous">
                        <img src={Arrow} alt="Anterior"/>
                        <p>Anterior na Categoria</p>
                    </div>
                    <div className="next">
                        <p>Próximo na Categoria</p>
                        <img src={Arrow} alt="Próximo"/>
                    </div>
                </div>
            </SecondScreen>
        </>
    )
}

export default ViewPainting
