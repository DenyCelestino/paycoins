import React from 'react'
import { ActivityIndicator } from 'react-native'

import { COLORS, SIZES } from '../../theme'

export default function Loading() {
  return <ActivityIndicator color={COLORS.white} size={SIZES.small} />
}
