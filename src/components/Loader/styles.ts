import styled from "styled-components/native";

export const LoaderContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`
export  const LoaderIndicator = styled.ActivityIndicator.attrs(( {theme}) => ({
    color: theme.colors.gray[200],
    size: 'large'
}))``

