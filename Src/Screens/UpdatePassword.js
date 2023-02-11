import { View, Text, StyleSheet, StatusBar, Image } from 'react-native'
import React, { useState } from 'react'
import CommonTextInput from '../Components/CommonTextInput'
import CommonButton from '../Components/CommonButton'
import CommonView from '../Components/CommonView'
import { Images } from '../Constant/Images'

const UpdatePassword = ({ navigation }) => {
    const [update, setUpdate] = useState("")
    const [upd,setUpd]=useState('')
    const [hidepassword, setHidepassword] = useState(true)
    const [hide, setHide] = useState(true)
    return (
        <View style={styles.mainContainer}>
            <StatusBar barStyle='dark-content' backgroundColor='#337CFF' />
            <View>
                <CommonView/>
                <Image source={Images.Update} style={styles.image3}/>
            </View>
            <View style={{}}>
                <Text style={styles.text1}>Update Password</Text>
                <View>
                    <CommonTextInput
                        placeholder='New Password'
                        value={update}
                        onChangeText={setUpdate}
                        style={styles.input}
                        secureTextEntry={hide}
                        onPress={() => { setHide(!hide) }}
                        // error={errors.confirmPassword}
                        passwordIcon={(hide) ? require('../Assests/Image/closeeye.png') : require('../Assests/Image/eye.jpeg')}
                    />
                    <CommonTextInput
                        placeholder='New Password'
                        value={update}
                        onChangeText={setUpdate}
                        secureTextEntry={hidepassword}
                        onPress={() => { setHidepassword(!hidepassword) }}
                        // error={errors.confirmPassword}
                        passwordIcon={(hidepassword) ? require('../Assests/Image/closeeye.png') : require('../Assests/Image/eye.jpeg')}
                    />
                </View>
                <CommonButton 
                title='Update Now'
                style={styles.btn}
                onPress={()=>{navigation.navigate('Login')}}/>
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
        marginStart: 30
    },
  
    input: {
        marginTop: 60,
        borderColor:'#E0E5F2'
    },
  
})