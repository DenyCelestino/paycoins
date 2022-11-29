import React, { useContext, useRef } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  TextInput,
  ToastAndroid,
  Alert
} from 'react-native'
import { MaterialIcons, Feather } from '@expo/vector-icons'
import { styles } from './style'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loading from '../../components/Loading'
import { Modalize } from 'react-native-modalize'
import { COLORS } from '../../theme'
import { ip } from '../../../config'
import axios from 'axios'

const win = Dimensions.get('window')

export default function Paymentgiftcard(props) {
  const [gamebanner, setGamebanner] = React.useState(
    props.route.params.gamebanner
  )
  const [haveserver, setHaveserver] = React.useState(
    props.route.params.giftcardInfo
  )

  const [tk, setTk] = React.useState('')
  const [server, setServer] = React.useState('')
  const [number, setNumber] = React.useState('')
  const [message1, setmessage1] = React.useState(false)
  const [message2, setmessage2] = React.useState(false)
  const [message3, setmessage3] = React.useState(false)
  const [message4, setmessage4] = React.useState(false)
  const [message5, setmessage5] = React.useState(false)
  const [paymentDetails, setPaymentDetail] = React.useState(
    props.route.params.item
  )
  const [isLoading, setIsLoading] = React.useState(false)

  const modalizeRef = useRef(null)
  const navigation = useNavigation()

  React.useEffect(() => {
    setGamebanner(props.route.params.gamebanner)
    setPaymentDetail(props.route.params.item)

    async function UserLoad() {
      const JsonUser = JSON.parse(await AsyncStorage.getItem('asyncuser'))
      setTk(JsonUser.tk)
    }

    UserLoad()
  }, [])
  const messagea = () => {
    setmessage1(true)
    setTimeout(() => {
      setmessage1(false)
      messageb()
    }, 7000)
  }
  const messageb = () => {
    setmessage2(true)
    setTimeout(() => {
      setmessage2(false)
      messagec()
    }, 7000)
  }
  const messagec = () => {
    setmessage3(true)
    setTimeout(() => {
      setmessage3(false)
      messaged()
    }, 7000)
  }
  const messaged = () => {
    setmessage4(true)
    setTimeout(() => {
      setmessage4(false)
      messagee()
    }, 7000)
  }
  const messagee = () => {
    setmessage5(true)
    setTimeout(() => {
      setmessage5(false)
    }, 50000)
  }
  async function payment() {
 
    const prefix = number.substr(0, 2)
    if (number.length < 9) {
      ToastAndroid.show('Numero invalido ❌', ToastAndroid.SHORT)
    } else if (prefix != 84 && prefix != 85) {
      ToastAndroid.show('Coloque um numero da vodacom ❌', ToastAndroid.SHORT)
    } else {
      setIsLoading(true)
      messagea()
      try {
        let getInfo = await axios.post(
          `${ip + 'payments.php'}`,
          JSON.stringify(
            {
              tk: tk,
              pricegift: paymentDetails.price,
              giftcardesc: paymentDetails.description_giftcard,
              giftype: paymentDetails.description_products,
              giftcardname: paymentDetails.name,
              type: 'giftcard',
              server: server,
              number: number
            },
            { timeout: 2000 }
          )
        )

        setNumber('')
        if (getInfo.data == 200) {
          navigation.navigate('Paymentsuccess', { item: paymentDetails })
          setIsLoading(false)
          onclose()
          setmessage1(false)
          setmessage2(false)
          setmessage3(false)
          setmessage4(false)
          setmessage5(false)
        } else {
          navigation.navigate('Paymentfailed')
          setIsLoading(false)
          onclose()
          setmessage1(false)
          setmessage2(false)
          setmessage3(false)
          setmessage4(false)
          setmessage5(false)
        }
      } catch (error) {
     
        if (error) {
          navigation.navigate('timeout')
          setIsLoading(false)
          onclose()
          setmessage1(false)
          setmessage2(false)
          setmessage3(false)
          setmessage4(false)
          setmessage5(false)
        }
      }
    }
  }

  async function onOpen() {
    modalizeRef.current?.open()
  }
  function onclose() {
    modalizeRef.current?.close()
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent hidden />
      <ImageBackground
        resizeMode="cover"
        source={
          gamebanner
            ? { uri: `${ip + paymentDetails.banner}` }
            : require('../../../assets/defaultprofile2.jpg')
        }
        style={{ height: win.height, width: win.width }}
      >
        <LinearGradient
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          colors={[COLORS.black, COLORS.rgbablack, COLORS.black]}
        >
          <View style={styles.topView}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather
                name="arrow-left-circle"
                size={30}
                color={COLORS.white}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.boxPayment}>
            <Text numberOfLines={2} style={styles.gameName}>
              {paymentDetails.description_products}
            </Text>
            <Text numberOfLines={2} style={styles.normalText}>
              {paymentDetails.quantity} {paymentDetails.description_giftcard}
            </Text>
            <Text style={styles.normalText}>{paymentDetails.price} MT</Text>
          </View>

          <View style={styles.paymentArea}>
            <TouchableOpacity onPress={() => onOpen()} style={styles.payButton}>
              <Text style={styles.buttonText}>
                BUY {paymentDetails.description_products}
              </Text>
              <MaterialIcons
                style={{ marginLeft: 12 }}
                name="attach-money"
                size={24}
                color={COLORS.white}
              />
            </TouchableOpacity>
          </View>
          <Modalize
            snapPoint={600}
            modalStyle={{
              backgroundColor: COLORS.black
            }}
            ref={modalizeRef}
          >
            {isLoading ? (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 120
                }}
              >
                <Loading />
                {message1 == true ? (
                  <Text style={styles.messages}>Aguarde 30 segundos</Text>
                ) : (
                  <></>
                )}
                {message2 == true ? (
                  <Text style={styles.messages}>
                    Seu numero de telefone deve ser registrado no MPESA( e
                    activo) para que isso funcione
                  </Text>
                ) : (
                  <></>
                )}
                {message3 == true ? (
                  <Text style={styles.messages}>
                    Você recebera um pop-up no telefone solicitando a
                    confirmação do pagamento
                  </Text>
                ) : (
                  <></>
                )}
                {message4 == true ? (
                  <Text style={styles.messages}>
                    Digite seu PIN de serviço (MPESA) para continuar.
                  </Text>
                ) : (
                  <></>
                )}
                {message5 == true ? (
                  <Text style={styles.messages}>
                    Você recebera uma mensagem de confirmação logo em seguida
                  </Text>
                ) : (
                  <></>
                )}
              </View>
            ) : (
              <View
                style={{
                  marginTop: 5,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <TouchableOpacity
                  onPress={() => onclose()}
                  style={styles.closemodalButton}
                >
                  <Text style={styles.closemodalText}>X</Text>
                </TouchableOpacity>
                <Text style={styles.modalText}>
                  Deseja realmente comprar o:{' '}
                  {paymentDetails.description_products} {'\n'}
                  do genero: {paymentDetails.description_giftcard} com o valor:{' '}
                  {paymentDetails.price} MT ?
                </Text>
                {haveserver.server ? (
                  <TextInput
                    style={styles.haveserver}
                    placeholder="Digite o nome de servidor"
                    placeholderTextColor="gray"
                    color={COLORS.white}
                    onChangeText={e => setServer(e)}
                  />
                ) : (
                  <></>
                )}
                <TextInput
                  style={styles.haveserver}
                  maxLength={9}
                  placeholder="numero mpesa"
                  placeholderTextColor="gray"
                  keyboardType="numeric"
                  color={COLORS.white}
                  onChangeText={e => setNumber(e)}
                />
                <TouchableOpacity
                  onPress={() => payment()}
                  style={styles.payButton}
                >
                  <Text numberOfLines={1} style={styles.buttonText}>
                    BUY {paymentDetails.name}{' '}
                    {paymentDetails.description_products}
                  </Text>
                  <MaterialIcons
                    style={{ marginLeft: 12 }}
                    name="attach-money"
                    size={24}
                    color={COLORS.white}
                  />
                </TouchableOpacity>
              </View>
            )}
          </Modalize>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  )
}
