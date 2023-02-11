import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Images } from '../Constant/Images'
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen'
const CommonProfile = ({
  title='',
  source,
  title1='',
  onPress = () => { },

}) => {
  return (

    <View style={{ flexDirection: 'row', marginHorizontal:20,height:48,borderBottomWidth:1 ,borderBottomColor:'#E0E0E0'}}>


      <View style={{flexDirection:'row',flex:1 ,alignItems:'center'}}>
        <Image source={source} style={{height:18,width:16}}/>
        <Text style={{marginLeft:10,color:'#1E1E1E',fontWeight:'400'}}>{title}</Text>
      </View>



      
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',  flex:1 ,justifyContent:'flex-end'}}
        onPress={onPress}>
          <Text style={{textAlign:'center',fontSize:14,color:'#337CFF',fontWeight:'400',marginRight:5}}>{title1}</Text>
          <Image source={Images.Greater} style={{height:11,width:6.5,marginEnd:10,tintColor:'#337CFF',}}/>
        </TouchableOpacity>
      
    </View>
  )
}

export default CommonProfile