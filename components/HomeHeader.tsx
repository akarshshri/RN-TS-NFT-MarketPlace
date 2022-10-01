import { View, Text, Image, TextInput } from 'react-native'
import { assets, SIZES, COLORS, FONTS } from '../constants'
import { homeHeaderStyle } from '../utils/styles'
import { homeHeaderProps } from '../utils/types'

const HomeHeader = ({onSearch}: homeHeaderProps) => {
  return (
    <View style={homeHeaderStyle.container} >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
        <Image
          source={assets.logo}
          resizeMode={'contain'}
          style={{ height: 23, width: 90 }}
        />
        <View style={{ height: 45, width: 45 }} >
          <Image
            source={assets.person01}
            resizeMode='contain'
            style={{ width: '100%', height: '100%' }}
          />
          <Image
            source={assets.badge}
            resizeMode='contain'
            style={{ width: 15, height: 15, position: 'absolute', bottom: 0, right: 0 }}
          />
        </View>
      </View>
      <View style={{ marginVertical: SIZES.font }} >
        <Text style={{fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.white}} >
          Hello, Victoria
        </Text>
      </View>
      <View style={{marginTop: SIZES.font}} >
        <View style={{
          width: '100%',
          borderRadius: SIZES.font,
          backgroundColor: COLORS.gray,
          flexDirection:'row',
          alignItems: 'center',
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small -2

          
        }} >
          <Image 
            source={assets.search}
            resizeMode='contain'
            style={{width:20, height: 20, marginRight: SIZES.base}}
          />
          <TextInput
          placeholder='Seach Placeholder'
          // style={{flex: 1}}
          onChangeText={()=>{}}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader