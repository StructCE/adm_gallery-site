import { Container } from './styles';
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <hr/>
      <span className="copyright">Struct &copy; 2021</span>
      <a href="https://github.com/StructCE">
        <span className="github"><AiFillGithub/> Repositório</span>
      </a>
      <div className="attributions">
        <span>Icons made by Freepik from www.flaticon.com</span>
        <span>Watercolor vector created by freepik from www.freepik.com</span>
        <span>Background vector created by rawpixel.com from www.freepik.com</span>
      </div>
    </Container>
  )
}

export default Footer;