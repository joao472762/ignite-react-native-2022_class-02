import { FlatList } from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack'


import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { useGroup } from '@hooks/useGrups';
import { HighLight } from '@components/HighLight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { StackScreensProps } from '@routes/stack.routes';

import { GroupContainer ,Footer} from "./styles";

export function Group({navigation:{navigate}}:NativeStackScreenProps<StackScreensProps,'Group'>){
    const {groups} = useGroup()

    function navigateToNewGroupScreen(){
        navigate('NewGroup')
    }

    function navigateToPlayersScreen(id: string){
        navigate('Players',{id})
    }

    return (
        <GroupContainer>
            <Header/>
            <HighLight
                title='Turmas'
                subTitle='jogue com a sua turma'
            />
         
            <FlatList
                data={groups}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={{marginBottom: 20}}
                
                renderItem={({item}) => (
                    <GroupCard 
                        title={item.name}
                        onPress={() => navigateToPlayersScreen(item.id)}
                    />
                )}
                contentContainerStyle={!groups.length && {
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
                    onPress={navigateToNewGroupScreen}
                    title='Criar nova turma'
                />

            </Footer>
        </GroupContainer>
    )
}