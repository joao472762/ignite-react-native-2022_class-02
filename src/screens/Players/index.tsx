import { useRef, useState} from 'react'
import { useTheme } from 'styled-components'
import BottomSheet from '@gorhom/bottom-sheet'
import { FlatList, Keyboard , TextInput} from 'react-native'
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
    
    const {colors} = useTheme()
    const [showError, setShowError] = useState(false)
    const [participantName, setParticipantName] = useState('')
    const [teamSelected, setTeamSelected] = useState('Time A')
    
    const InputRef = useRef<TextInput | null>(null)
    const bottomSheetRef = useRef<BottomSheet | null>(null)


    const {groups,addNewParticipant,removeOneGroup} = useGroup()

    const group = groups.find(group => group.id === route.params.id)

    const teamParticipants = group!?.participants.filter(participant => participant.team === teamSelected)

    function showModal(){
        bottomSheetRef.current?.expand()
    }

    function closeBottomModal(){
        bottomSheetRef.current?.close()     
    }

    function handleSelectTeam(team: string){
        setTeamSelected(team)
    }

    function navigateToGroupScreen(){
        navigation.navigate('Group')
    }
    
    function handleUpdateParticipantName(name: string){
        setParticipantName(name)
        setShowError(false)
        
        closeBottomModal()     
    }

    function handleAddNewParticipant(){
        closeBottomModal()
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
   
    

    const teamLength = teamParticipants.length
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
                            InputRef={InputRef}
                            onSubmitEditing={handleAddNewParticipant}
                            returnKeyType='done'
                            autoCorrect= {false}
                            value={participantName}
                            placeholder='Nome do participante'
                            onFocus={closeBottomModal}
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
                                hasBorder={teamSelected === 'Time A'}
                                onPress={ () => handleSelectTeam('Time A')}
                            >
                                <Text>Time A</Text>
                            </TeamSelector>

                            <TeamSelector 
                                hasBorder={teamSelected === 'Time B'}
                                onPress={() => handleSelectTeam('Time B')}
                            >
                                <Text>Time B</Text>
                            </TeamSelector>
                        </TeamsNames>

                        <Text>{String(teamLength)}</Text>
                    </TeamsHeader>
                    <FlatList
                        data={teamParticipants}
                        keyExtractor = {item => item.id}
                        renderItem = {({item}) => (
                            <PlayerCard 
                            name={item.name}
                            groupId={group!.id}
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
                    closeBottomModal={closeBottomModal}
                    handleRemoveOneGroup={handleRemoveOneGroup}
                    barIdicatorColor={colors.gray[500]}
                />
            </PlayersContainer>
    )
}