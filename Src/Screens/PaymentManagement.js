import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Images } from '../Constant/Images'
import CommonArea from '../Components/CommonArea'

const PaymentManagement = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <CommonArea
                title='Paymnet Management'
                source2={Images.Back}
                style={styles.text}
                source3={Images.Add}
                onPress={()=>{navigation.navigate('DashBoard')}}
                onPress1={()=>{navigation.navigate('AddCard')}}
            />
            <View style={styles.container}>
            </View>
        </View>
    )
}

export default PaymentManagement
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 35,
        backgroundColor: '#EFF2F4',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    text: {
        fontSize: 18
    }
})