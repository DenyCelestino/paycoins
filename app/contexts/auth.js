import React, { createContext } from 'react'
import axios from 'axios'
import { ip } from '../../config'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { useNavigation } from '@react-navigation/native'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const navigation = useNavigation()

  const [user, setUser] = React.useState('')
  const [isLoading, setisLoading] = React.useState(false)

  async function Login(email, password) {
    setisLoading(true)
    let response = await axios.post(
      `${ip + 'signin.php'}`,
      JSON.stringify({ mail: email, pass: password })
    )

    if (response.data == 'emptyfields') {
      setisLoading(false)
      Alert.alert('Error', 'Campos vazios')
    } else if (response.data == 'no') {
      setisLoading(false)
      Alert.alert('Error', 'usuario ou senha invalida')
    } else {
      setisLoading(false)
      setUser(response.data.user)

      await AsyncStorage.setItem('username', response.data.user.name)
      await AsyncStorage.setItem('avatar', response.data.user.avatar)
      const jsonValue = JSON.stringify(response.data.user)
      await AsyncStorage.setItem('asyncuser', jsonValue)

      navigation.navigate('Home')
    }
  }

  async function Signup(name, email, password, confirmpass) {
    setisLoading(true)

    if ((name == '') | (email == '') | (password == '') | (confirmpass == '')) {
      setisLoading(false)
      Alert.alert('Warning', 'Empty Fields')
    } else if (password != confirmpass) {
      setisLoading(false)
      Alert.alert('Warning', 'Passwords doesnt match ')
    } else if (password.length < 4) {
      setisLoading(false)
      Alert.alert('Warning', 'Password must have 4 characters')
    } else {
      setisLoading(true)
      let response = await axios.post(
        `${ip + 'signup.php'}`,
        JSON.stringify({ name: name, mail: email, pass: password })
      )
      const answer = response.data
      if (answer == 'error') {
        setisLoading(false)
        Alert.alert('Error', 'Something is wrong')
      } else if (answer == 'exist') {
        setisLoading(false)
        Alert.alert('Warning', 'We have an account with this email')
      } else {
        setisLoading(false)

        navigation.navigate('Signupmessage')
      }
    }
  }

  async function logout() {
    await AsyncStorage.removeItem('asyncuser')
    await AsyncStorage.removeItem('asyncuserIds')
    await AsyncStorage.removeItem('username')
    await AsyncStorage.removeItem('avatar')
    navigation.navigate('Login')
  }

  return (
    <AuthContext.Provider value={{ user, Login, isLoading, logout, Signup }}>
      {children}
    </AuthContext.Provider>
  )
}
