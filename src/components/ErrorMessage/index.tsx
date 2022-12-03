import { TextProps } from 'react-native-svg'
import {ErrorText} from './styles'

interface ErrorMessageProps extends TextProps {
    error: string
}

export function ErrorMessage({error,}:  ErrorMessageProps){
    return (
        <ErrorText>
            {error}
        </ErrorText>
    )
}