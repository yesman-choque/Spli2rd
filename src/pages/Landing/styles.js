import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
        justifyContent: "center",
        alignItems: 'center',
        padding: 50,
    },

    logo: {
        fontFamily: 'Poppins_800ExtraBold',
        color: '#9281F7',
        fontSize: 55,
        marginBottom: 20,
    },

    num2: {
        color: "#fff",
    },

    slogan: {
        color: "#fff",
        fontSize: 22,
        fontFamily: "Poppins_700Bold",
        alignSelf: 'flex-start',
        width: 130,
        marginBottom: 50,
    },

    two: {
        color: "#9281F7",
    },

    inputIn: {
        backgroundColor: '#393939',
        width: 300,
        height: 50,
        borderRadius: 7,
        marginBottom: 100,
        paddingHorizontal: 15,
        color: "#fff",
        fontFamily: 'Poppins_500Medium',
        fontSize: 15,
    },

    result: {
        color: "#81f78d",
        fontFamily: 'Poppins_700Bold',
        fontSize: 40,
        marginBottom: 30,
    },

    button: {
        backgroundColor: "#81f78d",
        width: 100,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputOut: {
        backgroundColor: '#393939',
        width: 300,
        height: 50,
        borderRadius: 7,
        marginBottom: 30,
        paddingHorizontal: 15,
        color: "#fff",
        fontFamily: 'Poppins_500Medium',
        fontSize: 15,
    },

    buttonText: {
        fontSize: 20,
        fontFamily: 'Poppins_500Medium',
    },
})

export default styles;