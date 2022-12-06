import { Loader } from '@components/Loader'
import { useGroup } from '@hooks/useGrups'
import {NavigationContainer} from '@react-navigation/native'
import { Routes } from './stack.routes'

export function Router() {
    const  {appIsLoading} = useGroup()
    return (
        <NavigationContainer>
           {appIsLoading ?  <Loader/> : <Routes />}
        </NavigationContainer>
    )
}