import React, { useRef } from 'react'
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Alert
} from 'react-native'
import { styles } from './style'
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS } from '../../theme'
import { Modalize } from 'react-native-modalize'
import Loading from '../../components/Loading'
import { ip } from '../../../config'
import axios from 'axios'

export default function DetailId(props) {
  const [myids, setmyids] = React.useState({})
  const [infos, setInfos] = React.useState('')
  const [nick, setNick] = React.useState('')
  const [tk, setTk] = React.useState('')
  const [userAccount, setUserAccount] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

  const navigation = useNavigation()

  const modalizeRef = useRef(null)

  React.useEffect(() => {
    setmyids(props.route.params.items.gamesid)
    async function UserLoad() {
      const JsonUser = JSON.parse(await AsyncStorage.getItem('asyncuser'))
      setTk(JsonUser.tk)
    }

    UserLoad()
  }, [!myids])

  async function onOpen(item) {
    modalizeRef.current?.open()
    setInfos(item)
    setIsLoading(false)
  }

  async function updateNick(id) {
    setIsLoading(true)
    let getInfo = await axios.post(
      `${ip + 'updateid.php'}`,
      JSON.stringify({
        tk: tk,
        id: id,
        nick: nick,
        newidgame: userAccount
      })
    )

    if (getInfo.data == 'emptyfields') {
      setIsLoading(false)
      Alert.alert('Warning', 'Campos necessarios vazios')
    } else if (getInfo.data == 'done') {
      setIsLoading(false)
      Alert.alert('Success⛷️', 'Dados actualizados')
      modalizeRef.current?.close()
      navigation.navigate('Home')
    } else if (getInfo.data == 'error') {
      setIsLoading(false)
      Alert.alert('Error', 'Alguma coisa deu errado😢')
    }

    setIsLoading(false)
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
      {myids ? (
        <>
          <ImageBackground
            resizeMode="cover"
            source={require('../../../assets/wallgames.jpg')}
            style={{ height: 300, width: '100%' }}
          >
            <LinearGradient
              style={{ flex: 1 }}
              colors={[COLORS.black, COLORS.transparent, COLORS.black]}
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
              <View
                style={{
                  position: 'absolute',
                  bottom: 10,
                  marginLeft: 12
                }}
              >
                <Text style={styles.texts}>Instrucoes:</Text>
                <Text style={{ ...styles.texts, fontSize: 10 }}>
                  <Text style={{ color: COLORS.yellow }}>LARANJA</Text>: seu ID
                  esta em analise
                </Text>
                <Text style={{ ...styles.texts, fontSize: 10 }}>
                  <Text style={{ color: COLORS.green }}>VERDE</Text>: seu ID
                  esta Aprovado
                </Text>
                <Text style={{ ...styles.texts, fontSize: 10 }}>
                  <Text style={{ color: COLORS.red }}>VERMELHO</Text>: seu ID
                  foi reprovado
                </Text>
              </View>
            </LinearGradient>
          </ImageBackground>

          <FlatList
            style={{
              width: '100%',
              height: '100%',
              marginTop: 20
            }}
            data={myids}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => onOpen(item)}
                activeOpacity={0.6}
              >
                <View
                  style={{
                    width: '100%',
                    height: 150,
                    backgroundColor: COLORS.black,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: COLORS.white
                  }}
                >
                  <Text style={styles.texts}>GAME: {item.gamename}</Text>
                  <Text style={styles.texts}>NICKNAME: {item.nick}</Text>
                  <Text style={styles.texts}>ACCOUNT-ID: {item.account}</Text>
                  <View>
                    <Text style={styles.texts}>
                      STATUS:
                      <Text
                        style={{
                          ...styles.texts,
                          color:
                            item.status === 'Reprovado' ? (
                              COLORS.red
                            ) : item.status === 'Pendente' ? (
                              COLORS.yellow
                            ) : item.status === 'Aprovado' ? (
                              COLORS.green
                            ) : (
                              <></>
                            )
                        }}
                      >
                        {item.status}
                      </Text>
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </>
      ) : (
        <Text style={styles.texts}>Sem IDS</Text>
      )}

      <Modalize
        snapPoint={500}
        modalHeight={500}
        modalStyle={{
          backgroundColor: COLORS.black
        }}
        ref={modalizeRef}
      >
        {isLoading ? (
          <Loading />
        ) : (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 40
            }}
          >
            <Text
              style={{
                ...styles.texts,
                marginBottom: 15,
                textAlign: 'justify'
              }}
            >
              Deseja actualizar os dados do jogo{' '}
              <Text style={{ color: COLORS.cyan }}>{infos.gamename}?</Text>
            </Text>
            <TextInput
              placeholderTextColor={COLORS.lilas}
              placeholder={`${infos.account}`}
              keyboardType="numeric"
              onChangeText={e => setUserAccount(e)}
              style={styles.input}
            />
            <TextInput
              placeholderTextColor={COLORS.lilas}
              placeholder={`${infos.nick}`}
              onChangeText={e => setNick(e)}
              style={styles.input}
            />
            {infos.status === 'Reprovado' && (
              <Text style={{ ...styles.texts, fontSize: 10 }}>
                <Text style={{ color: COLORS.yellow }}>NB:</Text> Esse ID foi
                Reprovado, Tente usar outro
              </Text>
            )}
            <TouchableOpacity
              onPress={() =>
                infos.account == userAccount && infos.status === 'Reprovado'
                  ? Alert.alert('Erro', 'Esse ID ja foi reprovado tente outro')
                  : updateNick(infos.id)
              }
              style={styles.payButton}
            >
              <Text style={[styles.requestText]}>
                Actualizar e solicitar analise
              </Text>
              <Feather
                style={{ marginLeft: 12 }}
                name="save"
                size={24}
                color={COLORS.white}
              />
            </TouchableOpacity>
          </View>
        )}
      </Modalize>
    </SafeAreaView>
  )
}
