

import React, { useState, useContext } from 'react';
import {AuthContext} from './AuthProvider';
import auth from '@react-native-firebase/auth';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import { clearErrors } from 'react-native/Libraries/LogBox/Data/LogBoxData';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const widthWindow = Dimensions.get('window').width
const heightWindow = Dimensions.get('window').height

const Register = ({ navigation }) => {

  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const register = async(email, password) => {
    try{
      await auth().createUserWithEmailAndPassword(email, password);
    }catch(e) {
        console.log(e);
    }
  }

  return (
    <View style={styles.bg}>
        <View style={styles.view1}>
            <Image source={require('../img/top.png')}></Image>
            <Image source={require('../img/left.png')} style={styles.imgLeft}></Image>
        </View>
        <TouchableOpacity style = {styles.backButton} onPress={() => {
                navigation.goBack();
            }}>
        <Image source = {require('../img/back.png')} style = {styles.imgBack} resizeMode = 'contain'/>
        </TouchableOpacity>
        <View style={styles.view2}>
            <Text style={styles.text1}>Welcome Onboard!</Text>
            <Text style={styles.text2}>Let’s help you meet up your tasks</Text>
        </View>
        <View style={styles.view3}>
            <TextInput style={styles.inputText} placeholder='Enter your full name' placeholderTextColor={'#000000'}
              
            ></TextInput>
            <TextInput style={styles.inputText} placeholder='Enter your email' placeholderTextColor={'#000000'}
              onChangeText = {(userEmail) => setemail(userEmail)} autoCapitalize = 'none'
            ></TextInput>
            <TextInput style={styles.inputText} placeholder='Enter password' placeholderTextColor={'#000000'}
              onChangeText = {(userPassword) => setpassword(userPassword)} autoCapitalize = 'none'
            ></TextInput>
            <TextInput style={styles.inputText} placeholder='Confirm Password' placeholderTextColor={'#000000'}></TextInput>
        </View>
        <View style={styles.view5}>
            <TouchableOpacity style={styles.bt1}
            onPress={() => {
                register(email, password);
            }}>
                <Text style={styles.textBt}>Register</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.view6}>
        <Text style={styles.text3}>Already have an account ? <Text style={{color: '#50C2C9'}} onPress={() => { navigation.navigate('Login')}} >Sign In</Text></Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgLeft: {
      position: 'absolute',
      top: 0,
  },
  bg: {
    width: '100%', 
    height: '100%', 
    backgroundColor: '#E5E5E5'
  },
  backButton: {
    position: 'absolute',
    top: '7%',
    left: '5%',
    width: '15%',
    height: '5%',
  },
  imgBack: {
    width: '100%',
    height: '100%'
  },
  view1: {
      width: '100%',
      height: heightWindow * 0.25,
  },
  view2: {
    width: '100%',
    height: heightWindow * 0.1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: '3%'
  },
  view3: {
      // marginTop: '0.5%',
      width: '80%',
      height: heightWindow * 0.38,
      marginLeft: '10%',
      justifyContent: 'space-between',
  },
  text1: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center'
  },
  text2: {
    color: '#000000',
    fontSize: 13,
    fontWeight: '400',
    textAlign: 'center'
  },
  inputText: {
    width: '100%', 
    height: '20%',
    fontSize: 15,
    paddingLeft: 25,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
  },
  view5: {
      width: '85%',
      height: heightWindow * 0.09,
      marginLeft: '7.5%',
      marginTop: '6%'
  },
  bt1: {
      width: '100%',
      height: '100%',
      backgroundColor: '#50C2C9',
      justifyContent: 'center',
      alignItems: 'center',
  },
  textBt: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center'
  },
 view6: {
    marginTop: '3%',
    width: '100%',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center'
 },
 text3: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
 }
});

export default Register;
