import React, {useState} from 'react';
import {SafeAreaView, View, Text, Image, TextInput, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {moderateScale, getFontSize} from '../../utils/responsive';
import {CustomButton, PhoneInput} from '../../component/common';

export default Login = ({navigation}) => {
  // -------- States ----------
  const [phone, setPhone] = useState('');

  // --------- functions ------------
  const _onLogin = () => {
    if (phone.length === 10) {
      navigation.navigate('ValidateOtp');
    } else {
      Alert.alert('Please fill corrrect phone number.');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: moderateScale(50),
          }}>
          <Icon
            name="ellipse"
            size={getFontSize(15)}
            style={{alignSelf: 'flex-end'}}
            color="green"
          />
          <Icon name="call-outline" size={getFontSize(30)} />
        </View>
        <Text
          style={{
            fontFamily: 'Rubik-Bold',
            fontSize: getFontSize(21),
            textAlign: 'center',
            marginTop: moderateScale(25),
          }}>
          Enter your
        </Text>
        <Text
          style={{
            fontFamily: 'Rubik-Bold',
            fontSize: getFontSize(21),
            textAlign: 'center',
            marginTop: moderateScale(3),
          }}>
          phone number
        </Text>

        {/* -------------- Main Body ---------------- */}

        <PhoneInput onChangeText={text => setPhone(text)} />

        <CustomButton onPress={() => _onLogin()} title={'LOGIN'} />

        {/* ----------- Sign up Info ----------- */}

      </View>
      <Text
          onPress={() => navigation.navigate('SignUp')}
          style={{
            fontFamily: 'Rubik-Light',
            right: 0,
            left: 0,
            position: 'absolute',
            bottom: moderateScale(30),
            color: 'black',
            textAlign: 'center',
            marginTop: moderateScale(20),
          }}>
           Made with {' '}
          <Icon color={"red"} size={getFontSize(12)} name='heart-outline' />
          <Text>{' '}Leher</Text>
        </Text>
    </SafeAreaView>
  );
};
