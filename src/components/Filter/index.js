import {FiFilter, FiX} from "react-icons/fi"
import {FaPlay} from "react-icons/fa"
import { Container, ArrowIcon } from "./styles"
import { useState, useEffect } from "react"
import { api } from "../../services/api"



const Filter = ({selectedFilter, setSelectedFilter}) => {

    const [selected, setSelected ] = useState(selectedFilter);
    const [showFilters, setShowFilters] = useState(false);
    const [filterOptions, setFilterOptions] = useState([]);

    
    const handleOpenFilters = () => {
        setShowFilters(!showFilters)
    }

    useEffect(() => {
        api.get('/api/v1/artists/index')
        .then((response) => {response.data.forEach(element => {
            setFilterOptions((filterOptions => [...filterOptions, element.name]))
        })})
    }, [])

    useEffect(() => {
        api.get('/api/v1/styles')
        .then((response) => {response.data.forEach(element => {
            setFilterOptions((filterOptions => [...filterOptions, element.title]))
        })})
    }, [])

    const handleSelected = (option) => {
        setSelected(option);
        setShowFilters(false);
        setSelectedFilter(option);
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
                                    {filterOptions.map((option, key) => {return(
                                        <li onClick={() => handleSelected(option)} key={key}>{option}</li>
                                    )})}
                                </ul>
                }
            </div>
        </Container>
    )
}

export default Filter
