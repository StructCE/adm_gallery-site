import { ImageContainer } from './styles';
import { Link } from 'react-router-dom';

const CarouselImage = ({ imgUrl, title, id }) => {

  return (
      <ImageContainer>
        <img src={imgUrl} alt={title}/>
        <Link className="image-link" to={`/paintings/${id}`}>
          <p className="legend">{title}</p>
        </Link>
      </ImageContainer>
  )
}

export default CarouselImage;