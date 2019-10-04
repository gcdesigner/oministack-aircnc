import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, AsyncStorage, StyleSheet } from 'react-native'

import api from '../services/api'

export default function List() {

    const [techs, setTechs] = useState([])

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            const techsArray = storageTechs.split(',').map(tech => tech.trim())

            setTechs(techsArray)
        })
    }, [])

    async function getSpost(){
        const response = await api.get('/spots', {
            query: techs
        })

        console.log(response.data)
    }

   return(
       <SafeAreaView style={styles.container}>
        <Text>{techs}</Text>
       </SafeAreaView>

   )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})