/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, Text,TouchableOpacity} from 'react-native';
import {styles} from '../style';

export default App = () => {
  /*
  let list[];
  let kisiler{id:5,ad:tahsin,tc:3434433434} => map

  let kisiListe=[{id:5,ad:tahsin,tc:3434433434},{id:5,ad:tahsin,tc:3434433434},{id:5,ad:tahsin,tc:3434433434}]



  */
  let list = [];

  for (let index = 0; index < 10; index++) {
    let rnd = Math.floor(Math.random() * 10);
    list.push(rnd);
  }
  console.log(list);

  list.forEach(num => {
    console.log(num);
  });

  list.map(num => {
    console.log(num);
  });
///////////////////////////////////////////////////
  let productList=[];

  function getRandomResult(){
    var result=true;
    let sayi=Math.floor(Math.random()*10);
    sayi%2==0?(result=true):(result=false);
    return result;
  }
  for (let index = 0; index < 10; index++) {
    let rndPrice=Math.random()*10;
    productList.push({id:index,productName:"Urun"+index,price:rndPrice,stok: getRandomResult()});
  }

  productList.map(list => {
    //console.log(list);
    console.log(list);
    });


  return (
    <View style={styles.container}>
      <View>
        {list.map((num,index) => (
          <Text  style={styles.textStyle} key={index.toString()}>{num}</Text>
        ))}
        <TouchableOpacity>
          <Text>Hello</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
