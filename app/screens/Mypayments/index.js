import React, { useRef } from 'react'
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
  FlatList,
  ToastAndroid
} from 'react-native'
import { Modalize } from 'react-native-modalize'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { styles } from './style'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../../theme'
import { ScrollView } from 'react-native-gesture-handler'
import * as Clipboard from 'expo-clipboard'

export default function Mypayments(props) {
  const [Payments, setPayments] = React.useState([])
  const [gamedetail, setGameDetail] = React.useState('')
  const [giftdetail, setGiftDetail] = React.useState('')
  const [copiedText, setCopiedText] = React.useState('')
  const [user, setUser] = React.useState('')
  const modalizeRefgame = useRef(null)
  const modalizeRefgift = useRef(null)

  const navigation = useNavigation()
  React.useEffect(() => {
    setPayments(props.route.params.items.payments)

    async function getUser() {
      setUser(await AsyncStorage.getItem('username'))
    }
    getUser()
  }, [!Payments])

  async function copyToClipboard(reference) {
    Clipboard.setString(reference)
    const text = await Clipboard.getStringAsync()
    setCopiedText(text)
    ToastAndroid.show(`referencia: ${copiedText} copiada`, ToastAndroid.SHORT)
  }

  async function gamePaymentsDetail(item) {
    modalizeRefgame.current?.open()
    setGameDetail(item)
  }
  async function giftPaymentsDetail(item) {
    modalizeRefgift.current?.open()
    setGiftDetail(item)
  }
  function onclose() {
    modalizeRefgame.current?.close()
    modalizeRefgift.current?.close()
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{
          alignSelf: 'flex-start',
          padding: 20,
          position: 'absolute',
          top: 0
        }}
        onPress={() => navigation.goBack()}
      >
        <Feather name="arrow-left-circle" size={30} color={COLORS.white} />
      </TouchableOpacity>
      {!Payments ? (
        <Text style={styles.texts}>Sem pagamentos</Text>
      ) : (
        <>
          <FlatList
            style={{
              width: '100%',
              height: '100%',
              marginTop: 50
            }}
            data={Payments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.maincontainer}>
                {item.payment_type == 'game' && (
                  <TouchableOpacity
                    onPress={() => gamePaymentsDetail(item)}
                    style={{
                      ...styles.gamepaymentscontainer,
                      borderBottomColor:
                        (item.status == 'Pendente') |
                        (item.status == 'Processando')
                          ? COLORS.yellow
                          : COLORS.green
                    }}
                  >
                    <Text numberOfLines={1} style={styles.texts}>
                      Comprou{' '}
                      <Text style={{ color: COLORS.yellow }}>
                        {item.quantity} {item.name_coins}
                      </Text>{' '}
                      do jogo {item.game_name} aos {item.payment_date}
                    </Text>
                  </TouchableOpacity>
                )}
                {item.payment_type == 'giftcard' && (
                  <TouchableOpacity
                    onPress={() => giftPaymentsDetail(item)}
                    style={{
                      ...styles.giftpaymentscontainer,
                      borderBottomColor:
                        (item.status == 'Pendente') |
                        (item.status == 'Processando')
                          ? COLORS.cyan
                          : COLORS.green
                    }}
                  >
                    <Text numberOfLines={1} style={styles.texts}>
                      Comprou o{' '}
                      <Text style={{ color: 'cyan' }}>
                        {item.giftcard_description}
                      </Text>{' '}
                      da {item.giftcard_name} aos {item.payment_date}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
          />
        </>
      )}

      {/* games modal */}
      <Modalize
        snapPoint={500}
        modalHeight={500}
        modalStyle={{
          backgroundColor: COLORS.black
        }}
        ref={modalizeRefgame}
      >
        <TouchableOpacity
          onPress={() => onclose()}
          style={styles.closemodalButton}
        >
          <Text style={styles.closemodalText}>X</Text>
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.texts}>
            Saudações senhor(a){' '}
            <Text style={{ color: COLORS.yellow }}>{user}</Text>
          </Text>
          <Text style={{ color: COLORS.white }}>
            Aos:{' '}
            <Text style={{ color: COLORS.yellow }}>
              {gamedetail.payment_date}
            </Text>
            {'\n'}
          </Text>
          <Text style={styles.texts}>
            Efectou o pagamento de{' '}
            <Text style={{ color: COLORS.yellow }}>
              {gamedetail.quantity} {gamedetail.name_coins}
            </Text>{' '}
            do jogo{' '}
            <Text style={{ color: COLORS.yellow }}>{gamedetail.game_name}</Text>{' '}
            para a conta:{' '}
            <Text style={{ color: COLORS.yellow }}>{gamedetail.nick}</Text> com
            ID{' '}
            <Text style={{ color: COLORS.yellow }}>{gamedetail.account}</Text>{' '}
            no valor de{' '}
            <Text style={{ color: COLORS.yellow }}>
              {gamedetail.price_game} MT
            </Text>{' '}
            {gamedetail.server ? (
              <Text style={styles.texts}>
                para o servidor{' '}
                <Text style={{ color: COLORS.yellow }}>
                  {gamedetail.server}
                </Text>
              </Text>
            ) : (
              <></>
            )}{' '}
            <Text style={styles.texts}>
              com a refencia{' '}
              <TouchableOpacity
                onPress={() => copyToClipboard(gamedetail.reference)}
              >
                <Text style={{ color: COLORS.yellow }}>
                  {gamedetail.reference}
                </Text>
              </TouchableOpacity>
            </Text>
            {'\n'}
            {'\n'}
            Estado do pagamento:{' '}
            <Text
              style={{
                color:
                  gamedetail.status == 'Pago' ? COLORS.green : COLORS.yellow
              }}
            >
              {gamedetail.status}
            </Text>
          </Text>
        </ScrollView>
      </Modalize>

      {/* Giftcard modal */}
      <Modalize
        snapPoint={500}
        modalHeight={500}
        modalStyle={{
          backgroundColor: COLORS.black
        }}
        ref={modalizeRefgift}
      >
        <TouchableOpacity
          onPress={() => onclose()}
          style={styles.closemodalButton}
        >
          <Text style={styles.closemodalText}>X</Text>
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.texts}>
            Saudações senhor(a){' '}
            <Text style={{ color: COLORS.cyan }}>{user}</Text>
          </Text>
          <Text style={{ color: COLORS.white }}>
            Aos:{' '}
            <Text style={{ color: COLORS.cyan }}>
              {giftdetail.payment_date}
            </Text>
            {'\n'}
          </Text>
          <Text style={styles.texts}>
            Efectou o pagamento do{' '}
            <Text style={{ color: COLORS.cyan }}>
              {giftdetail.giftcard_description}
            </Text>{' '}
            do(a){' '}
            <Text style={{ color: COLORS.cyan }}>
              {giftdetail.giftcard_name}
            </Text>{' '}
            no valor de{' '}
            <Text style={{ color: COLORS.cyan }}>
              {giftdetail.price_gift} MT
            </Text>{' '}
            {giftdetail.server ? (
              <Text style={styles.texts}>
                para o servidor{' '}
                <Text style={{ color: COLORS.cyan }}>{giftdetail.server}</Text>
              </Text>
            ) : (
              <></>
            )}
            <Text style={styles.texts}>
              com a referencia{' '}
              <TouchableOpacity
                onPress={() => copyToClipboard(giftdetail.reference)}
              >
                <Text style={{ color: COLORS.cyan }}>
                  {giftdetail.reference}
                </Text>
              </TouchableOpacity>
            </Text>
            {'\n'}
            {'\n'}
            Estado do pagamento:{' '}
            <Text
              style={{
                color: giftdetail.status == 'Pago' ? COLORS.green : COLORS.cyan
              }}
            >
              {giftdetail.status}
            </Text>
          </Text>
        </ScrollView>
      </Modalize>
    </SafeAreaView>
  )
}
