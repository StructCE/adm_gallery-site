import { Container, Frame, Plate } from './styles';
import { GiBookmarklet } from 'react-icons/gi';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';
import { useState } from 'react'; 

const FramedPainting = ({image, title, artist}) => {

    const [favorite, setFavorite] = useState(false);
    const handleFavoriteClick = () => {
        setFavorite(!favorite)
    }

    return(
        <Container>
            <Frame>
                <img src={image} alt="Painting"/>
            </Frame>
            <Plate>
                <h2>{title}</h2>
                <h4>{artist}</h4>
                <div>
                    <span>
                        <GiBookmarklet className="icon"/> 
                        About
                    </span>
                    <span onClick={() => handleFavoriteClick()}>
                        Gostei
                            {favorite ? <HiHeart className="icon favorite" color="#6F1D1B"/> : <HiOutlineHeart className="icon notFavorite"/> }
                    </span>
                </div>
            </Plate>
        </Container>
    )
}

export default FramedPainting;