import {ReactNode} from 'react'
import { TextInputProps,TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import {InputRootContainer,InputInputContainer,PlusButtonContainer, Icon} from './styles'

interface InputRootProps {
    children: ReactNode
}

function InputRoot({children}:InputRootProps){
    return (
        <InputRootContainer>
            {children}
        </InputRootContainer>

    )
}


 function InputInput(props: TextInputProps){
    const {colors:{gray}} = useTheme()
    return (

        <InputInputContainer  
            placeholderTextColor={gray[300]}
            {...props}
        />
    )
}

interface RightButtonProps  extends TouchableOpacityProps{
    children: ReactNode
}

function RightButton({children,...rest}: RightButtonProps){
    return (
        <PlusButtonContainer {...rest}>
            {children}
        </PlusButtonContainer>
    )
}


export const Input = {
    Root: InputRoot,
    Input: InputInput,
    RightButton: RightButton

}