import { ImageContainer } from './styles';

const CarouselImage = ({ imgUrl, title }) => {
  return (
      <ImageContainer>
        <img src={imgUrl} alt={title}/>
        <p className="legend">{title}</p>
      </ImageContainer>
  )
}

export default CarouselImage;