import { useState } from 'react'
import { FlatList, Keyboard, TouchableWithoutFeedback } from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'

import { Input } from '@components/Input'
import { Header } from '@components/Header'
import { HighLight } from '@components/HighLight'

import { useGroup } from '@hooks/useGrups'
import { Button } from '@components/Button'
import { ListEmpty } from '@components/ListEmpty'
import { ErrorMessage } from '@components/ErrorMessage'
import { teamType } from '@reduce/GroupsReducer/action'
import { StackScreensProps } from '@routes/stack.routes'
import { PlayerCard } from '@screens/Players/components/PlayerCard'

import {
    Text,
    Icon,
    Footer,
    TeamsNames,
    TeamsHeader, 
    TeamSelector,
    PlayersContent,
    PlayersContainer,
} from './styles'



export function Players({navigation,route}:NativeStackScreenProps<StackScreensProps,'Players'>){
    const [teamSelected, setTeamSelected] = useState<teamType>('firstTeam')
    const [participantName, setParticipantName] = useState('')
    const [showError, setShowError] = useState(false)

    const {groups,addNewParticipant,removeOneGroup} = useGroup()

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

    function handleRemoveOneGroup(){
        removeOneGroup(group!.id)
        navigation.navigate('Group')
    }

    const teamLength = team?.participants.length as number
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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

                        <Text>{String(teamLength)}</Text>
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
                        style={{marginBottom: 20}}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator= {false}
                        contentContainerStyle={teamLength === 0 && {
                            flex: 1
                        }}
                        ListEmptyComponent = {
                            <ListEmpty
                                message='Que tal cadastrar a primeira turma'
                            />
                        }

                    />
                    <Footer>
                        <Button 
                            onPress={handleRemoveOneGroup}
                            isDangerButton
                            title='remover '
                        />
                    </Footer>
                </PlayersContent>
            </PlayersContainer>

        </TouchableWithoutFeedback>
    )
}