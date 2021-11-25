import 'react-native-gesture-handler';
import React from 'react' //rnfe
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from '../screens/home'
import Faktoriyel from '../screens/faktoriyel'
import FlexBox from '../screens/flexBox'
import List from '../screens/list'
import Login from '../screens/login'
import Sayac from '../screens/sayac'
import Variable from '../screens/variable'
import faktoriyel from '../screens/faktoriyel';
import login from '../screens/login';


const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown:false,
                }}
                />
                 <Stack.Screen
                name="FlexBox"
                component={FlexBox}
                options={{
                    title:'Flex Box',
                    headerStyle:{
                        backgroundColor:'#f40'
                    },
                    headerTintColor:'#fff',
                    headerTitleStyle:{
                        fontWeight:'bold'
                    }
                }}
                />
                 <Stack.Screen
                name="Faktoriyel"
                component={faktoriyel}
                options={{
                    title:'Faktoriyel',
                    headerStyle:{
                        backgroundColor:'#f40'
                    },
                    headerTintColor:'#fff',
                    headerTitleStyle:{
                        fontWeight:'bold'
                    }
                }}
                />
                 <Stack.Screen
                name="Login"
                component={login}
                options={{
                    title:'Login',
                    headerStyle:{
                        backgroundColor:'#f40'
                    },
                    headerTintColor:'#fff',
                    headerTitleStyle:{
                        fontWeight:'bold'
                    }
                }}
                />
                 <Stack.Screen
                name="List"
                component={List}
                options={{
                    title:'List',
                    headerStyle:{
                        backgroundColor:'#f40'
                    },
                    headerTintColor:'#fff',
                    headerTitleStyle:{
                        fontWeight:'bold'
                    }
                }}
                />
                 <Stack.Screen
                name="Sayac"
                component={Sayac}
                options={{
                    title:'Sayac',
                    headerStyle:{
                        backgroundColor:'#f40'
                    },
                    headerTintColor:'#fff',
                    headerTitleStyle:{
                        fontWeight:'bold'
                    }
                }}
                />

            </Stack.Navigator>
        </NavigationContainer>);
}

export default Routes
