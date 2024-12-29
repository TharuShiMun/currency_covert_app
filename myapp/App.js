import React, { useState } from 'react';
import { View, Text, Alert,StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {
 const [lkrAmount, setLkrAmount]=useState('');
 const [usdAmount, setUsdAmount]=useState(null);

 const convertRate=0.003;

 const converSion = ()=>{
  const amount = parseFloat(lkrAmount);
  if (isNaN(amount) || amount<=0){
    Alert.alert('Invalid Input','Please enter a valid amount in LKR');
    return;
  }
  const convertedAmount =(amount * convertRate).toFixed(2);
  setUsdAmount(convertedAmount);
 }

  return (
    <View>
      <Text>LKR to USD Converter</Text>
      <TextInput

      placeholder='Enter amount in LKR'
      keyboardType='numeric'
      value={lkrAmount}
      onChangeText={setLkrAmount}
      
      />

      <Button title="Convert" onPress={converSion}/>
      {usdAmount && (
        <Text style={styles.result}>USD: ${usdAmount}</Text>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFE0',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00008b', 
    textDecorationLine: 'underline', 
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: '#00008b', 
    fontWeight: 'bold',
  },
});