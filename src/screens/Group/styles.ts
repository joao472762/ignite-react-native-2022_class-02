import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from "react-native";

export const GroupContainer =  styled(SafeAreaView)`
    flex: 1;
    padding: 8px 24px;
    background: ${({theme:{colors}}) => colors.gray[600]};
    
`

export const Footer = styled.View`
    margin-top: auto;
`



