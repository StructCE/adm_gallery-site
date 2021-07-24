import { Contaier } from "./styles"

const Button = ({children, style, onClick, props}) => {
    return (
        <Contaier>
            {children}
        </Contaier>
    )
}

export default Button