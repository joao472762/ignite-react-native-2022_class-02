import styled, {css} from "styled-components/native";


export type HeadingTypeStyleProps = 'lg' | 'xl'

interface HeadingProps {
    fontSize: HeadingTypeStyleProps
}
export const HeadingComponent = styled.Text<HeadingProps>`
    ${({fontSize,theme: {colors,fonts,}}) => css`
        font-size: ${ 
            fontSize === 'lg' 
            ? fonts.size.lg
            : fonts.size.xl
        }px;
        color: ${colors.gray['100']};
        font-family: ${ fonts.family.Roboto.Bold };
    
    `}
   
`