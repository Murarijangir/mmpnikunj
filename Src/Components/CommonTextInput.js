import { View, TextInput, StyleSheet, TouchableOpacity, Image, Text } from 'react-native'
import React, { useState } from 'react'
import { Images } from '../Constant/Images'

const CommonTextInput = ({
  // value,
  // error,
  placeholder = '',
  onChangeText = () => { },
  style = {},
  secureTextEntry,
  passwordIcon,
  onPress = () => { },
  onPress1 = () => { },
  keyboardType = "default",
  icon = '',
  error = '',
  source,
  source2,
  style1 = {},
  onFocus = () => { },
  style2 = {},
  style4={},
}) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <View style={[ styles.container,{...style4}]}>

      <View style={[styles.view, { ...style1 }]}>
        <Image source2={source2} style={[styles.img, { ...style2 }]} />
        <TextInput
          placeholder={placeholder}
          // value={value}
          onChangeText={onChangeText}
          style={[styles.input, { ...style }]}
          placeholderTextColor='#878787'
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          source={source}
          onFocus={() => {
            onFocus();
            setIsFocused(true)
          }}
         
        />
        {/* <View style={{ marginTop: 5, marginEnd: 15}}> */}
          {icon ?
            // <View>
            <Image source={icon} style={style.image1}></Image>
            : null}
          {passwordIcon &&
            <TouchableOpacity style={{}}
              onPress={onPress}>
              <Image source={passwordIcon} style={styles.image2}>
              </Image>
            </TouchableOpacity>
          }
        {/* </View> */}
      </View>
      {error && (
        <Text style={{ color: 'red', marginHorizontal: 20 }}>{error}</Text>
      )}
    </View>

  )
}
const styles = StyleSheet.create({
  container:{
    marginHorizontal:16,
    // borderWidth:1
  },
  input: {
    marginTop: 10,
    height: 55,
    paddingStart: 14,
    flex: 1,

  },
  image1: {
    height: 20,
    width: 20,
    marginEnd:21
  },
  image2: {
    height: 20,
    width: 20,
    marginEnd:21
  },
  view: {
    flexDirection: 'row', 
    alignItems: 'center',
     borderColor: '#E0E5F2',
      borderBottomWidth: 1
  }
})
export default CommonTextInput