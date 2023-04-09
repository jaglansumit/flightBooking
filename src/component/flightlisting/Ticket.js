import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {moderateScale, getFontSize} from '../../utils/responsive';
import Dashed from '../common/Dashed';
import Moment from 'moment';

export default Ticket = ({onPress, item}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        backgroundColor: '#fff',
        padding: moderateScale(20),
        borderRadius: moderateScale(20),
        marginLeft: moderateScale(20),
        marginRight: moderateScale(20),
        marginTop: moderateScale(25),
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            color: '#2a7cf8',
            fontSize: getFontSize(18),
            fontFamily: 'Axiforma-Black',
          }}>
          {item?.sourceCode}
        </Text>
        <View
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            flex: 1,
          }}>
          <Icon
            name="ellipse"
            size={getFontSize(11)}
            color="#2a7cf8"
            style={{alignSelf: 'center'}}
          />
          <View
            style={{
              height: 1,
              width: moderateScale(60),
              marginLeft: moderateScale(6),
              marginRight: moderateScale(6),
              alignSelf: 'center',
              borderRadius: 1,
              borderWidth: 1,
              borderColor: '#c2c6ce',
              borderStyle: 'dotted',
            }}
          />
          <Icon
            name="airplane"
            size={getFontSize(17)}
            color="#7a7ec9"
            style={{alignSelf: 'center'}}
          />
          <View
            style={{
              height: 1,
              marginLeft: moderateScale(6),
              marginRight: moderateScale(6),
              width: moderateScale(60),
              alignSelf: 'center',
              borderRadius: 1,
              borderWidth: 1,
              borderColor: '#c2c6ce',
              borderStyle: 'dotted',
            }}
          />
          <Icon
            name="ellipse"
            size={getFontSize(11)}
            color="#eb8249"
            style={{alignSelf: 'center'}}
          />
        </View>
        <Text
          style={{
            color: '#eb8249',
            fontSize: getFontSize(18),
            fontFamily: 'Axiforma-Black',
          }}>
          {item.destinationCode}
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          marginTop: moderateScale(5),
          flexDirection: 'row',
        }}>
        <Text
          style={{
            color: '#b0b4c3',
            fontSize: getFontSize(11),
            fontFamily: 'Axiforma-Medium',
          }}>
          {item.sourceName}
        </Text>
        <Text
          style={{
            color: '#2c2b2e',
            fontSize: getFontSize(11),
            fontFamily: 'Axiforma-Black',
          }}>
          {item.totalDuration}
        </Text>
        <Text
          style={{
            color: '#b0b4c3',
            fontSize: getFontSize(11),
            fontFamily: 'Axiforma-Medium',
          }}>
          {item.destinationName}
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          marginTop: moderateScale(20),
          flexDirection: 'row',
        }}>
        <Text
          style={{
            color: '#2c2b2e',
            fontSize: getFontSize(15),
            fontFamily: 'Axiforma-Black',
          }}>
          {Moment(item.sourceTime).format('LT')}
        </Text>
        <Text
          style={{
            color: '#2c2b2e',
            fontSize: getFontSize(15),
            fontFamily: 'Axiforma-Black',
          }}>
          {Moment(item.destinationTime).format('LT')}
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          marginTop: moderateScale(5),
          flexDirection: 'row',
        }}>
        <Text
          style={{
            color: '#b6b7c3',
            fontSize: getFontSize(11),
            fontFamily: 'Axiforma-Medium',
          }}>
          {Moment(item.sourceTime).format('LL')}
        </Text>
        <Text
          style={{
            color: '#b6b7c3',
            fontSize: getFontSize(11),
            fontFamily: 'Axiforma-Medium',
          }}>
          Flight No - 23
        </Text>
      </View>
      {/* Dashed */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Icon
          name="ellipse"
          size={getFontSize(30)}
          color="#f1f5fd"
          style={{alignSelf: 'center', marginLeft: moderateScale(-40)}}
        />
        <View
          style={{
            width: moderateScale(300),
            marginTop: moderateScale(-7),
            justifyContent: 'center',
          }}>
          <Dashed width={300} />
        </View>
        <Icon
          name="ellipse"
          size={getFontSize(30)}
          color="#f1f5fd"
          style={{marginRight: moderateScale(-40)}}
        />
      </View>
      {/* Airline Details  */}
      <View
        style={{
          justifyContent: 'space-between',
          marginTop: moderateScale(5),
          flexDirection: 'row',
        }}>
        <Text
          style={{
            color: '#9ea2b5',
            fontSize: getFontSize(11),
            fontFamily: 'Axiforma-Medium',
          }}>
          {item.airline}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: getFontSize(15),
            fontFamily: 'Axiforma-Black',
          }}>
          {'₹' + item.fare}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
