import { useState } from "react"
import { useHistory } from "react-router-dom"
import { api } from "../../services/api"
import FormsButton from "../FormsButton"
import FormsInput from "../FormsInput"
import Modal from "../Modal"
import TextArea from "../TextArea"
import { Container } from "./styles"
import { BiUser } from "react-icons/bi";

const ArtistForms = ({showModal, setShowModal}) => {
    
    const[name, setName] = useState('')
    const[biography, setBiography] = useState('')
    const[birthdate, setBirthdate] = useState(null)
    const[deathdate, setDeathdate] = useState(null)
    const[birthplace, setBirthplace] = useState('')
    
    const history = useHistory()

    const IconSVG2 = () => {
        return (
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.3334 2.41663H9.66675C5.66837 2.41663 2.41675 5.66825 2.41675 9.66663V25.375C2.41675 26.0432 2.95687 26.5833 3.62508 26.5833H19.3334C23.3318 26.5833 26.5834 23.3317 26.5834 19.3333V9.66663C26.5834 5.66825 23.3318 2.41663 19.3334 2.41663ZM24.1667 19.3333C24.1667 21.9989 21.999 24.1666 19.3334 24.1666H4.83341V9.66663C4.83341 7.00104 7.00116 4.83329 9.66675 4.83329H19.3334C21.999 4.83329 24.1667 7.00104 24.1667 9.66663V19.3333Z" fill="black"/>
                <path d="M8.45825 18.1093V20.5248H10.8737L17.5546 13.8524L15.1403 11.4381L8.45825 18.1093Z" fill="black"/>
                <path d="M18.6936 12.7137L16.2782 10.2983L18.1195 8.45701L20.5349 10.8725L18.6936 12.7137Z" fill="black"/>
            </svg>
        )
    }

    const IconSVG3 = () => {
        return (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.75 5H6.25C4.86929 5 3.75 6.11929 3.75 7.5V25C3.75 26.3807 4.86929 27.5 6.25 27.5H23.75C25.1307 27.5 26.25 26.3807 26.25 25V7.5C26.25 6.11929 25.1307 5 23.75 5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 2.5V7.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 2.5V7.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.75 12.5H26.25" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }

    const IconSVG4 = () => {
        return (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H30V30H0V0Z" fill="black" fill-opacity="0.01"/>
                <path d="M6.43937 2.10174L2.27102 5.57542H10.6077L6.43937 2.10168V2.10174ZM23.3144 3.97674L19.146 7.45042H27.4827L23.3144 3.97669V3.97674ZM13.402 4.94547L7.02109 10.2629H19.7828L13.402 4.94547ZM3.21672 6.63005V10.2629H5.37355L9.66203 6.68911V6.63005H3.21672ZM4.56437 7.45036H5.50188V8.50505H4.56437V7.45036ZM20.0917 8.50505V9.14741L21.4394 10.2704V9.3253H22.3769V10.38H21.5709L21.577 10.3851L22.696 11.3175H20.0917V12.1379H24.662V9.8527H25.7167V12.1379H26.537V8.50505H20.0917ZM8.70432 11.3175V12.4941L10.1161 11.3175H8.70432ZM10.3542 11.3175L16.5124 16.4493L18.0995 15.1266V11.3175H10.3542ZM14.7302 12.1379H16.824V14.13H14.7302V12.1379ZM10.2352 12.5914L1.7793 19.6379H18.6912L10.2353 12.5914H10.2352ZM21.8395 13.383L17.3361 17.1357L19.2136 18.7004H28.2203L21.8395 13.383V13.383ZM20.4793 19.7551L20.4853 19.7601L21.6041 20.6926H17.3709V25.2316H20.912V21.5129H23.8417V25.2317H26.537V19.7552H20.4793V19.7551ZM4.15422 20.6926V27.8982H11.537V23.3879H14.4667V27.8983H16.3162V20.6927H4.15422V20.6926ZM5.91203 22.4504H8.84172V25.3801H5.91203V22.4504Z" fill="black"/>
            </svg>
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(name === ''){
            alert('Título deve estar preenchido.')
        }else if(biography === ''){
            alert('Descrição deve estar preenchida.')
        }else if(birthdate === null){
            alert('Data de nascimento deve estar preenchida.')
        }else if(birthplace === ''){
            alert('Cidade natal deve estar preenchida.')
        }
        try{
            const response = await api.post('/api/v1/artists/create', {
                artist: {
                    name,
                    biography,
                    birthdate,
                    deathdate,
                    birthplace
                }
            })
            if(response.data) {
                alert('Artista criado.')
                history.push('/')
            }
        }catch(e){
            alert(e)
        }
    }

    return (
        <Modal showModal={showModal} setShowModal={setShowModal}>
            <Container>
                <form onSubmit={handleSubmit}>
                    <h1>Novo Artista</h1>
                    <FormsInput
                        placeholder='Nome'
                        Icon={ BiUser }
                        onChange={(value) => {setName(value.target.value)}}
                    />
                    <TextArea
                        placeholder='Biografia'
                        Icon={ IconSVG2 }
                        onChange={(value) => {setBiography(value.target.value)}}
                    />
                    <FormsInput
                        placeholder='Data de nascimento'
                        type='date'
                        Icon={ IconSVG3 }
                        onChange={(value) => {setBirthdate(value.target.value)}}
                    />
                    <FormsInput
                        placeholder='Data de falecimento'
                        type='date'
                        Icon={ IconSVG3 }
                        onChange={(value) => {setDeathdate(value.target.value)}}
                    />
                    <FormsInput
                        placeholder='Cidade natal'
                        Icon={ IconSVG4 }
                        onChange={(value) => {setBirthplace(value.target.value)}}
                    />
                    <FormsButton type="submit">Adicionar Artista</FormsButton>
                </form>
            </Container>
        </Modal>
    )
}

export default ArtistForms