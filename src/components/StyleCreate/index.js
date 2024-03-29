import { useState } from "react"
import { useHistory } from "react-router-dom"
import { api } from "../../services/api"
import FormsButton from "../FormsButton"
import FormsInput from "../FormsInput"
import Modal from "../Modal"
import TextArea from "../TextArea"
import { Container } from "./styles"

const StyleForms = ({showModal, setShowModal}) => {
    
    const[title, setTitle] = useState('')
    const[description, setDescription] = useState('')
    
    const history = useHistory()

    const IconSVG1 = () => {
        return (
            <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.959 4.23145H11.4258V22H7.03125V4.23145H0.585938V0.671875H17.959V4.23145Z" fill="black"/>
            </svg>
        )
    }

    const IconSVG2 = () => {
        return (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2.5H10C5.86375 2.5 2.5 5.86375 2.5 10V26.25C2.5 26.9412 3.05875 27.5 3.75 27.5H20C24.1363 27.5 27.5 24.1362 27.5 20V10C27.5 5.86375 24.1363 2.5 20 2.5ZM25 20C25 22.7575 22.7575 25 20 25H5V10C5 7.2425 7.2425 5 10 5H20C22.7575 5 25 7.2425 25 10V20Z" fill="black"/>
                <path d="M8.75 18.7338V21.2325H11.2487L18.16 14.33L15.6625 11.8325L8.75 18.7338Z" fill="black"/>
                <path d="M19.3381 13.1521L16.8394 10.6533L18.7442 8.74858L21.2429 11.2474L19.3381 13.1521Z" fill="black"/>
            </svg>
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(title === ''){
            alert('Título deve estar preenchido.')
        }else if(description === ''){
            alert('Descrição deve estar preenchida.')
        }
        try{
            const response = await api.post('/api/v1/styles/create', {
                style: {
                    title,
                    description
                }
            })
            if(response.data) {
                alert('Estilo criado.')
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
                    <h1>Novo Estilo</h1>
                    <FormsInput
                        placeholder='Título'
                        Icon={ IconSVG1 }
                        onChange={(value) => {setTitle(value.target.value)}}
                    />
                    <TextArea
                        placeholder='Descrição'
                        Icon={ IconSVG2 }
                        onChange={(value) => {setDescription(value.target.value)}}
                    />
                    <FormsButton type="submit">Adicionar Estilo</FormsButton>
                </form>
            </Container>
        </Modal>
    )
}

export default StyleForms