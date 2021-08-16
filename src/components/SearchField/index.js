import { Container } from "./styles";
import { BiSearchAlt2 } from "react-icons/bi"

const SearchField = ({...props}) => {
    return (
        <Container>
            <input {...props}></input>
            <BiSearchAlt2 className="icon" size={19}/>
        </Container>
    )
}

export default SearchField;
