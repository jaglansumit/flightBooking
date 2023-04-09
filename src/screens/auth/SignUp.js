import React, {useState} from 'react';
import {SafeAreaView, View, Text, Image, TextInput} from 'react-native';
import {validateText} from '../../utils/validations';
import Icon from 'react-native-vector-icons/Ionicons';
import {moderateScale, getFontSize} from '../../utils/responsive';
import {CustomButton, CustomInput, BackOption} from '../../component/common';
import AppLogo from '../../component/lottie/AppLogo';

export default SignUp = ({navigation}) => {
  // -------------- functions -----------
  const _onLogin = () => {
    navigation.navigate('ValidateOtp');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{marginLeft: moderateScale(15)}}>
        {/*  -------------- Header -------------- */}

        <BackOption navigation={navigation} />

        {/* ----------------- App Logo ----------- */}
        <View style={{justifyContent: 'center'}}>
          <AppLogo width={moderateScale(150)} height={moderateScale(150)} />
          {/* <Text
            style={{
              fontSize: moderateScale(24),
              marginLeft: moderateScale(10),
              marginTop: moderateScale(14),
              fontFamily: 'Rubik-Bold',
              color: 'black',
            }}>
            Sign Up
          </Text> */}
        </View>

        {/* ------------- Main Body ---------------- */}

        <View style={{marginTop: moderateScale(20)}}>
          <CustomInput icon="person-outline" placeholder="Enter User Name" />
          <CustomInput icon="mail-outline" placeholder="Enter Email Address" />
          <CustomInput icon="home-outline" placeholder="Village" />
          <CustomInput icon="map-outline" placeholder="District" />
          <CustomInput icon="locate-outline" placeholder="Pin Code" />
        </View>

        <CustomButton onPress={() => _onLogin()} title={'Continue'} />
        <Text
          style={{
            fontFamily: 'Rubik-Light',
            color: 'black',
            textAlign: 'center',
            marginTop: moderateScale(20),
          }}>
          Joined us before ?{' '}
          <Text
            onPress={() => navigation.navigate('Login')}
            style={{color: '#7f74ff', fontFamily: 'Rubik-Regular'}}>
            Login
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};
