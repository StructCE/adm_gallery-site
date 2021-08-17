import { Container, Frame, Plate } from './styles';
import { GiBookmarklet } from 'react-icons/gi';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';
import { useState, useEffect } from 'react'; 
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../../contexts/useUserContext';
import { api } from '../../services/api';

const FramedPainting = ({image, title, artist, id}) => {

    let history = useHistory()
    const { user, library } = useUserContext();

    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        if (library)
            library.painting_ids.forEach(element => {
                if (element === id)
                    setFavorite(true)
            });
    }, [library, id])

    const handleFavoriteClick = async (paintingId) => {
        if (!user) {
            alert("Logue para poder criar a sua galeria!");
            return;
        }
        setFavorite(!favorite);
        if (!!library){
            let method = "add";
            if(favorite)
                method = "remove";
            try {
                await api.patch(`/api/v1/library/${method}_paintings`, {
                    painting_ids: [paintingId]
                })
            }catch(e){
                alert(e)
            }
        }else 
            alert("Você ainda não possui uma biblioteca :(")
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
                    <span onClick={() => handleFavoriteClick(id)}>
                        Gostei
                            {favorite ? <HiHeart className="icon favorite" color="#6F1D1B"/> : <HiOutlineHeart className="icon notFavorite"/> }
                    </span>
                </div>
                {console.log(user)}
            </Plate>
        </Container>
    )
}

export default FramedPainting;