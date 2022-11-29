import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black
  },
  topView: {
    width: '100%',
    height: 50,
    position: 'absolute',
    flexDirection: 'row',
    top: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  texts: {
    color: COLORS.white,
    fontFamily: FONTS.RobotoMono_700Bold
  },
  input: {
    backgroundColor: COLORS.white,
    width: '80%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
  },
  payButton: {
    flexDirection: 'row',
    backgroundColor: COLORS.lilas,
    width: '80%',
    padding: 15,
    marginTop: 25,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  requestText: {
    fontSize: 10,
    color: COLORS.white,
    fontFamily: FONTS.RobotoMono_600SemiBold
  }
})
