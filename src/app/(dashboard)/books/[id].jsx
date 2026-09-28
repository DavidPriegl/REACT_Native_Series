import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { useBooks } from '../../../../hooks/useBooks'


//themed componetns
import Spacer from '../../../components/Spacer'
import ThemedText from '../../../components/ThemedText'
import ThemedView from '../../../components/ThemedView'
import ThemedCard from '../../../components/ThemedCard'
import ThemedButton from '../../../components/ThemedButton'
import ThemedLoader from '../../../components/ThemedLoader'
import { Colors } from '../../../constants/Color'


const BookDetails = () => {
  const [book, setBook] = useState(null)  

  const { id } = useLocalSearchParams()  
    const { fetchBookById, deleteBook } = useBooks()
  const handleDelete = async () => {
    await deleteBook(id)
    setBook(null)
    router.replace('/books')
  }
  

  useEffect(() => {
    async function loadBook() {
        const bookData = await fetchBookById(id)
        setBook(bookData)
    }

    loadBook()
  }, [id])  

  if (!book) {
    return (
        <ThemedView safe={true} style={styles.container}>
            <ThemedLoader/>
        </ThemedView>
    )
  }

  return (
    <ThemedView safe={true} style={styles.container}>
        <ThemedCard style={styles.card}>
            <ThemedText style={styles.title}>{book.title}</ThemedText>
            <ThemedText>Written by {book.author}</ThemedText>
            <Spacer/>

            <ThemedText title={true}>Book description:</ThemedText>
            <Spacer height={10}/>

            <ThemedText>{book.description}</ThemedText>
        </ThemedCard>

        <ThemedButton style={styles.delete} onPress={handleDelete}>
            <Text style={{ color: '#fff', textAlign: 'center'}}>
                Delete Book
            </Text>
        </ThemedButton>
    </ThemedView>
  )
}

export default  BookDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    title: {
        fontSize: 22,
        marginVertical: 10,
    },
    card: {
        backgroundColor: '#7c7c7c36',
        margin: 25
    },
    delete: {
        marginTop: 40,
        backgroundColor: Colors.warning,
        width: 200,
        alignSelf: 'center'
    }
})