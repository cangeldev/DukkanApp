import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
export default function Error() {
    return  <LottieView source={require("../assets/error.json")} autoPlay loop />
}