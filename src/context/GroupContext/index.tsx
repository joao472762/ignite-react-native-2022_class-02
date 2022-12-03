import uuid from 'react-native-uuid';
import {ReactNode,createContext, useReducer} from 'react'

import { groupProps, reducer } from '@reduce/GroupsReducer';
import { 
    teamType, 
    createNewGroupAction, 
    addNewParticipantAction, 
    removeOneParticipantAction,  
} from '@reduce/GroupsReducer/action';

interface GroupContextProviderProps {
    children: ReactNode
}

interface GroupContextType  {
    groups: groupProps[],
    createNewGroup: (groupName: string) => string,
    removeOneParticipant: (groupId: string, team: teamType,participantId: string) => void,
    addNewParticipant: (groupId: string, team: teamType, participantName: string) => void
}

export const GroupContext = createContext({} as GroupContextType)

export function GroupContextProvider({children}: GroupContextProviderProps){
    
    const [groups, dispatch] =  useReducer(reducer, [])

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

    return (
        <GroupContext.Provider value={
            {
                groups,
                createNewGroup,
                addNewParticipant,
                removeOneParticipant,

            }
        }>
            {children}
        </GroupContext.Provider>
    )
}