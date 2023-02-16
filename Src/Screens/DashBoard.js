import { View, Text,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import CommonArea from '../Components/CommonArea'
import { Images } from '../Constant/Images'
import CommonTouch from '../Components/CommonTouch'
  import Auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'




const DashBoard = ({navigation}) => {
    const [loggedIn, setloggedIn] = useState(false)
    const [userInfo, setuserInfo] = useState([])
    const signOut = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          setloggedIn(false);
          setuserInfo([]);
          navigation.navigate('Login')
        } catch (error) {
          console.error(error);
        }
      };
    return (
        <View style={{ flex: 1 }}>
            <CommonArea
                title='Dashboard'
                source2={Images.Hembarg}
                onPress={()=>navigation.navigate('SubPlan')}
            />

            <View style={styles.container}>
            <CommonTouch
                    source={Images.Recent}
                    source1={Images.Greater}
                    title='My recent matches'
                    style={styles.cmt}
                    onPress={()=>{navigation.navigate('RecentMatch')}}
                    />
                     <CommonTouch
                    source={Images.Payment}
                    source1={Images.Greater}

                    title='Payment Managemnet'
                    onPress={()=>{navigation.navigate('PaymentManagement')}}
 
                    />
                     <CommonTouch
                    source={Images.Customer}
                    source1={Images.Greater}

                    title='Customer service' 
                    />
                     <CommonTouch
                    source={Images.Logout}
                    source1={Images.Greater}
                    title='Logout'
                    onPress={signOut}


                    // onPress={async ()  =>{
                    //     await Auth().signOut()
                    //     // await GoogleSignin.signOut();

                    //     navigation.navigate('Login')
                    // }}



                    />
            </View>

        </View>
    )
}

export default DashBoard
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 35,
        backgroundColor: '#EFF2F4',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    cmt:{
        marginTop:25
    }
})