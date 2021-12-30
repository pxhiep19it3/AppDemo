import React, {useState} from 'react'
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from '../style/loginStyle'
import auth from '@react-native-firebase/auth';

const login = ({navigation}) => {
    
    const [email, setemail] = useState()
    const [password, setpassword] = useState()

    const login = async(email, password) => {
        try{
            await auth().signInWithEmailAndPassword(email, password);
        } catch(e) {
            console.log(e);
        }
    } 

    return (
        <View style = {styles.container}>
            <Image style = {styles.image} source = {require('../img/top.png')} resizeMode = 'contain'/>
            <Image style = {styles.image} source = {require('../img/left.png')} resizeMode = 'contain'/>

            <View style = {styles.viewTitle}>
                <Text style = {styles.title}>Welcome Back!</Text>
            </View>
            <View style = {styles.containerBorder}>
                <View style = {styles.border}>
                    <Image style = {styles.imageBorder} source = {require('../img/undraw_my_notifications_rjej.png')} resizeMode = 'contain' />
                </View>
            </View>
            <View style = {styles.inputGroup}>
                <TextInput style = {styles.emailInput} placeholder = 'Enter your email'
                    onChangeText = {(userEmail) => setemail(userEmail)} autoCapitalize = 'none'
                />
                <TextInput style = {styles.passwordInput} placeholder = 'Enter your password'
                    onChangeText = {(userPassword) => setpassword(userPassword)} autoCapitalize = 'none'
                />
                <Text style = {styles.forgotPassword}>Forgot password</Text>
                <TouchableOpacity style = {styles.signInButton} 
                    onPress = {() => {
                        login(email, password);
                    }}
                >
                    <Text style = {styles.signInText}>Sign in</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.tineAccount}>
                <Text style = {styles.text1}>Don't have an account ? </Text>
                <Text style = {styles.text2} onPress={() => {
                navigation.navigate('Register')
            }}>Sign up</Text>
            </View>
        </View>
    )
}
export default login;