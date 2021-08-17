import { Container } from "./styles"

const PlusButton = ({children, onClick, props}) => {
    return (
        <Container onClick={onClick} type='button' {...props}>
            {children}
        </Container>
    )
}

export default PlusButton