import { Container } from './styles';
import { useState } from 'react';
import { AiFillCaretDown } from "react-icons/ai"


const Select = ({Icon, value, children, ...props}) => {
    const [isFocus, setIsFocus] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const handleOnFocus = () => {
        setIsFocus(true);
    };

    const handleOnBlur = (event) => {
        setIsFocus(false);
        setIsFilled(event.target.value != 0 && !!event.target.value);
    };

    return (
        <Container isFilled={isFilled} isFocus={isFocus}>
            <Icon size={30} />
            <select onBlur={handleOnBlur} onFocus={handleOnFocus} {...props}>
                {children}
            </select>
            <AiFillCaretDown size={30} className="arrow-down"/>
        </Container>
    )
}

export default Select