import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CommonTextInput from '../Components/CommonTextInput';
import CommonButton from '../Components/CommonButton';
import CommonView from '../Components/CommonView';
import { Images } from '../Constant/Images';
import { ScrollView } from 'react-native-gesture-handler';
import CheckBox from '../Components/CheckBox';


const Login = ({ navigation }) => {
 const [Email, setEmail] = useState('');
 const [EmailErr, setEmailErr] = useState('')
 const [Password, setPassword] = useState('');
 const [PassErr, setPassErr] = useState('')
 const [Error, setError] = useState('')


 const onSubmit=()=>{
  if (Email=='') {
    setEmailErr('HIII',Email)
    
  } else {
      setEmailErr('')
  }
  

  if (Password=='') {
     setPassErr('pss',Password)
  } else {
    setPassErr('')
  }



 }

  return (

    <View style={styles.mainContainer}>
      <StatusBar barStyle='dark-content' backgroundColor='#337CFF' />
      <View>
        <CommonView />
        <Image source={Images.Login} style={styles.image3} />
      </View>

      <View style={{flex:1}}>
        <Text style={styles.text1}>Log in</Text>
        <ScrollView>
          <View>
            <Text style={styles.text2}>Email Address/Username</Text>
            <CommonTextInput
            style1={{marginTop:16}}
              value={Email}
              placeholder='Email'
              style={styles.input}
              // error={Error.EmailErr}
              onChangeText={()=>{
                setEmail('');
                setEmailErr('')
                // setError(Error)

              }}
             
// style1={{borderBottomWidth:1}}
            />

            <CommonTextInput
              style={styles.inp}
              placeholder='Password'
              // secureTextEntry={hidepassword}
              // error={Error.PassErr}
              onChangeText={()=>{
                setPassword('')
                setPassErr('')
                // setError(Error)
              }}
            
              // passwordIcon={(hidepassword) ? require('../Assests/Image/closeeye.png') : require('../Assests/Image/eye.jpeg')}
            />
          </View>
          <View style={{flexDirection:'row',marginTop:21}}>
              <CheckBox 
              style={{marginLeft:33,marginTop:2.5}}/>
              <Text style={{marginLeft:9,color:'#337CFF',fontSize:12,fontWeight:'500'}}>Remember me</Text>
            <Text style={styles.text3}
              onPress={() => {
                navigation.navigate('ForgotPassword')
              }}>Forgot password?</Text>
          </View>





          <CommonButton
            title='Login Now'
            style={styles.btn}
            onPress={() => { onSubmit()}}
            // onPress={Validate}
          />

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.text4}>or</Text>
          </View>

          <View style={styles.image}>
            <TouchableOpacity onPress={() => { navigation.navigate('Cnt') }} >
              <Image source={Images.Apple}
                style={styles.apple}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('CreateProfile') }} >
              <Image source={Images.Google}
                style={styles.google} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 45 }}>
            <Text style={styles.text5}>Don't have an account?</Text>
            <Text style={styles.text6}
              onPress={() => { navigation.navigate('SignUp') }}
            > Sign Up</Text>
    <Text>{Error}</Text>
          </View>
          </ScrollView>

      </View>

    </View>

  )
}

export default Login
const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  image3: {
    position: 'absolute',
    marginTop: 83,
    alignSelf: 'center',
    height: 110,
    width: 135
  },
  text1: {
    fontSize: 30,
    fontWeight: '600',
    color: '#1E1E1E',
    marginStart: 30
  },
  text2: {
    marginTop: 30,
    marginStart: 30,
    fontSize: 15,
    fontWeight: '600',
    color: '#337CFF'
  },
  text3: {
    color: '#517FFF',
    fontWeight: '500',
    fontSize: 12,
    marginStart: '28%',
    // marginTop: 15
  },

  text4: {
    marginTop: 25,
    color: '#B1C1B1',
    fontSize: 16,
    fontWeight: '400'
  },
  input: {
    // marginTop: 16
  },
  image: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 28,
    alignItems: 'center',
  },
  apple: {
    height: 35,
    width: 29,
    marginHorizontal: 10
  },
  google: {
    height: 31,
    width: 30,
    marginHorizontal: 10
  },
  text5: {
    color: '#878787',
    fontWeight: '400',
    fontSize: 15
  },
  text6: {
    color: '#5063BF',
    fontWeight: '400',
    fontSize: 15
  }

})