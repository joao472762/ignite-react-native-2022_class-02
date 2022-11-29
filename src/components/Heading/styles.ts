import styled from "styled-components/native";

interface HeadingProps {
    fontSize: 'lg' | 'xl'
}
export const HeadingComponent = styled.Text<HeadingProps>`
    font-size: ${ ({theme,fontSize}) => 
        fontSize === 'lg' 
        ? theme.fonts.size.lg
        : theme.fonts.size.xl
    };
    color: ${({theme:{colors}}) => colors.gray['100']};
    font-family: ${({ theme: {fonts}}) => fonts.family.Roboto.Bold };
   
`