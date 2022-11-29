import React from 'react'
import { Text, SafeAreaView, ActivityIndicator, View } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import { StatusBar } from 'expo-status-bar'
import axios from 'axios'
import Banner from '../../components/Banner'
import List from '../../components/List'
import Loading from '../../components/Loading'
import Notice from '../../components/Notice'
import { styles } from './style'
import { ip } from '../../../config'

export default function Home(navigation) {
  const navegar = navigation.navigation
  const [cartaz, setCartaz] = React.useState('')
  const [jogos, setJogos] = React.useState([])
  const [giftcard, setGiftcard] = React.useState([])
  const [isbanner, setBanner] = React.useState([])
  const [loading, SetLoading] = React.useState(false)
  const [banner, WithoutBanner] = React.useState(false)

  React.useEffect(() => {
    gamedata()
    giftcarddata()
    banners()
  }, [banner == true])

  // giftcard render
  async function giftcarddata() {
    SetLoading(true)

    let dados = await axios.get(`${ip + 'productsgiftcard.php'}`)

    setGiftcard(dados.data.gifcard)

    SetLoading(false)
  }

  // banners
  async function banners() {
    SetLoading(true)

    let dados = await axios.get(`${ip + 'banners.php'}`)

    setBanner(dados.data.banners)

    var randomItem = isbanner[Math.floor(Math.random() * isbanner.length)]

    randomItem ? setCartaz(randomItem) : WithoutBanner(true)

    SetLoading(false)
  }

  // game data
  async function gamedata() {
    SetLoading(true)

    let dados = await axios.get(`${ip + 'productsgames.php'}`)

    setJogos(dados.data.games)

    SetLoading(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <StatusBar translucent hidden />
        <Banner data={cartaz} navigation={navegar} />
        {loading ? <ActivityIndicator size="large" color="cyan" /> : <></>}
        {jogos && !loading ? (
          <Text style={styles.CategoryText}>GAMES</Text>
        ) : (
          <></>
        )}
        <List data={jogos} navigation={navegar} />
        {giftcard && !loading ? (
          <Text style={styles.CategoryText}>GIFT CARD</Text>
        ) : (
          <></>
        )}
        <List data={giftcard} navigation={navegar} />
        {/* <Text style={styles.CategoryText}>NEWSLETTER</Text>
    
          <Notice /> */}
      </ScrollView>
    </SafeAreaView>
  )
}
