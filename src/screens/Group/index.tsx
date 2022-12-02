import { useState } from 'react';
import { FlatList } from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack'


import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';

import { GroupContainer ,Footer} from "./styles";
import { StackScreensProps } from '@routes/stack.routes';

export function Group({navigation}:NativeStackScreenProps<StackScreensProps,'Group'>){
    const [groups, setGroups] = useState([])

    function navigateToNewGroupScreen(){
        navigation.navigate('NewGroup')
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
                keyExtractor={item => String(item)}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={{marginBottom: 20}}
                
                renderItem={({item}) => (
                    <GroupCard title={String(item)}/>
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