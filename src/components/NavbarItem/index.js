import { Container } from './styles';

const NavbarItem = ({title, icon, where}) => {
    return (
        <Container to={where}>
          {icon}
          <span>{title}</span>
        </Container>
    )
}

export default NavbarItem;