import { useContext, useState } from "react";
import uuid from 'react-native-uuid';
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import {NativeStackScreenProps} from '@react-navigation/native-stack'

import { Input } from "@components/Input";
import { useGroup } from "@hooks/useGrups";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { StackScreensProps } from "@routes/stack.routes";

import {NewGroupContainer, NewGroupContent, Icon}  from './styles'


interface participant {
    name: string
}

interface groupProps {
    id: string,
    name: string,
    firstTeam: {
        id: string,
        participants: participant[] | []
    }
    secondTeam: {
        id: string,
        participants: participant[] | []
    }
}

export function NewGroup({navigation}:NativeStackScreenProps<StackScreensProps,'NewGroup'>){
    const [groupName, setGroupName] = useState('')
    const {createNewGroup,groups} = useGroup()



    function navigateToPreviousScreen(){
        navigation.goBack()
    }

    function navigateToPlayersScreen(id: string){
        navigation.navigate('Players',{id})
    }

    function handleUpdateGroupName(groupName: string){
        setGroupName(groupName)
    }

    function handleCreateNewGroup(){
        if(!groupName.trim().length){
            return
        }
        const groupId = createNewGroup(groupName)
        setGroupName('')
        
        navigateToPlayersScreen(groupId)

    }

    

    
    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <NewGroupContainer>
                <Header 
                    hasLeftIndicator
                    navigateToPreviousScreen={navigateToPreviousScreen}
                />
                <NewGroupContent>
                    <Icon/>
                    <HighLight
                        title="Nova Turma"
                        subTitle="crie uma turma para adicionar pessoas"
                    />
                    <Input.Root>
                        <Input.Input
                            autoCorrect={false}
                            value={groupName}
                            placeholder="Nome da Turma"
                            onChangeText={handleUpdateGroupName}
                        />
                    </Input.Root>
                    <Button
                        title="Criar"
                        onPress={handleCreateNewGroup}
                        style={{
                            marginTop: 20
                        }}
                    />

                </NewGroupContent>
            </NewGroupContainer>

        </TouchableWithoutFeedback>

    )
}