import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import { useTheme } from 'styled-components'
import {HighLightContainer} from './styles'

interface HighLighProps  {
    title: string,
    subTitle: string,
}
export function HighLight({title, subTitle}:HighLighProps) {
    const {colors:{gray}} = useTheme()
    return (
        <HighLightContainer>
            <Heading fontSize='xl'>{title}</Heading>
            <Text style={{color: gray[300]}}>{subTitle}</Text>
        </HighLightContainer>
    )

}