import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {getFontSize, moderateScale} from '../../utils/responsive';
import Icon from 'react-native-vector-icons/Ionicons';
import {inputArray, otpCells} from '../../utils/dataObj';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default ValidateOtp = () => {
  const [seconds, setSeconds] = useState(50);
  const [Number, setNumber] = useState('');

  useEffect(() => {
    let timer;
    if (seconds > 0) {
      timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else {
      return () => clearTimeout(timer);
    }
  });

  const _renderOtpCell = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: '#f5f7ff',
          width: moderateScale(60),
          height: moderateScale(60),
          borderRadius: moderateScale(5),
          justifyContent: 'center',
          margin: moderateScale(5),
        }}>
        <Text
          style={{
            fontFamily: 'Rubik-Light',
            fontSize: getFontSize(20),
            textAlign: 'center',
            color: 'black',
          }}>
          {String(Number).length >= item.length ? String(Number)[item.id] : ''}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Text
        style={{
          fontFamily: 'Rubik-Light',
          fontSize: getFontSize(35),
          textAlign: 'center',
          marginTop: moderateScale(25),
          color: '#262c42',
        }}>
        {'00:' + seconds}
      </Text>

      <Text
        style={{
          fontFamily: 'Rubik-Light',
          fontSize: getFontSize(12),
          textAlign: 'center',
          marginTop: moderateScale(10),
          color: 'black',
          marginLeft: moderateScale(25),
          marginRight: moderateScale(25),
        }}>
        We sent the mobile verification code to
      </Text>

      <Text
        style={{
          fontFamily: 'Rubik-Light',
          fontSize: getFontSize(12),
          textAlign: 'center',
          marginTop: moderateScale(3),
          color: 'black',
          marginLeft: moderateScale(25),
          marginRight: moderateScale(25),
        }}>
        your mobile number
      </Text>

      <View
        style={{flex: 1, alignItems: 'center', marginTop: moderateScale(20)}}>
        <FlatList
          data={otpCells}
          numColumns={4}
          keyExtractor={item => item.id}
          renderItem={_renderOtpCell}
        />
      </View>

      <View style={styles.CalculatorDataBox}>
        <FlatList
          keyExtractor={item => item.id}
          numColumns={3}
          data={inputArray}
          renderItem={({item}) => {
            return (
              <>
                <TouchableOpacity
                  onPress={() => {
                    if (item.heading === '10') {
                      setNumber(
                        parseInt(Number / 10) === 0
                          ? ''
                          : parseInt(Number / 10),
                      );
                    } else if (item.heading === '12') {
                      setNumber(0);
                    } else {
                      setNumber(Number * 10 + item.id);
                    }
                  }}
                  style={{paddingRight: 0, paddingBottom: moderateScale(7)}}>
                  <View style={styles.CalculatorBtn}>
                    {item.heading !== '10' ? (
                      <Text style={styles.CalculatorBtnText}>{item.id}</Text>
                    ) : (
                      <Icon name="backspace-outline" size={getFontSize(25)} />
                    )}
                  </View>
                </TouchableOpacity>
              </>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  CalculatorBtn: {
    height: screenWidth / 8,
    backgroundColor: '#FFFFFF',
    width: screenWidth / 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  CalculatorBtnText: {
    fontSize: getFontSize(19),
    fontFamily: 'Rubik-Regular',
  },
  CalculatorDataBox: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'flex-end',
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  },
});
