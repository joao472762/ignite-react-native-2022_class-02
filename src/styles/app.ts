import styled from "styled-components/native";
import {GestureHandlerRootView} from 'react-native-gesture-handler'

export const AppContainer = styled(GestureHandlerRootView)`
    flex: 1;
    background: ${({theme:{colors}}) => colors.gray[600]};
`