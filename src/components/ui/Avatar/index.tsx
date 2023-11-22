import { AvatarContainer } from "./style";

interface AvatarProps {
    size: 'small' | 'medium' | 'large';
}

export default function Avatar({ size }: AvatarProps) {
    return <AvatarContainer size={size} />
}