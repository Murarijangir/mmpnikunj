import { View, Text, StatusBar, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Images } from '../Constant/Images'
import CommonArea from '../Components/CommonArea'
import CommonButton from '../Components/CommonButton'

const DATA = [
    {
        id: '01',
        title: 'Edwardo',
        src: require('../Assests/Image/edwardo.png'),

    },
    {
        id: '02',
        title: 'Jasson',

        src: require('../Assests/Image/jasson.png'),

    },
    {
        id: '03',
        title: 'Kemod',
        src: require('../Assests/Image/kemod.png'),

    },
    {
        id: '04',
        title: 'Dasep',
        src: require('../Assests/Image/dasep.png'),

    },

];
const Item = ({ item }) => (
    <View style={styles.items}>
        <Image source={item.src} style={{ height: 46, width: 46, borderRadius: 25, alignSelf: 'center', }} />
        <Text style={styles.title}>{item.title}</Text>

    </View>
);

const Home = ({ navigation }) => {

    return (
        <View style={{ flex: 1 }}>
            <CommonArea
                title={'Exchanges'}
                // style={styles.text1}
                source2={Images.Hembarg}
                onPress={() => { navigation.navigate('Mypost') }}
            />
            <View style={styles.container} >
                <View style={{ flexDirection: 'row', marginTop: 24, marginStart: 40, }}>
                    <Text style={{ marginHorizontal: 5, color: '#1E1E1E' }}>From</Text>
                    <Text style={{ marginStart: 163, color: '#1E1E1E' }}>To</Text>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 4, }}>
                    <TouchableOpacity style={styles.Touch}>
                        <Text>India</Text>
                        <Image source={Images.DropDown} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ justifyContent: 'center' }}>
                        <Image source={Images.DoubleAr}
                            style={{ height: 17, width: 15,  }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Touch}>

                        <Text>USA</Text>
                        <Image source={Images.DropDown} />

                    </TouchableOpacity>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 21, }}>
                    <Image source={Images.IND} style={{ height: 50, width: 50 }} />
                    <TouchableOpacity style={{ justifyContent: 'center' }}>
                        <Image source={Images.DoubleAr}
                            style={{ height: 17, width: 15,  }} />
                    </TouchableOpacity>
                    <Image source={Images.USA} style={{ height: 50, width: 50 }} />

                </View>
                <CommonButton
                    title='Look for A Match'
                    style={{ marginHorizontal: 16, }}
                    style1={styles.btn}
                    // onPress={()=>{navigation.navigate('MatchFound')}}
                                onPress={() => { navigation.navigate('PostRR') }}

                />

                <Text style={styles.text}>Recent Matches</Text>

                <View style={{}}>
                    <FlatList
                        horizontal={true}

                        data={DATA}
                        renderItem={({ item }) =>
                            <Item item={item} />
                        }
                        keyExtractor={item => item.id}

                        showsHorizontalScrollIndicator={false}
                    />


                </View>
            </View>

        </View>

    )
}

export default Home
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 35,
        backgroundColor: '#EFF2F4',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    Touch: {
        height: 130,
        width: 130,
        borderRadius: 65,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: 'row'
    },
    btn: {
        fontSize: 15,
        // marginHorizontal: 16
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        color: '#000000',
        marginTop: 28,
        marginStart: 24
    },
    items: {
        marginTop: 17,
        // padding: 9,
        marginStart: 29,
        marginHorizontal: 9

    },
    title: {
        fontSize: 15,
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center'
        // flexDirection: 'row'
    },





})