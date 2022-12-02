import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Group } from '@screens/Group'
import { NewGroup } from '@screens/NewGroup'
import { Players } from '@screens/Players'


export type StackScreensProps = {
    Group: undefined,
    NewGroup: undefined,
    Players: undefined,
}
const {Navigator, Screen} = createNativeStackNavigator<StackScreensProps>()


export function Routes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="Group" component={Group} />
            <Screen name="NewGroup" component={NewGroup} />
            <Screen name="Players" component={Players} />
        </Navigator>
    )
}