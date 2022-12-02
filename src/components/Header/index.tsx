import logoImage from '@assets/logo.png'
import {GoBackButton, HeaderContainer, Icon,Logo} from './styles'

interface HederProps {
    hasLeftIndicator?: boolean,
    navigateToPreviousScreen?: () => void
}

export function Header({hasLeftIndicator=false,navigateToPreviousScreen}: HederProps){
    function handleNavigateToPreviousScreen(){
        if(navigateToPreviousScreen !== undefined){
            navigateToPreviousScreen()
        }
    }
    return (
        <HeaderContainer hasLeftIndicator={hasLeftIndicator}>
            {hasLeftIndicator && (
                <GoBackButton
                    onPress={handleNavigateToPreviousScreen}
                >
                    <Icon/>
                </GoBackButton>
            )}
            <Logo source={logoImage}/> 
        
        </HeaderContainer>
    )
}