import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  aboutUsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  userAvatar: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  nameUser: {
    color: COLORS.white,
    fontFamily: FONTS.Rowdies300Light,
    marginLeft: 8
  },
  BannerTitle: {
    color: COLORS.white,
    fontFamily: FONTS.Rowdies700Bold,
    fontSize: 20
  },
  BannerGener: {
    color: COLORS.white,
    fontFamily: FONTS.Rowdies300Light,
    fontSize: 20
  },
  BannerDescription: {
    color: COLORS.white,
    fontFamily: FONTS.Rowdies300Light,
    fontSize: 12
  },
  ViewContentBanner: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    marginBottom: 10,
    padding: 20
  }
})
