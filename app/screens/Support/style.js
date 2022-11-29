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
    fontFamily: FONTS.RobotoMono_700Bold,
    textAlign: 'center'
  },
  buttondial: {
    flexDirection: 'row',
    padding: 20,
    width: '80%',
    backgroundColor: COLORS.green,
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderRadius: 8
  }
})
