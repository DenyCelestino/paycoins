import React from 'react'
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  Platform
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons'
import { styles } from './style'
import { ip } from '../../../config'
export default function Support() {
  const [supportlist, setSupportlist] = React.useState([])
  const navigation = useNavigation()

  React.useEffect(() => {
    support()
  }, [])

  async function support() {
    let response = await axios.get(`${ip}support.php`)

    setSupportlist(response.data.support)
  }
  function sendWhatsApp(number) {
    let msg = `*Para paycoins support*:${'\n'}Preciso de ajuda`
    let phoneWithCountryCode = number

    let mobile =
      Platform.OS == 'ios'
        ? phoneWithCountryCode
        : '+258' + phoneWithCountryCode
    if (mobile) {
      if (msg) {
        let url = 'whatsapp://send?text=' + msg + '&phone=' + mobile
        Linking.openURL(url)
          .then(data => {
            console.log('WhatsApp Opened')
          })
          .catch(() => {
            alert('Certifique-se que o whatsapp esta instalado')
          })
      } else {
        alert('Please insert message to send')
      }
    } else {
      alert('Please insert mobile no')
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          alignSelf: 'flex-start',
          padding: 20,
          position: 'absolute',
          top: 0
        }}
        onPress={() => navigation.goBack()}
      >
        <Feather name="arrow-left-circle" size={30} color="white" />
      </TouchableOpacity>
      <FlatList
        data={supportlist}
        style={{ marginTop: 50, width: '100%' }}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity
              onPress={() => Linking.openURL(`tel:${item.number}`)}
              style={{
                ...styles.buttondial,
                backgroundColor: 'blue',
                display: item.type == 'phone' ? 'flex' : 'none'
              }}
              activeOpacity={0.8}
            >
              <Text style={styles.normalText}>{item.title}</Text>
              <AntDesign name="phone" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => sendWhatsApp(item.number)}
              style={{
                ...styles.buttondial,
                display: item.type == 'whatsapp' ? 'flex' : 'none'
              }}
              activeOpacity={0.8}
            >
              <Text style={styles.normalText}>{item.title}</Text>
              <FontAwesome name="whatsapp" size={24} color="white" />
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  )
}
