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
        zIndex: 1
    },
    topView: {
        width: '100%',
        height: 0.378 * windowHeight,
        backgroundColor: '#50C2C9',
        alignItems: 'center'
    }, 
    avatar: {
        width: 0.266 * windowWidth,
        height: 0.123 * windowHeight,
        borderRadius: (0.266 * windowWidth) / 2,
        marginTop: 0.163 * windowHeight
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF',
        position: 'absolute',
        top: 0.309 * windowHeight
    },
    logOutButton: {
        width: 100,
        height: 30,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        position: 'absolute',
        top: 0.07 * windowHeight,
        right: 0.066 * windowWidth
    },
    logOutText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FFFFFF'
    },
    content: {
        width: '100%',
        height: '100%',
        backgroundColor: '#E5E5E5',
        alignItems: 'center'
    },
    topContent: {
        width: '100%'
    },
    textTopContent: {
        textAlign: 'right',
        marginTop: 0.066 * windowWidth,
        marginRight: 0.066 * windowWidth,
        fontSize: 12,
        fontWeight: '600'
    },
    clock: {
        width: 0.32 * windowWidth,
        height: 0.147 * windowHeight,
    },
    list: {
        width: '100%',
        height: '100%',
        marginTop: 0.0258 * windowHeight
    },
    taskList: {
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 0.066 * windowWidth
    }
})


export default styles