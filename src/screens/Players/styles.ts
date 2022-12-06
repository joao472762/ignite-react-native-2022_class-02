import styled from "styled-components/native";
import { Plus } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Heading } from "@components/Heading";
import {Text as TextComponent} from '@components/Text'

interface TeamSelectorTypeStyleProps {
    hasBorder?: boolean;
}
export const PlayersContainer = styled(SafeAreaView)`
    flex: 1;
    background-color: ${( {theme: {colors}}) => colors.gray[600]};
    padding: 8px 24px;
`

export const PlayersContent = styled.View`
    flex: 1
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
export const TeamSelector = styled.TouchableOpacity<TeamSelectorTypeStyleProps>`
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
    text-transform: uppercase;
    font-size:  ${( {theme: {fonts}}) => fonts.size.sm}px;
`

export const ErrorMessage = styled(TextComponent)`
    color: ${( {theme: {colors}}) => colors.danger[700]};
    margin-top: 8px;
`

export const Footer  = styled.View`
    margin-top: auto
`

export const Icon = styled(Plus).attrs(({theme}) => ({
    size: 32,
    color: theme.colors.green[700]
    
}))``




    
