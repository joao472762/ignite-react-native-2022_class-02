import { groupProps } from "."

export enum ActionTypes  {
    'CREATE_NEW_GROUP' = 'CREATE_NEW_GROUP',
    'ADD_NEW_PARTICIPANT' = 'ADD_NEW_PARTICIPANT',
    'REMOVE_ONE_PARTICIPANT' = 'REMOVE_ONE_PARTICIPANT',
    'UPADTE_GROUPS' = 'UPADTE_GROUPS',
    'REMOVE_ONE_GROUP' = "REMOVE_ONE_GROUP"
}


export interface actionProps {
    type: ActionTypes,
    payload: {
        groupName?: string,
        groupId?: string,
        participantName?: string,
        team?: string
        participantId?: string,
        groups?: groupProps[],

    }
}


export function createNewGroupAction(groupId: string, groupName: string){
    const action : actionProps = {
        type: ActionTypes.CREATE_NEW_GROUP,
        payload: {
            groupId,
            groupName,
        }

    }

    return  action
}

export function addNewParticipantAction(groupId: string, team: string, participantName: string){
    const action : actionProps = {
        type: ActionTypes.ADD_NEW_PARTICIPANT,
        payload: {
            team,
            groupId,
            participantName,
        }

    }
    return  action
}

export function removeOneParticipantAction(groupId: string,participantId: string){
    const action : actionProps = {
        type: ActionTypes.REMOVE_ONE_PARTICIPANT,
        payload: {
            groupId,
            participantId,
        }

    }
    return action
}

export function updateGroupsAction(groups: groupProps[]){

    const action : actionProps = {
            type: ActionTypes.UPADTE_GROUPS,
            payload: {
                groups,
            }
    
    }

    return action

}

export function removeOneGroupAction(groupId: string){
    const action : actionProps = {
        type: ActionTypes.REMOVE_ONE_GROUP,
        payload: {
            groupId,
        }

    }

    return action
}