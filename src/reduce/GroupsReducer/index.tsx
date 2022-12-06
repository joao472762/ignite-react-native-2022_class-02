import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { actionProps, ActionTypes } from './action';

interface participant {
    id: string,
    name: string
}

export interface groupProps {
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

export interface groupsStateType  {
    groups: groupProps[],
    appIsLoading: boolean
}

export function reducer(state: groupsStateType,action: actionProps){

    async function saveGroupsInStorage (groups: groupProps[]) {
        const dataKey = "@igniteTeams:groups"
        const groupsToStorage = JSON.stringify(groups)
        await AsyncStorage.setItem(dataKey, groupsToStorage)
        
    }

    switch(action.type) {
        case ActionTypes.CREATE_NEW_GROUP : {
            const {groupName, groupId} = action.payload
        
            const newGroup : groupProps = {
                id: groupId as string ,
                name: groupName as string,
                firstTeam: {
                    id: uuid.v4() as string,
                    participants: []
                },
                secondTeam: {
                    id: uuid.v4() as string,
                    participants: []
                }
        
            }
            const groupsWithMoreOneGroup = [...state.groups,newGroup]

            const groupsStateUpdated: groupsStateType = {
                ...state,
                groups: groupsWithMoreOneGroup
                
            }
            return groupsStateUpdated
            
        }

        case ActionTypes.ADD_NEW_PARTICIPANT : {
            const {participantName,groupId,team} = action.payload
        
            const newParticipant: participant = {
                id: uuid.v4() as string,
                name: participantName as string,
            }
            const groupsUpdated: groupProps[] = state.groups.map(group => {
                if (group.id === groupId) {
                    if(team === 'firstTeam'){
                        const firstTeamWithMoreOneParticipant = {
                            ...group.firstTeam,
                            participants: [ newParticipant, ...group.firstTeam.participants]
                        }
                        const groupUpdated: groupProps = {
                            ...group,
                            firstTeam: firstTeamWithMoreOneParticipant
                        }
        
                        return groupUpdated
                    }
                    else{
                        const secondTeamWithMoreOneParticipant = {
                            ...group.secondTeam,
                            participants: [ newParticipant, ...group.secondTeam.participants]
                        }
                        const groupUpdated: groupProps = {
                            ...group,
                            secondTeam: secondTeamWithMoreOneParticipant
                        }
        
                        return groupUpdated
                    }
                }
        
                return group
            })
            saveGroupsInStorage(groupsUpdated)

            const groupsStateUpdated: groupsStateType = {
                ...state,
                groups: groupsUpdated
                
            }
          
            return groupsStateUpdated

        }

        case ActionTypes.REMOVE_ONE_PARTICIPANT : {
            const {groupId,team,participantId} = action.payload

            const groupsUpdated: groupProps[] = state.groups.map(group => {
                if (group.id === groupId) {
                    if(team === 'firstTeam'){
                        const partcipantsWithoutOne = group.firstTeam.participants.filter(participant => {
                            return participant.id !== participantId
                        })
                        
                        const firstTeamUpdated = {
                            ...group.firstTeam,
                            participants: partcipantsWithoutOne
                        }
                        const groupUpdated: groupProps = {
                            ...group,
                            firstTeam: firstTeamUpdated
                        }
        
                        return groupUpdated
                    }
                    else{
                        const partcipantsWithoutOne = group.secondTeam.participants.filter(participant => {
                            return participant.id !== participantId
                        })
                        const secondTeamUpdated = {
                            ...group.secondTeam,
                            participants: partcipantsWithoutOne
                        }
                        const groupUpdated: groupProps = {
                            ...group,
                            secondTeam: secondTeamUpdated
                        }
        
                        return groupUpdated
                    }
                }
                
                return group
               
            })
            saveGroupsInStorage(groupsUpdated)

            const groupsStateUpdated: groupsStateType = {
                ...state,
                groups: groupsUpdated
                
            }
          
            return groupsStateUpdated
            


        }
        case ActionTypes.UPADTE_GROUPS : {
            const {groups} = action.payload
            if(groups){
                const groupsState: groupsStateType = {
                    appIsLoading: false,
                    groups: groups
                }
                return groupsState
            }
            return state
        }

        case ActionTypes.REMOVE_ONE_GROUP : {
            const {groupId} = action.payload
            const groupsWithoutOneGroup   = state.groups.filter(group => group.id !== groupId)

            saveGroupsInStorage(groupsWithoutOneGroup)

            const groupStateUpdated: groupsStateType = {
                ...state,
                groups: groupsWithoutOneGroup
            }

            return groupStateUpdated
        }

        default : return state
        
     
    }

}