import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {getFontSize, moderateScale} from '../../utils/responsive';

export default Header = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          marginLeft: moderateScale(20),
          marginRight: moderateScale(20),
          marginTop: moderateScale(15),
        }}>
        <Image
          source={require('../../assets/logos/backIcon.png')}
          style={{width: moderateScale(30), height: moderateScale(30)}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: moderateScale(20),
        }}>
        <View style={{paddingLeft: moderateScale(20)}}>
          <Text
            style={{
              fontFamily: 'Axiforma-Medium',
              color: '#7c8795',
              fontSize: getFontSize(11),
            }}>
            Welcome Sumit,
          </Text>
          <Text
            style={{
              fontFamily: 'Axiforma-Black',
              color: 'black',
              fontSize: getFontSize(20),
              marginTop: moderateScale(10),
            }}>
            Book a flight
          </Text>
        </View>
        <Image
          source={require('../../assets/logos/profile.jpeg')}
          style={{
            width: moderateScale(46),
            height: moderateScale(46),
            borderRadius: moderateScale(23),
            marginRight: moderateScale(20),
            alignSelf: 'center',
          }}
        />
      </View>
    </SafeAreaView>
  );
};
