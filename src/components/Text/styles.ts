import styled from "styled-components/native";

interface textProps {
    fontSize: 'sm' | 'md'
}
export const TextComponent = styled.Text<textProps>`
    font-size: ${ ({theme,fontSize}) => 
        fontSize === 'sm' 
        ? theme.fonts.size.sm
        : theme.fonts.size.md
    }px;
    font-family: ${({ theme: {fonts}}) => fonts.family.Roboto.Regular };
    color: ${({theme:{colors}}) => colors.gray['200']};
`