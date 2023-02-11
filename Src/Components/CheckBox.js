

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React, { useState } from 'react'

import { Images } from '../Constant/Images'



const CheckBox = ({ btn_text,style={} }) => {

    const [clicked, setClicked] = useState(true)



    return (

        <View style={[styles.view,{...style}]}>

            <View style={{ flexDirection: "row" }}>

                <TouchableOpacity
activeOpacity={1}
                    onPress={() => { setClicked(!clicked) }}

                    style={{  }}

                >

                    {clicked ?

                        <Image source={Images.CheckBtn} style={{ height: 16, width: 16, }} />

                        :

                        <Image source={Images.UnCheck} style={{ height: 16, width: 16, }} />

                    }

                </TouchableOpacity>

                {/* <Text style={{ paddingHorizontal: 5, alignSelf: "center" }}>{btn_text}</Text> */}

            </View>

        </View>

    )

}



export default CheckBox



const styles = StyleSheet.create({})