import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Container } from './styles';
import { useState } from 'react';
import CarouselButton from '../CarouselButton';
import CarouselNearButton from '../CarouselNearButton';
import CarouselImage from '../CarouselImage';
import { api } from '../../services/api';
import Modal from '../Modal';
import blank from '../../assets/blank_canvas.jpeg'


const CarouselSection = ({reccomendations}) => {
  
  // Indexes and size
  const [index, setIndex] = useState(0)
  const size = reccomendations.length;
  const nextIdx = index <= 0 ? size - 1 : index - 1
  const previousIdx = index < size - 1 ? index + 1 : 0

  const paintings_qtd = reccomendations[index]?.paintings.length;
  const title = reccomendations[index]?.title;
  const desc = reccomendations[index]?.description;
  const before = reccomendations[nextIdx]?.title;
  const after = reccomendations[previousIdx]?.title;
  const middle_img_url = reccomendations[index]?.paintings[0]?.image_url
  const left_img_url = reccomendations[index]?.paintings[paintings_qtd - 1]?.image_url
  const right_img_url = reccomendations[index]?.paintings[0 < paintings_qtd - 1 ? 1 : 0]?.image_url

  // Full page carousel controllers
  const nextSet = () => {
    setIndex(nextIdx);
    console.log(left_img_url)
  }

  const previousSet = () => {
    setIndex(previousIdx);
  }

  // Modal Controllers
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
      <Container>
          <Modal showModal={showModal} setShowModal={setShowModal}> 
            <Carousel className="painting-carousel" dynamicHeight={true} showStatus={false} infiniteLoop={true} useKeyboardArrows={true} swipeable={true} >
                {reccomendations[index]?.paintings.map(
                  painting => <CarouselImage key={painting.id} title={painting.name} imgUrl={`${api.defaults.baseURL + painting.image_url}`}/>
                )}
            </Carousel>
          </Modal>
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
              <img onClick={openModal} src={typeof(left_img_url) != "undefined" ? `${api.defaults.baseURL + left_img_url}` : blank} alt='From collection' />
            </div>
            <div className="middle-img">
              <img onClick={openModal} src={typeof(middle_img_url) != "undefined" ? `${api.defaults.baseURL + middle_img_url}` : blank} alt='From collection' />
            </div>
            <div className="right-img">
              <img onClick={openModal} src={typeof(right_img_url) != "undefined" ? `${api.defaults.baseURL + right_img_url}` : blank} alt='From collection' />
            </div>
          </div>
      </Container>
  )
}

export default CarouselSection;