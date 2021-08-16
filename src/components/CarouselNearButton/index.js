import { Container } from './styles';

const CarouselNearButton = ({children, style, onClick, props}) => {
    return (
        <Container style={style} onClick={onClick} {...props}>
            {children}
        </Container>
    )
}

export default CarouselNearButton;