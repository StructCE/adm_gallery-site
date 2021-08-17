import { useState } from "react"
import { useHistory } from "react-router-dom"
import { api } from "../../services/api"
import FormsButton from "../FormsButton"
import Modal from "../Modal"
import { Container } from "./styles"

const ImageArtistForm = ({showModal, setShowModal, id}) => {
    
    const history = useHistory()

    const [image, setImage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const data = new FormData()
            data.append('picture', image, image.name)
            const response = await api.post(`/api/v1/artists/edit_picture/${id}`, data, {
                'accept': 'application/json',
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
            })
            if(response.data) {
                alert('Imagem Atualizada.')
                history.push(`/artists`)
            }
        }catch(e){
            alert(e)
        }
    }

    return (
        <Modal showModal={showModal} setShowModal={setShowModal}>
            <Container>
                <form onSubmit={handleSubmit}>
                    <h1>Atulizar Imagem</h1>
                    <input type="file" onChange={(e) => {setImage(e.target.files[0])}}/>
                    <FormsButton type="submit">Atualizar</FormsButton>
                </form>
            </Container>
        </Modal>
    )
}

export default ImageArtistForm