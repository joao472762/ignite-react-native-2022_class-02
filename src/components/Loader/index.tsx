import { ActivityIndicator } from "react-native";
import {LoaderContainer, LoaderIndicator} from './styles'
import { useTheme } from "styled-components/native";

export function Loader(){
    const {colors} = useTheme()
    return  (
        <LoaderContainer>
            <LoaderIndicator/>
        </LoaderContainer>
    )
}