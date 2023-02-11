import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Images } from '../Constant/Images'
import CommonSwitch from '../Components/CommonSwitch'
const CommonTouch = ({
    onPress = () => { },
    source,
    source1,
    title = '',
    title1='',
    style={},
    style1={},
    icon
}) => {
    return (
        <View style={style}>
            <TouchableOpacity style={styles.touch}
                onPress={onPress}
                >
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image source={source} style={[styles.image1,{...style1}]} 
                     resizeMode= 'contain'/>
                    <Text
                        style={styles.text}>
                        {title}
                    </Text>
                </View>
                <Image source={source1} style={{ height: 11, width: 6, resizeMode: 'contain', marginEnd: 25 }} />
                 <Text style={{marginHorizontal:5,fontSize:10,fontWeight:'400',color:'#1E1E1E'}}>{title1}</Text>
               {icon?
                 <CommonSwitch/> :null}

            </TouchableOpacity>
        </View>
    )
}

export default CommonTouch
const styles = StyleSheet.create({
    touch: {
        borderWidth: 0.25,
        marginTop: 18,
        marginHorizontal: 24,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:10
    },
    text: {
        fontSize: 16,
        fontWeight: '400',
        marginStart: 8,
        color:'#1E1E1E'
    },
    image1:{
        height:25,
        width:18,
        marginLeft:20,
        resizeMode:'contain'
    }
})