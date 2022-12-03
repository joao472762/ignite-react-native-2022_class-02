import { Text } from "@components/Text";
import { teamType } from "@context/GroupContext";
import { useGroup } from "@hooks/useGrups";
import {UserIcon,PlayerCardContainer,DeleteButton,DeleteIcon, DangerArea} from './styles'

interface PlayerCardProps {
    title: string,
    groupId: string,
    team: teamType,
    participantId: string,
}
export function PlayerCard({title,team, groupId, participantId}: PlayerCardProps) {
    const {removeOneParticipant} = useGroup()
    function handleRemoveOneParticipant(){
        console.log('oi')
        removeOneParticipant(groupId,team,participantId)
    }
    return (
        <PlayerCardContainer>
            <UserIcon/>
            <Text>{title}</Text>
            <DangerArea>
                <DeleteButton
                    onPress={handleRemoveOneParticipant}
                >
                    <DeleteIcon/>
                </DeleteButton>
            </DangerArea>
        </PlayerCardContainer>
    )
}