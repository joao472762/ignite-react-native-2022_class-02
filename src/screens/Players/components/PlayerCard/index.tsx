import { Text } from "@components/Text";
import {UserIcon,PlayerCardContainer,DeleteButton,DeleteIcon, DangerArea} from './styles'

interface PlayerCardProps {
    title: string,
}
export function PlayerCard({title}: PlayerCardProps) {
    return (
        <PlayerCardContainer>
            <UserIcon/>
            <Text>{title}</Text>
            <DangerArea>
                <DeleteButton>
                    <DeleteIcon/>
                </DeleteButton>
            </DangerArea>
        </PlayerCardContainer>
    )
}