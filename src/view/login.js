

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
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

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.bg}>
        <View style={styles.view1}>
            <Image source={require('../img/top.png')}></Image>
            <Image source={require('../img/left.png')} style={styles.imgLeft}></Image>
        </View>
        <Text style={styles.text1}>Welcome to Login Screen!</Text>
    </SafeAreaView>
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
    text1: {
      color: 'blue',
      fontSize: 30,
      marginTop: '55%',
      textAlign: 'center'
    }
});

export default Login;
