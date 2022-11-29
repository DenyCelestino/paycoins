import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white
  },

  containerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Title: {
    fontFamily: FONTS.Rowdies700Bold,
    fontSize: 35,
    color: COLORS.white
  },
  slogan: {
    fontFamily: FONTS.Rowdies300Light,
    fontSize: 15,
    color: COLORS.white
  },
  FormContainer: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom: 0,
    backgroundColor: COLORS.black,
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  inputs: {
    borderWidth: 1,
    borderColor: COLORS.white,
    color: COLORS.white,
    width: '80%',
    padding: 12,
    marginBottom: 6,
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
    marginBottom: 50,
    color: COLORS.white
  },
  signUpTouchable: {
    textDecorationLine: 'underline'
  }
})
