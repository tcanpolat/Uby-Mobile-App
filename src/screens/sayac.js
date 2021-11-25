/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {styles} from '../style';

export default App = () => {
  /*

  state => durum

  hook 
  use statte
  use effect
  use context



  */
  let [sayi, setSayi] = useState(0);
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          setSayi(sayi+=1);
          // console.log(sayi);
        }}
        style={styles.plusButton}>
        <Text style={styles.textStyle}>+</Text>
      </TouchableOpacity>
      <Text style={styles.countText}>{sayi}</Text>
      <TouchableOpacity
        onPress={() => {
          setSayi(sayi-=1);
          // console.log(sayi);
        }}
        style={styles.minusButton}>
        <Text style={styles.textStyle}>-</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
