import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import CommonArea from '../Components/CommonArea'
import { Images } from '../Constant/Images'
import CommonTouch from '../Components/CommonTouch'
  




const DashBoard = ({navigation}) => {

    return (
        <View style={{ flex: 1 }}>
            <CommonArea
                title='Dashboard'
                source2={Images.Hembarg}
                onPress={()=>navigation.navigate('SubPlan')}
            />

            <View style={styles.container}>
            <CommonTouch
                    source={Images.Recent}
                    source1={Images.Greater}
                    title='My recent matches'
                    style={styles.cmt}
                    onPress={()=>{navigation.navigate('RecentMatch')}}
                    />
                     <CommonTouch
                    source={Images.Payment}
                    source1={Images.Greater}

                    title='Payment Managemnet'
                    onPress={()=>{navigation.navigate('PaymentManagement')}}
 
                    />
                     <CommonTouch
                    source={Images.Customer}
                    source1={Images.Greater}

                    title='Customer service' 
                    />
                     <CommonTouch
                    source={Images.Logout}
                    source1={Images.Greater}
                    title='Logout'
                    />
            </View>

        </View>
    )
}

export default DashBoard
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 35,
        backgroundColor: '#EFF2F4',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    cmt:{
        marginTop:25
    }
})