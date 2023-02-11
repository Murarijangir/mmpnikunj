import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'
import CommonButton from './CommonButton'
import { Images } from '../Constant/Images'

const CommonSub = ({
    title='',
    title1,
    title2='',
    style={},
}) => {
  return (
    <View style={[styles.container,{...style}]}>
        <View style={{marginHorizontal:20}}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text1}>{title1}</Text>
      <Text style={styles.text2}>{title2}</Text>
      <View style={{flexDirection:'row',}}>
      <CommonButton
      title='Get Started'
      style={styles.btn}
      style1={styles.btext}/>
      <Image source={Images.SubPlann} style={{height:37,width:47,marginTop:12,marginLeft:-10}}/>
      </View>
    </View>
    </View>
  )
}

export default CommonSub
const styles =StyleSheet.create({
container:{
    backgroundColor:'#FFFFFF',
    marginHorizontal:24,
    marginTop:20,
    borderRadius:19,
    // height:327
},
text:{
    marginTop:24,
    color:'#1E1E1E',
    fontSize:20,
    fontWeight:'700'
},
text1:{
    marginTop:20,
    fontSize:14,
    fontWeight:'400',
    color:'#9C9CA4'
},
text2:{
    marginTop:12,
    fontSize:30,
    fontWeight:'700',
    color:'#337CFF'
},
btn:{
    marginHorizontal:0,
    height:37,
    marginTop:12,
    width:90,
    borderRadius:18,
    marginBottom:25,
    // backgroundColor:'#517FFF',
    backgroundColor:'#00B2FF'
    
},
btext:{
    fontSize:13,
    fontWeight:'700'
}

})