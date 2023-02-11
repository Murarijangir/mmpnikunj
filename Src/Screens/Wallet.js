import { View, Text, StatusBar, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Images } from '../Constant/Images'
import CommonArea from '../Components/CommonArea'
import CommonTouch from '../Components/CommonTouch'

const Wallet = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <CommonArea
                title={'Wallet'}
                source2={Images.Hembarg}
            />
            <View style={styles.container} >
              
            </View>

        </View>

    )
}

export default Wallet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 35,
        backgroundColor: '#EFF2F4',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
   
})