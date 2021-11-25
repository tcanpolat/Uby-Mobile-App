/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity} from 'react-native';

export default App = () => {
  const [sayi, setSayi] = useState('');
  const [faktoriyel, setFaktoriyel] = useState('');
  const getFaktoriyel = value =>{
    let f=1;
    for (let index = 1; index <=value; index++) {
      f *=index;
      
    }
    return f;
  }
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        value={sayi}
        onChangeText={(value) => {
          setSayi(value);
          setFaktoriyel('');
        }}
        style={{
          borderColor: '#00f',
          borderWidth: 1,
          borderRadius: 10,
          width: '80%',
        }}></TextInput>
      <TouchableOpacity
        onPress={()=>{
          setFaktoriyel(getFaktoriyel(sayi));
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#00f6',
          padding: 6,
          width: '40%',
          height: 50,
          borderRadius: 20,
          marginTop: 20
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            fontWeight: '500',
            letterSpacing: 1,
          }}>
          Hesapla
        </Text>
      </TouchableOpacity>
      <Text style={{fontSize:30}}>{faktoriyel!=''? sayi+'!='+faktoriyel:''}</Text>
    </SafeAreaView>
  );
};
