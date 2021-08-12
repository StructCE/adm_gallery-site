import { Container } from './styles';
import CarouselButton from '../CarouselButton';
import CarouselNearButton from '../CarouselNearButton';
import { useEffect, useState } from 'react';
import api from '../../api/index';


const CarouselPage = ({reccomendations}) => {
  
  const [index, setIndex] = useState([])
  const size = reccomendations.length;
  const paintings_qtd = reccomendations[index]?.paintings.length;
  const title = reccomendations[index]?.title;
  const desc = reccomendations[index]?.description;
  const beforeIdx = index <= 0 ? size - 1 : index - 1
  const afterIdx = index < size - 1 ? index + 1 : 0
  const before = reccomendations[beforeIdx]?.title;
  const after = reccomendations[afterIdx]?.title;
  const middle_img_url = reccomendations[index]?.paintings[0].image_url
  const left_img_url = reccomendations[index]?.paintings[paintings_qtd - 1].image_url
  const right_img_url = reccomendations[index]?.paintings[1 < paintings_qtd - 1 ? 1 : 0].image_url

  const loadInitial = async () => {
    setIndex(0);
  }

  const nextSet = () => {
    setIndex(afterIdx);
  }

  const previousSet = () => {
    setIndex(beforeIdx);
  }

  useEffect(() => {
    loadInitial();
  }, [])

  return (
      <Container >
          <div>
              <p className="colletion-header">Nossas Coleções</p>
          </div>
          <div className="carousel-main">
            <div className="left-near">
              <CarouselNearButton onClick={previousSet} style={{right: '90%'}}> {before} </CarouselNearButton>
            </div>
            <CarouselButton onClick={previousSet}> &lt; </CarouselButton>
            <div className="collection-info">
              <p className="collection-title">{title}</p>
              <span className="collection-desc">{desc}</span>
            </div>
            <CarouselButton onClick={nextSet}> &gt; </CarouselButton>
            <div className="left-near">
              <CarouselNearButton onClick={nextSet} style={{left: '90%'}}> {after} </CarouselNearButton>
            </div>
          </div>
          <div className="collection-photos">
            <div className="left-img">
              <img src={`${api.defaults.baseURL + left_img_url}`} alt='From collection' />
            </div>
            <div className="middle-img">
              <img src={`${api.defaults.baseURL + middle_img_url}`} alt='From collection' />
            </div>
            <div className="right-img">
              <img src={`${api.defaults.baseURL + right_img_url}`} alt='From collection' />
            </div>
          </div>
      </Container>
  )
}

export default CarouselPage;