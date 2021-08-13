import { NavbarBtn, NavbarMenu, CloseMenu } from './styles';
import { useState } from 'react';
import NavbarItem from '../NavbarItem';
import { HiHome } from "react-icons/hi";
import { FaPersonBooth, FaUser, FaUserSlash, FaStar, FaPaintBrush } from "react-icons/fa";


const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const toggleNavar = () => {
        setToggleMenu(prev => !prev)
    }
    

    return (
        <>
            <NavbarBtn onClick={toggleNavar}/>
            <NavbarMenu state={toggleMenu}>
                <CloseMenu onClick={toggleNavar}/>
                <NavbarItem title="Início" icon={<HiHome/>} where='/'/>
                <NavbarItem title="Artistas" icon={<FaPersonBooth/>} where='/'/>
                <NavbarItem title="Obras" icon={<FaPaintBrush/>} where='/'/>
                <NavbarItem title="Coleções" icon={<FaStar/>} where='/'/>
                <NavbarItem title="Usuário" icon={<FaUser/>} where='/'/>
                <NavbarItem title="Logout" icon={<FaUserSlash/>} where='/'/>
            </NavbarMenu>
        </>
    )
}

export default Navbar;