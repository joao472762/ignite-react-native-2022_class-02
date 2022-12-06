import styled from "styled-components/native";
import { CaretLeft } from 'phosphor-react-native'

interface HeaderContainerTypeStyleProps  {
    hasLeftIndicator?: boolean
}
export const HeaderContainer =  styled.View<HeaderContainerTypeStyleProps>`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: ${({hasLeftIndicator}) =>
        hasLeftIndicator 
        ? 'space-between'
        : 'center'
    };

`

export  const Logo = styled.Image`
    width: 46px;
    height: 55px;
`

export const GoBackButton = styled.TouchableOpacity.attrs(({}) => ({
    activeOpacity: .2,
}))`
`


export const Icon = styled(CaretLeft).attrs(({theme}) => ({
    color: theme.colors.white,
    size: 32
}))`
`
