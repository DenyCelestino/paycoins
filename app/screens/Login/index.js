import React, { useContext } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
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
  const [password, setPassword] = React.useState('')

  const { Login, isLoading } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <StatusBar translucent style="dark" />
      <View style={styles.containerContent}>
        <Text style={styles.Title}>PAYCOIN'S</Text>
        <Text style={styles.slogan}>Your player, your skin, define you</Text>
      </View>
      <View style={styles.FormContainer}>
        {isLoading ? <Loading /> : <></>}
        <KeyboardAvoidingView
          behavior="height"
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
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

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => Login(email, password)}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>SignIn</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.textSignup}>
              Don’t have account?
              <Text style={styles.signUpTouchable}>signup</Text>
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  )
}
