import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CommonArea from '../Components/CommonArea'
import { Images } from '../Constant/Images'
import { CountryPicker } from "react-native-country-codes-picker"
import { TextInput } from 'react-native-gesture-handler'
import CommonButton from '../Components/CommonButton'
import { CountryList } from 'react-native-country-codes-picker'
const WhatsppVer = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [number, setNumber] = useState("")
  return (
    <View style={{ flex: 1 }}>
      <CommonArea
        title={'Whatsapp Verification'}
        style={styles.text1}
        source2={Images.Back}
        onPress={() => { navigation.navigate('Social') }}
      />
      <View style={styles.container}>


        <Image source={Images.Whatsapp2} style={styles.image} />

        <Text style={styles.text}>Enter your Whatsapp Number to{"\n"}create account</Text>
        <Text style={styles.text2}>We will send you a one time{"\n"}password(OTP)</Text>



        <View style={styles.container1} >
        <CountryPicker
            show={show}
            pickerButtonOnPress={(item) => {
              setCountryCode(item.dial_code);
              setShow(false);
            }}
          />
          <TouchableOpacity
            onPress={() => setShow(true)}
            style={styles.touch}

          >
            <Text style={{
              color: '#969393',
              fontSize: 16,
              textAlign: 'center',
            }}>

              {countryCode}
            </Text>
            <Image source={Images.DropDown}
             style={{ marginStart: 2, position: 'relative',tintColor:'#757373' }} 
             />

          </TouchableOpacity>
          <TextInput
            placeholder='Enter Mobile Number'
            placeholderTextColor='#757373'
            value={number}
            onChangeText={setNumber}
            keyboardType='number-pad'
            style={styles.input}>
          </TextInput>

       

        </View>

        <CommonButton
         title='Send'
         style={{marginTop:29}}
         style1={{fontSize:16}}
         />
      </View>
    </View>
  )
}

export default WhatsppVer
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    backgroundColor: '#EFF2F4',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  text1: {
    fontSize: 18
  },
  image: {
    height: 130,
    width: 130,
    alignSelf: 'center',
    marginTop: 36
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '750',
    marginTop: 32,
    color: '#1E1E1E',

  },
  text2: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: '#9C9CA4',
    marginTop: 8
  },
  container1: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginHorizontal: 24,
    marginTop: 21,
    borderColor:'#E0E5F2'
  },
  touch: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
    width: 50,
    marginHorizontal: 9,
  },
  input: {
    width: 294,
    padding: 17,
    paddingEnd: 0,
    fontSize: 16,
    fontWeight: '400',
    color: '#757373',
    // paddingStart:0
  }
})