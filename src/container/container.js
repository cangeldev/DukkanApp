import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Products from '../products/products'
import Detail from '../detail/detail'
import ProductsCard from '../productsCard/productsCard'

export default function Container() {
  const Stack = createNativeStackNavigator()
  return (
    <View style={{ flex: 1, backgroundColor: "blue" }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Products'>
          <Stack.Screen name="ProductsCard" component={ProductsCard} />
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="Detail" component={Detail} />

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}