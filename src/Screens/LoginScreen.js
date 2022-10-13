import { View,Text,StyleSheet,TouchableOpacity,TextInput ,Image} from "react-native";
import React, {useState} from "react";
import {firebase} from "../firebase/config";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Feather } from '@expo/vector-icons';




const LoginScreen=({navigation})=>{
    const [email,setEmail]= useState("")
    const [password,setPassword]=useState("")

const loginUser= async(email, password)=>{
    try {
       await firebase.auth().signInWithEmailAndPassword(email,password)
       navigation.navigate("Home")
       
    } catch (error) {
      alert(error.message)  
    }
}

    return(
        <View style={styles.container}>

<View style={styles.header}>
				</View>

        <KeyboardAwareScrollView
            style={{ flex: 1, width: '100%' }}
            keyboardShouldPersistTaps="always">

<Text>Already have an account? Login here</Text>

            <TextInput
                style={styles.input}
                placeholder='E-mail'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setEmail(text)}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder='Password'
                onChangeText={(text) => setPassword(text)}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            
            <TouchableOpacity
                style={styles.button}
                onPress={() => loginUser(email,password)}>
                <Text style={styles.buttonTitle}>Log in</Text>
            </TouchableOpacity>


            <View style={styles.footerView}>
                <Text style={styles.footerText}>Don't have an account? <Text onPress={()=>navigation.navigate("Register")} style={styles.footerLink}>Sign up</Text></Text>
            </View>
        </KeyboardAwareScrollView>
    </View>
    )
}

export default LoginScreen;

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {

    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    },

    img:{
        width:"100%",
        borderRadius: 5,
        height: "100%",
        marginTop:5
    },
    header:{
		height:"10%",
		backgroundColor:"#fff",
		
	}
})