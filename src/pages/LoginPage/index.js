import Input from "../../components/Input"
import { Container, FormsContainer, ImageContainer } from "./styles"
import { useState } from "react";
import { IoIosMail, IoIosLock } from 'react-icons/io'
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
import { api } from "../../services/api";
import { useUserContext } from "../../contexts/useUserContext";

const LoginPage = () => {

    const {login} = useUserContext()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(email === ''){
            alert('Email deve estar preenchido.');
        }else if(password === ''){
            alert('Senha deve estar preenchida.');
        };
        await login({email, password})
    };

    const handleClick = () => {
        history.push('/signup')
    }

    return(
        <Container>
            <ImageContainer />
            <FormsContainer>
                <h1>Logue na sua conta para acessar sua galeria</h1>
                <form onSubmit={handleSubmit}>
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
                    <Button>Entrar</Button>
                </form>
                <p><span>Não tem conta?</span></p>
                <Button onClick={handleClick}>Criar Conta</Button>
            </FormsContainer>
        </Container>
    )
}

export default LoginPage