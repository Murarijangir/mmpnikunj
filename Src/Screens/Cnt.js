// import { View, Text } from 'react-native'
// import React from 'react'

// const Cnt = () => {
//   return (
//     <View>
//       <Text>Cnt</Text>
//     </View>
//   )
// }

// export default Cnt



// import React from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native';
// // import { CallingCodePicker } from 'rn-country-code-picker';
// // import { Country } from 'react-native-country-picker-modal';
// import {CountryPicker,Country} from 'rn-country-picker';



// const App = () => (
//   <SafeAreaView style={styles.container}>
//     <CountryPicker
//       onValueChange={() => {}}
//       style={styles.countryCodePicker}
//       togglerContainerStyle={styles.togglerContainerStyle}
//       togglerLabelStyle={styles.togglerLabelStyle}
//       searchInputStyle={styles.searchInputStyle}
//       pickerItemLabelStyle={styles.pickerItemLabelStyle}
//       pickerItemContainerStyle={styles.pickerItemContainerStyle}
//     />
//   </SafeAreaView>
// );
// export default App;
// const styles = StyleSheet.create({
//   container: {flex: 1, justifyContent: 'center'},
//   countryCodePicker: {
//     alignSelf: 'center',
//   },
//   togglerContainerStyle: {
//     backgroundColor: '#baffc0',
//     borderRadius: 10,
//     padding: 5,
//   },
//   togglerLabelStyle: {
//     fontSize: 20,
//   },
//   searchInputStyle: {
//     borderColor: '#888888',
//     borderWidth: 1,
//     height: 36,
//     borderRadius: 10,
//     paddingHorizontal: 10,
//   },
//   pickerItemLabelStyle: {
//     marginLeft: 10,
//     marginVertical: 10,
//     alignSelf: 'center',
//   },
//   pickerItemContainerStyle: {
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignSelf: 'center',
//   },
// });


// 


// import { View, Text } from 'react-native'
// import React from 'react'

// const Cnt = () => {
//   return (
//     <View>
//       <Text>Cnt</Text>
//     </View>
//   )
// }

// export default Cnt

import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    Modal,
    ScrollView,
    StyleSheet,
Alert
} from 'react-native';

import React, { useRef, useState } from 'react';

const Cnt = ({
        text = {},
        datas,
        src={}
        // labelText={},
    }) => {
    const [modalVisible, setModalVisible] = useState(true);
    const [search, setSearch] = useState('');
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState(datas);
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectImage,setSelectImage]= useState('')
    const searchRef = useRef();
    const onSearch = search => {
        if (search !== '') {
            let tempData = data.filter(item => {
                return item.Language.toLowerCase().indexOf(search.toLowerCase()) > -1;
            });
            setData(tempData);
        } else {
            setData(datas);

        }
    };
    return (
        <View style={{marginHorizontal:16, borderColor: '#E0E5F2', borderBottomWidth: 1}}>
            <TouchableOpacity
                style={styles.TouchableOpacity}
                onPress={() => {
                    setClicked(!clicked);
                }}>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    <Image source={selectImage == '' ? src : selectImage} style={{height:10,width:20}}/>
     
                <Text style={{ color:'black',marginStart:10  }}>
                    {selectedLanguage == '' ? text : selectedLanguage}
                </Text>

                </View>
                <View style={{flex:1,alignItems:'flex-end',marginEnd:9}}>
                {clicked ? 
                (
                    <Image
                        source={require('../Assests/Image/Usa.png')}
                        style={styles.updateImage}
                    />
                ) : (
                    <Image
                        source={require('../Assests/Image/drop.png')}
                        style={styles.updateImage}
                    />
                )}
                </View>
            </TouchableOpacity>





            {clicked ? (
                <Modal
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.component}>
                        <TextInput
                            placeholder="Search.."
                            value={search}
                            ref={searchRef}
                            onChangeText={txt => {
                                onSearch(txt);
                                setSearch(txt);
                            }}
                            style={styles.search}
                        />
                        <FlatList
                            data={data}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        style={{
                                            width: "100%",
                                            alignSelf: 'center',
                                            height: 40,
                                            padding: "2%",
                                            justifyContent: 'center',
                                            borderBottomWidth: 0.5,
                                            borderColor: '#8e8e8e',
                                        }}
                                        onPress={() => {
                                            setSelectedLanguage(item.Language);
                                            setSelectImage(item.src)
                                            setClicked(!clicked);
                                            onSearch('');
                                            setSearch('');
                                            setModalVisible(true)
                                        }}>
                                        <Text style={{ fontWeight: '600' }}>{item.Language}</Text>
                                             <Image source={item.src} style={{ height: 10, width: 10, }} />

                                    </TouchableOpacity>
                                );
                            }}
                        />
                        <TouchableOpacity
                            style={[styles.button]}
                            onPress={() => setClicked(!clicked)}>
                            <Text style={styles.textStyle}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            ) : null
            }
        </View>
    );
};



export default Cnt;

const styles = StyleSheet.create({

    search: {

        width: '90%',

        height: 50,

        alignSelf: 'center',

        borderWidth: 0.2,

        borderColor: '#8e8e8e',

        borderRadius: 7,

        marginTop: 10,

        paddingLeft: 20,

    },

    TouchableOpacity: {

        // width: 327,
        flex:1,
        height: 55,

        borderRadius: 10,

        // borderWidth: 0.5,

        // alignSelf: 'center',

        marginTop: 10,

        flexDirection: 'row',

        // justifyContent: 'space-between',

        alignItems: 'center',

        paddingLeft: 14,

        // paddingRight: 15,

        backgroundColor: "#fff"

    },

    updateImage: {
        width: 13,
        height: 8,
        marginEnd:21
    },
    component: {
        elevation: 10,

        height: 300,

        alignSelf: 'center',

        width: '90%',

        backgroundColor: '#fff',

        borderRadius: 6,

        // flex: 1,

        // justifyContent: 'center',

        // alignItems: 'center',

        // alignSelf: "center",

        margin: "50%"

    },



    button: {

        // borderRadius: 12,

        // elevation: 2,

        paddingHorizontal: "20%",

        paddingVertical: "4%",

        backgroundColor: "#F2F1F3"



    },

    textStyle: {

        color: '#000',

        fontWeight: 'bold',

        textAlign: 'center',

    },

    label: {

        width: 327,

        // borderLeftWidth: 1.5,

        // paddingLeft: 10,

        // borderColor: Colors.primary ,

        alignSelf: "center",

        marginTop: 8,

    },

    labelText: {

        color: 'black',

        paddingLeft: 5

    }

})

































































// // // import { View, Text } from 'react-native'
// // // import React from 'react'

// // // const Cnt = () => {
// // //   return (
// // //     <View>
// // //       <Text>Cnt</Text>
// // //     </View>
// // //   )
// // // }

// // // export default Cnt






// // import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'





// // import React,{useState} from 'react'

// // import {CountryPicker} from "react-native-country-codes-picker";

// // export default function App() {
// //   const [show, setShow] = useState(false);
// //   const [countryCode, setCountryCode] = useState('');

// //   return (
// //     <View style={styles.container}>
// //       <TouchableOpacity
// //         onPress={() => setShow(true)}
// //         style={{
// //             width: '80%',
// //             height: 60,
// //             backgroundColor: 'white',
// //             padding: 10,
// // flexDirection:'row'
// //         }}
// //       ><Text>country</Text>
// //         <Text style={{
// //             color: 'black',
// //             fontSize: 20
// //         }}>
// //             {countryCode}
// //         </Text>
// //       </TouchableOpacity>

// //       {/* // For showing picker just put show state to show prop */}
// //       <CountryPicker
// //         show={show}
// //         // when picker button press you will get the country object with dial code
// //         pickerButtonOnPress={(item) => {
// //           setCountryCode(item.dial_code);
// //           setShow(false);




// //         }}
// //       />
// //     </View>
// //   );
// // }
// // const styles =StyleSheet.create({
// //     container:{
// //         flex:1
// //     }
// // })
// // // // useless/////

// // // import {CountryList} from "react-native-country-codes-picker";

// // // export default function App() {
// // //   const [countryCode, setCountryCode] = useState('');

// // //   return (
// // //     <View style={styles.container}>
// // //         <TouchableOpacity

// // //         style={{
// // //             width: '80%',
// // //             height: 60,
// // //             backgroundColor: 'green',
// // //             padding: 10,
// // //         }}
// // //       >
// // //         <Text style={{
// // //             color: 'white',
// // //             fontSize: 20
// // //         }}>
// // //             {countryCode}
// // //         </Text>
// // //       </TouchableOpacity>

// // //       {/* // All props the same as for picker */}
// // //        <CountryList
// // //           lang={'pl'}
// // //           pickerButtonOnPress={(item) => {
// // //               setCountryCode(item.dial_code);
// // //           }}
// // //        />
// // //     </View>
// // //   );
// // // }
// // // const styles=StyleSheet.create({
// // //     container:{
// // //         flex:1
// // //     }
// // // })

// // // // import React, { useState } from 'react';
// // // // import { View, StyleSheet } from 'react-native';
// // // // import { Switch } from 'react-native-switch';

// // // // const App = () => {
// // // //     const [isEnabled, setIsEnabled] = useState(false);
// // // //     const toggleSwitch = () => setIsEnabled(previousState => !previousState);

// // // //     return (
// // // //         <View style={styles.container}>
// // // //             <View>
// // // //                 <Switch
// // // //                     style={{ color: 'red' }}
// // // //                     onValueChange={toggleSwitch}
// // // //                     value={isEnabled}
// // // //                     disabled={false}
// // // //                     activeText={''}
// // // //                     inActiveText={''}
// // // //                     circleSize={20}
// // // //                     circleBorderActiveColor={'#27AF35'}
// // // //                     circleBorderInactiveColor={'#F44336'}
// // // //                     circleBorderWidth={1}
// // // //                     backgroundActive={'#FFFFFF'}
// // // //                     backgroundInactive={'#FFFFFF'}
// // // //                     circleActiveColor={'#27AF35'}
// // // //                     circleInActiveColor={'#F44336'}
// // // //                     changeValueImmediately={true}
// // // //                     innerCircleStyle={{ alignItems: "center", justifyContent: "center" }}
// // // //                     outerCircleStyle={{}}

// // // //                     switchLeftPx={3}
// // // //                     switchRightPx={3}
// // // //                     switchWidthMultiplier={2}
// // // //                     switchBorderRadius={30}
// // // //                 />
// // // //             </View>
// // // //         </View>
// // // //     );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //     container: {
// // // //         flex: 1,
// // // //         alignItems: 'center',
// // // //         justifyContent: 'center',
// // // //         borderWidth: 1
// // // //     },
// // // // });r

// // // // export default App;
// // // // import React,{useState} from 'react';
// // // // import { Text,View, } from 'react-native';
// // // // import { Switch } from 'react-native-switch';

// // // // const Cnt = () => {
// // // //       const [isEnabled, setIsEnabled] = useState(false);
// // // //         const toggleSwitch = () => setIsEnabled(previousState => !previousState);

// // // // return(
// // // //     <View style={{flex:1}}>
// // // //         <View style={{height:50,borderWidth:1,marginTop:50}}>
// // // //   <Switch
// // // //   style={{isEnabled}}
// // // //     value={true}
// // // //     onValueChange={(toggleSwitch) => console.log(toggleSwitch)}
// // // //     disabled={false}
// // // //     activeText={'On'}
// // // //     inActiveText={'Off'}
// // // //     circleSize={30}
// // // //     barHeight={1}
// // // //     circleBorderWidth={3}
// // // //     backgroundActive={'green'}
// // // //     backgroundInactive={'gray'}
// // // //     circleActiveColor={'#30a566'}
// // // //     circleInActiveColor={'#000000'}
// // // //     // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
// // // //     changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
// // // //     innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
// // // //     outerCircleStyle={{ borderWidth:1}} // style for outer animated circle
// // // //     renderActiveText={false}
// // // //     renderInActiveText={false}
// // // //     switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
// // // //     switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
// // // //     switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
// // // //     switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
// // // //   />
// // // //   </View></View>
// // // // )}
// // // // export default Cnt;


// // // import React, { useState } from 'react'
// // // import { View, Text, StyleSheet, PixelRatio, Switch } from 'react-native'
// // // import CountryPicker from 'react-native-country-picker-modal'
// // // import { CountryCode, Country } from './src/types'
// // // import countryPicker from


// // // export default function App() {
// // //   const [countryCode, setCountryCode] = useState('FR')
// // //   const [country, setCountry] = useState(null)
// // //   const [withCountryNameButton, setWithCountryNameButton] = useState(false, )
// // //   const [withFlag, setWithFlag] = useState(true)
// // //   const [withEmoji, setWithEmoji] = useState(true)
// // //   const [withFilter, setWithFilter] = useState(true)
// // //   const [withAlphaFilter, setWithAlphaFilter] = useState(false)
// // //   const [withCallingCode, setWithCallingCode] = useState(false)
// // //   const onSelect = (country: Country) => {
// // //     setCountryCode(country.cca2)
// // //     setCountry(country)
// // //   }
// // //   return (
// // //     <View style={styles.container}>
// // //       <Text style={styles.welcome}>Welcome to Country Picker !</Text>
// // //       <Option
// // //         title='With country name on button'
// // //         value={withCountryNameButton}
// // //         onValueChange={setWithCountryNameButton}
// // //       />
// // //       <Option title='With flag' value={withFlag} onValueChange={setWithFlag} />
// // //       <Option
// // //         title='With emoji'
// // //         value={withEmoji}
// // //         onValueChange={setWithEmoji}
// // //       />
// // //       <Option
// // //         title='With filter'
// // //         value={withFilter}
// // //         onValueChange={setWithFilter}
// // //       />
// // //       <Option
// // //         title='With calling code'
// // //         value={withCallingCode}
// // //         onValueChange={setWithCallingCode}
// // //       />
// // //       <Option
// // //         title='With alpha filter code'
// // //         value={withAlphaFilter}
// // //         onValueChange={setWithAlphaFilter}
// // //       />
// // //       <CountryPicker
// // //         {...{
// // //           countryCode,
// // //           withFilter,
// // //           withFlag,
// // //           withCountryNameButton,
// // //           withAlphaFilter,
// // //           withCallingCode,
// // //           withEmoji,
// // //           onSelect,
// // //         }}
// // //         visible
// // //       />
// // //       <Text style={styles.instructions}>Press on the flag to open modal</Text>
// // //       {country !== null && (
// // //         <Text style={styles.data}>{JSON.stringify(country, null, 2)}</Text>
// // //       )}
// // //     </View>
// // //   )
// // // }
// // // const styles = StyleSheet.create({
// // // })

// // // import React, { useState } from "react";
// // // import { StyleSheet, Text, View } from "react-native";
// // // import CountryPicker from 'react-native-country-picker-modal'

// // // const Cnt = () => {
// // // 	const [countryCode, setCountryCode] = useState("91");
// // // const [selectedValue,setSelectValue]=useState('')
// // // 	// const selectedValue = (value: string) => {
// // // 	// 	setCountryCode(value);
// // // 	// };

// // // 	return (
// // // 		<View style={styles.container}>
// // // 			<Text style={styles.titleText}>React Native Country Picker</Text>
// // // 			<CountryPicker
// // // 				disable={false}
// // // 				animationType={"slide"}
// // // 				language="en"
// // // 				containerStyle={styles.pickerStyle}
// // // 				pickerTitleStyle={styles.pickerTitleStyle}
// // // 				// dropDownImage={require("./res/ic_drop_down.png")}
// // // 				selectedCountryTextStyle={styles.selectedCountryTextStyle}
// // // 				countryNameTextStyle={styles.countryNameTextStyle}
// // // 				pickerTitle={"Country Picker"}
// // // 				searchBarPlaceHolder={"Search......"}
// // // 				hideCountryFlag={false}
// // // 				hideCountryCode={false}
// // // 				searchBarStyle={styles.searchBarStyle}
// // // 				// backButtonImage={require("./res/ic_back_black.png")}
// // // 				// searchButtonImage={require("./res/ic_search.png")}
// // // 				countryCode={"1"}
// // // 				selectedValue={selectedValue}
// // // 			/>
// // // 		</View>
// // // 	);
// // // };
// // // export default Cnt;

// // // const styles = StyleSheet.create({
// // // 	container: {
// // // 		flex: 1,
// // // 		justifyContent: "center",
// // // 		alignItems: "center",
// // // 		backgroundColor: "#F5FCFF",
// // // 	},
// // // 	titleText: {
// // // 		color: "#000",
// // // 		fontSize: 25,
// // // 		marginBottom: 25,
// // // 		fontWeight: "bold",
// // // 	},
// // // 	pickerTitleStyle: {
// // // 		justifyContent: "center",
// // // 		flexDirection: "row",
// // // 		alignSelf: "center",
// // // 		fontWeight: "bold",
// // // 	},
// // // 	pickerStyle: {
// // // 		height: 54,
// // // 		width: 150,
// // // 		marginVertical: 10,
// // // 		borderColor: "#303030",
// // // 		alignItems: "center",
// // // 		marginHorizontal: 10,
// // // 		padding: 10,
// // // 		backgroundColor: "white",
// // // 		borderRadius: 5,
// // // 		borderWidth: 2,
// // // 		fontSize: 16,
// // // 		color: "#000",
// // // 	},
// // // 	selectedCountryTextStyle: {
// // // 		paddingLeft: 5,
// // // 		color: "#000",
// // // 		textAlign: "right",
// // // 	},

// // // 	countryNameTextStyle: {
// // // 		paddingLeft: 10,
// // // 		color: "#000",
// // // 		textAlign: "right",
// // // 	},

// // // 	searchBarStyle: {
// // // 		flex: 1,
// // // 	},
// // // });
// // import React, { useState } from "react";
// // import { StyleSheet, Text, View } from "react-native";
// // import CountryPicker from "react-native-country-picker-modal";

// // const App = () => {
// // 	const [countryCode, setCountryCode] = useState('91');
// // // const [selectedValue,setSelectValue]= useState('')
// // 	const selectedValue = () => {
// // 		setCountryCode(value);
// // 	};

// // 	return (
// // 		<View style={styles.container}>
// // 			<Text style={styles.titleText}>React Native Country Picker</Text>
// // 			<CountryPicker
// // 				disable={false}
// // 				animationType={"slide"}
// // 				language="en"
// // 				containerStyle={styles.pickerStyle}
// // 				pickerTitleStyle={styles.pickerTitleStyle}
// // 				// dropDownImage={require("./res/ic_drop_down.png")}
// // 				selectedCountryTextStyle={styles.selectedCountryTextStyle}
// // 				countryNameTextStyle={styles.countryNameTextStyle}
// // 				pickerTitle={"Country Picker"}
// // 				searchBarPlaceHolder={"Search......"}
// // 				hideCountryFlag={false}
// // 				hideCountryCode={false}
// // 				searchBarStyle={styles.searchBarStyle}
// // 				backButtonImage={require('../Assests/Image/add.png')}
// // 				searchButtonImage={require('../Assests/Image/Chart.png')}
// // 				// countryCode={"1"}
// // 				selectedValue={selectedValue}
// // 			/>
// // 		</View>
// // 	);
// // };
// // export default App;

// // const styles = StyleSheet.create({
// // 	container: {
// // 		flex: 1,
// // 		justifyContent: "center",
// // 		alignItems: "center",
// // 		backgroundColor: "#F5FCFF",
// // 	},
// // 	titleText: {
// // 		color: "#000",
// // 		fontSize: 25,
// // 		marginBottom: 25,
// // 		fontWeight: "bold",
// // 	},
// // 	pickerTitleStyle: {
// // 		justifyContent: "center",
// // 		flexDirection: "row",
// // 		alignSelf: "center",
// // 		fontWeight: "bold",
// // 	},
// // 	pickerStyle: {
// // 		height: 54,
// // 		width: 10,
// // 		marginVertical: 10,
// // 		borderColor: "#303030",
// // 		alignItems: "center",
// // 		marginHorizontal: 10,
// // 		padding: 10,
// // 		backgroundColor: "white",
// // 		borderRadius: 5,
// // 		borderWidth: 2,
// // 		fontSize: 16,
// // 		color: "#000",
// // 	},
// // 	selectedCountryTextStyle: {
// // 		paddingLeft: 5,
// // 		color: 'black',
// // 		textAlign: "right",
// // 	},

// // 	countryNameTextStyle: {
// // 		paddingLeft: 10,
// // 		color: "#000",
// // 		textAlign: "right",
// // 	},

// // 	searchBarStyle: {
// // 		flex: 1,
// // 	},
// // });




