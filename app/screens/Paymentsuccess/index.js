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

export default function Paymentsuccess(props) {
  const navigation = useNavigation()

  let detail = props.route.params.item
  let animation = React.createRef()
  React.useEffect(() => {
    animation.current.play()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.normalText, fontSize: 20 }}>
        Pagamento feito com sucesso
      </Text>
      <LottieView
        ref={animation}
        loop={false}
        style={{
          width: 300,
          height: 300
        }}
        source={require('../../../assets/payment.json')}
      />
      <View style={{ display: detail.namecoins ? 'flex' : 'none' }}>
        <Text style={{ ...styles.normalText, fontSize: 40 }}>
          {detail.namegame}
        </Text>
        <Text style={styles.normalText}>Price: {detail.price}</Text>
        <Text style={styles.normalText}>
          Quantidade: {detail.quantity} {detail.namecoins}
        </Text>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.buttonback}
        >
          <Text style={styles.normalText}>ok</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{ display: detail.product_type == 'giftcard' ? 'flex' : 'none' }}
      >
        <Text
          style={{ ...styles.normalText, fontSize: 35, textAlign: 'center' }}
        >
          {detail.name}
        </Text>
        <Text style={styles.normalText}>Price: {detail.price}</Text>
        <Text style={styles.normalText}>
          Giftcard type: {detail.description_giftcard}
        </Text>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.buttonback}
        >
          <Text style={styles.normalText}>ok</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
