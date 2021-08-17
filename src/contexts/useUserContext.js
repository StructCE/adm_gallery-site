import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../services/api";
import Cookies from "js-cookie";

const UserContext = createContext()

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const history = useHistory()

    const handleCookies = async () => {
        const userCookie = Cookies.get('gallery.user')
        if(userCookie !== undefined) {
            const retrievedUser = JSON.parse(userCookie)
            setUser(retrievedUser)

            api.defaults.headers.common['X-User-Token'] = retrievedUser.authentication_token
            api.defaults.headers.common['X-User-Email'] = retrievedUser.email
        }

        return userCookie
    }

    useEffect(() => {
        handleCookies()
    }, [])

    const logout = async () => {

        const handler = await handleCookies()

        if (handler) {
            
            try{
                const response = await api.post('/api/v1/users/logout')
                console.log(response)
                if (response){
                    console.log (response)
                    Cookies.remove('gallery.user')
                    setUser(null)
                    history.push('/')
                }
    
            }catch(e){
            }
        }
    }

    const login = async ({email, password}) => {
        try{
            const response = await api.post('/api/v1/users/login', {
                email,
                password
            })
            if(response.data) {
                setUser(response.data)
                Cookies.set('gallery.user', JSON.stringify(response.data))
                alert('Usuário logado.')
                history.push('/')
            }
        }catch(e){
            alert(e)
        }
    }

    const togglePrivate = async () => {
        try{
            const response = await api.patch('/api/v1/users/update', {
                confidential: !user.confidential
            })
            if(response.data) {
                setUser(response.data)
                Cookies.set('gallery.user', JSON.stringify(response.data))
                alert('Confidencialidade atualizada')
            }
        }catch(e){
            alert(e)
        }
    }

    const editPhoto = async ({image}) => {
        try{
            const response = await api.post(`/api/v1/users/edit_image`, {
                image
            }, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            if(response.data) {
                setUser(response.data)
                Cookies.set('gallery.user', JSON.stringify(response.data))
                alert('Foto atualizada')
            }
        }catch(e){
            alert(e)
        }
    }


    const update = async ({name, bio, password, password_confirmation}) => {
        try{
            const response = await api.patch('/api/v1/users/update', {
                name,
                bio,
                password,
                password_confirmation,
            })
            if(response.data) {
                setUser(response.data)
                Cookies.set('gallery.user', JSON.stringify(response.data))
                alert('Dados Atualizados')
            }
        }catch(e){
            alert(e)
        }
    }

    return (
        <UserContext.Provider value={{user, login, logout, togglePrivate, update, editPhoto}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const context = useContext(UserContext)

    return context
}

export default UserProvider