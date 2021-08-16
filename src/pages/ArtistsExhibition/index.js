import FramedArtist from "../../components/FramedArtist"
import placeholder from '../../assets/placeholder.png'
import { Container, PaintingsPage, Paintings, Line } from "./styles";
import GalleryHeader from "../../components/GalleryHeader";
import SearchField from "../../components/SearchField";
import { api } from "../../services/api";
import { useState, useEffect } from "react";

const ArtistsExhibition = () => {

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

    return (
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
        </PaintingsPage>
    )
}

export default ArtistsExhibition;
