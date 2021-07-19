import { Container } from "./styles";
import {ReactComponent as Line} from "../../assets/line.svg"
import {BsBrush} from "react-icons/bs"

const PaintingsHeader = () => {
    return (
        <Container>
            <h1>Bem vindo à nossa galeria!</h1>
            <Line className="line"/>
            <BsBrush className="icon" size="36"/>
        </Container>
    )
}

export default PaintingsHeader;
