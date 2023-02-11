import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp ,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { Images } from '../Constant/Images'
const CommonMoney = ({
    style={},
}) => {
  return (
    <View style={[styles.container,{...style}]}>
        <View>
       <TouchableOpacity style={styles.touch}>
        <Image source={Images.BackGround} style={{height:31,width:31}}/>
        <Image source={Images.Send} style={{position:'absolute',height:14,width:14,marginStart:7}}/>
       </TouchableOpacity>
       
        
       </View>
    </View>
  )
}

export default CommonMoney
const styles=StyleSheet.create({
    container:{
        marginTop:13,
        marginHorizontal:15,
        backgroundColor:'#FFFFFF',
        height:hp('22%'),
        borderRadius:10
    },
    touch:{
       justifyContent:'center',
       marginLeft:22,
       marginTop:18
    }
})