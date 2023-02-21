import 'react-native-gesture-handler'
import { View,StatusBar } from 'react-native'
import React, { useEffect,} from 'react'
import SplashScreen from 'react-native-splash-screen'
import MainNavigation from './Src/Navigation/MainNavigation'
import PushController from './Src/Components/PushController'


const App = () => {


  useEffect(() => {
    SplashScreen.hide()

  })

  return (
    <View style={{ flex:1   }}>
    
      <MainNavigation />
      <PushController/>
    </View>
  )
}
export default App