import { View, Text, StyleSheet, Modal } from 'react-native'
import React, { useState } from 'react'
import CommonArea from '../Components/CommonArea'
import { Images } from '../Constant/Images'
import CommonTouch from '../Components/CommonTouch'
import CommonButton from '../Components/CommonButton'
import CommonTextInput from '../Components/CommonTextInput'


const Setting = ({ navigation }) => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <CommonArea
        title={'Setting'}
        style={styles.text1}
        source2={Images.Back}
        onPress={() => { navigation.navigate('Profile') }}
      />
      <View style={styles.container}>
        <View>
          <CommonTouch
            style={{ marginTop: 6 }}
            title='Security'
            source={Images.Social}
            source1={Images.Greater}
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
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={{ fontSize: 20, fontWeight: '700', color: '#444444', marginTop: 18, padding: 24 }}>Change your password</Text>
                <CommonTextInput
                  style={{ height: 52, borderWidth: 1, marginHorizontal: 8, borderRadius: 12, marginTop: 0,borderColor:'#E4DFDF' }}
                  style1={{ borderBottomWidth: 0, }}

                  placeholder='Old Password' />
                <CommonTextInput
                  style1={{ borderBottomWidth: 0, }}

                  style={{ height: 52, borderWidth: 1, marginHorizontal: 8, borderRadius: 12, marginTop: 18,borderColor:'#E4DFDF' }}
                  placeholder='New Password' />
                <CommonTextInput
                  style={{ height: 52, borderWidth: 1, marginHorizontal: 8, borderRadius: 12, marginTop: 18 ,borderColor:'#E4DFDF'}}
                  placeholder='Confirm Password'
                  style1={{ borderBottomWidth: 0, }}
                />
                <CommonButton
                  title='save'
                  style={{ marginHorizontal: 24 }}
                  onPress={() => setModalVisible(!modalVisible)} />
              </View>
            </View>
          </Modal>
        </View>
        <CommonTouch
          title='Notifications'
          source={Images.Settings}
          onPress={() => { navigation.navigate('Notification') }}
          icon
        />
      </View>
    </View>
  )
}

export default Setting
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    backgroundColor: '#EFF2F4',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
    marginTop: 30,
  },
  modalView: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    height: 415,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})