import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import CommonArea from '../Components/CommonArea'
import { Images } from '../Constant/Images'
import CommonButton from '../Components/CommonButton'
import CommonMoney from '../Components/CommonMoney'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const DATA = [
  {
    id: '01',
    title: 'From',
    name: 'Bostan',
    title1: 'To',
    name1: 'London',
    title2: 'In Currency',
    src: require('../Assests/Image/background.png'),
    src0: require('../Assests/Image/send.png'),
    src1: require('../Assests/Image/Usa.png'),
    src3: require('../Assests/Image/India.png'),
    src2: require('../Assests/Image/Arrowd.png'),
    title3: 'USD',
    title4: 'INR',
  },
  {
    id: '02',
    title: 'From',
    name: 'Bostan',
    title1: 'To',
    name1: 'London',
    title2: 'In Currency',
    src: require('../Assests/Image/background.png'),
    src0: require('../Assests/Image/send.png'),
    src1: require('../Assests/Image/Usa.png'),
    src3: require('../Assests/Image/India.png'),
    src2: require('../Assests/Image/Arrowd.png'),
    title3: 'USD',
    title4: 'INR',
  },
  {
    id: '03',
    title: 'From',
    name: 'Bostan',
    title1: 'To',
    name1: 'London',
    title2: 'In Currency',
    src: require('../Assests/Image/background.png'),
    src0: require('../Assests/Image/send.png'),
    src1: require('../Assests/Image/Usa.png'),
    src3: require('../Assests/Image/India.png'),
    src2: require('../Assests/Image/Arrowd.png'),
    title3: 'USD',
    title4: 'INR',
  },
];
const Item = ({ item, onPress }) => (
  <TouchableOpacity style={styles.touch}>

    <View style={{ flex: 1, }}>
      <View style={{ marginStart: 21 }}>
        <View >
          <Image source={item.src} style={styles.src} />

          <Image source={item.src0} style={styles.src0} />
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.name}>{item.name}</Text>
        <CommonButton
          title='Close Post'
          style={styles.close}
          style1={styles.btntext} />
      </View>
    </View>

    <View style={{ flex: 1, marginStart: 11 }}>
      <Text style={styles.title1}> {item.title1}</Text>
      <Text style={styles.name}>{item.name1}</Text>


      <CommonButton
        title='Delete Post'
        style={styles.delete}
        style1={styles.btntext}
      />
    </View>

    <View style={{ flex: 1.40, marginRight: 10 }}>
      <Text style={styles.currency}>{item.title2}</Text>
      <View style={styles.view3}>
        <Image source={item.src1} style={styles.flagImg} />
        <Text style={styles.curtext}>{item.title3}</Text>
        <Image source={item.src2} style={{ height: 10, width: 10 }} />
        <Image source={item.src3} style={styles.flagImg} />
        <Text style={styles.curtext}>{item.title4}</Text>

      </View>
    </View>
  </TouchableOpacity>
);

const Mypost = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <CommonArea
        title='My Posts'
        source2={Images.Hembarg}
        style={styles.header} />
      <View style={styles.container}>
        <View style={styles.buttonback}>
          <CommonButton
            title='Send Money'
            style={styles.commonbotton}
            style1={styles.btntxt} />
          <CommonButton
            title='Recieve Money'
            style={styles.commonbotton}
            style1={styles.btntxt}
            onPress={() => { navigation.navigate('PostRR') }} />
        </View>
        <View>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item item={item} />
            }
            keyExtractor={item => item.id}
          >
          </FlatList>
        </View>

      </View>
    </View>
  )
}

export default Mypost
const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    fontWeight: '400'
  },
  container: {
    flex: 1,
    marginTop: 35,
    backgroundColor: '#EFF2F4',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  buttonback: {
    marginTop: 30,
    flexDirection: 'row',
    height: hp('5.1%'),
    backgroundColor: '#EBEBEB',
    marginHorizontal: 30,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'space-evenly'
  },
  commonbotton: {
    height: hp('4.5%'),
    width: wp('40%'),
    marginTop: 0,
    marginHorizontal: 0
  },
  btntxt: {
    fontSize: 14,
    fontWeight: '400'
  },
  touch: {
    flexDirection: 'row',
    marginHorizontal: 15,
    backgroundColor: '#FFFFFF',
    height: hp('22%'),
    marginTop: 13,
    borderRadius: 10
  },
  src: {
    height: 31,
    width: 31, marginTop: 18,
  },
  src0: {
    height: 14,
    width: 14,
    marginLeft: 8,
    position: 'absolute',
    marginTop: 27
  },
  title: {
    marginTop: 18,
    color: '#337CFF',
    fontSize: 10,
    fontWeight: '500'
  },
  name: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '400'
  },
  close: {
    marginTop: 25,
    marginHorizontal: 0,
    height: 31,
    width: wp('22%'),
    borderRadius: 5
  },
  btntext: {
    fontSize: 12,
    fontWeight: '500'
  },
  title1: {
    marginTop: 67,
    color: '#337CFF',
    fontSize: 10,
    fontWeight: '500',
  },
  delete: {
    marginTop: 25,
    marginHorizontal: 0,
    height: 31,
    width: wp('25%'),
    borderRadius: 5,
    backgroundColor: '#F47878'
  },
  currency: {
    marginTop: 67,
    color: '#337CFF',
    fontSize: 10,
    fontWeight: '500'
  },
  view3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginStart: 0,
    marginTop: 6
  },
  flagImg: {
    height: 16,
    width: 16
  },
  curtext: {
    fontSize: 12,
    fontWeight: '400',
    color: '#1E1E1E'
  }
})