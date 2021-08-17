import React from 'react'
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { Container } from './styles';
import { WiStars } from "react-icons/wi";
import { CgCross } from "react-icons/cg";
import { IoLocationSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import placeholder from "../../assets/placeholder.png"
import { useHistory } from "react-router-dom";

const ArtistPage = () => {

  let { id } = useParams();

  const [artist, setArtist] = useState([]);
  const history = useHistory()

  useEffect(() => {
    const loadArtist = async () => {
      const response = await api.get(`/api/v1/artists/show/${id}`);
      setArtist(response.data);
    };

    loadArtist();
  }, [id])

  const handleClick = () => {
    history.push({
      pathname: '/paintings',
      state: {
        selectedFilter: `${artist.name}`,
      },
    })
  }

  return (
    <Container>
      <div className="artist-img">
        <img src={artist.image_url != null ? `${api.defaults.baseURL + artist.image_url}` : placeholder} alt={`${artist.name}`} />
      </div>
      <div className="artist-data">
        <div className="artist-basic">
          <h1 className="artist-name">{artist.name}</h1>
          <div className="artist-place">
            <IoLocationSharp />
            <span>{artist.birthplace}</span>
          </div>
          <div className="artist-dates">
            <div className="artist-birth">
              <WiStars />
              <span>{artist.birthdate}</span>
            </div>
            <div className="artist-death">
              <CgCross />
              <span>{artist.deathdate}</span>
            </div>
          </div>
        <p className="artist-bio">&emsp;{artist.biography}</p>
        </div>
        <div className="paintings-btn">
          <Button onClick={handleClick}>Principais Obras</Button>
        </div>
      </div>
    </Container>
  )
}

export default ArtistPage;