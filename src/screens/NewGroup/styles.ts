import styled from "styled-components/native";
import {UsersThree,Plus} from 'phosphor-react-native'
import { SafeAreaView } from "react-native-safe-area-context";

export const NewGroupContainer = styled(SafeAreaView)`
    flex: 1;
    padding: 8px 24px;
    background-color: ${( {theme:{colors}} ) => colors.gray[600] };
`

export const NewGroupContent = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

`

export const NewGroupInput = styled.TextInput.attrs(({theme: {colors}}) => ({
    placeholderTextColor: colors.gray[300],
}))`
    width: 100%;
    padding: 16px;
    margin-bottom: 32px;
    background-color: ${( {theme:{colors}} ) => colors.gray[700] };
    border-radius: 6px;
    font-family:  ${( {theme:{fonts}} ) => fonts.family.Roboto.Regular};
    font-size: ${( {theme: {fonts}} ) => fonts.size.md}px;
    color: ${( {theme:{colors}} ) => colors.white}
`

export const Icon = styled(UsersThree).attrs(({theme}) => ({
    size: 56,
    color: theme.colors.green[500]
}))`
    
`

