import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import CommonArea from '../Components/CommonArea'
import { Images } from '../Constant/Images'
import CommonSub from '../Components/CommonSub'

const SubPlan = () => {
  return (
    <View style={{flex:1}}>
        <CommonArea
        title='Subscription Plans'
        source2={Images.Hembarg}
        style={styles.text}/>


        <View style={styles.container}>
       <CommonSub
       title='6 Months'
       title1 = 'Lorem lpsum is simply dummy text of the printing and typsetting industry'
       title2='$ 3'
       style={{marginTop:26}}
        />
            <CommonSub
       title='1 Year'
       title1 = 'Lorem lpsum is simply dummy text of the printing and typsetting industry'
       title2='$ 5'
        />
        </View>
    </View>
  )
}

export default SubPlan
const styles=StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 35,
        backgroundColor: '#EFF2F4',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    text:{
        fontSize:22
    }
})