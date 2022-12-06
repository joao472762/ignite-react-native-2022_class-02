import styled, {css} from "styled-components/native";

export type textTypeStyleProps = 'sm' | 'md'

interface textProps {
    fontSize: textTypeStyleProps
}

export const TextComponent = styled.Text<textProps>`
    ${({fontSize, theme: {colors, fonts}}) => css`
        font-size: ${
            fontSize === 'sm' 
            ? fonts.size.sm
            : fonts.size.md
        }px;
        font-family: ${fonts.family.Roboto.Regular };
        color: ${colors.gray['200']};
    
    `}
`