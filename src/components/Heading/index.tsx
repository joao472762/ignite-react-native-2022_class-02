import { Text, TextProps} from "react-native";
import {HeadingComponent, HeadingTypeStyleProps} from './styles'


interface textProps  extends TextProps {
    children: string,
    fontSize?: HeadingTypeStyleProps
}


export function Heading({children, fontSize='lg',...rest}: textProps){
    return (
        <HeadingComponent  fontSize={fontSize} {...rest}  >
            {children}
        </HeadingComponent>
    )
}

