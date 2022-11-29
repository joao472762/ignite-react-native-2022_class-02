import { Group } from '@screens/Group';
import { StatusBar } from 'expo-status-bar';
import { AppContainer } from './src/styles/app';
import { defaultTheme } from './src/styles/theme';
import { ThemeProvider } from 'styled-components/native';
import {Roboto_400Regular,Roboto_700Bold, useFonts} from '@expo-google-fonts/roboto'
import { Loader } from '@components/Loader';

export default function App() {
  const [fontLoaded] = useFonts({
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
        {!fontLoaded ? <Group/> : <Loader/>}
     
      </AppContainer>
     
    

    </ThemeProvider>
   

    
  );
}


