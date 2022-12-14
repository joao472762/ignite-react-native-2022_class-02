import { Alert } from "react-native";

import { Text } from "@components/Text";
import { useGroup } from "@hooks/useGrups";

import {UserIcon,PlayerCardContainer,DeleteButton,DeleteIcon} from './styles'

interface PlayerCardProps {
    name: string,
    groupId: string,
    participantId: string,
}
export function PlayerCard({name, groupId, participantId}: PlayerCardProps) {
    const {removeOneParticipant} = useGroup()

    function handleRemoveOneParticipant(){
        Alert.alert(
        'Remover participante?',
        `tem certeza quer remover ${name}`
        ,[
            
            {
                text: 'sim',
                style: 'destructive',
                onPress: () => {removeOneParticipant(groupId, participantId)}

            },
            {
                text: 'cancelar',
                style: 'default'
            },
        ])
       
    }
    return (
        <PlayerCardContainer>
            <UserIcon/>
            <Text style={{flex: 1}}>{name}</Text>
            <DeleteButton
                onPress={handleRemoveOneParticipant}
            >
                <DeleteIcon/>
            </DeleteButton>
        
        </PlayerCardContainer>
    )
}