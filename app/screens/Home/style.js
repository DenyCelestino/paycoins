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
  LoadingText: {
    color: COLORS.white,
    margin: 12,
    fontFamily: FONTS.RobotoMono_700Bold,
    textAlign: 'center'
  }
})
