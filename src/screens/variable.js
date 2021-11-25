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
  /*
  Değiişkenler ve Sabitler

  Değişken => let ifadesiyle

  Sabitler => const ifadesiyle
  export arttir diyerek istediğim yerde çağırabilirim.

  isimlendirme kuralları

  1- Türkçe Karakter, boşluk, özel karakter içeremez
  2- Rakam ile başlayamaz
  3- Özel terimler kullanılmaz. örn: NULL, BOOL
  4- Case sensitive (Büyük küçük harf duyarlılığı) vardır.

  Operatörler
  
  Atama Operatörleri
  = += -= *= /* %=
  
  Aritmetik Operatörler
  + - * / %
  
  Mantıksal Operatörler
  ve   => &&
  veya => ||
  değil=> !
  
  Karşılaştırma Operatörleri

  == => eşittir
  != => eşit değildir
  <=
  >=
  <
  >

  arttırma azaltma operatörleri
  i++ 
  i--

  */
 let sayi=12311;
 const arttir = value =>{
   let s=value+1;
   return s;
 }
 return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>{arttir(sayi)}</Text>
    </View>
  );
};
