import { useTheme } from 'styled-components/native'
import { TouchableOpacityProps } from 'react-native'

import { Heading } from '@components/Heading'

import {GroupCardConatiner,GroupIcon} from './styles'


interface GroupCardProps extends TouchableOpacityProps{
    id?: string,
    title: string,
}

export function GroupCard({title,id, ...rest}: GroupCardProps){
    const {colors:{gray}, fonts:{family}} = useTheme()
    return (
        <GroupCardConatiner {...rest}>
            <GroupIcon   />
            <Heading style={{color: gray[100], fontFamily: family.Roboto.Regular}}>
                {title}
            </Heading>
        </GroupCardConatiner>
    )
}