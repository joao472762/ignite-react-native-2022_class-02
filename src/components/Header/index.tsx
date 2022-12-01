import logoImage from '@assets/logo.png'
import {GoBackButton, HeaderContainer, Icon,Logo} from './styles'

interface HederProps {
    hasLeftIndicator?: boolean
}

export function Header({hasLeftIndicator=false}: HederProps){
    return (
        <HeaderContainer hasLeftIndicator={hasLeftIndicator}>
            {hasLeftIndicator && (
                <GoBackButton><Icon/></GoBackButton>
            )}
            <Logo source={logoImage}/> 
        
        </HeaderContainer>
    )
}