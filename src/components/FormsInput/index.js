import { Container } from './styles';
import { useState } from 'react';

const FormsInput = ({Icon, value, ...props}) => {

    const [isFocus, setIsFocus] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const handleOnFocus = () => {
        setIsFocus(true);
    };

    const handleOnBlur = (event) => {
        setIsFocus(false);
        setIsFilled(!!event.target.value);
    };

    return (
        <Container isFilled={isFilled} isFocus={isFocus}>
            <Icon size={30} />
            <input
                onBlur={handleOnBlur}
                onFocus={handleOnFocus}
                {...props}
            />
        </Container>
    )
}

export default FormsInput