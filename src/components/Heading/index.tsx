import { Text, TextProps} from "react-native";
import {HeadingComponent} from './styles'


interface textProps  extends TextProps {
    children: string,
    fontSize?: 'lg' | 'xl',
}


export function Heading({children, fontSize='lg',...rest}: textProps){
    return (
        <HeadingComponent  fontSize={fontSize} {...rest}  >
            {children}
        </HeadingComponent>
    )
}

