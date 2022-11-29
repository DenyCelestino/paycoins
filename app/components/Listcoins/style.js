import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../theme'

export const styles = StyleSheet.create({
  nameGame: {
    color: COLORS.white,
    position: 'absolute',
    bottom: 0,
    padding: 12,
    fontSize: 12
  },
  pricelabel: {
    color: COLORS.white,
    fontFamily: FONTS.Rowdies700Bold,
    padding: 12,
    letterSpacing: 2
  }
})
