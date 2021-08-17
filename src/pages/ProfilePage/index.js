import React from 'react'
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { ProfileContainer, FavoritesContainer, Container, Paintings, Line } from './styles';
import { IoColorPaletteOutline, IoCogOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { HiLockOpen, HiLockClosed } from "react-icons/hi";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import placeholder from "../../assets/placeholder.png"
import { useHistory, useLocation } from "react-router-dom";
import { useUserContext } from "../../contexts/useUserContext"
import GalleryHeader from "../../components/GalleryHeader";
import SearchField from "../../components/SearchField";
import Filter from "../../components/Filter";
import FramedPainting from "../../components/FramedPainting"

const ProfilePage = () => {

  const location = useLocation();

  const [paintings, setPaintings] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(location.state?.selectedFilter);
  const [filteredPaintings, setFilteredPaintings] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchedPaintings, setSearchedPaintings] = useState([]);

  useEffect(() =>{
      api.get('/api/v1/library/show')
      .then((response) => {
          setPaintings(response.data.paintings);
          setFilteredPaintings(response.data.paintings);
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

  const {user} = useUserContext()

  return (
    <>
      <ProfileContainer>
        <div className="info-area">
          <div className="info-bar">
            <span className="info-text">Seu Perfil</span>
            <div className="icons-area">
              <IoColorPaletteOutline className="color-icon"/>
              <IoCogOutline className="config-icon"/>
            </div>
          </div>
          <div className="profile-photo">
            <img src={user.image_url != null ? `${api.defaults.baseURL + user.image_url}` : placeholder} alt="Foto de perfil" />
            <FiEdit className="edit-icon"/>
          </div>
          {user.confidential === true ? <HiLockClosed className="lock-icon"/> : <HiLockOpen className="lock-icon"/>}
        </div>
        <div className="user-info">
          <div className="user-data">
            <h1>{user.name}</h1>
            <p>{user.bio === null ? "Esse perfil ainda não tem uma biografia :(" : user.bio}</p>
          </div>
          <div className="collection-info">
            <span>Coleção do Usuário</span>
            <div className="arrow-icon">
              <IoIosArrowDown/>
            </div>
          </div>
        </div>
      </ProfileContainer>
      <FavoritesContainer>
        <GalleryHeader title={"Sua galeria particular!"}/>
          <Paintings>
            <div className="search-filters">
              <SearchField placeholder="Nos diga o que está procurando..." onChange={(value) => setSearchInput(value.target.value)}/>
              <Filter setSelectedFilter={setSelectedFilter}/>
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
      </FavoritesContainer>
    </>
  )
}
  
export default ProfilePage;