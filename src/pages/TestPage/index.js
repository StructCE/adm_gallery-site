import Button from "../../components/Button"
import { useUserContext } from "../../contexts/useUserContext"

const Test = () => {

    const {user, logout} = useUserContext()
    console.log(user)

    return (
        <>
            <Button onClick={logout}>Logout</Button>
            <h1>Hello World</h1>
            <span>{user ? user.name : 'Não está logado'}</span>
        </>
    )
}

export default Test