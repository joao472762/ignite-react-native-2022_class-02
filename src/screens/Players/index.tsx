import { useState } from 'react'
import { FlatList } from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'

import { Input } from '@components/Input'
import { Header } from '@components/Header'
import { HighLight } from '@components/HighLight'
import { PlayerCard } from '@screens/Players/components/PlayerCard'

import {
    Text,
    Icon,
    TeamsNames,
    TeamsHeader, 
    TeamSelector,
    PlayersContent,
    PlayersContainer,
} from './styles'
import { StackScreensProps } from '@routes/stack.routes'
import { useGroup } from '@hooks/useGrups'
import { teamType } from '@context/GroupContext'
import { ErrorMessage } from '@components/ErrorMessage'


export function Players({navigation,route}:NativeStackScreenProps<StackScreensProps,'Players'>){
    const [teamSelected, setTeamSelected] = useState<teamType>('firstTeam')
    const [participantName, setParticipantName] = useState('')
    const [showError, setShowError] = useState(false)

    const {groups,addNewParticipant} = useGroup()

    const group = groups.find(group => group.id === route.params.id)

    const team = teamSelected === 'firstTeam' 
        ? group?.firstTeam
        : group?.secondTeam

    

    function handleSelectTeam(team: teamType){
        setTeamSelected(team)
    }

    function navigateToPreviousScreen(){
        navigation.goBack()
    }

    function handleUpdateParticipantName(name: string){
        setParticipantName(name)
        setShowError(false)
    }

    function handleAddNewParticipant(){
        if(!participantName.trim().length){
            setShowError(true)
            return
        }
        addNewParticipant(group!?.id,teamSelected,participantName)
        setParticipantName('')
    }

    const teamLength = String(team?.participants.length)
    return (
        <PlayersContainer>
            <Header
                hasLeftIndicator
                navigateToPreviousScreen={navigateToPreviousScreen}
            />
            <PlayersContent>
                <HighLight
                    title={group!?.name}
                    subTitle='adicione a galera e separe os times'
                />

                <Input.Root>
                    <Input.Input
                        value={participantName}
                        placeholder='Nome do participante'
                        onChangeText={handleUpdateParticipantName}
                    />
                    <Input.RightButton
                        onPress={handleAddNewParticipant}
                    >
                        <Icon/>
                    </Input.RightButton>
                </Input.Root>
                {
                    showError &&
                    <ErrorMessage error='nome não pode ficar vazio'/>
                }
             

                <TeamsHeader>
                    <TeamsNames>
                        <TeamSelector 
                            hasBorder={teamSelected === 'firstTeam'}
                            onPress={ () => handleSelectTeam('firstTeam')}
                        >
                            <Text>Time A</Text>
                        </TeamSelector>

                        <TeamSelector 
                            hasBorder={teamSelected === 'secondTeam'}
                            onPress={() => handleSelectTeam('secondTeam')}
                        >
                            <Text>Time B</Text>
                        </TeamSelector>
                    </TeamsNames>

                    <Text>{teamLength}</Text>
                </TeamsHeader>
                <FlatList
                    data={team!?.participants}
                    keyExtractor = {item => item.id}
                    renderItem = {({item}) => (
                        <PlayerCard 
                            title={item.name}
                            groupId={group!.id}
                            team={teamSelected}
                            participantId={item.id}
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                />
                


            </PlayersContent>
        </PlayersContainer>
    )
}