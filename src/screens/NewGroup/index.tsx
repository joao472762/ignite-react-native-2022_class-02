import { Keyboard, TouchableWithoutFeedback } from "react-native";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";

import {NewGroupContainer, NewGroupContent, Icon}  from './styles'


export function NewGroup(){
    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <NewGroupContainer>
                <Header hasLeftIndicator/>
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
                        style={{
                            marginTop: 20
                        }}
                    />

                </NewGroupContent>
            </NewGroupContainer>

        </TouchableWithoutFeedback>

    )
}