import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context';

export const GroupContainer =  styled(SafeAreaView)`
    flex: 1;
    background: ${({theme:{colors}}) => colors.gray[700]};
    
`