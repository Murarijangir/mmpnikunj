




// // import React from 'react';
// // import { TouchableHighlight, View, Text, StyleSheet, Button } from 'react-native';

// // const PostR =()=> {

// //   const[ isPress, setIsPress ] = React.useState(false);

// //   const touchProps = {
// //     activeOpacity: 1,
// //     underlayColor: 'black',                               
// //     style: isPress ? styles.btnPress : styles.btnNormal, 
// //     onHideUnderlay: () => setIsPress(false),
// //     onShowUnderlay: () => setIsPress(true),
// //     onPress: () => console.log('HELLO'),                
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Button 
// //       title='ggg'
// //       {...touchProps}/>
        
// //       <Button 
// //       title='ggg'
// //       {...touchProps}/>
        
      
// //     </View>
// //   );
// // }

// // var styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   btnNormal: {
// //     borderColor: 'blue',
// //     borderWidth: 1,
// //     borderRadius: 10,
// //     height: 30,
// //     width: 100,
// //   },
// //   btnPress: {
// //     borderColor: 'blue',
// //     borderWidth: 1,
// //     height: 30,
// //     width: 100,
// //   }
// // });
// // export default PostR
// import { View, Text } from 'react-native'
// import React from 'react'
// import CurrencyPicker from "react-native-currency-picker"

// const PostR = () => {

//   // const [show, setShow] = useState(false)
//   // const [currency, setCurrency] = useState('')
//     // const currencyPickerRef = undefined;

//     // use currencyPickerRef
//     // currencyPickerRef.open();
//     // currencyPickerRef.close();
    
//     <CurrencyPicker
   
//       // currencyPickerRef={(ref) => {currencyPickerRef = ref}}
//       enable={true}
//       darkMode={true}
//       currencyCode={"EUR"}
//       showFlag={true}
//       showCurrencyName={true}
//       showCurrencyCode={true}
//       onSelectCurrency={(data) => { console.log("DATA", data) }}
//       onOpen={() => {console.log("Open")}}
//       onClose={() => {console.log("Close")}}
//       showNativeSymbol={true}
//       showSymbol={false}
//       containerStyle={{
//           container: {},
//           flagWidth: 25,
//           currencyCodeStyle: {},
//           currencyNameStyle: {},
//           symbolStyle: {},
//           symbolNativeStyle: {}
//       }}
//       modalStyle={{
//           container: {},
//           searchStyle: {},
//           tileStyle: {},
//           itemStyle: {
//             itemContainer: {},
//             flagWidth: 25,
//             currencyCodeStyle: {},
//             currencyNameStyle: {},
//             symbolStyle: {},
//             symbolNativeStyle: {}
//           }
//       }}
//       title={"Currency"}
//       searchPlaceholder={"Search"}
//       showCloseButton={true}
//       showModalTitle={true}
//     />
// return(

//    <View><Text>hello</Text></View> 
// )
// }
// export default PostR



import { View, Text } from 'react-native'
import React from 'react'

const PostR = () => {
  return (
    <View>
      <Text>PostR</Text>
    </View>
  )
}

export default PostR




