import React from 'react'
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { Container } from './styles';
import { WiStars } from "react-icons/wi";
import { CgCross } from "react-icons/cg";
import { MdPhoto, MdEdit } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import placeholder from "../../assets/placeholder.png"
import ImageArtistForm from "../../components/ImageArtistForm"
import ArtistUpdate from "../../components/ArtistUpdate"
import PlusButton from "../../components/PlusButton";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../../contexts/useUserContext"

const ArtistPage = () => {

  let { id } = useParams();

  const {user} = useUserContext()

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

    const [showEditModal, setEditModal] = useState(false)

    const handleEditModal = () => {
        if (user != null){
            if (user.admin){
              setEditModal(true)
            }
        }else{
            alert('Você não é adm.')
        }
    }

  return (
    <Container>
      {user!== null && user.admin && <ImageArtistForm showModal={showModal} setShowModal={setShowModal} id={artist.id}/> }
      {user!== null && user.admin && <ArtistUpdate showModal={showEditModal} setShowModal={setEditModal} id={artist.id}/> }
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
      <div className="form-buttons">
        {user!== null && user.admin && <PlusButton onClick={handleShowModal}><MdPhoto/></PlusButton> }
        {user!== null && user.admin && <PlusButton onClick={handleEditModal}><MdEdit/></PlusButton> }
      </div>
    </Container>
  )
}

export default ArtistPage;