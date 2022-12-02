import { Keyboard, TouchableWithoutFeedback } from "react-native";
import {NativeStackScreenProps} from '@react-navigation/native-stack'

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";

import {NewGroupContainer, NewGroupContent, Icon}  from './styles'
import { StackScreensProps } from "@routes/stack.routes";


export function NewGroup({navigation}:NativeStackScreenProps<StackScreensProps,'NewGroup'>){
    function navigateToPreviousScreen(){
        navigation.goBack()
    }

    function handleNavigateToPlayersScreen(){
        navigation.navigate('Players')
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
                        <Input.Input  placeholder="Nome da Turma"/>
                    </Input.Root>
                    <Button
                        title="Criar"
                        onPress={handleNavigateToPlayersScreen}
                        style={{
                            marginTop: 20
                        }}
                    />

                </NewGroupContent>
            </NewGroupContainer>

        </TouchableWithoutFeedback>

    )
}