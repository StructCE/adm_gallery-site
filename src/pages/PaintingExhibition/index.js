import FramedPainting from "../../components/FramedPainting"
import monalisa from '../../assets/monalisa.jpg'
import placeholder from '../../assets/placeholder.png'
import guernica from '../../assets/guernica.jpg'
import { Container, PaintingsPage, Paintings } from "./styles";
import PaintingsHeader from "../../components/PaintingsHeader";
import SearchField from "../../components/SearchField";
import Filter from "../../components/Filter";

const PaintingExhibition = () => {
    return (
        <PaintingsPage>
            <PaintingsHeader/>
            <Paintings>
                <div className="search-filters">
                    <SearchField placeholder="Nos diga o que está procurando..."/>
                    <Filter/>
                </div>
                <Container>
                    <FramedPainting image={monalisa} title="A Monalisa" artist="Leonardo da Vinci"/>
                    <FramedPainting image={placeholder} title="Placeholder" artist="Vincent Van Ghogh"/>
                    <FramedPainting image={guernica} title="Guernica" artist="Pablo Picasso"/>
                    <FramedPainting image={guernica} title="Guernica" artist="Pablo Picasso"/>
                    <FramedPainting image={monalisa} title="A Monalisa" artist="Leonardo da Vinci"/>
                    <FramedPainting image={placeholder} title="Placeholder" artist="Vincent Van Ghogh"/>
                    <FramedPainting image={placeholder} title="Placeholder" artist="Vincent Van Ghogh"/>
                    <FramedPainting image={guernica} title="Guernica" artist="Pablo Picasso"/>
                    <FramedPainting image={monalisa} title="A Monalisa" artist="Leonardo da Vinci"/>
                </Container>
            </Paintings>
        </PaintingsPage>
    )
}

export default PaintingExhibition;
