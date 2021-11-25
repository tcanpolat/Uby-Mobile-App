/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {styles} from '../style';

export default App = () => {
 return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textStyle}>Header</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.side}> 
          <Text style={styles.textStyle}>Side Menu</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.textStyle}>Content</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textStyle}>Footer</Text>
      </View>
    </View>
  );
};
