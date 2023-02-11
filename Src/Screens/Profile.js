import { View, Text, StatusBar, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { Images } from '../Constant/Images'
import CommonArea from '../Components/CommonArea'
import CommonTouch from '../Components/CommonTouch'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import CommonProfile from '../Components/CommonProfile'
import CommonTextInput from '../Components/CommonTextInput'
import CommonButton from '../Components/CommonButton'

const Profile = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View style={{ flex: 1 }}>
            <CommonArea
                title={'Profile'}
                style={styles.text1}
                source2={Images.Hembarg}
            />
            <ScrollView>

                <View style={styles.container} >

                    <View style={styles.view1}>
                        <Image source={Images.Firoz} style={{ position: 'absolute', height: 74, width: 73, marginTop: 20, alignSelf: 'center' }} />
                        <Text style={{ alignSelf: 'center', marginTop: 105, color: '#1E1E1E', fontSize: 16, fontWeight: '700' }}>Firoz Khan</Text>
                    </View>

                    <View style={styles.view2}>

                        <Text style={{ margin: 20, fontSize: 16, fontWeight: '400', color: '#1E1E1E' }}>Personal Details</Text>
                        <ScrollView>

                            <CommonProfile
                                source={Images.Name}
                                title='Full Name'
                                // onPress={() => { navigation.navigate('CommonModal') }} 
                                onPress={() => setModalVisible(true)}
                            />
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    // Alert.alert('Modal has been closed.');
                                    setModalVisible(!modalVisible);
                                }}>
                                <View style={styles.centeredView1}>
                                    <View style={styles.modalView1}>
                                        <Text style={{ fontSize: 20, fontWeight: '700', color: '#444444', marginTop: 18, padding: 24 }}>Change your Name</Text>
                                        <CommonTextInput
                                            style={{ height: 52,borderColor:'#E4DFDF', borderWidth: 1, marginHorizontal: 8, borderRadius: 12, marginTop: 0 }}
                                            placeholder='First Name'
                                            
                                            style1={{borderBottomWidth:0,}}
                                            keyboardType='numeric' />
                                            <CommonTextInput
                                            style={{ height: 52,borderColor:'#E4DFDF', borderWidth: 1, marginHorizontal: 8, borderRadius: 12, marginTop: 18 }}
                                            placeholder='Last Name'
                                            // value={mobile}
                                            // onChangeText={setMobile}
                                            style1={{borderBottomWidth:0,}}

                                            keyboardType='numeric' />
                                        <CommonButton
                                            title='save'
                                            style={{ marginHorizontal: 24 ,marginTop:26}}
                                            onPress={() => setModalVisible(!modalVisible)} />
                                    </View>
                                </View>
                            </Modal>



                            <CommonProfile
                                source={Images.Email}
                                title='Email' />

                            <CommonProfile
                                source={Images.Phone}
                                title='Phone Number' />
                            <CommonProfile
                                source={Images.Flag}
                                title='Country' />
                            <CommonProfile
                                source={Images.Language}
                                title='Language' />
                        </ScrollView>

                    </View>

                    <View>

                        <CommonTouch style={{ marginTop: 6 }}
                            title='Social account'
                            source={Images.Social}
                            source1={Images.Greater}
                            onPress={() => { navigation.navigate('Social') }}
                        />

                        <CommonTouch style={{ marginBottom: 30 }}
                            title='Settings'
                            source={Images.Settings}
                            onPress={() => { navigation.navigate('Setting') }}
                            source1={Images.Greater}
                        />


                    </View>
                </View>
            </ScrollView>

        </View>

    )
}

export default Profile
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 35,
        backgroundColor: '#EFF2F4',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        // justifyContent:'center'
    },
    view1: {
        borderWidth: 1,
        marginTop: 24,
        height: hp('17.54%'),
        marginHorizontal: 24,
        borderRadius: 15,
        borderColor: '#E4E4E4',
        alignContent: 'center'
    },
    view2: {
        borderWidth: 1,
        height: hp('38.4%'),
        // height:314,
        borderRadius: 15,
        marginTop: 18,
        marginHorizontal: 24,
        borderColor: '#E4E4E4'
    },
    item: {
        // backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 2,
        marginHorizontal: 16,
        borderWidth: 1
    },
    title: {
        fontSize: 15,
        color: 'black'
    },
    centeredView1: {
        flex: 1,
        justifyContent: 'flex-end',
        // alignItems: 'center',
        marginTop: 30,
      },
      modalView1: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        height: 325,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
})
