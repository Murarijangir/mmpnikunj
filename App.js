import 'react-native-gesture-handler'
import { View,StatusBar } from 'react-native'
import React, { useEffect, } from 'react'
import SplashScreen from 'react-native-splash-screen'
import MainNavigation from './Src/Navigation/MainNavigation'
// import messasging from '@react-native-firebase/messaging'
// import { notifications } from 'react-native-notifications'
import { fcmService } from './Src/notification/fcmservice'
const App = () => {
 
  useEffect(() => {
    SplashScreen.hide()
  
   
  }, [])
  useEffect(() => {
fcmService.register()
  }, [])
  
  
//   useEffect(() => {
//     checkToken()
//     SplashScreen.hide()
// messasging().setBackgroundMessageHandler(async remoteMessage=>{
//   console.log('Message handled in the background!',remoteMessage);
// });

//     const unsubscribe = messasging().onMessage(async remoteMessage => {
//       Alert.alert('A new FCM message arrivel', JSON.stringify(remoteMessage));
// console.log(remoteMessage)
//     });
//     return unsubscribe;
//   }, []);
//   const checkToken = async ()=>{
//     const fcmToken = await messasging().getToken();
//     if(fcmToken){
// console.log(fcmToken);
// // Alert.alert(fcmToken);
//     }
//   }
 

  return (
    <View style={{ flex: 1 }}>
      {/* <StatusBar backgroundColor="transparent" translucent={true} /> */}

      <MainNavigation />
 
    </View>
  )
}
export default App