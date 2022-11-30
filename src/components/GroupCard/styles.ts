import styled from "styled-components/native";
import {UsersThree} from 'phosphor-react-native'

export const GroupCardConatiner = styled.TouchableOpacity`
    padding: 32px 24px;
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 12px;
    background-color:  ${({theme: {colors}}) => colors.gray[500]};
`

export const GroupIcon = styled(UsersThree).attrs(({theme}) => ({
    weight: 'fill',
    size: 32,
    color: theme.colors.green[500]
}))`
    margin-right: 20px;
`