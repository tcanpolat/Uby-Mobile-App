import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, width: '100%', alignItems: 'center'}}>
      <ScrollView style={{flex: 1, width: '100%'}}>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('FlexBox')}
        style={{
            margin:20,
            flex:1,
            width:'90%',
            height:70,
            backgroundColor:'#f40',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:20
            
            }}>
          <Text style={{color:'#fff',fontSize:22}}>FlexBox</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Faktoriyel')}
        style={{
            margin:20,
            flex:1,
            width:'90%',
            height:70,
            backgroundColor:'#f40',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:20
            
            }}>
          <Text style={{color:'#fff',fontSize:22}}>Faktöriyel</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Login')}
        style={{
            margin:20,
            flex:1,
            width:'90%',
            height:70,
            backgroundColor:'#f40',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:20 
            }}>
          <Text style={{color:'#fff',fontSize:22}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('List')}
        style={{
            margin:20,
            flex:1,
            width:'90%',
            height:70,
            backgroundColor:'#f40',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:20 
            }}>
          <Text style={{color:'#fff',fontSize:22}}>List</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Sayac')}
        style={{
            margin:20,
            flex:1,
            width:'90%',
            height:70,
            backgroundColor:'#f40',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:20 
            }}>
          <Text style={{color:'#fff',fontSize:22}}>Sayaç</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
