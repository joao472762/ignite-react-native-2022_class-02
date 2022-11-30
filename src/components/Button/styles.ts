import styled from "styled-components/native";

interface ButtonProps {
    isDangerButton: boolean
}

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
    width: 100%;
    background-color: ${({theme, isDangerButton}) => 
        isDangerButton
        ? theme.colors.danger[700]
        :  theme.colors.green[500]  
    };
    align-items: center;
    padding: 16px 0;
    border-radius: 6px;
`