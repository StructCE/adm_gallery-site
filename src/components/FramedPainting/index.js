import { Container, Frame, Plate } from './styles';
import { GiBookmarklet } from 'react-icons/gi';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';
import { useState } from 'react'; 
import { useHistory } from 'react-router-dom';

const FramedPainting = ({image, title, artist, id}) => {

    let history = useHistory()

    const [favorite, setFavorite] = useState(false);
    const handleFavoriteClick = () => {
        setFavorite(!favorite)
    }

    return(
        <Container>
            
            <Frame>
                <img onClick={() => history.push(`/paintings/${id}`)} src={image} alt="Painting"/>
            </Frame>
            <Plate>
                <h2>{title}</h2>
                <h4>{artist}</h4>
                <div>
                    <span onClick={() => history.push(`/paintings/${id}`)}>
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