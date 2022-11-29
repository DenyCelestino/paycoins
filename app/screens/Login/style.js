import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    width: '100%'
  },

  containerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 300
  },
  Title: {
    fontFamily: FONTS.Rowdies700Bold,
    fontSize: 40
  },
  slogan: {
    fontFamily: FONTS.Rowdies300Light,
    fontSize: 20
  },
  FormContainer: {
    position: 'absolute',

    bottom: 0,
    backgroundColor: COLORS.black,
    width: '100%',
    height: '50%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  inputs: {
    borderWidth: 1,
    borderColor: COLORS.white,
    color: COLORS.white,
    width: '80%',
    padding: 12,
    marginBottom: 30,
    borderRadius: 8
  },
  loginButton: {
    backgroundColor: COLORS.white,
    width: '80%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  loginButtonText: {
    color: COLORS.black,
    fontFamily: FONTS.Rowdies300Light
  },
  textSignup: {
    marginTop: 10,
    color: COLORS.white
  },
  signUpTouchable: {
    textDecorationLine: 'underline'
  }
})
