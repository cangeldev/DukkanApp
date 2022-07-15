import { View, Text ,Image, ScrollView} from 'react-native'
import React from 'react'
import styles from "./detailStyle"
import Loading from '../components/loading';
import Error from '../components/error';
import useFetch from '../hooks/useFetch/useFetch';
import Config from 'react-native-config'
export default function Detail({route}) {
  const {id} = route.params;
  const { error, isLoading, products } = useFetch(`${Config.API_URL}/${id}`);
  if (isLoading) {
    return <Loading />
} 
if (error) {
    return <Error />
}
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: products.image}} />
        <View style={styles.inner_container}>
          <Text style={styles.title}>{products.title}</Text>
       
          <View style={styles.text_container}>
            <Text style={styles.category}>#{products.category}</Text>
            <Text style={styles.description}>{products.description}</Text>
            <Text style={styles.price}>{products.price}₺</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}