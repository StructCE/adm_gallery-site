import { HiOutlineHeart, HiHeart } from 'react-icons/hi';
import { useState } from 'react'; 
import { IoIosArrowDown } from 'react-icons/io'
import { FirstScreen, SecondScreen } from './styles';
import Guernica from '../../assets/guernica.jpg'
import Monalisa from '../../assets/monalisa.jpg'


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
                        <img src={Guernica}/>
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
                <h5>
                    Leia sobre
                    <IoIosArrowDown/>
                </h5>
            </FirstScreen>
            <SecondScreen>
                <div className="artist">
                    <img/>
                    <p>Noite estrelada foi pintada por van Ghogh em 1889</p>
                </div>
            </SecondScreen>
        </>
    )
}

export default ViewPainting
