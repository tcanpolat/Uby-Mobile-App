/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../style';

export default App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const checkUser = () => {
    if(email=='tahsincanpolat@gmail.com' && password=='123456789'){
      alert('Welcome');
    }
    else{
      alert('Password or Email is incorrect!');
    }
  }

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={value => {
          setEmail(value);
        }}
        style={{
          borderColor: '#0a2',
          borderWidth: 1,
          borderRadius: 10,
          marginBottom:10,
          width: '80%',
        }}></TextInput>
      <TextInput
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={value => {
          setPassword(value);
        }}
        style={{
          borderColor: '#0a2',
          borderWidth: 1,
          borderRadius: 10,
          width: '80%',
        }}></TextInput>
      <TouchableOpacity
        onPress={() => {
          checkUser();
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a24',
          padding: 6,
          width: '40%',
          height: 50,
          borderRadius: 20,
          marginTop: 20,
        }}>
        <Text
          onChangeText={value => {
            setPassword(value);
          }}
          style={{
            fontSize: 20,
            color: '#fff',
            fontWeight: '900',
            letterSpacing: 1,
          }}>
          Login
        </Text>
      </TouchableOpacity>
      <Text style={{fontSize: 30}}></Text>
    </SafeAreaView>
  );
};
