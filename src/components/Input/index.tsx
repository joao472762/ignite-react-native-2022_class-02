import {ReactNode,RefObject} from 'react'
import { useTheme } from 'styled-components/native'
import { TextInput, TextInputProps,TouchableOpacityProps } from 'react-native'

import {InputRootContainer,InputInputContainer,PlusButtonContainer} from './styles'

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


interface InputInputProps extends TextInputProps{
    InputRef?: RefObject<TextInput>
}
function InputInput({InputRef, ...rest}: InputInputProps){
    const {colors:{gray}} = useTheme()
    return (

        <InputInputContainer 
            ref={InputRef}
            placeholderTextColor={gray[300]}
            {...rest}
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