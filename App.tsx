import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import {Roboto_400Regular,Roboto_700Bold, useFonts} from '@expo-google-fonts/roboto'

import { Group } from '@screens/Group';
import { Loader } from '@components/Loader';

import { AppContainer } from './src/styles/app';
import { defaultTheme } from './src/styles/theme';
import { NewGroup } from '@screens/NewGroup';
import { Players } from '@screens/Players';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
        <StatusBar
          translucent
          style='light'
          backgroundColor='transparent'
        />
        {fontsLoaded ? <Players/> : <Loader/>}
     
      </AppContainer>
     
    

    </ThemeProvider>
   

    
  );
}


