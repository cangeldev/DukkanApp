import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios'
export default function useFetch(url) {
    const [products, setProducts] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    async function fetchData() {
        try {
            const response = await axios.get(url)
            setProducts(response.data)
            setIsLoading(false)

        } catch (err) {
            setIsLoading(false)
            setError(err.message)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])


    return { error, isLoading, products }
}