import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {moderateScale, getFontSize} from '../../utils/responsive';

export default PhoneInput = ({phone, onChangeText}) => {
  return (
    <View
      style={{
        borderWidth: 2,
        borderColor: '#7f74ff',
        margin: moderateScale(15),
        borderRadius: moderateScale(10),
        padding: moderateScale(15),
        flexDirection: 'row',
        marginTop: moderateScale(30),
      }}>
      <View
        style={{
          borderRightWidth: 0.7,
          alignSelf: 'center',
          paddingRight: moderateScale(10),
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontFamily: 'Rubik-Bold',
            fontSize: getFontSize(18),
            color: 'grey',
          }}>
          +91
        </Text>
        <Image
          source={require('../../assets/logos/indian-flag.png')}
          style={{
            width: moderateScale(24),
            height: moderateScale(24),
            marginLeft: moderateScale(10),
          }}
        />
      </View>

      <View style={{marginLeft: moderateScale(10)}}>
        <TextInput
          placeholder=""
          value={phone}
          keyboardType="numeric"
          onChangeText={text => onChangeText(text)}
          maxLength={10}
          placeholderTextColor={'grey'}
          style={{
            fontFamily: 'Rubik-Bold',
            fontSize: getFontSize(18),
            width: moderateScale(200),
          }}
        />
      </View>
    </View>
  );
};
