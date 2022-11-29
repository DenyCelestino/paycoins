import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Linking,
  ActivityIndicator
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Home from '../Home'
import Login from '../Login'
import Update from '../Login'
import Network from '../Network'
import axios from 'axios'
import { ip } from '../../../config'
import { COLORS, FONTS } from '../../theme'

import { styles } from './style'
import NetInfo from '@react-native-community/netinfo'
import LottieView from 'lottie-react-native'

export default function Preloader(props) {
  const [verifyuser, setVerifyUser] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [netState, setNetState] = React.useState(false)
  const [fixing, setFixing] = React.useState([])
  const [version, setversion] = React.useState([])

  let versionverify = 1

  React.useEffect(() => {
    NetInfo.addEventListener(state => {
      setNetState(state.isConnected)
      console.log('Connection type', state.type)
      console.log('Is connected?', state.isConnected)
    })

    async function Verfify() {
      const userasync = await AsyncStorage.getItem('asyncuser')
      setVerifyUser(userasync)
    }
    Verfify()
    getFixing()
    getversion()
  }, [])

  async function getFixing() {
    setLoading(true)
    let response = await axios.get(`${ip}fixing.php`)
    setFixing(response.data.fixing)
    setLoading(false)
 
  }
  async function getversion() {
    setLoading(true)
    let response = await axios.get(`${ip}version.php`)
    setversion(response.data.fixing)
    setLoading(false)
  }
  const timer = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }

  return (
    <>
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.black
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontFamily: FONTS.RobotoMono_600SemiBold
            }}
          >
            Verficando a versão do aplicativo
          </Text>
          <ActivityIndicator color={COLORS.cyan} size="large" />
        </View>
      ) : (
        <>
          {netState != true ? (
            <Network />
          ) : (
            <>
              {version.map(item => (
                <View
                  key={item.id}
                  style={{
                    ...styles.container
                  }}
                >
                  {item.version > versionverify ? (
                    <>
                      <Text style={{ ...styles.normalText, fontSize: 50 }}>
                        {item.name}
                      </Text>

                      <Text
                        style={{ ...styles.normalText, textAlign: 'center' }}
                      >
                        {item.message}
                      </Text>
                      <TouchableOpacity
                        onPress={() => Linking.openURL(`${item.buttonlink}`)}
                        style={styles.buttondownload}
                      >
                        <Text style={styles.normalText}>{item.buttontext}</Text>
                      </TouchableOpacity>
                    </>
                  ) : (
                    <>
                      {fixing ? (
                        <>
                          {fixing.map(item => (
                            <View key={item.id} style={styles.container}>
                              <View
                                style={{
                                  ...styles.container,
                                  display:
                                    item.type == 'network' ? 'flex' : 'none'
                                }}
                              >
                                {loading ? (
                                  <ActivityIndicator
                                    size="large"
                                    color={'#fff'}
                                  />
                                ) : (
                                  <></>
                                )}
                                {!loading ? (
                                  <>
                                    <Text
                                      style={{
                                        ...styles.normalText,
                                        fontSize: 50
                                      }}
                                    >
                                      {item.name}
                                    </Text>

                                    <Text style={styles.normalText}>
                                      {item.message}
                                    </Text>
                                    <TouchableOpacity
                                      onPress={() => timer()}
                                      style={styles.buttondownload}
                                    >
                                      <Text style={styles.normalText}>
                                        {item.buttontext}
                                      </Text>
                                    </TouchableOpacity>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </View>
                            </View>
                          ))}
                        </>
                      ) : !verifyuser ? (
                        <Login />
                      ) : (
                        <Home navigation={props.navigation} />
                      )}
                    </>
                  )}
                </View>
              ))}
            </>
          )}
        </>
      )}
    </>
  )
}
