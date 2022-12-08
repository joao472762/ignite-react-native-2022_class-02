import { useRef, useState } from 'react'
import { useTheme } from 'styled-components'
import BottomSheet from '@gorhom/bottom-sheet'
import { FlatList, Keyboard } from 'react-native'
import {NativeStackScreenProps } from '@react-navigation/native-stack'

import { Input } from '@components/Input'
import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { ListEmpty } from '@components/ListEmpty'
import { HighLight } from '@components/HighLight'
import { PlayerCard } from './components/PlayerCard'
import { BottomModal } from './components/BottomModal'
import { ErrorMessage } from '@components/ErrorMessage'

import { useGroup } from '@hooks/useGrups'
import { teamType } from '@reduce/GroupsReducer/action'
import { StackScreensProps } from '@routes/stack.routes'

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

    const [showError, setShowError] = useState(false)
    const [participantName, setParticipantName] = useState('')
    const [teamSelected, setTeamSelected] = useState<teamType>('firstTeam')

    const {groups,addNewParticipant,removeOneGroup} = useGroup()

    const group = groups.find(group => group.id === route.params.id)

    const team = teamSelected === 'firstTeam' 
        ? group?.firstTeam
        : group?.secondTeam

    const bottomSheetRef = useRef<BottomSheet | null>(null)

    function showModal(){
        bottomSheetRef.current?.expand()
    }

    function closeModal(){
        bottomSheetRef.current?.close()
        
    }

    function handleSelectTeam(team: teamType){
        setTeamSelected(team)
    }

    function navigateToGroupScreen(){
        navigation.navigate('Group')
    }

    function handleUpdateParticipantName(name: string){
        setParticipantName(name)
        setShowError(false)
        closeModal()     
    }

    function handleAddNewParticipant(){
        closeModal()
        Keyboard.dismiss()
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
   

    const {colors} = useTheme()

    const teamLength = team?.participants.length as number
    return (
        
            <PlayersContainer >
                <Header
                    hasLeftIndicator
                    changeScreen={navigateToGroupScreen}
                />
                <PlayersContent>
                    <HighLight
                        title={group!?.name}
                        subTitle='adicione a galera e separe os times'
                    />

                    <Input.Root>
                        <Input.Input
                            autoCorrect= {false}
                            value={participantName}
                            placeholder='Nome do participante'
                            onFocus={closeModal}
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
                            name={item.name}
                            groupId={group!.id}
                            team={teamSelected}
                            participantId={item.id}
                            />
                           
                        )}
                        
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator= {false}
                        style={{marginBottom: 20}}
                        contentContainerStyle={[
                            teamLength  === 0
                            ?{flex: 1}
                            :{ paddingBottom: 20}
                        ]}
                        ListEmptyComponent = {
                            <ListEmpty
                                message='Que tal cadastrar a primeira turma'
                            />
                        }

                    />
                    <Footer>
                        <Button 
                            onPress={showModal}
                            isDangerButton
                            title='Remover turma'
                        />
                    </Footer>
                </PlayersContent>
                <BottomModal
                    ref={bottomSheetRef}
                    closeBottomModal={closeModal}
                    handleRemoveOneGroup={handleRemoveOneGroup}
                    barIdicatorColor={colors.gray[500]}
                />
            </PlayersContainer>
            

       
    )
}