import {useContext} from 'react'

import {GroupContext} from '../context/GroupContext'


export function useGroup(){
    const context = useContext(GroupContext)
    return context
}