import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {moderateScale, getFontSize} from '../../utils/responsive';
import Dashed from '../../component/common/Dashed';
import Moment from 'moment';
import {useSelector} from 'react-redux';

export default BoardingPass = ({navigation}) => {
  const {selectedFlight} = useSelector(state => state.flightReducer);
  console.log('selected_flight____', selectedFlight);

  return (
    <View style={{backgroundColor: '#2a7cf8', flex: 1}}>
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: moderateScale(15),
            paddingRight: moderateScale(15),
          }}>
          <Icon
            name="chevron-back"
            onPress={() => navigation.goBack(null)}
            size={getFontSize(24)}
            color="#fff"
          />
          <Text
            style={{
              fontSize: getFontSize(18),
              color: '#fff',
              alignSelf: 'center',
              fontFamily: 'Axiforma-Black',
            }}>
            Boarding Pass
          </Text>
          <Text />
        </View>

        {/* // ---------- Pass --------- */}
        <TouchableOpacity
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
              {selectedFlight?.sourceCode}
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
              {selectedFlight?.destinationCode}
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
              {selectedFlight?.sourceName}
            </Text>
            <Text
              style={{
                color: '#2c2b2e',
                fontSize: getFontSize(11),
                fontFamily: 'Axiforma-Black',
              }}>
              {selectedFlight?.totalDuration}
            </Text>
            <Text
              style={{
                color: '#b0b4c3',
                fontSize: getFontSize(11),
                fontFamily: 'Axiforma-Medium',
              }}>
              {selectedFlight?.destinationName}
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
              {Moment(selectedFlight.sourceTime).format('LT')}
            </Text>
            <Text
              style={{
                color: '#2c2b2e',
                fontSize: getFontSize(15),
                fontFamily: 'Axiforma-Black',
              }}>
              {Moment(selectedFlight.destinationTime).format('LT')}
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
              {Moment(selectedFlight.sourceTime).format('LL')}
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
              color="#2a7cf8"
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
              color="#2a7cf8"
              style={{marginRight: moderateScale(-40)}}
            />
          </View>
          {/* Personal Details  */}
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
              {'Sumit'}
            </Text>
            <Text
              style={{
                color: '#2c2b2e',
                fontSize: getFontSize(15),
                fontFamily: 'Axiforma-Black',
              }}>
              {'Jaglan'}
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
              {'First Name'}
            </Text>
            <Text
              style={{
                color: '#b6b7c3',
                fontSize: getFontSize(11),
                fontFamily: 'Axiforma-Medium',
              }}>
              {'Last Name'}
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
              {'4A'}
            </Text>
            <Text
              style={{
                color: '#2c2b2e',
                fontSize: getFontSize(15),
                fontFamily: 'Axiforma-Black',
              }}>
              {'Business'}
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
              {'Seat'}
            </Text>
            <Text
              style={{
                color: '#b6b7c3',
                fontSize: getFontSize(11),
                fontFamily: 'Axiforma-Medium',
              }}>
              {'Class'}
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
              {selectedFlight.airline}
            </Text>
            <Text
              style={{
                color: '#2c2b2e',
                fontSize: getFontSize(15),
                fontFamily: 'Axiforma-Black',
              }}>
              {'T3'}
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
              {'Airline'}
            </Text>
            <Text
              style={{
                color: '#b6b7c3',
                fontSize: getFontSize(11),
                fontFamily: 'Axiforma-Medium',
              }}>
              {'Terminal'}
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
              color="#2a7cf8"
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
              color="#2a7cf8"
              style={{marginRight: moderateScale(-40)}}
            />
          </View>
          <View>
            <Image
              source={require('../../assets/logos/barCode.webp')}
              style={{
                width: moderateScale(230),
                height: moderateScale(100),
                alignSelf: 'center',
              }}
            />
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};
