import uuid from 'react-native-uuid';

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

export function reducer(state: groupProps[],action: actionProps){
    switch(action.type) {
        case ActionTypes.CREATE_NEW_GROUP : {
            const {groupName, groupId} = action.payload
        
            const newGroup : groupProps = {
                id: groupId ,
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
        
            return [...state,newGroup]
            
        }

        case ActionTypes.ADD_NEW_PARTICIPANT : {
            const {participantName,groupId,team} = action.payload
        
            const newParticipant: participant = {
                id: uuid.v4() as string,
                name: participantName as string,
            }
            const groupsUpdated: groupProps[] = state.map(group => {
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
        
            return groupsUpdated

        }

        case ActionTypes.REMOVE_ONE_PARTICIPANT : {
            const {groupId,team,participantId} = action.payload

            const groupsUpdated: groupProps[] = state.map(group => {
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
           
            return groupsUpdated


        }
    }

}