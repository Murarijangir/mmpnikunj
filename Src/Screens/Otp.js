import { View, Text, StyleSheet, StatusBar, Image } from 'react-native'
import React, { useState } from 'react'
import CommonTextInput from '../Components/CommonTextInput'
import CommonButton from '../Components/CommonButton'
import CommonView from '../Components/CommonView'
import { Images } from '../Constant/Images'

const UpdatePassword = ({ navigation }) => {

    return (
        <View style={styles.mainContainer}>
            <StatusBar barStyle='dark-content' backgroundColor='#337CFF' />
            <View style={{}}>
                <CommonView />
                <Image source={Images.Update} style={styles.image3} />
            </View>
            <View style={{}}>
                <Text style={styles.text1}>OTP Verification</Text>

                <Text style={styles.text2}>Enter the verification code we just sent you {"\n"}
                    on your phone number
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 35, marginTop: 21 }}>
                    <CommonTextInput keyboardType='numeric' style={styles.input} />
                    <CommonTextInput keyboardType='numeric' style={styles.input} />
                    <CommonTextInput keyboardType='numeric' style={styles.input} />
                    <CommonTextInput keyboardType='numeric' style={styles.input} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 10, marginTop: 24 }}>
                    <Text style={styles.did}>Didn't receive th code?</Text>
                    <Text style={styles.res}>Resend Code</Text>

                </View>
                <CommonButton
                    title='Verify Code'
                    style={styles.btn}
                    onPress={() => { navigation.navigate('UpdatePassword') }} />
            </View>
        </View>
    )
}

export default UpdatePassword
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    image3: {
        position: 'absolute',
        marginTop: 83,
        alignSelf: 'center',
        height: 108,
        width: 130,
    },
    text1: {
        fontSize: 30,
        fontWeight: '600',
        color: '#1E1E1E',
        marginStart: 30,
    },
    text2: {
        marginTop: 5,
        marginStart: 30,
        fontSize: 16,
        fontWeight: '400',
        color: '#777777'
    },
    input: {
        height: 60,
        width: 60,
        borderWidth: 1,
        textAlign: 'center',
        paddingStart: 0,
        marginHorizontal: 0,
        borderRadius: 15,
        borderColor: '#C4C4C4'
    },
    did: {
        fontSize: 16,
        fontWeight: '400',
        color: '777777'
    },
    res: {
        color: '#337CFF',
        fontWeight: '400',
        fontSize: 16
    },
    btn: {
        marginTop: 21,
        marginHorizontal:16
    }

})