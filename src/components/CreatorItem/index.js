import {Container} from './styles';

const CreatorItem = ({image, name}) => {
    return (
        <Container image={image} name={name}>
            <section>
                <img src={image} alt="foto do criador" />
            </section>
            <div className="creator-name">
              <span>{name}</span>
            </div>
        </Container>
    )
}

export default CreatorItem;