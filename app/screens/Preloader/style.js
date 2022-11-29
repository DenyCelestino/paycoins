import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black
  },
  normalText: {
    color: COLORS.white,
    fontFamily: FONTS.RobotoMono_700Bold
  },
  buttondownload: {
    backgroundColor: COLORS.green,
    padding: 20,
    borderRadius: 8,
    marginTop: 20
  }
})
