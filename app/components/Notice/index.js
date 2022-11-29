import React from 'react'
import { styles } from './style'
import {
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
  FlatList
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { ip } from '../../../config'
import { newsapi } from '../../../config'
import Loading from '../Loading'
import { COLORS } from '../../theme'

export default function Notice() {
  const [notice, setNotices] = React.useState([])
  const [page, setPage] = React.useState(1)
  const [loading, setLoading] = React.useState(false)
  const [refreshing, setRefreshing] = React.useState(false)

  React.useEffect(() => {
    renderNotice()
  }, [])

  async function renderNotice() {
    setLoading(true)

    let res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsapi}`
    )
    setLoading(false)

    setNotices(res.data.articles)
  }

  // async function refreshList() {
  //   setRefreshing(true)

  //   await renderNotice(1, true)

  //   setRefreshing(false)
  // }

  return (
    <View style={styles.container}>
      <FlatList
        data={notice}
        nestedScrollEnabled={true}
        keyExtractor={item => item.url}
        // onEndReached={() => renderNotice()}
        // onEndReachedThreshold={0.1}
        // ListFooterComponent={
        //   loading && <ActivityIndicator color={COLORS.cyan} size="large" />
        // }
        // onRefresh={refreshList}
        // refreshing={refreshing}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            {loading ? <ActivityIndicator color="cyan" size="large" /> : <></>}

            {item.urlToImage != null ? (
              <ImageBackground
                resizeMode="cover"
                source={{ uri: item.urlToImage }}
                style={styles.image}
              >
                <LinearGradient
                  style={{ flex: 1 }}
                  colors={[COLORS.black, COLORS.transparent, COLORS.black]}
                >
                  <Text numberOfLines={1} style={styles.title}>
                    {item.title}
                  </Text>
                  <Text numberOfLines={1} style={styles.description}>
                    {item.country}
                  </Text>
                  <View style={styles.dateContainer}>
                    <Text numberOfLines={3} style={styles.dateContainerText}>
                      {item.publishedAt}
                    </Text>
                    <View style={styles.genderContainer}>
                      <Text numberOfLines={3} style={styles.dateContainerText}>
                        {item.source.name}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.contentContainer}>
                    <Text numberOfLines={3} style={styles.description}>
                      {item.description}...
                    </Text>
                  </View>
                </LinearGradient>
              </ImageBackground>
            ) : (
              <></>
            )}
          </View>
        )}
      />
    </View>
  )
}
