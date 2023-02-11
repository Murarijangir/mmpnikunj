import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CommonArea from '../Components/CommonArea'
import { Images } from '../Constant/Images'
import CommonTextInput from '../Components/CommonTextInput'
import CommonButton from '../Components/CommonButton'
const AddCard = ({navigation}) => {
  return (

    <View style={{ flex: 1 }}>
      <CommonArea
        title='Add New Card'
        source2={Images.Back}
        style={styles.text}
        onPress={()=>{navigation.navigate('PaymentManagement')}}
      />
      <View style={styles.container}>
        <Text style={styles.add}>Add New Card</Text>

        <CommonTextInput
          placeholder='Card Number'
          style={styles.input} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <CommonTextInput
            placeholder='Valid Thru'
            style={styles.input1}
          />

          <CommonTextInput
            placeholder='CVV'
            style={styles.input1}
            keyboardType='numeric' />
        </View>
        <CommonTextInput
          placeholder='Card Holder Name'
          style={styles.input} />


      <CommonButton
      title='Save'
      style={styles.btn} 
      style1={styles.txt}
      />
      </View>

    </View>
  )
}

export default AddCard
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    backgroundColor: '#EFF2F4',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  text: {
    fontSize: 20
  },
  add: {
    fontSize: 20,
    fontWeight: '500',
    color: '#444444',
    marginLeft: 24,
    marginTop: 24,

  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 8,
    borderColor: '#E4E4E4',
    paddingStart: 25,
    marginTop: 20
  },
  input1: {
    borderWidth: 1,
    width: 155,
    borderRadius: 12,
    paddingStart: 25,
    marginTop: 20,
    marginHorizontal: 8
  },
  btn:{
marginHorizontal:24
  },
  txt:{
    fontSize:16
  }
})