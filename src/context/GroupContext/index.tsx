import uuid from 'react-native-uuid';
import {ReactNode,createContext, useState} from 'react'

interface participant {
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

interface GroupContextProviderProps {
    children: ReactNode
}

interface GroupContextType  {
    groups: groupProps[],
    createNewGroup: (groupName: string) => void
}

export const GroupContext = createContext({} as GroupContextType)

export function GroupContextProvider({children}: GroupContextProviderProps){
    const [groups,setGroups] = useState<groupProps[]>([])

    function createNewGroup(groupName: string){
        
        const newGroup : groupProps = {
            id: uuid.v4() as string,
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
    }

    return (
        <GroupContext.Provider value={
            {
                groups,
                createNewGroup

            }
        }>
            {children}
        </GroupContext.Provider>
    )
}