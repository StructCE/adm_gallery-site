import { Container, Frame, Plate } from './styles';
import { GiBookmarklet } from 'react-icons/gi';
import { IoIosColorPalette } from 'react-icons/io';
import { useHistory } from "react-router-dom";

const FramedArtist = ({image, title, id}) => {

    const history = useHistory()

    const handleClickAbout = () => {
        history.push({
          pathname: `/artist/${id}`
        })
    }

    const handleClickPaintings = () => {
        history.push({
          pathname: '/paintings',
          state: {
            selectedFilter: `${title}`,
          },
        })
    }

    return(
        <Container>
            <Frame>
                <img src={image} alt="Painting"/>
            </Frame>
            <Plate>
                <h2>{title}</h2>
                <div>
                    <span onClick={handleClickAbout}>
                        <GiBookmarklet className="icon"/> 
                        Sobre
                    </span>
                    <span onClick={handleClickPaintings}>
                        Obras
                        <IoIosColorPalette />
                    </span>
                </div>
            </Plate>
        </Container>
    )
}

export default FramedArtist;