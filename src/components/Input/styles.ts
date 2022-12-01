import { Plus } from "phosphor-react-native";
import styled, {css} from "styled-components/native";



export const InputRootContainer = styled.View`
    width: 100%;
    height: 56px;

    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    border-radius: 6px;
    
    background-color: ${( {theme:{colors}} ) => colors.gray[700] };
`

export const InputInputContainer = styled.TextInput`
    ${({theme: {colors, fonts}}) => css`
        flex: 1;
        width: 100%;
        padding-left: 16px;
        color: ${colors.white};
        font-size: ${fonts.size.md}px;
        font-family:  ${fonts.family.Roboto.Regular};
    
    `}
`

export const PlusButtonContainer = styled.TouchableOpacity`
        padding-right: 16px;
`

export const Icon = styled(Plus).attrs(({theme}) => ({
    size: 32,
    color: theme.colors.green[700]
}))``
    



