import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { NavigationContainer, StackActions, useRoute } from "@react-navigation/native";


import LoginScreen from "../Screens/LoginScreen";
import ForgotPassword from "../Screens/ForgotPassword";
import UpdatePassword from "../Screens/UpdatePassword";
import SignUp from "../Screens/SignUp";
import CreateProfile from "../Screens/CreateProfile";
import Home from "../Screens/Home";
import DashBoard from "../Screens/DashBoard";
import RecentMatch from "../Screens/RecentMatch";
import PaymentManagement from "../Screens/PaymentManagement";
import TabNavigation from '../Navigation/TabNavigation';
import Setting from '../Screens/Setting';
import Social from "../Screens/Social";
import Notification from "../Screens/Notification";
import AddCard from "../Screens/AddCard";
import Otp from '../Screens/Otp'
import CommonModal from "../Components/CommonModal";
import WhatsppVer from "../Screens/WhatsppVer";
import Cnt from "../Screens/Cnt";
import PostR from "../Screens/PostR";
import SubPlan from "../Screens/SubPlan";
import PostRR from "../Screens/PostRR"
import Mypost from "../Screens/Mypost";
import MatchFound from '../Screens/MatchFound';

import Auth from '@react-native-firebase/auth'

const Stack = createNativeStackNavigator();

function MainNavigation({ navigation }) {
    const [isUserLogin, setIsUserLogin] = useState(false)
    
    Auth().onAuthStateChanged((user) => {
        if (user !== null) {
            setIsUserLogin(true);
        }else{
            setIsUserLogin(false);
        }
    })


    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
                {/* <Stack.Group> */}
                {!isUserLogin ? (
                    <Stack.Screen name="Login" component={LoginScreen} />
                    ) : null} 
               
                 
                    <Stack.Screen name="TabNavigation" component={TabNavigation} />
                    {!isUserLogin ? (
                <Stack.Screen name="SignUp" component={SignUp} />
                ) : null}
{/* </Stack.Group> */}
                <Stack.Screen name="CreateProfile" component={CreateProfile} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="Otp" component={Otp} />
                <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
                <Stack.Screen name="DashBoard" component={DashBoard} />
                <Stack.Screen name="RecentMatch" component={RecentMatch} />
                <Stack.Screen name="PaymentManagement" component={PaymentManagement} />
                <Stack.Screen name="Setting" component={Setting} />
                <Stack.Screen name="Social" component={Social} />
                <Stack.Screen name="Notification" component={Notification} />
                <Stack.Screen name="AddCard" component={AddCard} />
                <Stack.Screen name="CommonModal" component={CommonModal} />
                <Stack.Screen name="WhatsappVer" component={WhatsppVer} />
                <Stack.Screen name="Cnt" component={Cnt} />
                <Stack.Screen name="PostR" component={PostR} />
                <Stack.Screen name="SubPlan" component={SubPlan} />
                <Stack.Screen name="PostRR" component={PostRR} />
                <Stack.Screen name="Mypost" component={Mypost} />
                <Stack.Screen name="MatchFound" component={MatchFound} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainNavigation;