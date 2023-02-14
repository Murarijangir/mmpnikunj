import 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import SplashScreen from 'react-native-splash-screen'
import MainNavigation from './Src/Navigation/MainNavigation'
// import { Gesture } from 'react-native-gesture-handler'
// import firestore from '@react-native-firebase/firestore'
// import database from '@react-native-firebase/database'
const App = ({navigation}) => {
  // const [myData, setMyData] = useState(null)
  useEffect(() =>{
    SplashScreen.hide()
    // getDatabase();

  })

//   const getDatabase = async () => {
//     try {

//       // its for firebase
//       // const data = await firestore()
//       //   .collection('testing')
//       //   .doc('OnIU1dGOIX8xGf3dXvc4')    
//       //   .get();
//       // // console.log(data._data);
//       // setMyData(data._data)

// const data= await database()
//      .ref("user/1")
//      .once("value")

//   console.log(data);

// setMyData(data.val());

//     } catch (err) {
//       console.log(err);
//     }
//   };
  return (
    <View style={{flex:1}}>
      <MainNavigation />
      {/* <Text>Name:-{myData ? myData.name : "Loading..."}</Text> */}
      {/* <Text>Age:-{myData ? myData.age : "Loading..."}</Text> */}
      {/* <Text>Hobby:-{myData? myData.hobby.map(list => `  ${list}`):"Loading..."}</Text> */}
    </View>
  )
}
export default App