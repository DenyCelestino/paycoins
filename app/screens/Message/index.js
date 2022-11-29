import React, { useRef } from 'react'
import {
  StatusBar,
  Text,
  ScrollView,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
  ToastAndroid
} from 'react-native'
import { COLORS } from '../../theme'
import { styles } from './style'
import { Modalize } from 'react-native-modalize'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as Clipboard from 'expo-clipboard'

export default function Message(props) {
  const notification = props.route.params.items.notification
  const [gift, setGift] = React.useState('')
  const [copiedText, setCopiedText] = React.useState('')
  const modalizeRefgift = useRef(null)
  const navigation = useNavigation()

  React.useEffect(() => {}, [])
  async function onOpengift(item) {
    modalizeRefgift.current?.open()
    setGift(item)
  }

  async function copyToClipboard(code) {
    Clipboard.setString(code)
    const text = await Clipboard.getStringAsync()
    setCopiedText(text)
    ToastAndroid.show(`giftcard: ${copiedText} copiado`, ToastAndroid.SHORT)
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
      {notification ? (
        <FlatList
          style={{ marginTop: 20 }}
          data={notification}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => onOpengift(item)}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'flex-start'
              }}
            >
              <Text style={styles.modalText}>
                {' '}
                Chegou o seu {item.giftcardname}{' '}
                {index == 0 ? (
                  <Text style={{ color: COLORS.yellow }}>New</Text>
                ) : (
                  ''
                )}
              </Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.modalText}>Sem mensagens</Text>
      )}
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
          <Text style={styles.modalText}>
            Recebeu o {gift.description} do {gift.giftcardname}
          </Text>
          <TouchableOpacity onPress={() => copyToClipboard(gift.code)}>
            <Text style={styles.modalText}>Codigo giftcard:{gift.code}</Text>
          </TouchableOpacity>
          {gift.server ? (
            <Text style={styles.modalText}>Servidor: {gift.server}</Text>
          ) : (
            <></>
          )}
          <Text style={styles.modalText}>
            referencia do pagamento:{gift.reference}
          </Text>
        </ScrollView>
      </Modalize>
    </SafeAreaView>
  )
}
