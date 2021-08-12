// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';
// import { withNavigationHandlers } from "react-awesome-slider/dist/navigation";
// import CarouselPage from '../../components/CarouselPage';

// // Wrapp the AwesomeSlider component with the navigationHandlers
// const NavigationSlider = withNavigationHandlers(AwesomeSlider);

// // Create an AwesomeSlider instance with some content
// const RecommendationCarousel = () => {
//   return (
//     <NavigationSlider
//       className="awesome-slider"
//       media={[
//         {
//           slug: "page-one",
//           className: "page-one",
//           children: () => <CarouselPage title="Natureza Morta" desc="A natureza morta é um gênero artístico Que tem como ponto principal a representação de objetos estáticos e inanimados, comuns do cotidiano, como frutas, flores, louças, instrumentos musicais, livros, utensílios domésticos, entre outros."/>
//         },
//         {
//           slug: "page-two",
//           className: "page-two",
//           children: () => <CarouselPage title="Anos 80" desc="A natureza morta é um gênero artístico Que tem como ponto principal a representação de objetos estáticos e inanimados, comuns do cotidiano, como frutas, flores, louças, instrumentos musicais, livros, utensílios domésticos, entre outros."/>
//         }
//       ]}
//     />
//    )
// };

// export default RecommendationCarousel;

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselPage from '../../components/CarouselPage';
import {Container} from './styles';

export default function RecommendationCarousel() {
  return (
      <Container className="carousel-wrapper">
          <Carousel showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop={true} dynamicHeight={true} >
          <CarouselPage title="Natureza Morta" desc="A natureza morta é um gênero artístico Que tem como ponto principal a representação de objetos estáticos e inanimados, comuns do cotidiano, como frutas, flores, louças, instrumentos musicais, livros, utensílios domésticos, entre outros."/>
          <CarouselPage title="Natureza Morta" desc="A natureza morta é um gênero artístico Que tem como ponto principal a representação de objetos estáticos e inanimados, comuns do cotidiano, como frutas, flores, louças, instrumentos musicais, livros, utensílios domésticos, entre outros."/>
          <CarouselPage title="Natureza Morta" desc="A natureza morta é um gênero artístico Que tem como ponto principal a representação de objetos estáticos e inanimados, comuns do cotidiano, como frutas, flores, louças, instrumentos musicais, livros, utensílios domésticos, entre outros."/>
          </Carousel>
      </Container>
  );
}