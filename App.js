import 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import SplashScreen from 'react-native-splash-screen'
import MainNavigation from './Src/Navigation/MainNavigation'
import Auth from '@react-native-firebase/auth'
// import { useNavigation } from '@react-navigation/native'



const App = () => {
  // const [isUserLogin, setIsUserLogin] = useState(false)

  useEffect(() => {
    SplashScreen.hide()
    // setTimeout(() => {
      // Auth().onAuthStateChanged((user) => {
      //   const isUserLogin = user !== null ? "TabNavigation" : "Login"
      //   // setIsUserLogin(true)
      //  onPress= navigation.navigate(isUserLogin);


      // })
  //   }, 3000);

  //   //

  })

  return (
    <View style={{ flex: 1 }}>
      <MainNavigation />

    </View>
  )
}
export default App