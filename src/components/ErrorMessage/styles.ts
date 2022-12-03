import { Text } from "@components/Text";
import styled from "styled-components/native";

export const ErrorText = styled(Text)`
    color: ${( {theme: {colors}}) => colors.danger[700]};
    margin-top: 8px;
    align-self: flex-start;
`
