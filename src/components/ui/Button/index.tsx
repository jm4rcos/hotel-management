import { useState } from 'react';

import { Container } from "./style";

interface ButtonProps {
    label: string;
}

export default function Button({ label }: ButtonProps) {
    const [animate, setAnimate] = useState<Boolean>(false);

    return <Container animation={animate} onClick={() => setAnimate(true)}>{label}</Container>
}