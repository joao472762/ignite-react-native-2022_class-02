import { ActivityIndicator } from "react-native";
import {LoaderContainer} from './styles'
import { useTheme } from "styled-components/native";

export function Loader(){
    const {colors} = useTheme()
    return  (
        <LoaderContainer>
            <ActivityIndicator size={'large'} color={colors.gray[200]}/>
        </LoaderContainer>
    )
}