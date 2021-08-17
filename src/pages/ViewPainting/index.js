import { HiOutlineHeart, HiHeart } from 'react-icons/hi';
import { useState, useEffect, useRef } from 'react'; 
import { IoIosArrowDown } from 'react-icons/io'
import { Container, FirstScreen, SecondScreen } from './styles';
import Button from '../../components/Button'
import Arrow from '../../assets/arrow-icon.png'
import { useLocation, useParams } from 'react-router-dom';
import { api } from '../../services/api';
import placeholder from '../../assets/placeholder.png'
import Artist from '../../assets/artist.png'
import { useHistory } from 'react-router-dom';


const ViewPainting = () => {

    let history = useHistory();
    const screenRef = useRef(null);
    const location = useLocation();
    const {id} = useParams();

    const [index, setIndex] = useState(0);
    const [styleImage, setStyleImage] = useState(null);
    const [stylePaintings, setStylePaintings] = useState([]);
    const [painting, setPainting] = useState(location.state?.painting || {});
    const [artist, setArtist] = useState({});
    const [favorite, setFavorite] = useState(false);

    const scrollPage = () => screenRef.current.scrollIntoView({behavior: 'smooth'});


    const handleFavoriteClick = () => {
        setFavorite(!favorite)
    }

    useEffect(() => {
		api.get(`/api/v1/paintings/show/${id}`)
		.then((response) => {
		setPainting(response.data)	
		})
      }, [id, location])

    useEffect(() => {
        if (!!painting.artist_id)
            api.get(`/api/v1/artists/show/${painting.artist_id}`)
            .then((response) => {
                setArtist(response.data)
            })
    }, [painting.artist_id])

    useEffect(() => {
        if (!!painting)
            api.get("/api/v1/paintings/index")
            .then((response) => {
                setStylePaintings([]);
                let position = 0;
                response.data.forEach((item) => {
                    if (item.style_id === painting.style_id) {
                        setStylePaintings((stylePaintings) => [...stylePaintings, item])
                        if (item.id === painting.id)
                            setIndex(position)
                        position++;
                        if (item.image_url)
                            setStyleImage(item.image_url)
                    }
                })
            })
    }, [painting])

    return (
        painting &&
        <Container>
            <FirstScreen>
                <h1>{painting.name}</h1>
                <h3 className="year">{painting.year}</h3>
                <div className="the-painting">
                    <div className="image-container">
                        <img alt="painting" src={painting.image_url ? `${api.defaults.baseURL + painting.image_url}` : placeholder}/>
                    </div>
                    <div className="about">
                        <h3>{painting.style_name}</h3>
                        <h3>{painting.artist_name}</h3>
                        <p>Adicione essa obra à sua coleção 
                            <span onClick={() => handleFavoriteClick()}>
                                {favorite ? <HiHeart className="icon" color="#6F1D1B"/> : <HiOutlineHeart className="icon"/> }
                            </span>
                        </p>
                    </div>
                </div>
                <div className="bottom">
                    {(index > 0) &&
                        <div className="previous" onClick={() => history.push(`/paintings/${stylePaintings[index - 1].id}`)}>
                            <img src={Arrow} alt="Anterior"/>
                            <p>Anterior na Categoria</p>
                        </div>
                    }
                        <h5 onClick={() => {scrollPage()}}>
                            Leia sobre
                            <IoIosArrowDown/>
                        </h5>
                    {(index < (stylePaintings.length - 1)) &&
                        <div className="next" onClick={() => history.push(`/paintings/${stylePaintings[index + 1].id}`)}>
                            <p>Próximo na Categoria</p>
                            <img src={Arrow} alt="Próximo"/>
                        </div>
                    }

                </div>
            </FirstScreen>
            <SecondScreen ref={screenRef}>
                <div className="top">
                    <div className="left">
                        <div className="image-container">
                            <img alt="artista" src={artist.image_url ? `${api.defaults.baseURL + artist.image_url}` : Artist}/>
                        </div>
                        <p>{`${painting.name} foi pintada por ${painting.artist_name} em ${painting.year}`}</p>
                        <div className="artist-btn">
                            <Button className="a">+ Conheça o Artista</Button>
                        </div>
                    </div>
                    <div className="right">
                        <div className="description">
                            <p>{painting.description}</p>
                        </div>
                        <span>{`Atualmente a obra está localizada em ${painting.currentplace}`}</span>
                        <div className="image-container">
                            <img src={styleImage ? `${api.defaults.baseURL + styleImage}` : placeholder} alt="estilo"/>
                        </div>
                    </div>
                </div>
                <div className="about-style">
                    <p>
                        {painting.style_description}
                    </p>
                </div>
                <div className="bottom">
                    {(index > 0) &&
                        <div className="previous" onClick={() => history.push(`/paintings/${stylePaintings[index - 1].id}`)}>
                            <img src={Arrow} alt="Anterior"/>
                            <p>Anterior na Categoria</p>
                        </div>
                    }
                    {(index < (stylePaintings.length - 1)) &&
                        <div className="next"  onClick={() => history.push(`/paintings/${stylePaintings[index + 1].id}`)}>
                            <p>Próximo na Categoria</p>
                            <img src={Arrow} alt="Próximo"/>
                        </div>
                    }
                </div>
            </SecondScreen>
        </Container>
    )
}

export default ViewPainting
