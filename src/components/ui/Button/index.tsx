import { Container } from "./style";

interface ButtonProps {
    label: string;
    onClick: () => void;
    animation?: boolean;
}

export default function Button({ label, onClick, animation }: ButtonProps) {
    return (
        <Container
            animation={animation}
            onClick={onClick}>
            {label}
        </Container>
    )
}