import { Container } from "./styles"

const FormsButton = ({children, onClick, props}) => {
    return (
        <Container onClick={onClick} {...props}>
            {children}
        </Container>
    )
}

export default FormsButton