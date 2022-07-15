import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import style from './style'
import Divider from '../components/divider'

export default function ProductsCard({ products ,onSelect}) {
   
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={style.container}>
                <View style={style.headerContainer}>
                    <Image style={style.image} source={{ uri: products.image }} />
                    <View style={style.bodyContainer} >
                        <Text style={style.title}>{products.title}</Text>
                        <Text style={style.price}>{products.price} USD</Text>
                    </View>
                </View>
                <Divider />
            </View>
        </TouchableWithoutFeedback>
    )
}