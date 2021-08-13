import { Container } from './styles';

const CarouselButton = ({children, style, onClick, props}) => {
    return (
        <Container style={style} onClick={onClick} {...props}>
            {children}
        </Container>
    )
}

export default CarouselButton;