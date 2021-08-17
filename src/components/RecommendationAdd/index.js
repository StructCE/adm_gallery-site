import { useState, useEffect } from "react"
import { api } from "../../services/api"
import FormsButton from "../FormsButton"
import Modal from "../Modal"
import Select from "../Select"
import PlusButton from "../PlusButton"
import RecommendatioForms from "../../components/ReccomendationCreate"
import { Container, SelectContainer } from "./styles"

const RecommendationAddForms = ({showModal, setShowModal, painting_id}) => {
    
    const[collections, setCollections] = useState([])
    const[collectionId, setCollectionId] = useState(0)
    const[showCreateModal, setCreateModal] = useState(false)

    const handleModelClick= () => {
        setCreateModal(true)
    }

    const loadCollections = async () => {
        const response = await api.get('/api/v1/recommendations')
        setCollections(response.data)
    }

    useEffect(() => {
        loadCollections()
    }, [])

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
        console.log(painting_id)
        e.preventDefault();
        if(painting_id === ''){
            alert('Coleção deve ser selecionada.')
        }
        try{
            const response = await api.post(`/api/v1/recommendations/${collectionId}/paintings/add`, {
                painting_id
            })
            if(response.data) {
                alert('Adicionado na coleção.')
            }
        }catch(e){
            alert(e)
        }
    }

    return (
        <>
        <Modal showModal={showModal} setShowModal={setShowModal}>
            <Container>
                <form onSubmit={handleSubmit}>
                    <h1>Adicionar à Coleção</h1>
                    <SelectContainer>
                        <Select value={collectionId} onChange={(value) => setCollectionId(+value.target.value)} Icon={IconSVG2}>
                                <option value={0}>Coleção</option>
                                {collections.map(collection => {return(
                                <option value={collection.id} key={collection.id}>{collection.title}</option>
                            )})}
                        </Select>
                        <PlusButton onClick={handleModelClick}>+</PlusButton>
                    </SelectContainer>
                    <FormsButton type="submit">Adicionar Coleção</FormsButton>
                </form>
            </Container>
        </Modal>
        <RecommendatioForms showModal={showCreateModal} setShowModal={setCreateModal}/>
        </>
    )
}

export default RecommendationAddForms