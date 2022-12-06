import { TextProps } from "react-native";
import { TextComponent, textTypeStyleProps } from "./styles";

interface textProps  extends TextProps {
    children: string,
    fontSize?: textTypeStyleProps
}

export function Text({children, fontSize='md',...rest}: textProps){
    return (
        <TextComponent  fontSize={fontSize} {...rest}>
            {children}
        </TextComponent>
    )
}

