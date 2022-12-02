import {NavigationContainer} from '@react-navigation/native'
import { Routes } from './stack.routes'

export function Router() {
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    )
}