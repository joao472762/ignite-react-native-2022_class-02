import uuid from 'react-native-uuid';
import { GROUP_COLLETION_KEY } from '@config/storageKey';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ReactNode,createContext, useReducer, useEffect, useState} from 'react'

import { groupProps, reducer } from '@reduce/GroupsReducer';
import { 
    updateGroupsAction,
    createNewGroupAction, 
    removeOneGroupAction,  
    addNewParticipantAction, 
    removeOneParticipantAction,
} from '@reduce/GroupsReducer/action';

interface GroupContextProviderProps {
    children: ReactNode
}

interface GroupContextType  {
    groups: groupProps[],
    appIsLoading: boolean,
    createNewGroup: (groupName: string) => string,
    removeOneGroup: (groupId: string) => void,
    removeOneParticipant: (groupId: string ,participantId: string) => void,
    addNewParticipant: (groupId: string, team: string, participantName: string) => void
}

export const GroupContext = createContext({} as GroupContextType)

export function GroupContextProvider({children}: GroupContextProviderProps){
    
    const [groups , dispatch] =  useReducer(reducer,[])
    const [appIsLoading, setAppIsLoading] =  useState(true)
   
    function createNewGroup(groupName: string){
        const groupId = uuid.v4() as string

        dispatch(createNewGroupAction(
            groupId,
            groupName
        ))

        return groupId
    }

    function addNewParticipant(groupId: string, team: string, participantName: string){

        dispatch(addNewParticipantAction(
            groupId,
            team,
            participantName
        ))   
    }

    function removeOneParticipant(groupId: string,participantId: string){
        dispatch(removeOneParticipantAction(
            groupId,
            participantId
        ))
    }

    function removeOneGroup(groupId: string){
        const action = removeOneGroupAction(groupId)
        dispatch(action)
    }

    async function fetchGroups(){
        setAppIsLoading(true)
        try {
            const dataKey = GROUP_COLLETION_KEY
            const response = await AsyncStorage.getItem(dataKey)
            
            if(response){
                const storage = JSON.parse(response)
                dispatch(updateGroupsAction(storage))
            }
            
        } catch (error) {
            console.error(error)
        }
        finally {
            setAppIsLoading(false)
        }

    }

    useEffect(() => {
        fetchGroups()
    }, [])

    return (
        <GroupContext.Provider value={
            {
                groups,
                appIsLoading,
                createNewGroup,
                removeOneGroup,
                addNewParticipant,
                removeOneParticipant,

            }
        }>
            {children}
        </GroupContext.Provider>
    )
}