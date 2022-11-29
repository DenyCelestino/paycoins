import React from 'react'
import {
  StatusBar,
  Text,
  ScrollView,
  SafeAreaView,
  View,
  TouchableOpacity
} from 'react-native'
import axios from 'axios'
import Listgiftcardtype from '../../components/Listgiftcardtypes'
import Listcoins from '../../components/Listcoins'
import Loading from '../../components/Loading'
import Banner from '../../components/Banner'
import { styles } from './style'
import { ip } from '../../../config'
import { Feather } from '@expo/vector-icons'
import { COLORS } from '../../theme'
import { useNavigation } from '@react-navigation/native'

export default function Detail(props) {
  const [gift, setGiftcard] = React.useState([])
  const [coins, setCoins] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const navigation = useNavigation()

  const data = props.route.params.item
  const id = data.id

  React.useEffect(() => {
    async function giftcardtypes() {
      setLoading(true)
      let dados = await axios.post(
        `${ip + 'giftcardtypes.php'}`,
        JSON.stringify({ id: id })
      )

      setGiftcard(dados.data.gifttypes)
      setLoading(false)
    }
    data.product_type == 'giftcard' ? setLoading(true) : ''
    async function gamecoins() {
      setLoading(true)
      let dados = await axios.post(
        `${ip + 'gamescoins.php'}`,
        JSON.stringify({ id: id })
      )

      setCoins(dados.data.coins)
      setLoading(false)
    }

    gamecoins()
    giftcardtypes()
  }, [data.product_type == 'giftcard'])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      {loading ? <Loading /> : <></>}
      <Banner data={data} />
      <TouchableOpacity
        style={{ alignSelf: 'flex-start', padding: 20 }}
        onPress={() => navigation.goBack()}
      >
        <Feather name="arrow-left-circle" size={30} color={COLORS.white} />
      </TouchableOpacity>
      <ScrollView style={{ width: '100%' }}>
        {data.product_type == 'giftcard' && gift ? (
          <>
            <Text style={styles.giftcardTypes}>Tipos de giftcard</Text>
            <Listgiftcardtype
              data={gift}
              giftbanner={data.banner}
              giftcardInfo={data}
            />
          </>
        ) : (
          <Listcoins data={coins} gamebanner={data.banner} gameInfo={data} />
        )}

        {!gift && data.product_type == 'giftcard' ? (
          <View style={styles.WithoutgiftViewTypes}>
            <Text style={styles.textWithoutGifTypes}>
              GIFTCARD DE PREÇO ÚNICO
            </Text>
          </View>
        ) : (
          <></>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}
