import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView, AsyncStorage, Image, SafeAreaView, Text } from 'react-native'

import logo from '../assets/logo.png'
import SpotList from '../components/SpotList'

export default function List({ navigation }) {

    const [techs, setTechs] = useState([])

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            const techsArray = storageTechs.split(',').map(tech => tech.trim())
            setTechs(techsArray)
        })
    }, [])

    function handleLogout(){
        AsyncStorage.setItem('user', '')
        navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <ScrollView>
                <Text style={styles.logout} onPress={handleLogout}>Logout</Text>
                {techs.map(tech => <SpotList key={tech} tech={tech} /> )}            
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    logo: {
        height: 32,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginTop: 10,
    },

    logout: {
        fontSize: 16,
        color: '#fff',
        padding: 5,
        backgroundColor: 'red'
    },
})