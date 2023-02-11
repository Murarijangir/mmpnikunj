  
 import { View, Text ,StyleSheet,Modal} from 'react-native'
 import React, { useState } from 'react'
 import CommonTouch from './CommonTouch'
import { Images } from '../Constant/Images'
import CommonButton from './CommonButton'
import CommonTextInput from './CommonTextInput'

 
 const CommonModal = ({
  
  onPress = () => { },
  style={}

}) => {
  const [modalVisible,setModalVisible]=useState(false)
   return (
    
  <View>
          <CommonTouch
           
            onPress={() => setModalVisible(true)}
         
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView1}>
              <View style={styles.modalView1}>
                <Text style={{ fontSize: 20, fontWeight: '750', color: '#444444', marginTop: 18, padding: 24 }}>Telegram</Text>
               
                <CommonTextInput/>
                
               
               
                <CommonButton
                  onPress={() => setModalVisible(!modalVisible)} />
              </View>
            </View>
          </Modal>
        </View>

)
 }
export default CommonModal 
const styles=StyleSheet.create({
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
})