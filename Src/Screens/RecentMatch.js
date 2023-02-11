import { View, Text, StyleSheet } from 'react-native'
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
    }
})