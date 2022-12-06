import { Text } from '@components/Text'
import BottomSheet, {BottomSheetProps} from '@gorhom/bottom-sheet'
import { useRef ,ReactNode, forwardRef} from 'react'
import { View} from 'react-native'
import {BottomModalContent, ButtonsWrraper, Button, Overlay} from './style'
import { useTheme } from 'styled-components'
import React from 'react'
import { Heading } from '@components/Heading'

interface BottomModalProps {
    closeBottomModal: () => void;
    barIdicatorColor?: string;
    handleRemoveOneGroup: () => void;
}

export const BottomModal = React.forwardRef<BottomSheet,BottomModalProps>((props, ref) => (
        <BottomSheet
                
                index={0} 
                ref={ref}
                snapPoints={[.1, '20%']}
                backgroundStyle={{
                    backgroundColor: props.barIdicatorColor,
                
                }}
            >
                <BottomModalContent>
                    <Heading> exluir este grupo?</Heading>
                    <ButtonsWrraper>
                        <Button 
                            type='DANGER'
                            onPress={props.handleRemoveOneGroup}
                        >
                            <Heading>Sim</Heading>
                        </Button>
                        <Button 
                            type='DEFAULT'
                            onPress={props.closeBottomModal}
                        > 
                            <Heading>Não</Heading>
                        </Button>

                    </ButtonsWrraper>
                    
                </BottomModalContent>
        </BottomSheet>


));