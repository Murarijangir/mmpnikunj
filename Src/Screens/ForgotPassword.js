import { View, Text, StyleSheet, StatusBar, Image } from 'react-native'
import React, { useState } from 'react'
import CommonTextInput from '../Components/CommonTextInput'
import CommonButton from '../Components/CommonButton'
import CommonView from '../Components/CommonView'
import { Images } from '../Constant/Images'

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState("")

    return (
        <View style={styles.mainContainer}>
            <StatusBar barStyle='dark-content' backgroundColor='#337CFF' />
            <View>
                <CommonView />
                <Image source={Images.Update} style={styles.image3} />
            </View>

            <View style={{}}>
                <Text style={styles.text1}>Forgot Password</Text>
                <View>
                    <Text style={styles.text2}>Email Address/Username</Text>
                    <CommonTextInput
                        placeholder='Email'
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                    />
                </View>
                <CommonButton
                    title='Send Mail'
                    style={styles.btn}
                    onPress={() => { navigation.navigate('Otp') }}
                />
            </View>
        </View>
    )
}

export default ForgotPassword
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    image1: {
        height: 170,
        width: 300
    },
    image2: {
        height: 160,
        width: 420,
        marginTop: -200,
        alignSelf: 'center'
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
        marginStart: 33
    },
    text2: {
        marginTop: 30,
        marginStart: 33,
        fontSize: 15,
        fontWeight: '600',
        color: '#337CFF'
    },
    input: {
        marginTop: 16,
        borderColor: '#0166FF'
    },
})