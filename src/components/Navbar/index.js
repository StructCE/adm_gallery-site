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
                <NavbarItem title="Início" icon={<HiHome/>} where={{pathname: '/', state: { toCollection: false }}}/>
                <NavbarItem title="Artistas" icon={<FaPersonBooth/>} where='/artists'/>
                <NavbarItem title="Obras" icon={<FaPaintBrush/>} where='/paintings'/>
                <NavbarItem title="Coleções" icon={<FaStar/>} where={{pathname: '/', state: { toCollection: true }}}/>
                <NavbarItem title="Usuário" icon={<FaUser/>} where='/'/>
                <NavbarItem title="Logout" icon={<FaUserSlash/>} where='/'/>
            </NavbarMenu>
        </>
    )
}

export default Navbar;