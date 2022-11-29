import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black
  },
  contentContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    padding: 50
  },
  userName: {
    color: COLORS.white,
    fontFamily: FONTS.Rowdies700Bold
  },
  userEmail: {
    color: COLORS.white,
    fontFamily: FONTS.Rowdies400Regular,
    fontSize: 10
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
  Scrollcontainer: {
    width: '100%',
    marginTop: 50
  }
})
