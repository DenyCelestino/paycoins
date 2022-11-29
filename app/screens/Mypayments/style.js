import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black
  },
  maincontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gamepaymentscontainer: {
    width: '80%',
    height: 30,
    justifyContent: 'center',
    borderWidth: 1,
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  giftpaymentscontainer: {
    width: '80%',
    height: 30,
    justifyContent: 'center',
    borderWidth: 1,
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  texts: {
    color: COLORS.white,
    fontFamily: FONTS.RobotoMono_700Bold
  },
  closemodalButton: {
    alignSelf: 'flex-end',
    margin: 20
  },
  closemodalText: {
    color: COLORS.white,
    fontSize: 20,
    fontFamily: FONTS.RobotoMono_700Bold
  },
  texts: {
    color: COLORS.white,
    fontFamily: FONTS.RobotoMono_700Bold
  }
})
