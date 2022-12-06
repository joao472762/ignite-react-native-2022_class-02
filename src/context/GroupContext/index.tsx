import uuid from 'react-native-uuid';
import {ReactNode,createContext, useReducer, useEffect} from 'react'

import { groupProps, reducer } from '@reduce/GroupsReducer';
import { 
    teamType, 
    createNewGroupAction, 
    addNewParticipantAction, 
    removeOneParticipantAction,
    updateGroupsAction,
    removeOneGroupAction,  
} from '@reduce/GroupsReducer/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface GroupContextProviderProps {
    children: ReactNode
}

interface GroupContextType  {
    groups: groupProps[],
    appIsLoading: boolean,
    createNewGroup: (groupName: string) => string,
    removeOneGroup: (groupId: string) => void,
    removeOneParticipant: (groupId: string, team: teamType,participantId: string) => void,
    addNewParticipant: (groupId: string, team: teamType, participantName: string) => void
}

export const GroupContext = createContext({} as GroupContextType)

export function GroupContextProvider({children}: GroupContextProviderProps){
    
    const [gropsState , dispatch] =  useReducer(reducer, {
        groups: [],
        appIsLoading: true
    })

    const {appIsLoading,groups} = gropsState
    

    function createNewGroup(groupName: string){
        const groupId = uuid.v4() as string

        dispatch(createNewGroupAction(
            groupId,
            groupName
        ))

        return groupId
    }

    function addNewParticipant(groupId: string, team: teamType, participantName: string){

        dispatch(addNewParticipantAction(
            groupId,
            team,
            participantName
        ))   
    }

    function removeOneParticipant(groupId: string, team: teamType,participantId: string){
        dispatch(removeOneParticipantAction(
            groupId,
            team,
            participantId
        ))
    }

    function removeOneGroup(groupId: string){
        const action = removeOneGroupAction(groupId)
        dispatch(action)
    }

    async function fetchGroups(){
        const dataKey = "@igniteTeams:groups"
        const response = await AsyncStorage.getItem(dataKey)

        if(response){
            const storage = JSON.parse(response)
            dispatch(updateGroupsAction(storage))
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