import React, { useContext } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator
} from 'react-native'
import { styles } from './style'
import { COLORS } from '../../theme'
import { StatusBar } from 'expo-status-bar'
import { AuthContext } from '../../contexts/auth'
import { useNavigation } from '@react-navigation/native'

import Loading from '../../components/Loading'

export default function Login() {
  const navigation = useNavigation()
  const [email, setEmail] = React.useState('')
  const [name, setName] = React.useState('')
  const [confirmpass, setconfirmpass] = React.useState('')
  const [password, setPassword] = React.useState('')

  const { Signup, isLoading } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <StatusBar translucent style="dark" />

      <View style={styles.FormContainer}>
        <View style={styles.containerContent}>
          {isLoading ? <ActivityIndicator color="white" size="large" /> : <></>}
          <Text style={styles.Title}>Hi, Come with us</Text>
          <Text style={styles.slogan}>
            Find, Click, Pay, easy like that... 😊
          </Text>
        </View>
        <KeyboardAvoidingView
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <TextInput
            style={styles.inputs}
            placeholder="Enter your name"
            placeholderTextColor={COLORS.white}
            onChangeText={e => setName(e)}
            value={name}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Enter your email"
            placeholderTextColor={COLORS.white}
            onChangeText={e => setEmail(e)}
            value={email}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Enter your password"
            placeholderTextColor={COLORS.white}
            secureTextEntry
            onChangeText={e => setPassword(e)}
            value={password}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Confirm your password"
            placeholderTextColor={COLORS.white}
            secureTextEntry
            onChangeText={e => setconfirmpass(e)}
            value={confirmpass}
          />

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => Signup(name, email, password, confirmpass)}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>Signup on PayCoin's</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textSignup}>
              have account?
              <Text style={styles.signUpTouchable}>signIn</Text>
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  )
}
