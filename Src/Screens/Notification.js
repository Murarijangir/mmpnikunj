import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import CommonArea from '../Components/CommonArea'
import { Images } from '../Constant/Images'
import CommonTouch from '../Components/CommonTouch'

const DATA = [
  {
    id: '01',
    title: 'Edwardo',
    src: require('../Assests/Image/GroupA.png'),
    status: 'For authorization',
  },
  {
    id: '02',
    title: 'Jasson',
    src: require('../Assests/Image/GroupB.png'),
    status: 'Payment succsful for fees',
  },
  {
    id: '03',
    title: 'Kemod',
    src: require('../Assests/Image/GroupC.png'),
    status: 'Any match found etc',
  },
  {
    id: '04',
    title: 'Dasep',
    src: require('../Assests/Image/GroupD.png'),
    status: 'Payment successful for fees',
  },
  {
    id: '05',
    title: 'Edwardo',
    src: require('../Assests/Image/GroupA.png'),
    status: 'Payment received',
  },
  {
    id: '06',
    title: 'Jasson',
    src: require('../Assests/Image/GroupB.png'),
    status: 'Any match found etc',
  },
  {
    id: '07',
    title: 'Kemod',
    src: require('../Assests/Image/GroupC.png'),
    status: 'Any match found etc',
  },
  {
    id: '08',
    title: 'Dasep',
    src: require('../Assests/Image/GroupD.png'),
    status: 'For authorization'
  },

];
const Item = ({ item,onPress }) => (
  <TouchableOpacity style={styles.items}>
    <View style={{ flex: 1, height: 91, justifyContent: 'center', }}>
      <Image source={item.src} style={{ height: 57, width: 57, }} />
    </View>
    <View style={{ borderBottomWidth: 1,borderBottomColor:'#C9C9C9', flex: 5, height: 91, justifyContent: 'center',marginLeft:9 }}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.title1}>{item.status}</Text>
    </View>
  </TouchableOpacity>
);

const Notification = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <CommonArea
        title={'Notification'}
        style={styles.text1}
        source2={Images.Back}
        onPress={() => { navigation.navigate('Profile') }}
      />
      <View style={styles.container}>
        <FlatList
          // horizontal={true}

          data={DATA}
          renderItem={({ item }) =>
            <Item item={item} />
          }
          keyExtractor={item => item.id}

        // showsHorizontalScrollIndicator={false}
        />

      </View>
    </View>
  )
}

export default Notification
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    backgroundColor: '#EFF2F4',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  items: {
    flexDirection: 'row',
    // marginTop:5,
    height: 91,
    marginHorizontal: 24,

  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: '#1E1E1E',
  },
  title1:{
    fontSize:12,
    fontWeight:'350',
    color:'#1E1E1E'
  }
})