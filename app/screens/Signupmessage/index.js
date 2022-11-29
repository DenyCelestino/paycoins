import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Linking,
  ActivityIndicator
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { styles } from './style'
import LottieView from 'lottie-react-native'

export default function Signupmessage() {
  const navigation = useNavigation()

  let animation = React.createRef()
  React.useEffect(() => {
    animation.current.play()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.normalText, fontSize: 20 }}>
        Conta criada com sucesso
      </Text>
      <LottieView
        ref={animation}
        loop={false}
        style={{
          width: 300,
          height: 300
        }}
        source={require('../../../assets/signup.json')}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.buttonback}
      >
        <Text style={styles.normalText}>Iniciar sessão</Text>
      </TouchableOpacity>
    </View>
  )
}
