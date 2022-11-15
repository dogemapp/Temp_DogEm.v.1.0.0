import React, { useState, useCallback, useEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { signOut } from 'firebase/auth';
import {auth} from "./Database_config/Firebase"
import { collection, getDoc, doc, addDoc} from "firebase/firestore"; 
import { db } from './Database_config/Firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { async } from '@firebase/util';

const Login = ({ navigation }) => {
    const [collection, setCollection] = useState([]);
    const handleLogOut = () =>{
        signOut(auth)
            .then(() =>{
                // Signed Out
                navigation.replace('Home')
            })
            .catch((error) => Alert.alert("Error Occured", error.message))
    }


      
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>
                Your Profile
            </Text>
            <Text style={styles.infoText}>Your Email: fakeemail@test.com ✏️</Text>
            <Text style={styles.infoText}>Your First Name: Alice ✏️</Text>
            <Text style={styles.infoText}>Your Last Name: Wonderland ✏️</Text>
            <Text style={styles.infoText}>Your Phone Number: 8885553333 ✏️</Text>
            <Text style={styles.infoText}>Your Password: Password1 ✏️</Text>
            <Text></Text>
            {/* <TouchableOpacity style={styles.contactBtn} onPress={() => navigation.navigate('Contact')}>
                <Text  style={styles.dogText}>Add Contact</Text>
            </TouchableOpacity> */}
            <View style={styles.btnView}>
                <TouchableOpacity style={styles.DogemBtn} onPress={() => navigation.navigate('Dogem')}>
                    <Text style={styles.dogText}>DOGEM</Text>
                </TouchableOpacity>

            
                <TouchableOpacity style={styles.logOutBtn} onPress={handleLogOut}>
                    <Text style={styles.logOutText}>LOGOUT</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    myList: {
        height: "50%"
    },
    titleText: {
        marginBottom: 20,
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000080',
    },
    infoText: {
        backgroundColor: 'cornflowerblue',
        marginLeft: 10,
        marginRight: 10,
        fontSize: 15,
        textAlign: 'left',
        color: 'black',
    },
    DogemBtn: {
        width: "50%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        // marginTop: 10,
        // marginLeft: 90,
        backgroundColor: "#1035AC",
        borderRadius: 5

    },
    dogText: {
        color: "#ffffff",
        fontSize:20,
    },
    // contactBtn:{
    //     width: "50%",
    //     height: 50,
    //     alignItems: "center",
    //     justifyContent: "center",
    //     marginTop: 40,
    //     marginLeft: 90,
    //     backgroundColor: "#1035AC",
    //     borderRadius: 5
    // },
    logOutBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#1035AC",
    },
    logOutText: {
        color: "#ffffff",
    },
    btnView:{
        alignItems: "center",
    }
})
export default Login;