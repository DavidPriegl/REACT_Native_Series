import { StyleSheet, View, Text, Image, useColorScheme} from 'react-native'
import React from 'react'
import Logo from "../../assets/images/icon.png"
import { Link } from 'expo-router'

// themed components
import { Colors } from '../constants/Color'
import ThemedView from '../components/ThemedView'
import ThemedCard from '../components/ThemedCard'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'


const Home= () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme]  ?? Colors.light
    
  return (
    <ThemedView style={styles.conatainer}>

        <Image source={Logo} style={styles.img}/>
        <Spacer height={10}/>
        <ThemedText title={true} style={styles.title}>The number 1</ThemedText>
        <Spacer height={10}/>
            <ThemedText style={styles.text}>Reading List App</ThemedText>
        <Spacer />

        <Link href="/login" style={[styles.link, { borderBottomColor: theme.borderBottomColor }]}>
             <ThemedText style={styles.text}>Login Page</ThemedText>
        </Link>

        <Link href="/register" style={[styles.link, { borderBottomColor: theme.borderBottomColor }]}>
            <ThemedText style={styles.text}>Register Page</ThemedText>
        </Link>            

        <Link href="/profile" style={[styles.link, { borderBottomColor: theme.borderBottomColor }]}>
            <ThemedText style={styles.text}>Profile Page</ThemedText>
        </Link>

    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    conatainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        marginTop: 10, 
        marginBottom: 30, 
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    },
    img: {
        marginVertical: 20,
        width: 120,
        height: 120,
        resizeMode: 'contain',
        borderRadius: 20,
    }
})