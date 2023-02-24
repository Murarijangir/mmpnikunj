// import { View, Text } from 'react-native'
// import React,{useEffect} from 'react'
// import messageing from '@react-native-firebase/messaging'
// import PushNotification from 'react-native-push-notification'
// const ForegroundHandler = () => {
// useEffect(() => {
// const unsubscribe = messageing().onMessage((remoteMessage)=>{
//     console.log("handle in foreground",remoteMessage)
//     const {notification,messageId} = remoteMessage
 
//     PushNotification.localNotification({
//         channelId: "your-channel-id",
//         id: messageId,
//         body: "android body",
//         title: "My Notification Title", 
//         playSound: false,
//         vibrate: true,
//         soundName: "default",
//     })
// })

//   return unsubscribe
    
  
// }, [])

//   return null
    
  
// }

// export default ForegroundHandler
import { View, Text, Platform } from 'react-native'
import React from 'react'
import { firebase } from '@react-native-firebase/app'
import { notification } from 'react-native-notifications'

const ForegroundHandler = () => {



  ////..l,l,/////
    useEffect(() => {
createChannel();
    notificationListener();
    }, [])
    

    const createChannel = ()=>{

        const channel = new firebase.notifications.Android.Channel(
            'channelId',
            'channelName',
            firebase.notifications.Android.Importance.Max
            ).setDescription('Description');

            firebase.notifications().android.createChannel(channel);
    };
    // foreground

    const notificationListener =()=>{
        firebase.notifications().onNotificastions((notification)=>{
            if(Platform.OS === 'android'){
const localNotification = new firebase.notifications.Notification({
    sound: 'default',
    show_in_foreground: true,
})
.setNotificationId(notification.notificationId)
.setTitle(notification.title)
.setSubtitle(notification.subtitle)
.setBody(notification.body)
.setData(notification.data)
.android.setChannelId('channelId')
.android.setPriority(firebase.notifications.Android.Priority.High);


firebase.notifications().displayNotification(LocalNotification)
.catch((err)=>console.log(err))

            }
        })

    }



  return (
    <View>
      <Text>ForegroundHandler</Text>
    </View>
  )
}

export default ForegroundHandler