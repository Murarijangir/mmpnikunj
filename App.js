
import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen'
import MainNavigation from './Src/Navigation/MainNavigation'
const App = () => {
  useEffect(() =>{
    SplashScreen.hide()
  })
  return (
    <View style={{flex:1}}>
<MainNavigation/>
    </View>
  )
}

export default App