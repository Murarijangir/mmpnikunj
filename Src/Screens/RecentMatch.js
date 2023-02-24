import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import React from 'react'
import { Images } from '../Constant/Images'
import CommonArea from '../Components/CommonArea'

const RecentMatch = () => {
    return (
        <View style={{ flex: 1 }}>
            <CommonArea
                title='My Recent matches'
                source2={Images.Hembarg}
                style={styles.text}
            />
            <View style={styles.container}>
                <Text style={styles.text1}>
                    This is a list of people who have are looking to{"\n"}

                    send money from boston to London
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginHorizontal: 15, marginTop: 43 }}>
                    <View style={{ height: 1, borderWidth: 1, width: 121, borderColor: '#E8E6EA' }}></View>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: '#878787' }}>Today</Text>
                    <View style={{ height: 1, borderWidth: 1, width: 121, borderColor: '#E8E6EA' }}></View>
                </View>

                <View style={{}}>
                    {/* <Image source={Images.PhotoA} style={{position:'absolute',height:280,width:200,borderRadius:20}}/> */}
                    <ImageBackground source={Images.PhotoA} style={{ height: 280, width: 200,  }} />
                    <Image source={Images.PhotoAA} style={{ width: 200, height: 70, borderBottomLeftRadius: 15, borderBottomRightRadius: 15,  }} />
                    <Text style={{position:'absolute',marginBottom:50}}>Edwardo</Text>
                </View>




            </View>
        </View>
    )
}

export default RecentMatch
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 35,
        backgroundColor: '#EFF2F4',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    text: {
        fontSize: 16
    },
    text1: {
        // textAlign:'center',
        marginLeft: 33,
        marginTop: 30,
        fontSize: 14,
        fontWeight: '400',
        color: '#878787',
        lineHeight: 20
    }

})