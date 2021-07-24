import Button from "../../components/Button"
import Input from "../../components/Input"
import { Container, FormsContainer, ImageContainer } from "./styles"
import { BiUser } from "react-icons/bi";
import { IoIosMail, IoIosLock } from 'react-icons/io'

const SignUpPage = () =>{
    return(
        <Container>
            <FormsContainer>
                <h1>Crie sua conta para construir sua própria galeria</h1>
                <form>
                    <Input
                        Icon={BiUser}
                        placeholder = "Nome"
                    />
                    <Input
                        Icon={IoIosMail}
                        placeholder = "Email"
                    />
                    <Input
                        Icon={IoIosLock}
                        placeholder = "Senha"
                        type = 'password'
                    />
                    <Input
                        Icon={IoIosLock}
                        placeholder = "Confirme sua senha"
                        type = 'password'
                    />
                    <Button>Criar Conta</Button>
                </form>
            </FormsContainer>
            <ImageContainer/>
        </Container>
    )
}

export default SignUpPage