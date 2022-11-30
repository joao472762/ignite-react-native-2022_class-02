import {Text} from '@components/Text'
    import { GroupContainer ,Footer} from "./styles";
import { Heading } from "@components/Heading";
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { GroupCard } from '@components/GroupCard';
import { Button } from '@components/Button';
import { FlatList } from 'react-native';
import { useState } from 'react';
import { ListEmpty } from '@components/ListEmpty';


export function Group(){
    const [groups, setGroups] = useState([])
   
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
                <Button title='Criar nova turma'/>

            </Footer>
        </GroupContainer>
    )
}