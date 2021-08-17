import React from 'react'
import { LandingContainer, AboutUsContainer, RecommendationsContainer } from './styles';
import CreatorItem from '../../components/CreatorItem';
import CarouselSection from '../../components/CarouselSection';
import venus from '../../assets/HomePage/venus.png'
import gogh from '../../assets/HomePage/gogh.png'
import eliseu from '../../assets/HomePage/eliseu.png'
import mountains from '../../assets/HomePage/mountains.png'
import andre from '../../assets/HomePage/Andre.jpeg'
import david from '../../assets/HomePage/David.jpeg'
import nicolas from '../../assets/HomePage/Nicolas.jpeg'
import { api } from '../../services/api';
import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const HomePage = () => {

  const location = useLocation();

  const collectionRef = useRef(null);
  const [goToCollection] = useState(location.state?.toCollection);

  const scrollToCollection = () => collectionRef.current.scrollIntoView();

  const [reccomendations, setReccomendations] = useState([])

  const loadRecommendations = async () => {
    const response = await api.get('/api/v1/recommendations/');
    setReccomendations(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    loadRecommendations();
  }, [])

  useEffect(() => {
    if (goToCollection === true){
      scrollToCollection();
    }
  }, [goToCollection])

  return (
    <>
    <LandingContainer>
      <div className="row">
        <p className="title-text">ADM</p>
        <span className="quote-text">Não existe meio mais seguro para fugir do mundo do que a <i><b>arte</b></i>, e não há forma mais segura de se unir a ele do que a <i><b>arte</b></i>. <br /> <br /> <i>Johann Goethe</i></span>
      </div>
      <div className="row">
        <div className="landing-img">
          <img src={venus} alt='Venus' />
        </div>
        <p className="title-text gall-text">GALL</p>
      </div>
      <div className="row">
        <p className="title-text">ERY</p>
      </div>
    </LandingContainer>

    <AboutUsContainer>
      <div className="about-us-section">
        <div className="about-us-info">
          <p className="about-us-title">Sobre Nós</p>
          <span className="about-us-text">Criado por integrantes da diretoria Administrativa - Financeira da Struct, temos como objetivo a democratização do acesso à arte, fornecendo um pletora de diversas pinturas de diferentes décadas e artistas, junto com informações e curiosidades sobre as obras mais celebradas da história.</span>
        </div>
        <div className="about-us-img">
          <img src={gogh} alt='Van Gogh Self portrati' />
        </div>
      </div>
      <div className="creators-section">
        <p className="creators-title">Idealizadores</p>
        <div className="creators-profiles">
          <CreatorItem name="André Macedo" image={andre}/>
          <CreatorItem name="David Mendes" image={david}/>
          <CreatorItem name="Nícolas Paulin" image={nicolas}/>
        </div>
      </div>
      <div className="creators-img">
        <img src={eliseu} alt='Eliseu self portrait' />
      </div>
      <div className="bg-about-us">
        <img src={mountains} alt='line mountains' />
      </div>
    </AboutUsContainer>

    <RecommendationsContainer ref={collectionRef} >
      <CarouselSection reccomendations={reccomendations} />
    </RecommendationsContainer>
    </>
  )
}

export default HomePage;