import { Container } from './styles';
import { useState } from 'react';

const Select = ({Icon, value, props, children}) => {

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
            <select onBlur={handleOnBlur} onFocus={handleOnFocus} {...props}>
                {children}
            </select>
        </Container>
    )
}

export default Select