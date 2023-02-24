import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import CommonArea from '../Components/CommonArea'
import { Images } from '../Constant/Images'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import CommonButton from '../Components/CommonButton'

const PostR = ({ navigation }) => {
    const [show, setShow] = useState(true)
    // const [active, setActive] = useState(true)
    const onChange= () => {
        setShow(!show)
    }

    return (
        <View style={{ flex: 1 }}>
            <CommonArea
                title='Post Requirement'
                source2={Images.Hembarg}
                style={styles.header} />
<ScrollView>
            <View style={styles.container}>
                <View style={{ marginTop: 30, flexDirection: 'row',padding:3, marginHorizontal: 33, alignItems: 'center', borderRadius: 10, justifyContent: 'space-evenly',backgroundColor:'#EBEBEB' }}>
                    <CommonButton
                        style={{ padding:10,width:'50%', marginTop: 0, marginHorizontal: 0,backgroundColor: show?  "#517FFF":"#EBEBEB" }}
                        title='Send Money'
                        style1={{ fontSize: 14, fontWeight: '400' ,color: show?"#FFF0F0": "#969393" }}
                        onPress={() => { onChange(true) }}
                    // onPress={handleClick}

                    />
                    <CommonButton style={{ padding:10, width:'50%', marginTop: 0, marginHorizontal: 0, backgroundColor:  show? "#EBEBEB": "#517FFF"  }}
                        title='Recieve Money'
                        style1={{ fontSize: 14, fontWeight: '400',color: show? "#969393":"#FFF0F0"  }}
                        onPress={() => { onChange(false) }}
                    // style={{backgroundColor:'#FFFFFF'}}
                    />
                </View>




                {show ?

                    <View>
                        <Text style={styles.text}>Where do you want to Send Money</Text>

                        <Text style={styles.text1}>From City</Text>
                        <View style={styles.view1}>
                            <TextInput
                                style={styles.input} />
                            <TouchableOpacity
                                style={styles.touch}
                            >
                                <Image source={Images.DropIcon} style={{ height: 7, width: 13 }} />
                            </TouchableOpacity>

                        </View>

                        <Text style={styles.text2}>To City</Text>
                        <View style={styles.view1}>
                            <TextInput
                                style={styles.input} />
                            <TouchableOpacity
                                style={styles.touch}
                            >
                                <Image source={Images.DropIcon} style={{ height: 7, width: 13 }} />
                            </TouchableOpacity>

                        </View>


                        <View>
                            <Text style={styles.text3}>Select Country in which you need to send</Text>
                            <View style={{ flexDirection: 'row', marginHorizontal: 28, justifyContent: 'space-between' }}>
                                <TouchableOpacity style={styles.currency}>
                                    <Text>USD</Text>
                                    <Image source={Images.DropIcon} style={{ height: 7, width: 13 }} />

                                </TouchableOpacity>
                                <TouchableOpacity style={{ justifyContent: 'center' }}>
                                    <Image source={Images.DoubleAr} style={{ height: 17, width: 15 }} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.currency}>
                                    <Text>INR</Text>
                                    <Image source={Images.DropIcon} style={{ height: 7, width: 13 }} />

                                </TouchableOpacity>
                            </View>
                            <CommonButton
                                title='Submit Now'
                                style={{ marginHorizontal: 16, marginTop:113,marginBottom:15, }}
                                style1={{ fontSize: 16, fontWeight: '800' }}
                                onPress={() => { navigation.navigate('PostR') }} 
                                />
                        </View>
                    </View>

                    :
                    <View>
                        <Text style={styles.text}>Where do you want to Recieve Money</Text>

                        <Text style={styles.text1}>From City</Text>
                        <View style={styles.view1}>
                            <TextInput
                                style={styles.input} />
                            <TouchableOpacity
                                style={styles.touch}
                            >
                                <Image source={Images.DropIcon} style={{ height: 7, width: 13 }} />
                            </TouchableOpacity>

                        </View>

                        <Text style={styles.text2}>To City</Text>
                        <View style={styles.view1}>
                            <TextInput
                                style={styles.input} />
                            <TouchableOpacity
                                style={styles.touch}
                            >
                                <Image source={Images.DropIcon} style={{ height: 7, width: 13 }} />
                            </TouchableOpacity>

                        </View>

                        <Text style={styles.text3}>Select Country in which you need to recieve</Text>
                        <View style={{ flexDirection: 'row', marginHorizontal: 28, justifyContent: 'space-between' }}>
                            <TouchableOpacity style={styles.currency}>
                                <Text>USD</Text>
                                <Image source={Images.DropIcon} style={{ height: 7, width: 13 }} />

                            </TouchableOpacity>
                            <TouchableOpacity style={{ justifyContent: 'center' }}>
                                <Image source={Images.DoubleAr} style={{ height: 17, width: 15 }} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.currency}>
                                <Text>INR</Text>
                                <Image source={Images.DropIcon} style={{ height: 7, width: 13 }} />

                            </TouchableOpacity>
                        </View>
                        <CommonButton
                            title='Submit Now'
                            style={{ marginHorizontal: 16, marginTop: 113,marginBottom:15 }}
                            style1={{ fontSize: 16, fontWeight: '800' }} />

                    </View>
                }

            </View>
            </ScrollView>
        </View>
    )
}

export default PostR
const styles = StyleSheet.create({
    header: {
        fontSize: 16,
        fontWeight: '400'
    },
    container: {
        flex: 1,
        marginTop: 35,
        backgroundColor: '#EFF2F4',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        // justifyContent:'center'
    },
    text: {
        fontWeight: '500',
        fontSize: 15,
        color: '#000000',
        marginTop: 40,
        marginStart: 28
    },
    view1: {
        backgroundColor: '#FFFFFF',
        height: 42,
        marginHorizontal: 28,
        flexDirection: 'row',
        marginTop: 6,
        borderRadius: 10
    },
    text1: {
        marginHorizontal: 32,
        marginTop: 38,
        color: '#337FFF',
        fontWeight: '400',
        fontSize: 13
    },
    input: {
        flex: 5,
        paddingLeft: 20
        // borderWidth:1
    },
    touch: {
        flex: 1,
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text2: {
        marginHorizontal: 32,
        marginTop: 26,
        color: '#337FFF',
        fontWeight: '400',
        fontSize: 13
    },
    text3: {
        marginHorizontal: 32,
        marginTop: 24,
        color: '#337CFF',
        fontSize: 13,
        fontWeight: '400'
    },
    currency: {
        flexDirection: 'row',
        marginTop: 6,
        alignItems: 'center',
        height: 42,
        backgroundColor: '#FFFFFF',
        width: '45%',
    // paddingHorizontal:100,
        justifyContent: 'space-around',
        borderRadius: 10
    }

})