import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Home, DashBoard, Wallet, Profile } from '../Screens'
import Home from '../Screens/Home';
import DashBoard from '../Screens/DashBoard';
import Wallet from '../Screens/Wallet';
import Profile from '../Screens/Profile';
import { Image } from 'react-native';
import { Images } from '../Constant/Images';

const Tab = createBottomTabNavigator();
const TabNavigation = (props) => {
    return (
        
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: () => (
                        <Image
                         source={Images.Hom}
                         style={{ resizeMode: 'contain', height: 17, width: 20 }}
                        />
                    ),
                }}
            />
 <Tab.Screen
                name='DashBoard'
                component={DashBoard}
                options={{
                    tabBarIcon: () => (
                        <Image
                         source={Images.DashBoard}
                         style={{ resizeMode: 'contain', height: 17, width: 20 }}
                        />
                    ),
                }}
            />
             <Tab.Screen
                name='Wallet'
                component={Wallet}
                options={{
                    tabBarIcon: () => (
                        <Image
                         source={Images.Wallet}
                         style={{ resizeMode: 'contain', height: 17, width: 20 }}
                        />
                    ),
                }}
            />
             <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: () => (
                        <Image
                         source={Images.Profile}
                         style={{ resizeMode: 'contain', height: 17, width: 20 }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation