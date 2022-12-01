import { useState } from 'react'
import { FlatList } from 'react-native'

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

type teamSelectedProps = 'firstTeam'|'secondTeam'
export function Players(){
    const [teamSelected, setTeamSelected] = useState<teamSelectedProps>('firstTeam')

    function handleSelectTeam(team: teamSelectedProps){
        setTeamSelected(team)
    }
    return (
        <PlayersContainer>
            <Header
                hasLeftIndicator
            />
            <PlayersContent>
                <HighLight
                    title='Nome da turma'
                    subTitle='adicione a galera e separe os times'
                />

                <Input.Root>
                    <Input.Input/>
                    <Input.RightButton>
                        <Icon/>
                    </Input.RightButton>
                </Input.Root>

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

                    <Text>2</Text>
                </TeamsHeader>
                <FlatList
                    data={[0,1,2,3]}
                    renderItem = {({item}) => (
                        <PlayerCard title={String(item)}/>
                    )}
                    showsHorizontalScrollIndicator={false}
                />
                


            </PlayersContent>
        </PlayersContainer>
    )
}