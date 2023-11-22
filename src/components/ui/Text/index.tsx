import { StyledText } from "./style";

interface TextProps {
    content: string;
    type: 'text' | "title";
    size?: number;
}

export default function Text({ content, type = 'text', size }: TextProps) {
    return <StyledText size={size} type={type}>{content}</StyledText>
}