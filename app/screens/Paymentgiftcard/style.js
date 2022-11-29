import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
  boxPayment: {
    width: '80%',
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.rgbablack,
    borderWidth: 1,
    borderColor: COLORS.lilas,
    borderRadius: 20,
    marginBottom: 50
  },
  gameName: {
    fontSize: 30,
    color: COLORS.white,
    fontFamily: FONTS.Rowdies700Bold,
    textAlign: 'center'
  },
  normalText: {
    fontSize: 20,
    color: COLORS.white,
    fontFamily: FONTS.RobotoMono_500Medium
  },
  paymentArea: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    marginBottom: 50
  },
  buttonText: {
    fontSize: 15,
    color: COLORS.white,
    fontFamily: FONTS.RobotoMono_600SemiBold,
    textAlign: 'center'
  },
  requestText: {
    fontSize: 10,
    color: COLORS.white,
    fontFamily: FONTS.RobotoMono_600SemiBold
  },
  payButton: {
    flexDirection: 'row',
    backgroundColor: COLORS.lilas,
    width: '80%',
    padding: 20,
    marginTop: 25,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  modalText: {
    color: COLORS.white,
    textAlign: 'center',
    padding: 10,
    fontFamily: FONTS.RobotoMono_700Bold
  },
  messages: {
    fontSize: 30,
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: FONTS.RobotoMono_600SemiBold
  },
  Unautorized: {
    color: COLORS.red,
    textAlign: 'center',
    padding: 10,
    fontFamily: FONTS.RobotoMono_700Bold
  },
  Pending: {
    color: COLORS.yellow,
    textAlign: 'center',
    padding: 10,
    fontFamily: FONTS.RobotoMono_700Bold
  },
  input: {
    backgroundColor: COLORS.white,
    width: '80%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
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
  haveserver: {
    padding: 20,
    borderWidth: 1,
    margin: 5,
    borderColor: 'gray',
    width: '80%'
  }
})
