import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Alert, AsyncStorage } from 'react-native'

export default function LogOut({ navigation }) {

    return (
        Alert.alert(
            'Log out',
            'Do you want to logout?',
            [
                { text: 'Cancel', onPress: () => { return null } },
                {
                    text: 'Confirm', onPress: () => {
                        AsyncStorage.clear();
                        navigation.navigate('Login')
                    }
                },
            ],
            { cancelable: false }
        )
    )
}