import React from 'react'
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { Container } from './styles';
import { WiStars } from "react-icons/wi";
import { CgCross } from "react-icons/cg";
import { IoLocationSharp } from "react-icons/io5";

const ArtistPage = () => {

  const [artist, setArtist] = useState([])

  const loadArtist = async () => {
    const response = await api.get('/api/v1/artists/show/1');
    setArtist(response.data);
  }


  useEffect(() => {
    loadArtist();
  }, [])

  return (
    <>
    <Container>
      <div className="artist-img">
        <img src={`${api.defaults.baseURL + artist.image_url}`} alt={`${artist.name}`} />
      </div>
      <div className="artist-info">
        <h1 className="artist-name">{artist.name}</h1>
        <div className="artist-birth">
          <IoLocationSharp />
          <span>{artist.birthplace}</span>
        </div>
        <div className="artist-birth">
          <WiStars />
          <span>{artist.birthdate}</span>
        </div>
        <div className="artist-death">
          <CgCross />
          <span>{artist.deathdate}</span>
        </div>
        <p className="artist-bio">{artist.biography}</p>
      </div>
    </Container>
    </>
  )
}

export default ArtistPage;