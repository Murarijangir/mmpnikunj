import {
  View, Text, StyleSheet, Modal, Alert, Pressable, TouchableOpacity, Image
} from 'react-native'
import React, { useState } from 'react'
import CommonArea from '../Components/CommonArea'
import { Images } from '../Constant/Images'
import CommonTouch from '../Components/CommonTouch'
import CommonButton from '../Components/CommonButton'
import CommonTextInput from '../Components/CommonTextInput'
// import CommonModal from '../Components/CommonModal'
import CommonSwitch from '../Components/CommonSwitch'


const Social = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [modalVisible1, setModalVisible1] = useState(false);
  const [mobile, setMobile]= useState("")


  return (

    <View style={{ flex: 1 }}>
      <CommonArea
        title={'Social Account'}
        style={styles.text1}
        source2={Images.Back}
        onPress={() => { navigation.navigate('Profile') }}
      />
      <View style={styles.container}>
        <View>
<View>
          <CommonTouch
            style={{ marginTop: 6 }}
            title='Whatsapp'
            source={Images.Whatsapp}
            style1={styles.wtp}
            onPress={() => setModalVisible1(true)}
            icon
            title1='Public'
          />
          {/* <CommonSwitch/> */}
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible1}
            onRequestClose={() => {
              // Alert.alert('Modal has been closed.');
              setModalVisible1(!modalVisible1);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image source={Images.Whatsapp} style={{ alignSelf: 'center', marginTop: 30, height: 110, width: 110 }} />
                <Text style={{ textAlign: 'center', fontSize: 18, marginTop: 30, fontWeight: '400', color: '#878787S' }}>
                  is your whatsapp number same as{"\n"} actual number?</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 22 }}>
                  <CommonButton
                    style={styles.btn}
                    title='No'
                    // style={{marginHorizontal:24}}
                    onPress={() => setModalVisible1(!modalVisible1)} />
                  <CommonButton
                    title='Yes'
                    style={styles.btn}
                    // style={{marginHorizontal:24}}
                    onPress={() => { navigation.navigate('WhatsappVer') }} />
                </View>
              </View>
            </View>
          </Modal>
        </View>
        <View>
          <CommonTouch
            title='Telegram'
            source={Images.Telegram}
            style1={styles.wtp}
            onPress={() => setModalVisible(true)}
            icon
            title1='Public'
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              // Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView1}>
              <View style={styles.modalView1}>
                <Text style={{ fontSize: 20, fontWeight: '700', color: '#444444', marginTop: 18, padding: 24 }}>Telegram</Text>




                <CommonTextInput
                 style={{borderWidth:1,borderRadius:12,padding:16,marginHorizontal:8,borderColor:'#E4DFDF'}}
                 style1={{borderBottomWidth:0,}}
                  placeholder='Mobile Number/User name' 
                  value={mobile}
                  onChangeText={setMobile}
                  keyboardType='numeric'
                  />
                  
                <CommonButton
                  title='save'
                  style={{ marginHorizontal: 24 }}
                  onPress={() => setModalVisible(!modalVisible)} />
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>

  )
}

export default Social
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:35,
    backgroundColor: '#EFF2F4',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  wtp: {
    height: 29,
    width: 29
  },
  centeredView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 192,
    marginHorizontal: 24
  },
  modalView: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    height: 333,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView1: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
    marginTop: 30,
  },
  modalView1: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    height: 270,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btn: {
    width: 152,
    alignSelf: 'center'
  }
})