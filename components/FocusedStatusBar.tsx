import { View, Text, StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core'
import { focusedStatusBarProps } from '../utils/types';

const FocusedStatusBar = (props: focusedStatusBarProps) => {

  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props}  /> :  <StatusBar animated={true} {...props}  />
}

export default FocusedStatusBar