import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black
  },
  CategoryText: {
    color: COLORS.white,
    alignSelf: 'flex-start',
    marginLeft: 12,
    fontFamily: FONTS.Rowdies400Regular
  },
  giftcardTypes: {
    color: COLORS.white,
    margin: 20
  },
  WithoutgiftViewTypes: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  textWithoutGifTypes: {
    color: '#fff',

    fontFamily: FONTS.Rowdies700Bold
  }
})
