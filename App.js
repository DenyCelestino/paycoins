import { NavigationContainer } from '@react-navigation/native'
import Routes from './app/routes'
import {
  useFonts,
  Rowdies_700Bold,
  Rowdies_400Regular,
  Rowdies_300Light
} from '@expo-google-fonts/rowdies'
import {
  RobotoMono_100Thin,
  RobotoMono_200ExtraLight,
  RobotoMono_300Light,
  RobotoMono_400Regular,
  RobotoMono_500Medium,
  RobotoMono_600SemiBold,
  RobotoMono_700Bold,
  RobotoMono_100Thin_Italic,
  RobotoMono_200ExtraLight_Italic,
  RobotoMono_300Light_Italic,
  RobotoMono_400Regular_Italic,
  RobotoMono_500Medium_Italic,
  RobotoMono_600SemiBold_Italic,
  RobotoMono_700Bold_Italic
} from '@expo-google-fonts/roboto-mono'
import AppLoading from 'expo-app-loading'
import Paymentsuccess from './app/screens/Paymentsuccess'
import { AuthProvider } from './app/contexts/auth'

export default function App() {
  let [fontsLoaded] = useFonts({
    Rowdies_700Bold,
    Rowdies_400Regular,
    Rowdies_300Light,
    RobotoMono_100Thin,
    RobotoMono_200ExtraLight,
    RobotoMono_300Light,
    RobotoMono_400Regular,
    RobotoMono_500Medium,
    RobotoMono_600SemiBold,
    RobotoMono_700Bold,
    RobotoMono_100Thin_Italic,
    RobotoMono_200ExtraLight_Italic,
    RobotoMono_300Light_Italic,
    RobotoMono_400Regular_Italic,
    RobotoMono_500Medium_Italic,
    RobotoMono_600SemiBold_Italic,
    RobotoMono_700Bold_Italic
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
        {/* <Notice /> */}
      </AuthProvider>
    </NavigationContainer>
  )
}
