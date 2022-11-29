import React, { useContext } from 'react'
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { styles } from './style'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS } from '../../theme'
import { ip } from '../../../config'
import { AuthContext } from '../../contexts/auth'

export default function Banner(data) {
  const [asyncUser, setAsyncUser] = React.useState('')
  const [asyncAvatar, setAsyncAvatar] = React.useState()
  const cartaz = data.data
  const { user } = useContext(AuthContext)
  const [userdata, setUserdata] = React.useState({})
  const navigation = useNavigation()

  React.useEffect(() => {
    async function userAsync() {
      setAsyncUser(await AsyncStorage.getItem('username'))
      setAsyncAvatar(await AsyncStorage.getItem('avatar'))
      setUserdata(JSON.parse(await AsyncStorage.getItem('asyncuser')))
    }

    userAsync()
  }, [])

  return (
    <>
      <ImageBackground
        resizeMode="cover"
        source={{ uri: `${ip + cartaz.banner}` }}
        style={{ height: 300, width: '100%' }}
      >
        <LinearGradient
          style={{ flex: 1 }}
          colors={[COLORS.black, COLORS.transparent, COLORS.black]}
        >
          <View style={styles.aboutUsContainer}>
            <View style={styles.userInfo}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('Profile', { user: userdata })
                }
              >
                {user.avatar != '' && asyncAvatar != null ? (
                  <Image
                    style={styles.userAvatar}
                    source={{
                      uri: user.avatar
                        ? `${ip + user.avatar}`
                        : `${ip + asyncAvatar}`
                    }}
                  />
                ) : (
                  <Image
                    resizeMode="cover"
                    style={styles.userAvatar}
                    source={require('../../../assets/defaultprofile2.jpg')}
                  />
                )}
              </TouchableOpacity>
              <Text style={styles.nameUser}>
                Hello, {'\n'}
                {user ? user.name : asyncUser}
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Support')}>
              <Feather name="info" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.ViewContentBanner}>
            <Text numberOfLines={1} style={styles.BannerTitle}>
              {cartaz.name}
            </Text>
            <Text numberOfLines={1} style={styles.BannerGener}>
              {cartaz.gender}
            </Text>
            <Text numberOfLines={2} style={styles.BannerDescription}>
              {cartaz.description_products}
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </>
  )
}
