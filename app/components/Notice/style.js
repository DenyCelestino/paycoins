import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    marginVertical: 12
  },
  image: {
    height: 400,
    width: '100%',
    marginVertical: 8
  },
  title: {
    color: COLORS.white,
    fontFamily: FONTS.Rowdies400Regular,
    marginLeft: 12,
    fontSize: 18
  },

  contentContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    padding: 20
  },
  description: {
    fontSize: 12,
    color: COLORS.white,
    textAlign: 'justify'
  },
  dateContainer: {
    padding: 25,
    flexDirection: 'row',
    alignItems: 'center'
  },
  dateContainerText: {
    fontSize: 12,
    color: COLORS.white,
    fontFamily: FONTS.Rowdies400Regular
  },
  genderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
    padding: 10,
    width: 120,
   
    borderRadius: 25,
    backgroundColor: COLORS.lilas
  }
})
