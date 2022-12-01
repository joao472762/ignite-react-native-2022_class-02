import { useTheme } from "styled-components/native";

import {LoaderContainer, LoaderIndicator} from './styles'

export function Loader(){
    const {colors} = useTheme()
    return  (
        <LoaderContainer>
            <LoaderIndicator/>
        </LoaderContainer>
    )
}