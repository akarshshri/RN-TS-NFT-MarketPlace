import { StyleSheet } from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";

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
      borderRadius: SIZES.font
      // borderTopLeftRadius: SIZES.font,
      // borderTopRightRadius: SIZES.font,
    },
    nftTitleView: {
      width: '100%',
      padding: SIZES.font,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
});

export const circularButtonStyle = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    position: 'absolute',
    borderRadius: SIZES.extraLarge,
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
    right: 10,
    ...SHADOWS.light,
  },
  image: {
    height: 24,
    width: 24,
  }
})

export const rectButtonStyle = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
    height: 40,
    backgroundColor: COLORS.gray,
    // position: 'absolute',
    borderRadius: SIZES.extraLarge,
    alignItems: 'center',
    justifyContent: 'center',
    // right: 10,
    ...SHADOWS.light,
  }
})

export const homeHeaderStyle = StyleSheet.create({
  container: {
    padding: SIZES.font,
    backgroundColor: COLORS.primary,
  }
})

export const subInfoStyle = StyleSheet.create({
  background : {
    width: '100%',
    paddingHorizontal: SIZES.font,
    marginTop: -SIZES.extraLarge,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  ImageCmp: {
    width: 48,
    height: 48,
  },
  people: {
    flexDirection: 'row'
  },
  endDateBtn: {
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.base,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.light,
    elevation: 1,
    maxWidth: '50%',
    borderRadius: 4,
    marginBottom: 4
  },
  endDateText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.primary
  },
  endDateTime: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    color: COLORS.primary
  },
  nftTitle: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.large,
    color: COLORS.primary
  },
  nftSubtitle: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.primary
  },
  ethPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ethPriceImage: {
    height: 20,
    width: 20,
    marginRight: 2
  },
  ethPriceText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.font,
    color: COLORS.primary,
  }
})