import { StyleSheet, Text, View, Pressable, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import { useUser } from '../../../hooks/useUser'

//themed components
import { Colors } from '../../constants/Color'
import ThemedView from '../../components/ThemedView'
import ThemedCard from '../../components/ThemedCard'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'

const Login = () => {
  
  const [email, setEmail] = useState('')  
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  
  const { login } = useUser()

  const handleSubmit = async () => {
    setError(null)
    try{
        await login(email, password)
    } catch (error) {
        setError(error.message)
    }
  }
    
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <ThemedView style={styles.container}>
        <Spacer/>
        <ThemedText title={true} style={styles.title}>
            Login to Your Account
        </ThemedText>

        <ThemedTextInput 
            placeholder='Email' 
            style={{ width: '80%', marginBottom: 20}}
            keyboardType='email-address'
            onChangeText={setEmail}
            value={email}
        />
        <ThemedTextInput
            placeholder='Password' 
            style={{ width: '80%', marginBottom: 20}}
            onChangeText={setPassword}
            value={password}
            secureTextEntry
        />

        <ThemedButton onPress={handleSubmit} style={{ width: '30%'}}>
            <Text style={{ color: '#f2f2f2', textAlign: 'center'}}>LOGIN</Text>
        </ThemedButton>

        <Spacer height={25}/>
        {error && <Text style={styles.error}>{error}</Text>}

        <Spacer height={55}/>
        <Link href={'/register'}>
            <ThemedText style={{ textAlign: 'center' }}>
                Register instead
            </ThemedText>
        </Link>

    </ThemedView>

    </TouchableWithoutFeedback>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 32,
        marginBottom: 30
    },
    error: {
        color: Colors.warning,
        padding: 10,
        backgroundColor: '#f5c1c8',
        borderColor: Colors.warning,
        borderWidth: 1,
        borderRadius: 6,
        marginHorizontal: 10
    }
})