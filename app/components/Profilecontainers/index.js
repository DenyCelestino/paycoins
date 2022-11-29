import React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'

export default function Profilecontainers({
  title,
  count,
  navigation,
  ids,
  payments,
  notification
}) {
  const nav = useNavigation()

  React.useEffect(() => {}, [])

  return (
    <TouchableOpacity
      onPress={() => {
        navigation == 'DetailId' ? (
          nav.navigate(`${navigation}`, { items: ids })
        ) : navigation == 'Message' ? (
          nav.navigate(
            `${navigation}`,
            notification ? { items: notification } : { items: '' }
          )
        ) : navigation == 'Mypayments' ? (
          nav.navigate(`${navigation}`, { items: payments })
        ) : (
          <></>
        )
      }}
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        {title == 'MY WALLET' ? (
          <Text style={styles.points}>{count} POINT(S)</Text>
        ) : (
          <View style={styles.countContainer}>
            <Text style={styles.count}>{count}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}
