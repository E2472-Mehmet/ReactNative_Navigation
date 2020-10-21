import React, {useState} from 'react';
// import {Button} from 'react-native';
import {SafeAreaView, View, Text, Button, TextInput} from 'react-native';
const number = '55';
const First = (props) => {
  const [userName, setUserName] = useState('');
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 40}}> First Hello</Text>
        <Text style={{fontSize: 40}}>{number}</Text>

        <Text style={{fontWeight: 'bold', margin: 5}}>
          Girilen Deger: {userName}
        </Text>
        <View
          style={{
            backgroundColor: '#e0e0e1',
            padding: 10,
            margin: 10,
            borderRadius: 5,
          }}>
          <TextInput
            value={userName}
            onChangeText={(text) => setUserName(text)}
          />
        </View>

        <Button
          title="Go!"
          onPress={() =>
            props.navigation.navigate('SecondPage', {selectedValue: userName})
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default First;
