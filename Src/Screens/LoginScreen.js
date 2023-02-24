import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import CommonTextInput from '../Components/CommonTextInput';
import CommonButton from '../Components/CommonButton';
import CommonView from '../Components/CommonView';
import { Images } from '../Constant/Images';
import { ScrollView } from 'react-native-gesture-handler';
import CheckBox from '../Components/CheckBox';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database'

import { GoogleSignin, statusCodes, } from '@react-native-google-signin/google-signin'; //here
import { LoginManager, AccessToken } from 'react-native-fbsdk';


const Login = ({ navigation }) => {

  const [hidepassword, setHidepassword] = useState(true)
  // const [input, setInput] = useState({
  //   email: "",
  //   password: "",
  // })
  // const [errors, setErrors] = useState({})

  // const Validate = () => {
  //   let valid = true;

  //   if (!input.email) {
  //     handleError('Please enter email', 'email')
  //     valid = false;
  //   } else if (!input.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  //   )) {
  //     handleError('Please enter valid email', 'email')
  //   }
  //   if (!input.password) {
  //     handleError('Please enter password', 'password');
  //   }
  //   else if (input.password.length < 5) {
  //     handleError('Minimum password length of 5', 'password');
  //   }
  //   else if (input.password.length > 15) {
  //     handleError('Maximum password length of 15', 'password')
  //   }
  //   else {
  //     navigation.navigate('TabNavigation')
  //   }
  // }
  // const handleOnChange = (text, input) => {
  //   setInput(prevState => ({ ...prevState, [input]: text }));
  // };
  // const handleError = (errorMessage, input) => {
  //   setErrors(prevState => ({ ...prevState, [input]: errorMessage }));
  // };
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [message, setMessage] = useState('')
  const [loggedIn, setloggedIn] = useState(false)
  const [userInfo, setuserInfo] = useState([])

  const handleLogin = async () => {
    try {
      if (email.length > 0 && password.length > 0) {

        const isUserLogin = await auth().signInWithEmailAndPassword(
          email,
          password
        );
        setMessage('');
        console.log(isUserLogin);
        navigation.navigate("TabNavigation")
      } else {
        alert('please enter all data')
      }
    } catch (err) {
      console.log(err);
    }
  }

  // facebook authenticati0oon


  const facebookLogin = async () =>{
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        throw 'Something went wrong obtaining access token';
      }
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
      return auth().signInWithCredential(facebookCredential);
    } catch (error) {
      alert(error);
    }
  }

  GoogleSignin.configure({
    webClientId:
      // '260759292128-4h94uja4bu3ad9ci5qqagubi6k1m0jfv.apps.googleusercontent.com',
      '225968973641-tsn73c6d9n1b73a9617fbslnb06sjn3i.apps.googleusercontent.com'
  });


    const googleLogin=async()=> {
      try{
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
      }catch (error){
        alert(error)
      }
    }

  // google login
  // const googleLogin = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const { accessToken, idToken } = await GoogleSignin.signIn();
  //     setloggedIn(true);
  //     navigation.navigate('TabNavigation')
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {

  //       alert('Cancel');
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       alert('Signin in progress');
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       alert('PLAY_SERVICES_NOT_AVAILABLE');
  //     } else {
  //     }
  //   }
  // };


  //google login

  // useEffect(() => {

  //   GoogleSignin.configure()

  // }, [])

  // const googleLogin = async () => {
  //   try {
  //       await GoogleSignin.hasPlayServices();
  //       const userInfo = await GoogleSignin.signIn();
  //       navigation.navigate("TabNavigation")

  //       console.log("user info", userInfo);
  //   } catch (error) {
  //       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //           // user cancelled the login flow
  //           console.log(error);
  //       } else if (error.code === statusCodes.IN_PROGRESS) {
  //           // operation (e.g. sign in) is in progress already
  //           console.log(error);

  //       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //           // play services not available or outdated
  //           console.log(error);

  //       } else {
  //           // some other error happened
  //           console.log(error);

  //       }
  //   }
  // };



  return (

    <View style={styles.mainContainer}>
      <StatusBar barStyle='dark-content' backgroundColor='#337CFF' />
      <View>
        <CommonView />
        <Image source={Images.Login} style={styles.image3} />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.text1}>Log in</Text>
        <ScrollView>
          <View>
            <Text style={styles.text2}>Email Address/Username</Text>

            <CommonTextInput
              style1={{ marginTop: 16 }}
              placeholder='Email'
              style={styles.input}
              // error={errors.email}
              value={email}
              onChangeText={value => setEmail(value)}


            // onChangeText={text => handleOnChange(text, 'email')}
            // onFocus={() => {
            //   handleError(null, 'email')
            // }}
            />
            <CommonTextInput
              style={styles.inp}
              placeholder='Password'
              secureTextEntry={hidepassword}
              onPress={() => { setHidepassword(!hidepassword) }}
              // error={errors.password}
              value={password}
              onChangeText={value => setpassword(value)}


              // onChangeText={text => handleOnChange(text, 'password')}
              // onFocus={() => {
              //   handleError(null, 'password')
              // }}
              passwordIcon={(hidepassword) ? require('../Assests/Image/closeeye.png') : require('../Assests/Image/eye.jpeg')}
            />


          </View>
          <View style={{ flexDirection: 'row', marginTop: 21 }}>
            <CheckBox
              style={{ marginLeft: 33, marginTop: 2.5 }} />
            <Text style={{ marginLeft: 9, color: '#337CFF', fontSize: 12, fontWeight: '500' }}>Remember me</Text>
            <Text style={styles.text3}
            onPress={() => {
              navigation.navigate('ForgotPassword')
            }}
            >Forgot password?</Text>
          </View>


          <CommonButton
            title='Login Now'
            style={styles.btn}
            // onPress={Validate}
            onPress={() => handleLogin()}
          />
          <Text>{message}</Text>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.text4}>or</Text>
          </View>

          <View style={styles.image}>
            <TouchableOpacity
            onPress={facebookLogin}
            //  onPress={() => { navigation.navigate('Cnt') }}
            >
              <Image source={Images.Apple}
                style={styles.apple}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={googleLogin}
            >
              <Image source={Images.Google}
                style={styles.google} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 45 }}>
            <Text style={styles.text5}>Don't have an account?</Text>
            <Text style={styles.text6}
              onPress={() => { navigation.navigate('SignUp') }}
            > Sign Up</Text>
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