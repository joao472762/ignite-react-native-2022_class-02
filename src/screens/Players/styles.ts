import { Heading } from "@components/Heading";
import styled from "styled-components/native";
import { Plus, X } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface TeamSelectorProps {
    hasBorder?: boolean;
}
export const PlayersContainer = styled(SafeAreaView)`
    flex: 1;
    background-color: ${( {theme: {colors}}) => colors.gray[600]};
    padding: 8px 24px;
`

export const PlayersContent = styled.View`
`


export const TeamsHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-top: 20px;
    margin-bottom: 20px;
`


export const TeamsNames = styled.View`
    flex-direction: row;

`
export const TeamSelector = styled.TouchableOpacity<TeamSelectorProps>`
    padding: 8px 12px;
    border-radius: 4px;
    margin-right: 8px;
    border: 1px solid ${( {hasBorder,theme:{colors}} ) => 
        hasBorder 
        ? colors.green[500]
        : 'transparent'
        };

`

export const Text = styled(Heading)`
    font-size:  ${( {theme: {fonts}}) => fonts.size.sm}px;
`

export const Icon = styled(Plus).attrs(({theme}) => ({
    size: 32,
    color: theme.colors.green[700]
    
}))``



    
