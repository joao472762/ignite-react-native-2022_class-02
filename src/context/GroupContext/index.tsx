import uuid from 'react-native-uuid';
import {ReactNode,createContext, useState} from 'react'

interface participant {
    id: string,
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

export type teamType = 'firstTeam' | 'secondTeam'

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
    const [groups,setGroups] = useState<groupProps[]>([])

    function createNewGroup(groupName: string){
        const newGroupId = uuid.v4() as string

        const newGroup : groupProps = {
            id: newGroupId,
            name: groupName,
            firstTeam: {
                id: uuid.v4() as string,
                participants: []
            },
            secondTeam: {
                id: uuid.v4() as string,
                participants: []
            }

        }
        setGroups((state) => [newGroup, ...state])

        return newGroupId
    }

    function addNewParticipant(groupId: string, team: teamType, participantName: string){
        const newParticipant: participant = {
            id: uuid.v4() as string,
            name: participantName,
        }
        const groupsUpdated = groups.map(group => {
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

        setGroups(groupsUpdated)

        
    }

    function removeOneParticipant(groupId: string, team: teamType,participantId: string){
        const groupsUpdated = groups.map(group => {
            if (group.id === groupId) {
                if(team === 'firstTeam'){
                    const partcipantsWithoutOne = group.firstTeam.participants.filter(participant => {
                        return participant.id !== participantId
                    })
                    console.log(partcipantsWithoutOne)
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
      
        setGroups(groupsUpdated)
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