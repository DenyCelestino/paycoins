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

export default function Paymentfailed() {
  const navigation = useNavigation()

  let animation = React.createRef()
  React.useEffect(() => {
    animation.current.play()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.normalText, fontSize: 20 }}>
        Pagamento sem sucesso
      </Text>
      <LottieView
        ref={animation}
        loop={false}
        style={{
          width: 300,
          height: 300
        }}
        source={require('../../../assets/failed.json')}
      />

      <Text style={{ ...styles.normalText, fontSize: 40 }}>
        Tente novamente
      </Text>
      <Text style={styles.normalText}>Verifique sua bolsa</Text>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.buttonback}
      >
        <Text style={styles.normalText}>ok</Text>
      </TouchableOpacity>
    </View>
  )
}
