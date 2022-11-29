import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black
  },
  modalText: {
    color: COLORS.white,
    textAlign: 'center',
    padding: 10,
    fontFamily: FONTS.RobotoMono_700Bold
  }
})
