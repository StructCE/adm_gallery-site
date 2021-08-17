import { useState } from "react";
import { Container } from "./styles";

const TextArea = ({Icon, value, ...props}) => {

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
            <textarea
                onBlur={handleOnBlur}
                onFocus={handleOnFocus}
                {...props}
            />
        </Container>
    )
}

export default TextArea