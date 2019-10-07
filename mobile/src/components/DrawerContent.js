import React, { useState, useEffect } from 'react'
import { View, Text, AsyncStorage, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view'

export default function DrawerContent(props) {

  const [email, setEmail] = useState('')

  useEffect(() => {
    function getUserEmail() {
      AsyncStorage.getItem('user_email').then(resp => {
        setEmail(resp)
      })
    }
    getUserEmail()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          <View style={styles.userBar}>
            <Text style={styles.email}>{email}</Text>
          </View>

          <Text>{props.drawerOpenProgress._chidren}</Text>

          <TouchableOpacity style={styles.btn} title="Logout" onPress={() =>
            (
              Alert.alert('Sair', 'Deseja sair?',
                [
                  {
                    text: 'Sim', onPress: () => {
                      AsyncStorage.clear()
                      props.navigation.navigate('Login')
                    }
                  },
                  { text: 'Não', onPress: () => console.log('Não') }
                ],
                { cancelable: false }
              ))
          }
          >
            <Text>Logout</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  userBar: {
    minHeight: 40,
    backgroundColor: '#f05a5b',
    paddingHorizontal: 15,
    paddingVertical: 5,
    color: '#fff',
    justifyContent: 'center',
  },

  email: {
    color: '#fff'
  },

  btn: {
    width: 50,
    height: 30,
    marginVertical: 20,
    backgroundColor: 'red'
  }
})