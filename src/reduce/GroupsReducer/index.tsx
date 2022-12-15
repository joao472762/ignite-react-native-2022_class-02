import uuid from 'react-native-uuid';
import { GROUP_COLLETION_KEY } from '@config/storageKey';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { actionProps, ActionTypes } from './action';

interface participantProps {
    id: string,
    name: string,
    team: string
}

export interface groupProps {
    id: string,
    name: string,
    participants: participantProps[] | []
}

export function reducer(state: groupProps[] ,action: actionProps){
   
    async function saveGroupsInStorage (groups: groupProps[]) {
        try {
            const dataKey = GROUP_COLLETION_KEY
            const groupsToStorage = JSON.stringify(groups)
            await AsyncStorage.setItem(dataKey, groupsToStorage)
        } catch (error) {
            console.error(error)
        }
    }

    switch(action.type) {
        case ActionTypes.CREATE_NEW_GROUP : {
            const {groupName, groupId} = action.payload
        
            const newGroup : groupProps = {
                id: groupId as string ,
                name: groupName as string,
                participants: []
        
            }

            const groupsWithMoreOneGroup = [...state,newGroup]
            saveGroupsInStorage(groupsWithMoreOneGroup)

            return groupsWithMoreOneGroup
            
        }

        case ActionTypes.ADD_NEW_PARTICIPANT : {
            const {participantName,groupId,team} = action.payload
        
            const newParticipant: participantProps = {
                id: uuid.v4() as string,
                name: participantName as string,
                team: team  as string
            }

            const groupsUpdated: groupProps[] = state.map(group => {

                if (group.id === groupId) {
                    const groupWithMoreOneParticipant: groupProps = {
                        ...group,
                        participants: [newParticipant, ...group.participants]

                    }
                    return groupWithMoreOneParticipant
                }
        
                return group
            })
            
            saveGroupsInStorage(groupsUpdated)

            return groupsUpdated

        }

        case ActionTypes.REMOVE_ONE_PARTICIPANT : {
            const {groupId,participantId} = action.payload

            const groupsUpdated: groupProps[] = state.map(group => {
                if (group.id === groupId) {
                    const participantsWithParticipantRemoved = group.participants.filter(participant => {
                        return participant.id !== participantId
                    })

                    const groupWithParticipantUpdated: groupProps = {
                        ...group,
                        participants: participantsWithParticipantRemoved
                    }

                    return groupWithParticipantUpdated

                }
                
                return group
               
            })
            saveGroupsInStorage(groupsUpdated)

            return groupsUpdated
        }

        case ActionTypes.UPADTE_GROUPS : {
            const {groups} = action.payload

            if(groups){
                return groups
            }
            return state
        }

        case ActionTypes.REMOVE_ONE_GROUP : {
            const {groupId} = action.payload
            const groupsWithoutOneGroup   = state.filter(group => group.id !== groupId)

            saveGroupsInStorage(groupsWithoutOneGroup)

            return groupsWithoutOneGroup
        }

        default : return state

    }

}