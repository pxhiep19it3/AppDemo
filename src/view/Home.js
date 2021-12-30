import React, {useContext} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../style/homeStyle';
import {AuthContext} from './AuthProvider';
import auth from '@react-native-firebase/auth';

export default function Home() {

    const logout = async() => {
        try{
            await auth().signOut()
            console.warn("logout thanh cong")
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <View style = {styles.container}>
            <Image style = {styles.image} source = {require('../img/ellipse1.png')} resizeMode = 'contain'/>
            <Image style = {styles.image} source = {require('../img/ellipse2.png')} resizeMode = 'contain'/>
            <View style = {styles.topView}>
                <Image style = {styles.avatar} source = {{uri: 'https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/236458421_1722610364794110_3973825009452947906_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ZRvA4rHxPtUAX-v2stL&tn=LLT9bmdS8KWy1uwX&_nc_ht=scontent.fdad3-4.fna&oh=00_AT-jhZP9Rn5ewnzF69XIaN6dRdo7DzSTlr2Metc_RQWLLg&oe=61D1ADD2'}}/>
                <Text style = {styles.name}>Welcome to Lê Công Tú</Text>
                <TouchableOpacity style = {styles.logOutButton}
                    onPress = {() => {
                        logout();
                    }}
                >
                    <Text style = {styles.logOutText}>Log out</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.content}>
                <View style = {styles.topContent}>
                    <Text style = {styles.textTopContent}>
                        Good Afternoon
                    </Text>
                </View>
                <Image style = {styles.clock} source = {require('../img/clock.png')} resizeMode = 'contain'/>
                <View style = {styles.list}>
                    <Text style = {styles.taskList}>Tasks List</Text>
                </View>
            </View>
        </View>
    )
}
