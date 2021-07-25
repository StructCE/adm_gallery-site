import {Container} from './styles';

const CreatorItem = ({children, style, onClick, image, name, props}) => {
    return (
        <Container image={image} name={name} style={style} onClick={onClick} {...props}>
            <section>
                <img src={image} alt="foto do criador" />
            </section>
            <div class="creator-name">
              <span>{name}</span>
            </div>
        </Container>
    )
}

export default CreatorItem;