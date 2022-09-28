import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../constants";

export const homeScreen = StyleSheet.create({
    background: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      position: 'absolute',
      zIndex: -1
    },
});


export const nftCard = StyleSheet.create({
    background: {
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    },
    card: {
      width: '100%',
      height: 250
    },
    image: {
      width: '100%',
      height: '100%',
      borderTopLeftRadius: SIZES.font,
      borderTopRightRadius: SIZES.font,
    }
});