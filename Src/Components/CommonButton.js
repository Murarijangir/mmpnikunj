import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CommonButton = ({
    onPress = () => { },
    title = '',
    style = {},
    style1 = {},
    value={},
    onValueCgange={},
}) => {
    return (
        <TouchableOpacity
            style={[styles.touch, { ...style }]}
            onPress={onPress}
            value={value}
            onValueChange={onValueCgange}
            
            >
            <Text
                style={[styles.text, { ...style1 }]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    touch: {
        justifyContent: 'center',
        backgroundColor: '#337CFF',
        borderRadius: 15,
        height: 52,
        marginTop: 35,
        marginHorizontal: 24
    },
    text: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '800'



    }

})
export default CommonButton