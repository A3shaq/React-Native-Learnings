import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {RegisterWithFirebase} from '../../config/firebase';
import Logo from '../../assests/images/logo.png';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Signup = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handlChange = (e, key) => {
    let set;
    console.log(e);
    {
      key === 'Email' ? setEmail(e) : setName(e);
    }
  };

  const handlePassword = (e) => {
    setPassword(e);
  };

  const onRegister = () => {
    alert('Register');
    RegisterWithFirebase(name, email, password);

    alert('success');
  };
  console.log('my name is', name);
  console.log('my email is', email);
  console.log('my password is', password);
  let {navigation}=props;
  return (
    <View style={styles.mainView}>
      <View
        style={{
          flex: 0.45,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={Logo} style={styles.imageStyle} />
      </View>
      <Text style={styles.heading}>Signup</Text>
      <View>
        <TextInput
          style={styles.inputSyle}
          placeholder="Name"
          placeholderTextColor="white"
          // style={{borderStyle:["solid","dotted","dashed"]}}
          value={name}
          onChangeText={(text) => handlChange(text, 'Name')}
        />

        <TextInput
          style={styles.inputSyle}
          placeholder="Email"
          placeholderTextColor="white"
          value={email}
          onChangeText={(text) => handlChange(text, 'Email')}
        />
        <TextInput
          style={styles.inputSyle}
          placeholderTextColor="white"
          placeholder="Password"
          value={password}
          onChangeText={(text) => handlePassword(text, 'Password')}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.buttonStyles} onPress={onRegister}>
          <Text style={styles.textColor}>Register</Text>
        </TouchableOpacity>
        <Text
          style={styles.link}
          onPress={() => navigation.navigate('Login')}>
          Already have an account?
        </Text>
      </View>
    </View>
  );
};

export default Signup;
const styles = StyleSheet.create({
  inputSyle: {
    borderWidth: 2,
    borderColor: 'lightblue',
    maxWidth: 300,
    width: 500,
    padding: 8,
    borderRadius: 8,
    marginTop: 10,
    color: 'white',
  },
  heading: {
    color: 'red',
    fontSize: 30,
    textAlign: 'center',
    // fontStyle:"italic",
    fontWeight: '700',
  },
  imageStyle: {
    height: 75,
    width: 75,
  },
  buttonStyles: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FF4235',
    marginTop: 20,
    width: 300,
  },
  textColor: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
  link: {
    textDecorationLine: 'underline',
    color: 'blue',
    marginTop: 15,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  mainView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
