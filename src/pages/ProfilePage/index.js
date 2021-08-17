import React from 'react'
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { ProfileContainer, ModalContainer, FavoritesContainer, Container, Paintings, Line } from './styles';
import { IoColorPaletteOutline, IoCogOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { HiLockOpen, HiLockClosed } from "react-icons/hi";
import Button from "../../components/Button";
import placeholder from "../../assets/placeholder.png"
import { useLocation } from "react-router-dom";
import { useUserContext } from "../../contexts/useUserContext"
import GalleryHeader from "../../components/GalleryHeader";
import SearchField from "../../components/SearchField";
import Filter from "../../components/Filter";
import FramedPainting from "../../components/FramedPainting"
import Modal from '../../components/Modal';
import Input from "../../components/Input";
import { BiUser, BiMessageSquareEdit } from "react-icons/bi";
import { IoIosLock } from 'react-icons/io'
import { ChromePicker } from 'react-color';
import FormData from 'form-data'

const ProfilePage = () => {

  const location = useLocation();

  const {user, togglePrivate, update, updateUser} = useUserContext()

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

  // Form control
  const [name, setName] = useState(user.name)
  const [bio, setBio] = useState(user.bio)
  const [password, setPassword] = useState()
  const [password_confirmation, setPasswordConf] = useState()
  const [image, setImage] = useState("")
  const [color, setColor] = useState("#F1F2F4")

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(name === ''){
        alert('Nome deve estar preenchido.');
    }else if(password === ''){
        alert('Senha deve estar preenchida.');
    };
    await update({name, bio, password, password_confirmation})
  };

  let data = new FormData()
  const handleImageSubmit = async (e) => {
    data.append('image', image, image.name)
    await api.post(`/api/v1/users/edit_image/${user.id}`, data, {
        'accept': 'application/json',
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      }).then(() => {
        updateUser()
        alert('Foto atualizada')
      }).catch((e) => {
        alert(e)
      })
  };

  const handleColorChange = (color) => {
    setColor(color.hex);
    setStyle({color: `${color.hex}`})
  };

  const handleColorSubmit = async (color) => {
    try{
      const response = await api.patch('/api/v1/users/update', {
          user:{
              color: color.hex
      }})
      if(response.data) {
          updateUser()
      }
      }catch(e){
      alert(e)
  }
  };

  // Modal Controllers
  const [photoModal, setPhotoModal] = useState(false)

  const openPhotoModal = () => {
    setPhotoModal(prev => !prev)
  }

  const [colorModal, setColorModal] = useState(false)

  const openColorModal = () => {
    setColorModal(prev => !prev)
  }

  const [editModal, setEditModal] = useState(false)

  const openEditModal = () => {
    setEditModal(prev => !prev)
  }

  const [style, setStyle] = useState({color: `${user.color === null ? "#6F1D1B" : user.color}`})

  return (
    <>
      <div style={style}>
      <ProfileContainer>
        <Modal showModal={editModal} setShowModal={setEditModal}> 
          <ModalContainer>
          <form onSubmit={handleSubmit}>
            <Input 
                Icon={BiUser}
                placeholder = "Nome"
                onChange={(value) => {setName(value.target.value)}}
            />
            <Input 
                Icon={BiMessageSquareEdit}
                placeholder = "Biografia"
                onChange={(value) => {setBio(value.target.value)}}
            />
            <Input
                Icon={IoIosLock}
                placeholder = "Senha"
                type = 'password'
                onChange={(value) => {setPassword(value.target.value)}}
            />
            <Input
                Icon={IoIosLock}
                placeholder = "Confirmação de Senha"
                type = 'password'
                onChange={(value) => {setPasswordConf(value.target.value)}}
            />
            <Button>Enviar</Button>
          </form>
          </ModalContainer>
        </Modal>
        <Modal showModal={photoModal} setShowModal={setPhotoModal}> 
          <ModalContainer>
            <form onSubmit={handleImageSubmit}>
              <input type="file" onChange={(e) => {setImage(e.target.files[0])}}/>
              <Button>Enviar</Button>
            </form>
          </ModalContainer>
        </Modal>
        <Modal showModal={colorModal} setShowModal={setColorModal}> 
          <ModalContainer>
            <ChromePicker color={color} onChange={handleColorChange} onChangeComplete={handleColorSubmit} />
          </ModalContainer>
        </Modal>
        <div className="info-area">
          <div className="info-bar">
            <span className="info-text">Seu Perfil</span>
            <div className="icons-area">
              <IoColorPaletteOutline onClick={openColorModal} className="color-icon"/>
              <IoCogOutline onClick={openEditModal} className="config-icon"/>
            </div>
          </div>
          <div onClick={openPhotoModal} className="profile-photo">
            <img src={user.image_url != null ? `${api.defaults.baseURL + user.image_url}` : placeholder} alt="Foto de perfil" />
            <FiEdit className="edit-icon"/>
          </div>
          {user.confidential === true ? <HiLockClosed onClick={togglePrivate} className="lock-icon"/> : <HiLockOpen onClick={togglePrivate} className="lock-icon"/>}
        </div>
        <div className="user-info">
          <div className="user-data">
            <h1>{user.name}</h1>
            <p>{user.bio === null ? "Esse perfil ainda não tem uma biografia :(" : user.bio}</p>
          </div>
          <div className="collection-info">
            <span>Sua Coleção</span>
            <div className="arrow-icon">
              <IoIosArrowDown/>
            </div>
          </div>
        </div>
      </ProfileContainer>
      </div>
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