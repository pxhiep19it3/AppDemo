import { Dimensions, StyleSheet } from "react-native";

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    viewTitle: {
        marginTop: 0.25*windowHeight,
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: '600'
    },
    containerBorder: {
        width: '100%',
        height: 0.25 * windowHeight,
        alignItems: 'center',
        marginTop: 12,
    },
    border: {
        width: 0.7 * windowWidth,
        height: '100%',
        alignItems: 'center',
        borderWidth: 1,
        borderStyle: 'dashed',
        justifyContent: 'center'
    },
    imageBorder: {
        width: '85%',
        height: '85%',
    },
    inputGroup: {
        width: '100%',
        marginTop: 35,
        alignItems: 'center'
    },
    emailInput: {
        width: '85%',
        height: 50,
        fontSize: 13,
        backgroundColor: '#FFFFFF',
        paddingLeft: 30,
        borderRadius: 22
    },
    passwordInput: {
        width: '85%',
        height: 50,
        fontSize: 13,
        backgroundColor: '#FFFFFF',
        paddingLeft: 30,
        borderRadius: 22,
        marginTop: 21
    },
    forgotPassword: {
        height: 16,
        fontSize: 14,
        color: '#50C2C9',
        marginTop: 22
    },
    signInButton: {
        width: '85%',
        height: 62,
        backgroundColor: '#50C2C9',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24
    },
    signInText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF'
    },
    tineAccount: {
        flexDirection: 'row',
        marginTop: 22,
        justifyContent: 'center'
    },
    text1: {
        fontSize: 14
    },
    text2: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#50C2C9'
    }
});

export default styles