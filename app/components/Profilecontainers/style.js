import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    backgroundColor: COLORS.black,
    width: '90%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: COLORS.white,
    marginTop: 15
  },
  countContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderWidth: 1,
    borderColor: COLORS.white
  },
  title: {
    color: COLORS.white,
    fontFamily: FONTS.RobotoMono_700Bold
  },
  count: {
    fontSize: 12,
    color: COLORS.white
  },
  points: {
    fontSize: 12,
    color: COLORS.white,
    fontFamily: FONTS.RobotoMono_700Bold
  }
})
