import FramedPainting from "../../components/FramedPainting"
import placeholder from '../../assets/placeholder.png'
import { Container, PaintingsPage, Paintings, Line } from "./styles";
import GalleryHeader from "../../components/GalleryHeader";
import SearchField from "../../components/SearchField";
import Filter from "../../components/Filter";
import PlusButton from "../../components/PlusButton";
import PaintingsForms from "../../components/PaintingCreate"
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useUserContext } from "../../contexts/useUserContext"

const PaintingExhibition = () => {

    const location = useLocation();

    const {user} = useUserContext()

    const [paintings, setPaintings] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState(location.state?.selectedFilter);
    const [filteredPaintings, setFilteredPaintings] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [searchedPaintings, setSearchedPaintings] = useState([]);

    useEffect(() =>{
        api.get('/api/v1/paintings/index')
        .then((response) => {
            setPaintings(response.data);
            setFilteredPaintings(response.data);
        })
    }, [])

    useEffect(() => {
        const filterPaintings = (selected) => {
            selected ? setFilteredPaintings(paintings.filter(
                item => (item.style_name === selected || item.artist_name === selected
            ))) : setFilteredPaintings(paintings)
        }
        filterPaintings(selectedFilter);
    }, [selectedFilter, paintings])

    useEffect(() => {
        const findPaintings = (searchInput) => {
            let foundPaintings = []
            filteredPaintings.forEach((painting) => {
                if (painting.name.toUpperCase().indexOf(searchInput.toUpperCase()) > -1)
                    foundPaintings.push(painting)
                else
                    foundPaintings = foundPaintings.filter((value) => {
                        return (value.name !== painting.name)
                    })
                foundPaintings = [...new Set(foundPaintings)]
            })
            setSearchedPaintings(foundPaintings)
        }
        if (!!searchInput)
            findPaintings(searchInput)
        else
            setSearchedPaintings(filteredPaintings)
    }, [searchInput, filteredPaintings])

    const [showModal, setShowModal] = useState(false)

    const handleShowModal = () => {
        if (user != null){
            if (user.admin){
                setShowModal(true)
            }
        }else{
            alert('Você não é adm.')
        }
    }

    return (
        <>
        {user!== null && user.admin && <PaintingsForms showModal={showModal} setShowModal={setShowModal}/> }
        <PaintingsPage>
            <GalleryHeader title={"Bem vindo à nossa galeria!"}/>
            <Paintings>
                <div className="search-filters">
                    <SearchField placeholder="Nos diga o que está procurando..." onChange={(value) => setSearchInput(value.target.value)}/>
                    <Filter setSelectedFilter={setSelectedFilter} selectedFilter={selectedFilter}/>
                </div>
                <Line/>
                <Container>
                    { searchedPaintings.map((item) => {return (
                        <FramedPainting
                            image={item.image_url ? `${api.defaults.baseURL + item.image_url}` : placeholder }
                            title={item.name} artist={item.artist_name} key={item.id} id={item.id}/>
                    )}) }
                </Container>
            </Paintings>
            {user!== null && user.admin && <PlusButton onClick={handleShowModal}>+</PlusButton> }
        </PaintingsPage>
        </>
    )
}

export default PaintingExhibition;
