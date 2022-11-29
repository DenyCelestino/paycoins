import React, { useContext } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'
import { styles } from './style'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import Loading from '../../components/Loading'
import Profilecontainers from '../../components/Profilecontainers'
import { AuthContext } from '../../contexts/auth'
import { COLORS } from '../../theme'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { ip } from '../../../config'

export default function Profile(props) {
  const [userdata, setUserdata] = React.useState(props.route.params.user)
  const [userIds, setUsersIds] = React.useState([])
  const [userPayments, setUserPayments] = React.useState([])
  const [notification, setNotification] = React.useState([])
  const [userData, setUserData] = React.useState([])
  const [isLoading, setLoading] = React.useState(false)

  const { logout } = useContext(AuthContext)
  const navigation = useNavigation()

  React.useEffect(() => {
    setUserdata(props.route.params.user)

    async function loadIds() {
      setLoading(true)
      let gameId = await axios.post(
        `${ip + 'usergamesid.php'}`,
        JSON.stringify({ tk: props.route.params.user.tk })
      )

      setUsersIds(gameId.data)

      setLoading(false)
    }
    loadIds()

    async function loadPayments() {
      setLoading(true)
      let payments = await axios.post(
        `${ip + 'paymentsrender.php'}`,
        JSON.stringify({ tk: props.route.params.user.tk })
      )

      setUserPayments(payments.data)

      setLoading(false)
    }
    loadPayments()
    async function loadnotification() {
      setLoading(true)
      let notification = await axios.post(
        `${ip + 'giftnotification.php'}`,
        JSON.stringify({ tk: props.route.params.user.tk })
      )

      setNotification(notification.data)

      setLoading(false)
    }
    loadnotification()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent hidden />

      <ImageBackground
        resizeMode="cover"
        source={
          userdata.avatar
            ? { uri: `${ip + userdata.avatar}` }
            : require('../../../assets/defaultprofile2.jpg')
        }
        style={{ height: 250, width: 400 }}
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
            <TouchableOpacity onPress={logout}>
              <MaterialCommunityIcons
                name="logout"
                size={30}
                color={COLORS.white}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.userName}>{userdata.name}</Text>
            <Text style={styles.userEmail}>{userdata.email}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView
          style={styles.Scrollcontainer}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Profilecontainers
            title="PAYCONS'S MESSAGES"
            count={notification != 'no' ? notification.total : 0}
            navigation={'Message'}
            notification={notification.items}
          />

          <Profilecontainers
            title="MY ID GAMES"
            count={userIds.total}
            navigation={'DetailId'}
            ids={userIds.items ? userIds.items : ''}
          />

          <Profilecontainers
            title="MY PAYMENTS"
            navigation={'Mypayments'}
            count={userPayments.total}
            payments={userPayments.items ? userPayments.items : ''}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  )
}
