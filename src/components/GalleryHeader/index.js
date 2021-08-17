import { Container } from "./styles";
import {ReactComponent as Line} from "../../assets/line.svg"
import {BsBrush} from "react-icons/bs"

const GalleryHeader = ({title}) => {
    return (
        <Container>
            <h1>{title}</h1>
            <Line className="line"/>
            <BsBrush className="icon" size="36"/>
        </Container>
    )
}

export default GalleryHeader;
