import { Container } from "./styles"

const RemoveButton = ({children, onClick, ...props}) => {
    return (
        <Container onClick={onClick} type='button' {...props}>
            {children}
        </Container>
    )
}

export default RemoveButton