import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CommonView from '../Components/CommonView'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import CommonTextInput from '../Components/CommonTextInput'
import CommonButton from '../Components/CommonButton'

const CreateProfile = ({ navigation }) => {
    const [number, setNumber] = useState('')
    return (
        <View style={styles.mainconatiner}>
            <View>
                <CommonView />
                <Image source={require('../Assests/Image/Group5.png')} style={styles.image} />
                <TouchableOpacity style={styles.image1}>
                    <Image source={require('../Assests/Image/3rd.png')} style={{ height: 20, width: 22, alignSelf: 'center' }} />
                </TouchableOpacity>
            </View>
            <View style={{}}>
                <Text style={styles.text1}>Create Profile</Text>
                <View>
                    <CommonTextInput
                        placeholder='Phone Number'
                        value={number}
                        onChangeText={setNumber}
                        style={styles.input}
                    />
                </View>
                <View style={{marginTop:26,justifyContent:'center',marginHorizontal:16,}}>
                    <TouchableOpacity style={{height:56,  backgroundColor:'whitesmoke',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../Assests/Image/Whatsapp.png')} style={{height:30,width:30}}/>
                        <Text style={{textAlign:'center'}}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection:'row',alignItems:'center', marginTop:20, height:56,backgroundColor:'whitesmoke',justifyContent:'center'}}>
                        <Image source={require('../Assests/Image/Telegram.png')} style={{height:30,width:30}} />
                        <Text style={{textAlign:'center'}}>Telegram</Text>
                    </TouchableOpacity>


                </View>
                <CommonButton
                title='Continue'
                style={styles.btn}/>
            </View>
        </View>
    )
}

export default CreateProfile
const styles = StyleSheet.create({
    mainconatiner: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    image: {
        position: 'absolute',
        alignSelf: 'center',
        height: 180,
        width: 180,
        marginTop: 45
    },
    image1: {
        position: 'absolute',
        marginTop: 165,
        marginLeft: 230,
        height: 45,
        width: 45,
        // borderColor:'red',
        // borderWidth:1,
        borderRadius: 25,
        backgroundColor: '#E7EFFF',
        justifyContent: 'center'


    },
    text1: {
        fontSize: 30,
        fontWeight: '500',
        color: '#1E1E1E',
        marginStart: 30,
        // marginTop: 25
    },
    input: {
        marginTop: 30,
        // borderTopWidth: 1
    },
    btn:{
        height: 52,
    // width: 353,
    marginTop: 34,
    marginHorizontal:16
    }
})