import Button from "../../components/Button"
import Input from "../../components/Input"
import { Container, FormsContainer, ImageContainer } from "./styles"
import { BiUser } from "react-icons/bi";
import { IoIosMail, IoIosLock } from 'react-icons/io'
import { useState } from "react";
import { api } from '../../services/api'
import { useHistory } from "react-router-dom";
import Switch from "@material-ui/core/Switch";

const SignUpPage = () =>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [confidential, setConfidential] = useState(true)

    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(name === ''){
            alert('Nome deve estar preenchido.')
        }else if(email === ''){
            alert('Email deve estar preenchido.')
        }else if(password === ''){
            alert('Senha deve estar preenchida.')
        }else if(passwordConfirmation === ''){
            alert('Confirmação de senha deve estar preenchido.')
        }else if(password !== passwordConfirmation){
            alert('Senha e confirmação devem ser iguais.')
        }
        try{
            const response = await api.post('/api/v1/users/create', {
                user: {
                    name,
                    email,
                    password,
                    password_confirmation: passwordConfirmation,
                    confidential
                }
            })
            if(response.data) {
                alert('Usuário criado.')
                history.push('/login')
            }
        }catch(e){
            alert(e)
        }
    }

    const toggleConfidential = async () => {
        setConfidential((prev) => !prev)
    }

    

    return(
        <Container>
            <FormsContainer>
                <h1>Crie sua conta para construir sua própria galeria</h1>
                <form onSubmit={handleSubmit}>
                    <Input
                        Icon={BiUser}
                        placeholder = "Nome"
                        onChange={(value) => {setName(value.target.value)}}
                    />
                    <Input
                        Icon={IoIosMail}
                        placeholder = "Email"
                        onChange={(value) => {setEmail(value.target.value)}}
                    />
                    <Input
                        Icon={IoIosLock}
                        placeholder = "Senha"
                        type = 'password'
                        onChange={(value) => {setPassword(value.target.value)}}
                    />
                    <Input
                        Icon={IoIosLock}
                        placeholder = "Confirme sua senha"
                        type = 'password'
                        onChange={(value) => {setPasswordConfirmation(value.target.value)}}
                    />
                    <span>Conta Privada <Switch checked={confidential} onChange={toggleConfidential} color='primary'/></span>
                    <br/>
                    <br/>
                    <Button type="submit">Criar Conta</Button>
                </form>
            </FormsContainer>
            <ImageContainer/>
        </Container>
    )
}

export default SignUpPage