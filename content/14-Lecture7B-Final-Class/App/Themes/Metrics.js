import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

/*
  Commonly used constants for margin, padding, font, etc.
*/
const metrics = {
  screenWidth: width,
  screenHeight: height,
  maxComponentWidth: '100%',
  marginHorizontal: 15,
  marginVertical: 10,
  padding: 10,
  marginBottom: 25,
  defaultFont: 'Trebuchet MS',
}

export default metrics
