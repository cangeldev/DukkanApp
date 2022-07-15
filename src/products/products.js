import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios'
import Config from 'react-native-config'
import ProductsCard from '../productsCard/productsCard'
import productsStyle from './productsStyle'
import useFetch from '../hooks/useFetch/useFetch'
import Loading from '../components/loading'
import Error from '../components/error'
export default function Products({navigation}) {
    const { error, isLoading, products } = useFetch(Config.API_URL)
    const handleProductSelect=(id)=>{navigation.navigate("Detail",{id})}
    if (isLoading) {
        return <Loading />
    } 
    if (error) {
        return <Error />
    }
    const renderProducts = ({ item }) => <ProductsCard products={item} onSelect={()=>handleProductSelect(item.id)} />
    return (
        <View style={productsStyle.container}>
            <FlatList data={products} renderItem={renderProducts} />
        </View>
    )
}