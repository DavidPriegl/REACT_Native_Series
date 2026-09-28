import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useBooks } from '../../../hooks/useBooks'

//themed components
import { Colors } from '../../constants/Color'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import ThemedCard from '../../components/ThemedCard'
import { useRouter } from 'expo-router'




const Books = () => {
  const { books } = useBooks()
  const router = useRouter()  

  return (
    <ThemedView style={styles.container} safe={true}>

        <Spacer/>
        <ThemedText title={true} style={styles.heading}>
            Your Reading list
        </ThemedText>

        <Spacer/>
        <FlatList
            data={books}
            keyExtractor={(item) => item.$id}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
                <Pressable onPress={() => router.push(`/books/${item.$id}`)}>
                    <ThemedCard style={styles.card}>
                        <ThemedText style={styles.title}>
                            {item.title}
                        </ThemedText>
                        <ThemedText>
                            Written by {item.author}
                        </ThemedText>                        
                    </ThemedCard>
                </Pressable>
            )}  
        />


    </ThemedView>
  )
}

export default Books

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'stretch'
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
    card: {
        width: '90%',
        marginHorizontal: '5%',
        marginVertical: 8,
        padding: 10,
        paddingLeft: 14,
        borderLeftColor: Colors.primary,
        borderLeftWidth: 4,
        borderRightColor: Colors.primary,
        borderRightWidth: 4,
        borderTopColor: Colors.primary,
        borderTopWidth: 0.2,
        borderBottomColor: Colors.primary,
        borderBottomWidth: 0.2
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    }
})