import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import shop from '../utils/shop.png'

const Login = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    navigation.navigate('Home')
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor: 'lavender'}}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: 'blue' }}>Welcome to Shop Smart </Text>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, }}>Login</Text>
      <TextInput
        placeholder="Enter email address"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10, marginBottom: 10, width: 300 }}
      />
      <TextInput
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10, marginBottom: 10, width: 300 }}
      />
      <TouchableOpacity style = {{top: 20, backgroundColor: 'blue', paddingVertical: 10, borderRadius: 5, paddingHorizontal:10}} title="Login" onPress={handleLogin} > 
      <Text style={{ color: 'white', fontSize: 19, fontWeight: 'bold'}}>Login</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 12, fontWeight: 'bold', top: 20}} onPress={ console.log("his")} >Forgot Password </Text>
    </View>
  );
};

export default Login;
