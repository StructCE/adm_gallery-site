import Input from "../../components/Input"
import { Container, FormsContainer, ImageContainer } from "./styles"
import { useState } from "react";
import { IoIosMail, IoIosLock } from 'react-icons/io'
import Button from "../../components/Button";

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(email === ''){
            alert('Email deve estar preenchido.');
        }else if(password === ''){
            alert('Senha deve estar preenchida.');
        };
    };

    return(
        <Container>
            <ImageContainer />
            <FormsContainer>
                <h1>Logue na sua conta para acessar sua galeria</h1>
                <form onSubmit={handleSubmit}>
                    <Input 
                        Icon={IoIosMail}
                        placeholder = "Email"
                    />
                    <Input
                        Icon={IoIosLock}
                        placeholder = "Senha"
                    />
                    <Button>Butão</Button>
                </form>
                <p><span>Não tem conta?</span></p>
                <Button>Butão</Button>
            </FormsContainer>
        </Container>
    )
}

export default LoginPage