

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
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

const Start = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.bg}>
        <View style={styles.view1}>
            <Image source={require('../img/top.png')}></Image>
            <Image source={require('../img/left.png')} style={styles.imgLeft}></Image>
        </View>
        <View style={styles.view2}>
        <Image source={require('../img/undraw.png')}></Image>
        </View>
        <View style={styles.view3}>
            <Text style={styles.textStart}>Gets things done with TODO</Text>
        </View>
        <View style={styles.view4}>
            <Text style={styles.text1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum dictum tempus, interdum at dignissim metus. Ultricies sed nunc.</Text>
        </View>
        <View style={styles.view5}>
            <TouchableOpacity style={styles.bt1}
            onPress={() => {
                navigation.navigate('Login');
            }}>
                <Text style={styles.text2}>Get Started</Text>
            </TouchableOpacity>
        </View>
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
  view1: {
      width: '100%',
      height: heightWindow * 0.25,
  },
  view2: {
    width: '100%',
    height: heightWindow * 0.3,
    alignItems: 'center'
  },
  view3: {
    width: '100%',
    alignItems: 'center'
  },
  textStart: {
      color: '#000000',
      fontSize: 18,
      fontWeight: '600',
  },
  view4: {
      width: '70%',
      height: heightWindow * 0.12,
      justifyContent: 'center',
      position: 'relative',
      left: widthWindow * 0.15,
      
  },
  text1: {
    color: '#000000',
    fontSize: 13,
    fontWeight: '400',
    textAlign: 'center'
  },
  view5: {
      width: '85%',
      height: heightWindow * 0.09,
      marginLeft: '7.5%',
      marginTop: '12%'
  },
  bt1: {
      width: '100%',
      height: '100%',
      backgroundColor: '#50C2C9',
      justifyContent: 'center',
      alignItems: 'center',
  },
  text2: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center'
  }
 
});

export default Start;
