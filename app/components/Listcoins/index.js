import React, { useState } from 'react'
import {
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Alert
} from 'react-native'
import { COLORS } from '../../theme'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { styles } from './style'
import { ip } from '../../../config'
import axios from 'axios'

export default function Listcoins({ data, gamebanner, gameInfo }) {
  const [credit, setCheckcredit] = useState([])

  const navigation = useNavigation()
  const CARDINFO = data

  React.useEffect(() => {
    async function checkcredits() {
      let check = await axios.get(`${ip}checkcredits.php`)
    
      setCheckcredit(check.data)
    }
    checkcredits()
  }, [])

  return (
    <FlatList
      data={CARDINFO}
      style={{ marginRight: 20 }}
      horizontal
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            item.price > credit.credit
              ? Alert.alert('Quantidade Indisponivel', 'Tente mais tarde')
              : navigation.navigate('Paymentgame', {
                  item: item,
                  gamebanner: gamebanner,
                  gameInfo: gameInfo
                })
          }
        >
          <ImageBackground
            resizeMode="cover"
            source={{ uri: `${ip + item.banner}` }}
            scrollIndicator={false}
            style={{ height: 150, width: 150, margin: 12 }}
            imageStyle={{ borderRadius: 10 }}
          >
            <LinearGradient
              style={{ flex: 1 }}
              colors={
                item.price > credit.credit
                  ? [COLORS.rgbabwhite, COLORS.rgbabwhite, COLORS.rgbabwhite]
                  : [COLORS.black, COLORS.transparent, COLORS.black]
              }
            >
              <Text numberOfLines={2} style={styles.nameGame}>
                {item.quantity} {item.namecoins}
              </Text>

              <Text style={styles.pricelabel}>{item.price + 'MT'}</Text>
            </LinearGradient>
          </ImageBackground>
        </TouchableOpacity>
      )}
    />
  )
}
