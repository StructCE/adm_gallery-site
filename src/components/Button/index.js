import { Container } from "./styles"

const Button = ({children, onClick, props}) => {
    return (
        <Container onClick={onClick} {...props}>
            {children}
        </Container>
    )
}

export default Button