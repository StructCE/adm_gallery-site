import { useState } from "react"
import ArtistForms from "../../components/ArtistCreate"
import Button from "../../components/Button"
import FormsButton from "../../components/FormsButton"
import PaintingsForms from "../../components/PaintingCreate"
import PlusButton from "../../components/PlusButton"
import StyleForms from "../../components/StyleCreate"
import RecommendatioForms from "../../components/ReccomendationCreate"
import RecommendatioAddForms from "../../components/RecommendationAdd"
import TextArea from "../../components/TextArea"
import { useUserContext } from "../../contexts/useUserContext"

const Test = () => {

    const {user, logout} = useUserContext()
    console.log(user)
    const [showModal, setShowModal] = useState(false)

    const IconSVG = () => {
        return(
            <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.959 4.23145H11.4258V22H7.03125V4.23145H0.585938V0.671875H17.959V4.23145Z" fill="black"/>
            </svg>
        )
    }

    const handleShowModal = () => {
        if (user != null){
            if (user.admin){
                setShowModal(true)
            }
        }else{
            alert('Você não é adm.')
        }
    }

    return (
        <>
            <RecommendatioAddForms showModal={showModal} setShowModal={setShowModal} painting_id={4} />
            <Button onClick={logout}>Logout</Button>
            <PlusButton>+</PlusButton>
            <h1>Hello World</h1>
            <span>{user ? user.name : 'Não está logado'}</span>
            <FormsButton onClick={handleShowModal}>butao</FormsButton>
        </>
    )
}

export default Test