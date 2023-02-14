import { View, Text, StatusBar, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Images } from '../Constant/Images'
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen'
const CommonArea = ({
  source2,
  source3,
  title = '',
  style = {},
  onPress = () => { },
  onPress1 = () => { },
}) => {
  return (
    <View style={{}}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <Image source={Images.Common} style={styles.commons} />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 70 }}>

        <TouchableOpacity style={{ flex: 1 }}
          onPress={onPress}>
          <Image source={source2} style={styles.image} />
        </TouchableOpacity>

        <View style={{ flex: 2, justifyContent: 'center' }}>
          <Text
            style={[styles.text, { ...style }]}>
            {title}
          </Text>

        </View>
        {/* <View style={{ flex: 1 }}></View> */}
        <TouchableOpacity style={{ flex: 1 }}
          onPress={onPress1}>
          <Image source={source3} style={styles.image1} />
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default CommonArea
const styles = StyleSheet.create({
  commons: {
    height: hp('25%'),
    width:wp('200%'),
  
    position: 'absolute'
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '500',
  },
  image: {
    height: 35,
    width: 35,
    justifyContent: 'center',
    // marginStart: 30,
    tintColor: '#FFFFFF',
    alignSelf: 'center'
  },
  image1: {
    height: 36,
    width: 36,
    justifyContent: 'center',
    tintColor: '#FFFFFF',
    alignSelf: 'center'
  }

})