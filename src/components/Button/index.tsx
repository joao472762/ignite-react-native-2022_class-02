import { ButtonContainer } from './styles'
import { Heading } from '@components/Heading'

import { useTheme } from 'styled-components'
import { TouchableOpacityProps } from 'react-native'


interface ButtonProps extends TouchableOpacityProps {
    isDangerButton?: boolean,
    title: string,
}

export  function Button({isDangerButton=false,title,...rest}: ButtonProps){
    const {fonts:{size}} = useTheme()
    return (
        <ButtonContainer  isDangerButton={isDangerButton} {...rest} >
            <Heading style={{fontSize: size.md}}>{title}</Heading>
        </ButtonContainer>

    )
}