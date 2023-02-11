import { View, Text, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CommonTextInput from '../Components/CommonTextInput'
import CommonButton from '../Components/CommonButton'
import { Images } from '../Constant/Images'
import CommonView from '../Components/CommonView'
import CheckBox from '../Components/CheckBox'
import Cnt from './Cnt'

const anil =[
    {
        Language : "India" ,
        src: require('../Assests/Image/India.png')
    },
    {
        Language : "Usa" ,
        src:require('../Assests/Image/Usa.png'),
    },
    {
        Language : "Canada"
    },
]

const SignUp = ({ navigation }) => {


    const [hidepassword, setHidepassword] = useState(true)
    const [hide, setHide] = useState(true)


    const [input, setInput] = useState({
        email: "",
        password: "",
        name: "",
        last: "",
        number: "",
        country: "",
        confirmPassword: "",

    })
    const [errors, setErrors] = useState({})

    const Validate = () => {
        let valid = true;
        if (!input.email) {
            handleError('Please enter email', 'email')
            valid = false;
        } else if (!input.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        )) {
            handleError('Please enter valid email', 'email')
        }
        if (!input.name) {
            handleError('Please enter name', 'name')
        }
        if (!input.last) {
            handleError('Please enter last name', 'last')
        }
        if (!input.number) {
            handleError('Please enter phone number', 'number');
        } else if (input.number.length < 10) {
            handleError('Please enter valid number','number');
        }
        if (!input.country) {
            handleError('Please enter country name', 'country')
        }
        if (!input.password) {
            handleError('Please enter password', 'password');
        } else if (input.password.length < 5) {
            handleError('Minimum password length of 5', 'password');
        } else if (input.password.length > 15) {
            handleError('Maximum password length of 15', 'password')
        }
        if (!input.confirmPassword) {
            handleError('Re type password same as password', 'confirmPassword');
        } else if (input.confirmPassword.length < 5) {
            handleError('Min password length of 5', 'confirmPassword');
        }
        else {
            navigation.navigate('TabNavigation')
        }
    }
    const handleOnChange = (text, input) => {
        setInput(prevState => ({ ...prevState, [input]: text }));
    };
    const handleError = (errorMessage, input) => {
        setErrors(prevState => ({ ...prevState, [input]: errorMessage }));
    };


    return (
        <View style={styles.mainContainer}>
            <StatusBar barStyle='dark-content' backgroundColor='#337CFF' />

            <View>
                <CommonView />
                <Image source={Images.Sign} style={styles.image3} />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.text1}>Sign Up</Text>
                <ScrollView>
                    <View>
                        <CommonTextInput
                            placeholder='First Name'
                            // value={name}
                            // onChangeText={SetName}
                            style={styles.input}
                            error={errors.name}
                            onChangeText={text => handleOnChange(text, 'name')}
                            onFocus={() => {
                                handleError(null, 'name')
                            }}

                        />
                        <CommonTextInput
                            placeholder='Last Name'
                            // onChangeText={Setlast}
                            // value={last}
                            error={errors.last}
                            onChangeText={text => handleOnChange(text, 'last')}
                            onFocus={() => {
                                handleError(null, 'last')
                            }}

                        />
                        <CommonTextInput
                            placeholder='Email Address'
                            // onChangeText={setEmail}
                            error={errors.email}
                            onChangeText={text => handleOnChange(text, 'email')}
                            onFocus={() => {
                                handleError(null, 'email')
                            }}

                        // value={email}
                        />
                        <CommonTextInput
                            placeholder='Phone Number'
                            error={errors.number}
                            onChangeText={text => handleOnChange(text, 'number')}
                            onFocus={() => {
                                handleError(null, 'number')
                            }}
                            keyboardType='numeric'
                        />
                        {/* <CommonTextInput
                            placeholder='Country'
                            error={errors.country}
                            onChangeText={text => handleOnChange(text, 'country')}
                            onFocus={() => {
                                handleError(null, 'country')
                            }}

                        /> */}
                        <Cnt
                        text={"Country"}
                        datas={anil}
                         
                        />
                        <CommonTextInput
                            placeholder='Password'
                            secureTextEntry={hidepassword}
                            onPress={() => { setHidepassword(!hidepassword) }}
                            error={errors.password}
                            onChangeText={text => handleOnChange(text, 'password')}
                            onFocus={() => {
                                handleError(null, 'password')
                            }}

                            // passwordIcon={(hidepassword)? source={require(Images.CloseEye)}:source={require(Images.Eye)}}
                            passwordIcon={(hidepassword) ? require('../Assests/Image/closeeye.png') : require('../Assests/Image/eye.jpeg')}
                        />
                        <CommonTextInput
                            placeholder='Confirm Password'
                            // onChangeText={setConPassword}
                            // value={conpassword}
                            secureTextEntry={hide}
                            onPress={() => { setHide(!hide) }}
                            error={errors.confirmPassword}
                            passwordIcon={(hide) ? require('../Assests/Image/closeeye.png') : require('../Assests/Image/eye.jpeg')}
                            onChangeText={text => handleOnChange(text, 'confirmPassword')}
                            onFocus={() => {
                                handleError(null, 'confirmPassword')
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', }}>


                        <CheckBox
                            style={{ marginTop: 23.5, marginLeft: 32 }} />
                        <Text style={styles.text3}>I Agree Terms and Conditions</Text>
                    </View>
                    <CommonButton
                        title='Submit Now'
                        style={styles.btn}
                        // onPress={() => { navigation.navigate('TabNavigation') }}
                        onPress={Validate}
                    />
                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>

                        <Text style={styles.text4}>or</Text>
                    </View>

                    <View style={styles.image}>
                        <TouchableOpacity >
                            <Image source={Images.Apple}
                                style={styles.apple} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={Images.Google}
                                style={styles.google} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20, marginTop: 60 }}>
                        <Text style={styles.text5}>Already have an account?</Text>
                        <Text style={styles.text6}
                            onPress={() => { navigation.navigate('Login') }}
                        > Login</Text>

                    </View>

                </ScrollView>
            </View>

        </View>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    image3: {
        position: 'absolute',
        marginTop: 87,
        alignSelf: 'center',
        height: 115,
        width: 108
    },
    text1: {
        fontSize: 30,
        fontWeight: '600',
        color: '#1E1E1E',
        marginStart: 30
    },
    input: {
        marginTop: 30,
        // borderTopWidth: 1
    },
    text3: {
        color: '#6399F9',
        fontWeight: '500',
        fontSize: 12,
        // marginStart: 65,
        marginTop: 22,
        marginLeft: 12
    },
    text4: {
        marginTop: 25,
        color: '#B1C1B1',
        fontSize: 16,
        fontWeight: '400'
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