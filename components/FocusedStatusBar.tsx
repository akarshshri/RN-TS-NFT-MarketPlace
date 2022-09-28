import { View, Text, StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core'
import { focusedStatusBarProps } from '../utils/interface';

const FocusedStatusBar = (props: focusedStatusBarProps) => {

  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null
}

export default FocusedStatusBar