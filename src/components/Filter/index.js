import {FiFilter, FiX} from "react-icons/fi"
import {FaPlay} from "react-icons/fa"
import { Container, ArrowIcon } from "./styles"
import { useState } from "react"

const Filter = () => {
    const [selected, setSelected ] = useState(null);
    const [showFilters, setShowFilters] = useState(false);
    
    const handleOpenFilters = () => {
        setShowFilters(!showFilters)
    }

    const handleSelected = (option) => {
        setSelected(option);
        setShowFilters(false);
    }

    var selectedClassName = showFilters ? 'selected selected-and-list' : 'selected' ;

    return (
        <Container>
            <FiFilter/>
            <h4>Filtrar por</h4>
            <div className="select-filter">
                <div className={selectedClassName}>
                    {!!selected && <FiX style={{cursor: "pointer"}} onClick={() => handleSelected(null)}/>}
                    {!!selected ? <h5>{selected}</h5> : <h5>Todas as obras</h5>}
                    <ArrowIcon onClick={() => handleOpenFilters()}>
                        { showFilters ? <FaPlay size="11" className="arrow rotated-arrow"/> : <FaPlay size="11"className="arrow"/> }
                    </ArrowIcon>
                </div>
                { 
                showFilters && <ul className="options">
                                    <li onClick={() => handleSelected("Filtro 1")}>Filtro 1</li>
                                    <li onClick={() => handleSelected("Filtro 2")}>Filtro 2</li>
                                    <li onClick={() => handleSelected("Filtro 4")}>FIltro 4</li>
                                    <li onClick={() => handleSelected("Filtro 3")}>Filtro 3</li>
                                    <li onClick={() => handleSelected("Filtro 5")}>Filtro 5</li>
                                    <li onClick={() => handleSelected("Filtro 6")}>Filtro 6</li>
                                </ul>
                }
            </div>
        </Container>
    )
}

export default Filter
