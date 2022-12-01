import { User,X } from "phosphor-react-native";
import styled from "styled-components/native";





export const PlayerCardContainer = styled.View`
  flex-direction: row;
  align-items: center;
  
  border-radius: 6px;
  padding: 16px;

  margin-bottom: 12px;
  background-color: ${( {theme: {colors}}) => colors.gray[500]};
`
export const DangerArea = styled.View`
    flex: 1;
    align-items: flex-end;

`
export const DeleteButton = styled.TouchableOpacity`
  
`

export const DeleteIcon = styled(X).attrs(( {theme:{colors}} ) => ({
    color: colors.danger[700]
}))``


export const UserIcon = styled(User).attrs(( {theme})  => ({
    color: theme.colors.gray[200],
    weight: 'fill',
    size: 22
}))`
    margin-right: 8px;
`

