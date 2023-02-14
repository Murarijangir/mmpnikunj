import { View, Text,Image,StyleSheet,StatusBar } from 'react-native'
import React from 'react'
import {Images} from '../Constant/Images'
const CommonView = () => {
  return (
    <View>
    <StatusBar barStyle='dark-content' backgroundColor='#337CFF' />
    <View style={{ height: 220, }}>
      <Image 
      source={Images.Figma2} style={styles.image1} />
      <Image
       source={Images.Figma1} style={styles.image2}/>
      </View>
      </View>
  )
}

export default CommonView

const styles = StyleSheet.create({
    image1: {
      height: 180,
      width: 300
    },
    image2: {
      height: 155,
      width: 420,
      position:'absolute',
      // marginTop: -200,
      alignSelf: 'center',
      // marginTop:15
    }
})