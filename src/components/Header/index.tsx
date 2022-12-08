import logoImage from '@assets/logo.png'
import {GoBackButton, HeaderContainer, Icon,Logo} from './styles'

interface HederProps {
    hasLeftIndicator?: boolean,
    changeScreen?: () => void
}

export function Header({hasLeftIndicator=false,changeScreen}: HederProps){
    function handleChangeScreen(){
        if(changeScreen !== undefined){
            changeScreen()
        }
    }
    return (
        <HeaderContainer hasLeftIndicator={hasLeftIndicator}>
            {hasLeftIndicator && (
                <GoBackButton
                    onPress={handleChangeScreen}
                >
                    <Icon/>
                </GoBackButton>
            )}
            <Logo source={logoImage}/> 
        
        </HeaderContainer>
    )
}