import React from 'react'
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity
} from 'react-native'
import { COLORS } from '../../theme'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from './style'
import { ip } from '../../../config'

export default function List({ data, navigation }) {
  const CARDINFO = data
  const navegar = navigation.navigate

  return (
    <FlatList
      data={CARDINFO}
      style={{ marginRight: 20 }}
      horizontal
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navegar('Detail', { item: item })}
        >
          <ImageBackground
            resizeMode="cover"
            source={{ uri: `${ip + item.banner}` }}
            scrollIndicator={false}
            style={{ height: 150, width: 150, margin: 12 }}
            imageStyle={{ borderRadius: 10 }}
          >
            <LinearGradient
              style={{ flex: 1 }}
              colors={[COLORS.transparent, COLORS.black]}
            >
              <Text numberOfLines={2} style={styles.nameGame}>
                {item.name}
              </Text>
            </LinearGradient>
          </ImageBackground>
        </TouchableOpacity>
      )}
    />
  )
}
