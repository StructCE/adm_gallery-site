import FramedArtist from "../../components/FramedArtist"
import placeholder from '../../assets/placeholder.png'
import { Container, PaintingsPage, Paintings, Line } from "./styles";
import GalleryHeader from "../../components/GalleryHeader";
import SearchField from "../../components/SearchField";
import PlusButton from "../../components/PlusButton";
import ArtistForms from "../../components/ArtistCreate"
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useUserContext } from "../../contexts/useUserContext"

const ArtistsExhibition = () => {

    const {user} = useUserContext()

    const [artists, setArtists] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [searchedArtists, setSearchedArtists] = useState([]);

    useEffect(() =>{
        api.get('/api/v1/artists/index')
        .then((response) => {
            setArtists(response.data);
        })
    }, [])

    useEffect(() => {
        const findPaintings = (searchInput) => {
            let foundPaintings = []
            artists.forEach((painting) => {
                if (painting.name.toUpperCase().indexOf(searchInput.toUpperCase()) > -1)
                    foundPaintings.push(painting)
                else
                    foundPaintings = foundPaintings.filter((value) => {
                        return (value.name !== painting.name)
                    })
                foundPaintings = [...new Set(foundPaintings)]
            })
            setSearchedArtists(foundPaintings)
        }
        if (!!searchInput)
            findPaintings(searchInput)
        else
            setSearchedArtists(artists)
    }, [searchInput, artists])

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
        {user!== null && user.admin && <ArtistForms showModal={showModal} setShowModal={setShowModal}/> }
        <PaintingsPage>
            <GalleryHeader title={"Veja todos os nossos artistas!"}/>
            <Paintings>
                <div className="search-filters">
                    <SearchField placeholder="Nos diga o que está procurando..." onChange={(value) => setSearchInput(value.target.value)}/>
                </div>
                <Line/>
                <Container>
                    { searchedArtists.map((item) => {return (
                        <FramedArtist
                            image={item.image_url ? `${api.defaults.baseURL + item.image_url}` : placeholder }
                            title={item.name} id={item.id} key={item.id} />
                    )}) }
                </Container>
            </Paintings>
            <div className="form-buttons">
                {user!== null && user.admin && <PlusButton onClick={handleShowModal}>+</PlusButton> }
            </div>
        </PaintingsPage>
        </>
    )
}

export default ArtistsExhibition;
