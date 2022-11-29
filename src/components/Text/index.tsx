import { TextProps } from "react-native";
import { TextComponent } from "./styles";

interface textProps  extends TextProps {
    children: string,
    fontSize?: 'sm' | 'md'
}

export function Text({children, fontSize='md',...rest}: textProps){
    return (
        <TextComponent  fontSize={fontSize} {...rest}>
            {children}
        </TextComponent>
    )
}

